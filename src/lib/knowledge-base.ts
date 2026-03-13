import fs from 'fs';
import path from 'path';
import { resources } from '@/data/resources';

type KBDoc = {
  id: string;
  title: string;
  lang: 'zh' | 'en';
  body: string;
};

type ResourceHit = {
  title: string;
  desc: string;
  url: string;
  source: string;
  score: number;
};

const CONTENT_DIR = path.join(process.cwd(), 'content');
let cachedDocs: KBDoc[] | null = null;

function stripMarkdown(raw: string): string {
  return raw
    .replace(/^---[\s\S]*?---\n?/m, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/^>\s?/gm, '')
    .replace(/[#*_~>-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectFiles(dir: string, out: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(full, out);
      continue;
    }
    if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function inferLang(filePath: string): 'zh' | 'en' {
  if (filePath.includes('/days-en/') || filePath.includes('\\days-en\\')) return 'en';
  return 'zh';
}

function inferTitle(filePath: string, text: string): string {
  const title = text.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (title) return title;
  const name = path.basename(filePath).replace(/\.(md|mdx)$/i, '');
  return name;
}

function loadDocs(): KBDoc[] {
  if (cachedDocs) return cachedDocs;
  const files = collectFiles(CONTENT_DIR);
  cachedDocs = files.map((file) => {
    const raw = fs.readFileSync(file, 'utf8');
    const title = inferTitle(file, raw);
    const body = stripMarkdown(raw);
    const id = path.relative(process.cwd(), file).replace(/\\/g, '/');
    return { id, title, lang: inferLang(file), body };
  });
  return cachedDocs;
}

function tokenize(input: string): string[] {
  return (input.toLowerCase().match(/[\u4e00-\u9fff]{2,}|[a-z0-9]+/g) || []).filter((t) => t.length >= 2);
}

function scoreText(text: string, title: string, query: string, tokens: string[]): number {
  const target = `${title} ${text}`.toLowerCase();
  let score = 0;
  if (target.includes(query.toLowerCase())) score += 10;
  for (const t of tokens) {
    if (target.includes(t)) score += 2;
    if (title.toLowerCase().includes(t)) score += 2;
  }
  return score;
}

function makeExcerpt(text: string, tokens: string[]): string {
  const lower = text.toLowerCase();
  const idx = tokens
    .map((t) => lower.indexOf(t))
    .filter((i) => i >= 0)
    .sort((a, b) => a - b)[0] ?? 0;
  const start = Math.max(0, idx - 120);
  const end = Math.min(text.length, idx + 220);
  return text.slice(start, end).trim();
}

export function searchKnowledge(question: string, locale: 'zh' | 'en') {
  const tokens = tokenize(question);
  const docs = loadDocs()
    .filter((d) => d.lang === locale || d.lang === 'zh')
    .map((d) => ({ ...d, score: scoreText(d.body, d.title, question, tokens) }))
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((d) => ({
      type: 'doc' as const,
      title: d.title,
      ref: d.id,
      excerpt: makeExcerpt(d.body, tokens),
    }));

  const resourceHits: ResourceHit[] = resources
    .filter((r) => r.lang === locale || locale === 'zh')
    .map((r) => {
      const corpus = `${r.title} ${r.desc} ${r.source} ${(r.tags || []).join(' ')}`;
      return {
        title: r.title,
        desc: r.desc,
        url: r.url,
        source: r.source,
        score: scoreText(corpus, r.title, question, tokens),
      };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const resourcesContext = resourceHits.map((r) => ({
    type: 'resource' as const,
    title: r.title,
    ref: r.url,
    excerpt: `${r.desc} [${r.source}]`,
  }));

  return [...docs, ...resourcesContext];
}


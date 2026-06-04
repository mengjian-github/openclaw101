import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const outDir = path.join(projectRoot, 'out');

const siteUrl = 'https://openclaw101.dev';
const aiBots = [
  'GPTBot',
  'ChatGPT-User',
  'Google-Extended',
  'Perplexity-User',
  'PerplexityBot',
  'Claude-Web',
  'anthropic-ai',
  'Applebot-Extended',
  'cohere-ai',
  'Bytespider',
];

function resolveProjectFile(relativePath) {
  return path.join(projectRoot, relativePath);
}

function fileExists(relativePath) {
  return fs.existsSync(resolveProjectFile(relativePath));
}

function getLatestModified(relativePaths) {
  const timestamps = relativePaths
    .filter(fileExists)
    .map((relativePath) => fs.statSync(resolveProjectFile(relativePath)).mtimeMs);

  return new Date(Math.max(...timestamps));
}

function toAbsoluteUrl(pathname) {
  return new URL(pathname, siteUrl).toString();
}

function formatLastModified(date) {
  return date.toISOString();
}

function createSitemapUrlEntry({ loc, en, zh, lastmod, changefreq, priority }) {
  return `  <url>\n    <loc>${toAbsoluteUrl(loc)}</loc>\n    <xhtml:link rel="alternate" hreflang="en" href="${toAbsoluteUrl(en)}"/>\n    <xhtml:link rel="alternate" hreflang="zh-CN" href="${toAbsoluteUrl(zh)}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${toAbsoluteUrl(en)}"/>\n    <lastmod>${formatLastModified(lastmod)}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`;
}

function buildSitemapXml() {
  const homeModified = getLatestModified([
    'src/app/page.tsx',
    'src/app/zh/page.tsx',
    'src/components/HomePage.tsx',
    'src/lib/seo.ts',
  ]);

  const resourcesModified = getLatestModified([
    'src/app/resources/page.tsx',
    'src/app/zh/resources/page.tsx',
    'src/components/ResourcesPage.tsx',
    'src/data/resources.ts',
    'src/lib/seo.ts',
  ]);

  const startModified = getLatestModified([
    'src/app/start/page.tsx',
    'src/app/zh/start/page.tsx',
    'src/components/StartSetupPage.tsx',
    'content/days-en/day2.md',
    'content/days/day2.md',
    'src/lib/seo.ts',
  ]);

  const urls = [
    createSitemapUrlEntry({
      loc: '/',
      en: '/',
      zh: '/zh',
      lastmod: homeModified,
      changefreq: 'weekly',
      priority: 1.0,
    }),
    createSitemapUrlEntry({
      loc: '/zh',
      en: '/',
      zh: '/zh',
      lastmod: homeModified,
      changefreq: 'weekly',
      priority: 1.0,
    }),
    createSitemapUrlEntry({
      loc: '/resources',
      en: '/resources',
      zh: '/zh/resources',
      lastmod: resourcesModified,
      changefreq: 'weekly',
      priority: 0.8,
    }),
    createSitemapUrlEntry({
      loc: '/zh/resources',
      en: '/resources',
      zh: '/zh/resources',
      lastmod: resourcesModified,
      changefreq: 'weekly',
      priority: 0.8,
    }),
    createSitemapUrlEntry({
      loc: '/start',
      en: '/start',
      zh: '/zh/start',
      lastmod: startModified,
      changefreq: 'weekly',
      priority: 1.0,
    }),
    createSitemapUrlEntry({
      loc: '/zh/start',
      en: '/start',
      zh: '/zh/start',
      lastmod: startModified,
      changefreq: 'weekly',
      priority: 1.0,
    }),
  ];

  for (let day = 1; day <= 7; day += 1) {
    const dayModified = getLatestModified([
      `content/days-en/day${day}.md`,
      `content/days/day${day}.md`,
      'src/app/day/[day]/page.tsx',
      'src/app/zh/day/[day]/page.tsx',
      'src/components/DayContent.tsx',
      'src/lib/days.ts',
      'src/lib/seo.ts',
    ]);

    urls.push(
      createSitemapUrlEntry({
        loc: `/day/${day}`,
        en: `/day/${day}`,
        zh: `/zh/day/${day}`,
        lastmod: dayModified,
        changefreq: 'monthly',
        priority: 0.9,
      }),
    );

    urls.push(
      createSitemapUrlEntry({
        loc: `/zh/day/${day}`,
        en: `/day/${day}`,
        zh: `/zh/day/${day}`,
        lastmod: dayModified,
        changefreq: 'monthly',
        priority: 0.9,
      }),
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
}

function buildRobotsTxt() {
  const lines = ['User-agent: *', 'Allow: /', ''];

  for (const bot of aiBots) {
    lines.push(`User-agent: ${bot}`);
    lines.push('Allow: /');
    lines.push('');
  }

  lines.push(`Sitemap: ${siteUrl}/sitemap.xml`);
  lines.push('');

  return lines.join('\n');
}

function writeFileCopies(relativePath, content) {
  const destinations = [path.join(publicDir, relativePath)];

  if (fs.existsSync(outDir)) {
    destinations.push(path.join(outDir, relativePath));
  }

  for (const destination of destinations) {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, content);
  }
}

function collectHtmlFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectHtmlFiles(fullPath));
      continue;
    }

    if (entry.isFile() && fullPath.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function patchZhHtmlLang() {
  if (!fs.existsSync(outDir)) {
    return;
  }

  const htmlFiles = collectHtmlFiles(outDir);

  for (const filePath of htmlFiles) {
    const relativePath = path.relative(outDir, filePath).replaceAll(path.sep, '/');
    const isZhPage = relativePath === 'zh.html' || relativePath.startsWith('zh/');

    if (!isZhPage) {
      continue;
    }

    const original = fs.readFileSync(filePath, 'utf8');
    const updated = original.replace(
      /<html([^>]*)lang="[^"]*"([^>]*)>/,
      '<html$1lang="zh-CN"$2>',
    );

    if (updated !== original) {
      fs.writeFileSync(filePath, updated);
    }
  }
}

writeFileCopies('sitemap.xml', buildSitemapXml());
writeFileCopies('robots.txt', buildRobotsTxt());
patchZhHtmlLang();

console.log('SEO postbuild complete: generated robots.txt, sitemap.xml, and patched zh html lang.');

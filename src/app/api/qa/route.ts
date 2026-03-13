import { NextRequest, NextResponse } from 'next/server';
import { searchKnowledge } from '@/lib/knowledge-base';

export const runtime = 'nodejs';

type DeepSeekResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

function normalizeLocale(raw?: string): 'zh' | 'en' {
  if (!raw) return 'zh';
  return raw.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const question = String(body?.question || '').trim();
    const locale = normalizeLocale(body?.locale);

    if (!question) {
      return NextResponse.json({ error: 'Question is required.' }, { status: 400 });
    }
    if (question.length > 800) {
      return NextResponse.json({ error: 'Question is too long.' }, { status: 400 });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'DEEPSEEK_API_KEY is not configured on server.' },
        { status: 500 }
      );
    }

    const kb = searchKnowledge(question, locale);
    const contextText = kb
      .map((item, i) => `[#${i + 1}] ${item.title}\nRef: ${item.ref}\n${item.excerpt}`)
      .join('\n\n');

    const systemPrompt =
      locale === 'zh'
        ? '你是 openclaw.mom 的知识库问答助手。请优先基于给定资料回答，回答要简洁、可执行；若资料不足请明确说明，并给出建议下一步。'
        : 'You are the openclaw.mom knowledge-base assistant. Answer with concise, practical guidance grounded in provided context. If context is insufficient, state that clearly.';

    const userPrompt =
      locale === 'zh'
        ? `用户问题：${question}\n\n可用资料：\n${contextText || '（未命中相关资料）'}`
        : `User question: ${question}\n\nAvailable context:\n${contextText || '(No relevant context found)'}`;

    const baseUrl = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com/v1';
    const model = process.env.DEEPSEEK_MODEL || 'deepseek-chat';

    const resp = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        max_tokens: 800,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      return NextResponse.json(
        { error: `DeepSeek API error: ${resp.status}`, detail },
        { status: 502 }
      );
    }

    const data = (await resp.json()) as DeepSeekResponse;
    const answer = data.choices?.[0]?.message?.content?.trim();
    if (!answer) {
      return NextResponse.json({ error: 'Empty model response.' }, { status: 502 });
    }

    return NextResponse.json({
      answer,
      sources: kb.slice(0, 6).map((s) => ({ title: s.title, ref: s.ref })),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

type ChatMessage = {
  role: 'user' | 'assistant';
  text: string;
  sources?: Array<{ title: string; ref: string }>;
};

export default function KnowledgeAssistant() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<'site' | 'wechat' | null>(null);
  const [showGuide, setShowGuide] = useState(false);
  const pathname = usePathname();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: '你好，我是问答小助理。你可以问我 OpenClaw 安装、技能、自动化、资源等问题。',
    },
  ]);

  const locale = useMemo(() => {
    if (typeof navigator === 'undefined') return 'zh';
    return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  }, []);

  async function copyText(kind: 'site' | 'wechat', value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      setCopied(null);
    }
  }

  async function send() {
    const q = question.trim();
    if (!q || loading) return;
    setQuestion('');
    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', text: q }]);

    try {
      const resp = await fetch('/api/qa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, locale }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data?.error || 'Request failed');
      }
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: data.answer || '暂时没有拿到回答，请稍后再试。',
          sources: data.sources || [],
        },
      ]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: `抱歉，出错了：${msg}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isHome = pathname === '/' || pathname === '/zh';
    if (!isHome) return;
    const key = 'lobstermom-qa-guide-shown';
    const shown = window.sessionStorage.getItem(key);
    if (shown) return;
    setShowGuide(true);
    window.sessionStorage.setItem(key, '1');
  }, [pathname]);

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      {open ? (
        <div
          className="w-[min(92vw,380px)] h-[520px] rounded-2xl border shadow-2xl flex flex-col overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.96)', borderColor: 'rgba(15,23,42,0.12)' }}
        >
          <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
            <div>
              <div className="text-sm font-bold text-slate-900">有问题找龙虾妈妈</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-slate-500 hover:text-slate-900"
            >
              关闭
            </button>
          </div>

          <div className="px-4 py-2.5 border-b text-xs leading-relaxed" style={{ borderColor: 'rgba(15,23,42,0.08)', background: 'linear-gradient(120deg, rgba(14,165,233,0.1), rgba(249,115,22,0.08))', color: '#334155' }}>
            <div className="flex items-center justify-between gap-2">
              <div>
                推荐：
                <a
                  href="https://8848.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-bold hover:underline"
                  style={{ color: '#0c4a6e' }}
                >
                  8848.studio
                </a>
              </div>
              <button
                onClick={() => void copyText('site', 'https://8848.studio')}
                className="px-2 py-0.5 rounded-md font-semibold border"
                style={{ borderColor: 'rgba(14,165,233,0.35)', color: '#075985', background: 'rgba(255,255,255,0.7)' }}
              >
                {copied === 'site' ? '已复制' : '复制'}
              </button>
            </div>
            <div className="flex items-center justify-between gap-2 mt-1">
              <div>
                商务合作微信：
                <span className="font-bold" style={{ color: '#7c2d12' }}>minerclub</span>
              </div>
              <button
                onClick={() => void copyText('wechat', 'minerclub')}
                className="px-2 py-0.5 rounded-md font-semibold border"
                style={{ borderColor: 'rgba(249,115,22,0.35)', color: '#9a3412', background: 'rgba(255,255,255,0.7)' }}
              >
                {copied === 'wechat' ? '已复制' : '复制'}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={`inline-block max-w-[92%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    m.role === 'user' ? 'text-white' : 'text-slate-800'
                  }`}
                  style={
                    m.role === 'user'
                      ? { background: 'linear-gradient(120deg, #0369a1, #0ea5e9)' }
                      : { background: '#f1f5f9' }
                  }
                >
                  {m.text}
                </div>
                {m.sources && m.sources.length > 0 && (
                  <div className="mt-1.5 text-left text-[11px] text-slate-500 px-1">
                    参考：
                    {m.sources.map((s, idx) => (
                      <div key={idx} className="truncate">
                        {idx + 1}. {s.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="text-xs text-slate-500">正在思考中...</div>
            )}
          </div>

          <div className="p-3 border-t" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
            <div className="flex gap-2">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    void send();
                  }
                }}
                placeholder="输入你的问题..."
                className="flex-1 rounded-lg border px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300"
                style={{ borderColor: 'rgba(15,23,42,0.12)' }}
              />
              <button
                onClick={() => void send()}
                disabled={loading || !question.trim()}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-white disabled:opacity-50"
                style={{ background: 'linear-gradient(120deg, #0369a1, #0ea5e9)' }}
              >
                发送
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {showGuide && (
            <div
              className="absolute bottom-16 right-0 w-64 rounded-xl border p-3 shadow-xl"
              style={{ background: 'rgba(255,255,255,0.98)', borderColor: 'rgba(15,23,42,0.12)' }}
            >
              <div className="text-sm font-semibold text-slate-900">有问题可以直接问我</div>
              <div className="text-xs text-slate-600 mt-1">我会基于网站知识库帮你快速定位答案。</div>
              <div className="mt-2 text-right">
                <button
                  onClick={() => setShowGuide(false)}
                  className="text-xs font-semibold px-2 py-1 rounded-md"
                  style={{ color: '#0369a1', background: 'rgba(14,165,233,0.1)' }}
                >
                  知道了
                </button>
              </div>
              <div
                className="absolute -bottom-2 right-6 w-3 h-3 rotate-45 border-r border-b"
                style={{ background: 'rgba(255,255,255,0.98)', borderColor: 'rgba(15,23,42,0.12)' }}
              />
            </div>
          )}
          <button
            onClick={() => {
              setOpen(true);
              setShowGuide(false);
            }}
            className="px-4 py-3 rounded-full text-sm font-semibold text-white shadow-xl"
            style={{ background: 'linear-gradient(120deg, #0369a1, #0ea5e9)' }}
          >
            有问题找龙虾妈妈
          </button>
        </>
      )}
    </div>
  );
}

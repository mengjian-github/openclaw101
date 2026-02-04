'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface DayContentProps {
  day: number;
  content: string;
  frontmatter: {
    title: string;
    description: string;
  };
  prevDay: number | null;
  nextDay: number | null;
  locale: 'en' | 'zh';
}

export default function DayContent({ day, content, frontmatter, prevDay, nextDay, locale }: DayContentProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const titles: Record<number, { en: string; zh: string }> = {
    1: { en: 'Getting Started with OpenClaw', zh: '初识 OpenClaw' },
    2: { en: 'Deep Conversations', zh: '深入对话' },
    3: { en: 'Files & Code', zh: '文件与代码' },
    4: { en: 'Web Capabilities', zh: '网络能力' },
    5: { en: 'Skill Extensions', zh: '技能扩展' },
    6: { en: 'Automation', zh: '自动化' },
    7: { en: 'Advanced Techniques', zh: '高级技巧' },
  };
  
  const t = locale === 'zh' ? {
    day: '第',
    dayUnit: '天',
    prev: '上一天',
    next: '下一天',
    backToHome: '返回首页',
    readingTime: '阅读时间约',
    minutes: '分钟',
  } : {
    day: 'Day',
    dayUnit: '',
    prev: 'Previous Day',
    next: 'Next Day',
    backToHome: 'Back to Home',
    readingTime: 'Reading time:',
    minutes: 'min',
  };
  
  // Estimate reading time (Chinese: ~400 chars/min, English: ~200 words/min)
  const charCount = content.length;
  const readingTime = Math.max(1, Math.ceil(charCount / 400));
  
  return (
    <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={locale === 'zh' ? '/zh' : '/'} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span>←</span>
            <span>{t.backToHome}</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{t.readingTime} {readingTime} {t.minutes}</span>
          </div>
        </div>
      </header>
      
      {/* Progress bar */}
      <div className="h-1 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${(day / 7) * 100}%` }}
        />
      </div>
      
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
            {locale === 'zh' ? `${t.day} ${day} ${t.dayUnit}` : `${t.day} ${day}`}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {titles[day]?.[locale] || frontmatter.title}
          </h1>
          <p className="text-xl text-gray-400">
            {frontmatter.description}
          </p>
        </div>
      </div>
      
      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // Headers
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-white mt-12 mb-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-white mt-12 mb-6 pb-2 border-b border-gray-700">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-white mt-10 mb-4">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-lg font-semibold text-white mt-8 mb-4">{children}</h4>
              ),
              
              // Paragraphs
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
              ),
              
              // Strong & emphasis
              strong: ({ children }) => (
                <strong className="text-white font-semibold">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="text-gray-300">{children}</em>
              ),
              
              // Links
              a: ({ href, children }) => (
                <a 
                  href={href} 
                  className="text-blue-400 hover:text-blue-300 underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              
              // Lists
              ul: ({ children }) => (
                <ul className="my-4 ml-6 list-disc text-gray-300 space-y-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="my-4 ml-6 list-decimal text-gray-300 space-y-2">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-300">{children}</li>
              ),
              
              // Code
              code: ({ className, children }) => {
                const isBlock = className?.includes('language-');
                if (isBlock) {
                  return (
                    <code className={`${className} block text-gray-200 font-mono text-sm leading-relaxed`}>{children}</code>
                  );
                }
                return (
                  <code className="bg-slate-700 px-1.5 py-0.5 rounded text-emerald-400 text-sm font-mono border border-slate-600">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-slate-900 border border-slate-700 rounded-xl p-5 overflow-x-auto my-6 text-sm shadow-lg">
                  {children}
                </pre>
              ),
              
              // Blockquotes (callouts)
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500/50 bg-blue-900/20 pl-4 pr-4 py-3 my-4 rounded-r-lg text-gray-300">
                  {children}
                </blockquote>
              ),
              
              // Tables
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse border border-gray-700 rounded-lg overflow-hidden">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-800">{children}</thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-gray-700">{children}</tbody>
              ),
              tr: ({ children }) => (
                <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">{children}</tr>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-white font-semibold border-r border-gray-700 last:border-r-0">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-gray-300 border-r border-gray-700 last:border-r-0">
                  {children}
                </td>
              ),
              
              // Horizontal rule
              hr: () => <hr className="my-8 border-gray-700" />,
              
              // Images
              img: ({ src, alt }) => {
                // Handle placeholder images from Feishu
                if (src?.startsWith('FEISHU_IMAGE:')) {
                  return (
                    <div className="my-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-center">
                      <span className="text-gray-500">📷 {alt || 'Image'}</span>
                    </div>
                  );
                }
                return (
                  <img src={src} alt={alt} className="my-6 rounded-lg max-w-full" />
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
      
      {/* Navigation */}
      <nav className="border-t border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
            {prevDay ? (
              <Link 
                href={`${locale === 'zh' ? '/zh' : ''}/day/${prevDay}`}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm sm:text-base"
              >
                <span>←</span>
                <span className="whitespace-nowrap">{t.prev}</span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
            
            {nextDay ? (
              <Link 
                href={`${locale === 'zh' ? '/zh' : ''}/day/${nextDay}`}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-sm sm:text-base font-medium"
              >
                <span className="whitespace-nowrap">{t.next}</span>
                <span>→</span>
              </Link>
            ) : (
              <Link 
                href={locale === 'zh' ? '/zh' : '/'}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-500 rounded-lg transition-colors text-sm sm:text-base font-medium"
              >
                <span>🎉 {locale === 'zh' ? '完成！返回首页' : 'Done! Back Home'}</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

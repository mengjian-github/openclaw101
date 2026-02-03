'use client';

import { useEffect, useRef } from 'react';
import { Dictionary } from '@/lib/i18n';

interface WhatIsProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

const featuresZh = [
  {
    icon: '🧠',
    title: '全平台接入',
    desc: 'Telegram、Discord、WhatsApp、Signal 等多平台无缝连接，随时随地与你的AI助理对话。',
  },
  {
    icon: '⚡',
    title: '技能扩展',
    desc: '1000+ 社区技能，从天气查询到代码生成，一键安装即用。',
  },
  {
    icon: '🔒',
    title: '数据自主',
    desc: '完全自托管，数据存储在你自己的服务器上，隐私和安全尽在掌握。',
  },
];

const featuresEn = [
  {
    icon: '🧠',
    title: 'Multi-Platform',
    desc: 'Seamlessly connect via Telegram, Discord, WhatsApp, Signal, and more. Chat with your AI anywhere.',
  },
  {
    icon: '⚡',
    title: 'Extensible Skills',
    desc: '1000+ community skills, from weather queries to code generation. One-click install.',
  },
  {
    icon: '🔒',
    title: 'Self-Hosted',
    desc: 'Full data sovereignty. Your data stays on your server. Privacy and security in your hands.',
  },
];

export default function WhatIs({ locale, dict }: WhatIsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isZh = locale === 'zh';
  const features = isZh ? featuresZh : featuresEn;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-is" ref={sectionRef} className="py-12 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isZh ? (
              <>什么是 <span className="gradient-text">OpenClaw</span>？</>
            ) : (
              <>What is <span className="gradient-text">OpenClaw</span>?</>
            )}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isZh ? (
              <>OpenClaw 是一个开源 AI 助理平台，让你拥有一个 24/7 在线的私人 AI 助理。<br />它能理解你、帮助你、为你执行任务。</>
            ) : (
              <>OpenClaw is an open-source AI assistant platform that gives you a 24/7 personal AI.<br />It understands you, helps you, and executes tasks on your behalf.</>
            )}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal card-hover bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{f.icon}</div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{f.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* GitHub stars badge */}
        <div className="reveal text-center">
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="font-semibold">145k+ Stars</span>
            <span className="text-white/60">on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

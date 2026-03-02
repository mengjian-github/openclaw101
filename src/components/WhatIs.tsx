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
    <section id="what-is" ref={sectionRef} className="py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border" style={{ background: 'rgba(14,165,233,0.1)', color: '#0369a1', borderColor: 'rgba(14,165,233,0.2)' }}>
            {isZh ? '核心能力' : 'Core Capabilities'}
          </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal card-hover rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border"
              style={{
                background: 'rgba(255,255,255,0.72)',
                borderColor: 'rgba(15,23,42,0.08)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{f.icon}</div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{f.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

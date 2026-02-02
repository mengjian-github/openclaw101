'use client';

import { useEffect, useRef } from 'react';
import { Brain, Zap, Lock, Github } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: '全平台接入',
    desc: 'Telegram、Discord、WhatsApp、Signal 等多平台无缝连接，随时随地与你的AI助理对话。',
  },
  {
    icon: Zap,
    title: '技能扩展',
    desc: '1000+ 社区技能，从天气查询到代码生成，一键安装即用。',
  },
  {
    icon: Lock,
    title: '数据自主',
    desc: '完全自托管，数据存储在你自己的服务器上，隐私和安全尽在掌握。',
  },
];

export default function WhatIs() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="what-is" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">
            什么是 <span className="gradient-text">OpenClaw</span>？
          </h2>
          <p className="section-subtitle">
            OpenClaw 是一个开源 AI 助理平台，让你拥有一个 24/7 在线的私人 AI 助理。
            <br />
            它能理解你、帮助你、为你执行任务。
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="reveal card-hover bg-gray-50 rounded-2xl p-8 border border-gray-100"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="icon-container w-14 h-14 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-primary-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* GitHub stars badge */}
        <div className="reveal text-center">
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github className="w-5 h-5" />
            <span className="font-semibold">136k+ Stars</span>
            <span className="text-white/60">on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

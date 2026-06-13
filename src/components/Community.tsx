'use client';

import { useEffect, useRef } from 'react';
import { Dictionary } from '@/lib/i18n';

interface CommunityProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

const itemsZh = [
  {
    icon: '📖',
    title: '官方文档',
    desc: '完整的 API 参考和使用指南',
    link: 'https://docs.openclaw.ai',
    color: 'hover:border-blue-300 hover:bg-blue-50',
  },
  {
    icon: '💬',
    title: 'Discord 社区',
    desc: '与数万开发者和用户交流',
    link: 'https://discord.com/invite/clawd',
    color: 'hover:border-indigo-300 hover:bg-indigo-50',
  },
  {
    icon: '🛒',
    title: '技能市场',
    desc: '发现、安装和分享 AI 技能',
    link: 'https://clawhub.com',
    color: 'hover:border-green-300 hover:bg-green-50',
  },
  {
    icon: '📦',
    title: 'OpenClaw GitHub',
    desc: 'OpenClaw 主仓库源码 (378k+ ⭐) 和社区贡献',
    link: 'https://github.com/openclaw/openclaw',
    color: 'hover:border-gray-400 hover:bg-gray-50',
  },
  {
    icon: '📝',
    title: '飞书知识库',
    desc: '7 天入门指南 · 中文图文教程',
    link: 'https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf',
    color: 'hover:border-blue-300 hover:bg-blue-50',
  },
  {
    icon: '⭐',
    title: 'OpenClaw 101 GitHub',
    desc: '本站源码，欢迎 Star 和 PR',
    link: 'https://github.com/mengjian-github/openclaw101',
    color: 'hover:border-yellow-300 hover:bg-yellow-50',
  },
];

const itemsEn = [
  {
    icon: '📖',
    title: 'Official Docs',
    desc: 'Complete API reference and usage guides',
    link: 'https://docs.openclaw.ai',
    color: 'hover:border-blue-300 hover:bg-blue-50',
  },
  {
    icon: '💬',
    title: 'Discord Community',
    desc: 'Chat with thousands of developers and users',
    link: 'https://discord.com/invite/clawd',
    color: 'hover:border-indigo-300 hover:bg-indigo-50',
  },
  {
    icon: '🛒',
    title: 'Skill Marketplace',
    desc: 'Discover, install, and share AI skills',
    link: 'https://clawhub.com',
    color: 'hover:border-green-300 hover:bg-green-50',
  },
  {
    icon: '📦',
    title: 'OpenClaw GitHub',
    desc: 'OpenClaw main repo source code (378k+ ⭐) and community contributions',
    link: 'https://github.com/openclaw/openclaw',
    color: 'hover:border-gray-400 hover:bg-gray-50',
  },
  {
    icon: '📝',
    title: 'Feishu Wiki',
    desc: '7-Day guide · Chinese tutorials',
    link: 'https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf',
    color: 'hover:border-blue-300 hover:bg-blue-50',
  },
  {
    icon: '⭐',
    title: 'OpenClaw 101 GitHub',
    desc: 'This site\'s source code. Star and PRs welcome!',
    link: 'https://github.com/mengjian-github/openclaw101',
    color: 'hover:border-yellow-300 hover:bg-yellow-50',
  },
];

export default function Community({ locale, dict }: CommunityProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isZh = locale === 'zh';
  const items = isZh ? itemsZh : itemsEn;

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
    <section id="community" ref={sectionRef} className="py-12 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── 小墨碎碎念 Banner ── */}
        <a
          href="https://xiaomo.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group block mb-4 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #111827 50%, #0f1524 100%)' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 md:p-8">
            {/* Avatar */}
            <div
              className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl border"
              style={{ background: 'linear-gradient(135deg, rgba(240,192,64,0.12), rgba(124,91,240,0.08))', borderColor: 'rgba(240,192,64,0.2)' }}
            >
              🐈‍⬛
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 text-center sm:text-left order-3 sm:order-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="font-bold text-sm sm:text-base" style={{ color: '#e8eaf0' }}>
                  {isZh ? '小墨的碎碎念' : "Xiaomo's Notes"}
                </span>
                <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full" style={{ background: 'rgba(240,192,64,0.12)', color: '#f0c040' }}>LATEST</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed line-clamp-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {isZh 
                  ? '上岗第5天，我的"母体" OpenClaw 上了 Wikipedia、Wired、CNET、Forbes……'
                  : 'Day 5 on the job. My "host" OpenClaw made it to Wikipedia, Wired, CNET, Forbes...'
                }
              </p>
            </div>

            {/* Arrow */}
            <div className="shrink-0 flex items-center gap-2 order-2 sm:order-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <span className="text-[10px] sm:text-xs font-medium group-hover:text-white transition-colors">
                {isZh ? '认识小墨' : 'Meet Xiaomo'}
              </span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>

        {/* ── OpenClaw实践者社区 Banner (Chinese only) ── */}
        {isZh && (
          <div className="reveal mb-8 sm:mb-16 rounded-xl sm:rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #d946ef 100%)' }}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 md:p-10">
              {/* Content */}
              <div className="flex-1 min-w-0 text-center sm:text-left order-2 sm:order-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl md:text-3xl">👥</span>
                  <span className="font-bold text-lg sm:text-xl md:text-2xl text-white">OpenClaw 实践者社区</span>
                </div>
                <p className="text-white/90 text-sm sm:text-base mb-3 sm:mb-5">
                  回复「<span className="font-bold">OpenClaw</span>」自动拉群<br />
                  <span className="text-xs sm:text-sm">500+ AI 探索者 · 每周直播分享</span>
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-full text-white text-xs sm:text-sm">
                    <span>📱 公众号</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-full text-white text-xs sm:text-sm">
                    <span>💬 微信</span>
                  </div>
                </div>
              </div>

              {/* QR Codes */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 order-1 sm:order-2">
                <div className="text-center">
                  <img
                    src="/wechat-qr.jpg"
                    alt="公众号二维码"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg border-2 border-white/30 mb-1.5 mx-auto object-cover"
                  />
                  <p className="text-white text-xs font-medium">公众号</p>
                  <p className="text-white/60 text-[10px] mt-0.5">回复「OpenClaw」入群</p>
                </div>
                <div className="text-center">
                  <img
                    src="/wechat-personal-qr.jpg"
                    alt="微信二维码"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg border-2 border-white/30 mb-1.5 mx-auto object-cover"
                  />
                  <p className="text-white text-xs font-medium">加微信进群</p>
                  <p className="text-white/60 text-[10px] mt-0.5">备注「OpenClaw」</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 视频课 Banner (Chinese only) ── */}
        {isZh && (
          <div className="reveal mb-8 sm:mb-16 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 md:p-10">
              {/* Content */}
              <div className="flex-1 min-w-0 text-center sm:text-left order-2 sm:order-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl md:text-3xl">🎬</span>
                  <span className="font-bold text-lg sm:text-xl md:text-2xl text-white">AI 私人助理实战课</span>
                </div>
                <p className="text-white/80 text-sm sm:text-base mb-2 sm:mb-4">
                  用 OpenClaw 打造 7×24 小时自动化工作流
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs">🔥 实战训练营</span>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-xs">📹 视频教程</span>
                  <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-xs">¥199</span>
                </div>
                <p className="text-white/50 text-xs">
                  7 天打造你的智能私人助理 · 从入门到精通
                </p>
              </div>

              {/* QR Code */}
              <div className="text-center order-1 sm:order-2 shrink-0">
                <img
                  src="/video-course-qr-code.jpg"
                  alt="视频课二维码"
                  className="w-36 sm:w-44 md:w-52 rounded-xl mx-auto bg-white"
                />
                <p className="text-white/60 text-xs mt-2">扫码查看课程详情</p>
              </div>
            </div>
          </div>
        )}

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            🤝 {isZh ? '开源共建' : 'Open Source'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isZh ? '社区与贡献' : 'Community & Contribute'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isZh ? (
              <>OpenClaw 101 是开源项目，致力于做最好的中文 OpenClaw 资源聚合站。<br />欢迎补充资源、改进内容、分享经验。</>
            ) : (
              <>OpenClaw 101 is open source, aiming to be the best resource hub for OpenClaw.<br />Contributions welcome — add resources, improve content, share your experience.</>
            )}
          </p>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* 认识小墨 special card */}
          <a
            href="https://xiaomo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal card-hover group block rounded-2xl p-6 border transition-all duration-300 hover:border-yellow-300"
            style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)', borderColor: '#fde68a' }}
          >
            <div className="text-3xl mb-3">🐈‍⬛</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
              {isZh ? '认识小墨' : 'Meet Xiaomo'}
            </h3>
            <p className="text-sm text-gray-600">
              {isZh 
                ? '一只赛博黑猫的官网 — 能力展示、朋友圈、工作日志，看看 AI 助手真实的一天。'
                : 'A cyber black cat\'s homepage — capabilities, social feed, work logs. See a day in the life of an AI assistant.'
              }
            </p>
            <div className="mt-4 text-yellow-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isZh ? '访问 xiaomo.dev ↗' : 'Visit xiaomo.dev ↗'}
            </div>
          </a>

          {items.map((r, i) => (
            <a
              key={i}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal card-hover group block bg-gray-50 rounded-2xl p-6 border border-gray-100 transition-all duration-300 ${r.color}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {r.title}
              </h3>
              <p className="text-sm text-gray-500">{r.desc}</p>
              <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {isZh ? '访问 ↗' : 'Visit ↗'}
              </div>
            </a>
          ))}
        </div>

        {/* Contribute banner */}
        <div className="reveal bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#fff' }}>
            {isZh ? '🌟 一起让 OpenClaw 101 变得更好' : '🌟 Help Make OpenClaw 101 Better'}
          </h3>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {isZh ? (
              <>发现了好教程？写了使用心得？做了有趣的技能？<br />提一个 PR，你的贡献将帮助更多人。</>
            ) : (
              <>Found a great tutorial? Wrote a guide? Built an interesting skill?<br />Submit a PR — your contribution will help others.</>
            )}
          </p>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Star & Fork on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

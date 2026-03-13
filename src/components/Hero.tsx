'use client';

import { stats } from '@/data/resources';
import { Dictionary } from '@/lib/i18n';

interface HeroProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

export default function Hero({ locale, dict }: HeroProps) {
  const isZh = locale === 'zh';
  
  return (
    <section className="relative min-h-[88svh] flex items-center justify-center hero-glow overflow-hidden pt-28 pb-8 sm:pb-0">
      {/* Floating orbs */}
      <div className="absolute top-16 left-4 sm:left-14 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(14, 165, 233, 0.14)' }} />
      <div className="absolute bottom-8 right-4 sm:right-14 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(249, 115, 22, 0.12)' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7" style={{ borderColor: 'rgba(14,165,233,0.25)', background: 'rgba(255,255,255,0.78)' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-semibold" style={{ color: '#334155' }}>
            {isZh ? `开源免费 · 收录 ${stats.totalResources}+ 篇教程资源` : `Open Source · ${stats.totalResources}+ Tutorials Curated`}
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight" style={{ color: '#0f172a' }}>
          <span className="gradient-text">openclaw.mom</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 px-2" style={{ color: '#0f172a' }}>
          {isZh ? '从零开始，7天掌握你的 AI 私人助理' : 'Your AI assistant that actually does things'}
        </p>

        {/* Secondary tagline */}
        <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-10 max-w-2xl mx-auto px-3" style={{ color: '#55627a' }}>
          {isZh 
            ? '功能尽量实用、路径尽量清晰：按学习路径、技能目录、资源库三条线快速上手。'
            : 'Find what you need fast via learning path, skills directory, and curated resource hub.'
          }
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a
            href="#getting-started"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ color: '#fff', background: 'linear-gradient(120deg, #0369a1, #0ea5e9)' }}
          >
            🚀 {dict.hero.cta}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#resources"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ color: '#0f172a', borderColor: 'rgba(15,23,42,0.14)', background: 'rgba(255,255,255,0.7)' }}
          >
            📚 {dict.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-16 mx-auto max-w-md grid grid-cols-2 gap-y-4 gap-x-6 sm:hidden p-4 rounded-2xl border" style={{ background: 'rgba(255,255,255,0.68)', borderColor: 'rgba(15,23,42,0.08)' }}>
          <div className="text-center">
            <div className="text-xl font-bold" style={{ color: '#0f172a' }}>{stats.totalResources}+</div>
            <div className="text-xs" style={{ color: '#64748b' }}>{isZh ? '教程收录' : 'Tutorials'}</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold" style={{ color: '#0f172a' }}>{isZh ? '7 天' : '7 Days'}</div>
            <div className="text-xs" style={{ color: '#64748b' }}>{isZh ? '学习路径' : 'Learning Path'}</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold" style={{ color: '#0f172a' }}>307k+</div>
            <div className="text-xs" style={{ color: '#64748b' }}>{isZh ? '社区热度' : 'Community'}</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold" style={{ color: '#0f172a' }}>100%</div>
            <div className="text-xs" style={{ color: '#64748b' }}>{isZh ? '开源免费' : 'Open Source'}</div>
          </div>
        </div>

        {/* Desktop/tablet: inline bar */}
        <div className="hidden sm:mt-16 sm:flex items-center justify-center gap-8 md:gap-12 p-5 rounded-2xl border" style={{ background: 'rgba(255,255,255,0.68)', borderColor: 'rgba(15,23,42,0.08)' }}>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#0f172a' }}>{stats.totalResources}+</div>
            <div className="text-xs" style={{ color: '#64748b' }}>{isZh ? '教程收录' : 'Tutorials'}</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(15,23,42,0.1)' }} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#0f172a' }}>{isZh ? '7 天' : '7 Days'}</div>
            <div className="text-xs" style={{ color: '#64748b' }}>{isZh ? '学习路径' : 'Learning Path'}</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(15,23,42,0.1)' }} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#0f172a' }}>307k+</div>
            <div className="text-xs" style={{ color: '#64748b' }}>{isZh ? '社区热度' : 'Community'}</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(15,23,42,0.1)' }} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#0f172a' }}>100%</div>
            <div className="text-xs" style={{ color: '#64748b' }}>{isZh ? '开源免费' : 'Open Source'}</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto" style={{ color: '#94a3b8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

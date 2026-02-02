'use client';

import { stats } from '@/data/resources';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-glow overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(37, 99, 235, 0.10)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(16, 185, 129, 0.08)', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(37, 99, 235, 0.05)', animationDelay: '4s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
            开源免费 · 收录 {stats.totalResources}+ 篇教程资源
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight" style={{ color: '#fff' }}>
          Open<span className="gradient-text">Claw</span> 101
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
          从零开始，7天掌握你的 AI 私人助理
        </p>

        {/* English tagline */}
        <p className="text-sm md:text-base mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
          The open-source guide to building your AI assistant with OpenClaw
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#getting-started"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            style={{ color: '#fff' }}
          >
            🚀 开始学习
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#resources"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            📚 浏览资源
          </a>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#fff' }}>{stats.totalResources}+</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>教程收录</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#fff' }}>7 天</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>学习路径</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#fff' }}>136k+</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>GitHub Stars</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#fff' }}>100%</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>开源免费</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto" style={{ color: 'rgba(255,255,255,0.3)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

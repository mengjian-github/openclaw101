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
    <section className="relative flex min-h-[720px] items-center justify-center overflow-hidden hero-glow pt-20 pb-8 sm:min-h-[100svh] sm:pt-0 sm:pb-0">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(37, 99, 235, 0.10)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(16, 185, 129, 0.08)', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(37, 99, 235, 0.05)', animationDelay: '4s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 sm:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {isZh ? '10 分钟首次助手上手 · 原生 Windows 可用' : '10-minute first assistant setup · Native Windows supported'}
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-6 tracking-tight" style={{ color: '#fff' }}>
          {isZh ? (
            <>10 分钟搭建你的第一个 <span className="gradient-text">OpenClaw</span> AI 助手</>
          ) : (
            <>Build your first <span className="gradient-text">OpenClaw</span> AI assistant in 10 minutes</>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 px-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
          {isZh ? '先完成第一条助手消息，再慢慢掌握 7 天路径。' : 'Get to the first assistant message first, then follow the full 7-day path.'}
        </p>

        {/* Secondary tagline */}
        <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-10 max-w-2xl mx-auto px-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {isZh
            ? '准备运行环境、模型访问和 Telegram Bot Token；执行一行命令，跟随 QuickStart 向导完成配置。'
            : 'Prepare a runtime, model access, and a Telegram bot token; run one command and finish the QuickStart wizard.'
          }
        </p>

        <div className="mb-4 sm:mb-8 mx-auto max-w-2xl rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 sm:p-4 text-left">
          <p className="text-sm font-semibold text-emerald-100">
            {isZh ? '先给答案：Windows 不一定要装 WSL2；OpenClaw 可直接跑在原生 Windows。' : 'Answer first: Windows users do not have to install WSL2; OpenClaw can run on native Windows.'}
          </p>
          <p className="mt-2 text-xs leading-5 text-emerald-50/70">
            {isZh ? '如果只是想尽快跑起来，直接用当前电脑即可；如果想 24 小时在线，再选小云服务器。' : 'Use your current computer for the fastest trial; choose a small cloud server only when you want 24/7 availability.'}
          </p>
        </div>

        <div className="mx-auto mb-4 grid max-w-2xl grid-cols-2 gap-2 sm:hidden">
          {[
            isZh ? 'OpenClaw 初学者教程' : 'OpenClaw tutorial for beginners',
            isZh ? '原生 Windows 可用' : 'Native Windows supported',
            isZh ? 'Telegram 首条回复' : 'Telegram first reply',
            '354k+ GitHub stars',
          ].map((chip) => (
            <span key={chip} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[11px] font-semibold text-white/72">
              ✓ {chip}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a
            href={isZh ? '/zh/start' : '/openclaw-tutorial'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-500 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            style={{ color: '#fff' }}
          >
            🚀 {isZh ? '从 OpenClaw 教程开始' : 'OpenClaw tutorial for beginners'}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href={isZh ? '/zh/start' : '/start'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-white/20 hover:border-white/40 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            ⚡ {isZh ? '10 分钟上手清单' : '10-minute setup checklist'}
          </a>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden w-full items-center justify-center gap-2 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex sm:w-auto sm:px-8 sm:py-4 border border-white/20 hover:border-white/40 rounded-xl"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-16 mx-auto max-w-md grid grid-cols-2 gap-y-4 gap-x-6 sm:hidden">
          <div className="text-center">
            <div className="text-xl font-bold" style={{ color: '#fff' }}>{stats.totalResources}+</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{isZh ? '教程收录' : 'Tutorials'}</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold" style={{ color: '#fff' }}>{isZh ? '7 天' : '7 Days'}</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{isZh ? '学习路径' : 'Learning Path'}</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold" style={{ color: '#fff' }}>354k+</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>OpenClaw Stars</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold" style={{ color: '#fff' }}>100%</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{isZh ? '开源免费' : 'Open Source'}</div>
          </div>
        </div>

        {/* Desktop/tablet: inline bar */}
        <div className="hidden sm:mt-16 sm:flex items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#fff' }}>{stats.totalResources}+</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{isZh ? '教程收录' : 'Tutorials'}</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#fff' }}>{isZh ? '7 天' : '7 Days'}</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{isZh ? '学习路径' : 'Learning Path'}</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#fff' }}>354k+</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>OpenClaw Stars</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#fff' }}>100%</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{isZh ? '开源免费' : 'Open Source'}</div>
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

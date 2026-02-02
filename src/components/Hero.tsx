'use client';

import { stats } from '@/data/resources';
import { Rocket, BookOpen, Github, ArrowDown, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center hero-glow overflow-hidden pt-28 pb-10 sm:pt-0 sm:pb-0">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(59, 130, 246, 0.10)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(16, 185, 129, 0.08)', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(6, 182, 212, 0.05)', animationDelay: '4s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="badge mb-8">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
          </div>
          <span className="text-sm font-medium">
            开源免费 · 收录 {stats.totalResources}+ 篇教程资源
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-5 sm:mb-6 tracking-tight" style={{ color: '#fff' }}>
          Open<span className="gradient-text">Claw</span> 101
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 px-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
          从零开始，7天掌握你的 AI 私人助理
        </p>

        {/* English tagline */}
        <p className="text-sm md:text-base mb-8 sm:mb-10 max-w-xl mx-auto px-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
          The open-source guide to building your AI assistant with OpenClaw
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#getting-started"
            className="btn-primary group"
          >
            <Rocket className="w-5 h-5" />
            开始学习
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
          <a
            href="#resources"
            className="btn-secondary"
          >
            <BookOpen className="w-5 h-5" />
            浏览资源
          </a>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>

        {/* Stats */}
        {/* Mobile: 2x2 grid to avoid cramped text */}
        <div className="mt-10 sm:mt-16 mx-auto max-w-md grid grid-cols-2 gap-y-6 gap-x-10 sm:hidden">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{stats.totalResources}+</div>
            <div className="text-xs text-white/40">教程收录</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">7 天</div>
            <div className="text-xs text-white/40">学习路径</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">136k+</div>
            <div className="text-xs text-white/40">GitHub Stars</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-white/40">开源免费</div>
          </div>
        </div>

        {/* Desktop/tablet: inline bar */}
        <div className="hidden sm:mt-16 sm:flex items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stats.totalResources}+</div>
              <div className="text-xs text-white/40">教程收录</div>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent-400" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">7 天</div>
              <div className="text-xs text-white/40">学习路径</div>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4 text-white/40" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">136k+</div>
              <div className="text-xs text-white/40">GitHub Stars</div>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
              <div className="text-xs text-white/40">开源免费</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-white/30" />
        </div>
      </div>
    </section>
  );
}

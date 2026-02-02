'use client';

import { useEffect, useRef } from 'react';
import { getFeaturedResources, categoryMeta, stats, type Resource } from '@/data/resources';

const colorMap: Record<string, string> = {
  blue: 'border-blue-200 bg-blue-50 text-blue-700',
  green: 'border-green-200 bg-green-50 text-green-700',
  purple: 'border-purple-200 bg-purple-50 text-purple-700',
  orange: 'border-orange-200 bg-orange-50 text-orange-700',
  red: 'border-red-200 bg-red-50 text-red-700',
  indigo: 'border-indigo-200 bg-indigo-50 text-indigo-700',
  teal: 'border-teal-200 bg-teal-50 text-teal-700',
  sky: 'border-sky-200 bg-sky-50 text-sky-700',
};

function ResourceCard({ r, i }: { r: Resource; i: number }) {
  const meta = categoryMeta[r.category];
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal card-hover group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 relative"
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      {/* Lang badge */}
      <div className="absolute top-4 right-4">
        <span className={`text-xs px-2 py-0.5 rounded-full border ${r.lang === 'zh' ? 'border-red-200 bg-red-50 text-red-600' : 'border-blue-200 bg-blue-50 text-blue-600'}`}>
          {r.lang === 'zh' ? '中文' : 'EN'}
        </span>
      </div>

      {/* Category */}
      <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border mb-3 ${colorMap[meta.color] || colorMap.blue}`}>
        {meta.icon} {meta.label}
      </span>

      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors pr-12 line-clamp-2">
        {r.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">{r.desc}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">{r.source}</span>
        <span className="text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          访问 ↗
        </span>
      </div>
    </a>
  );
}

export default function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const featured = getFeaturedResources();

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
    <section id="resources" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-6 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            📚 精选收录
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            全网优质资源聚合
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从阿里云、腾讯云到 DigitalOcean，从 B站到 Codecademy —— 一站式获取 OpenClaw 最佳教程。
          </p>
        </div>

        {/* Stats row */}
        <div className="reveal flex items-center justify-center gap-6 md:gap-10 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">{stats.totalResources}+</span>
            <span className="text-sm text-gray-500">篇教程</span>
          </div>
          <div className="w-px h-5 bg-gray-200" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">{stats.zhResources}</span>
            <span className="text-sm text-gray-500">中文资源</span>
          </div>
          <div className="w-px h-5 bg-gray-200" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">{stats.enResources}</span>
            <span className="text-sm text-gray-500">英文资源</span>
          </div>
          <div className="w-px h-5 bg-gray-200" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-600">{stats.totalCategories}</span>
            <span className="text-sm text-gray-500">大分类</span>
          </div>
        </div>

        {/* Source logos bar */}
        <div className="reveal flex flex-wrap items-center justify-center gap-4 mb-12 text-sm text-gray-400">
          收录来源：
          {['阿里云', '腾讯云', 'DigitalOcean', 'Hostinger', 'IBM', 'Codecademy', 'B站', '博客园', 'CSDN', 'Reddit'].map((s) => (
            <span key={s} className="px-3 py-1 bg-white rounded-full border border-gray-100 text-gray-500 text-xs">
              {s}
            </span>
          ))}
        </div>

        {/* Featured cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {featured.map((r, i) => (
            <ResourceCard key={r.url} r={r} i={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <a
            href="/resources"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            查看全部 {stats.totalResources}+ 篇资源
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <p className="text-gray-500 text-sm mt-3">
            持续更新中 · <a href="https://github.com/mengjian-github/openclaw101" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">欢迎提交 PR 补充资源</a>
          </p>
        </div>
      </div>
    </section>
  );
}

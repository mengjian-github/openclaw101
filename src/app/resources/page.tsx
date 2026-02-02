'use client';

import { useState, useEffect, useRef } from 'react';
import {
  resources,
  categoryMeta,
  stats,
  type Resource,
  type ResourceCategory,
} from '@/data/resources';

const colorMap: Record<string, { badge: string; border: string }> = {
  blue: { badge: 'border-blue-200 bg-blue-50 text-blue-700', border: 'hover:border-blue-200' },
  green: { badge: 'border-green-200 bg-green-50 text-green-700', border: 'hover:border-green-200' },
  purple: { badge: 'border-purple-200 bg-purple-50 text-purple-700', border: 'hover:border-purple-200' },
  orange: { badge: 'border-orange-200 bg-orange-50 text-orange-700', border: 'hover:border-orange-200' },
  red: { badge: 'border-red-200 bg-red-50 text-red-700', border: 'hover:border-red-200' },
  indigo: { badge: 'border-indigo-200 bg-indigo-50 text-indigo-700', border: 'hover:border-indigo-200' },
  teal: { badge: 'border-teal-200 bg-teal-50 text-teal-700', border: 'hover:border-teal-200' },
  sky: { badge: 'border-sky-200 bg-sky-50 text-sky-700', border: 'hover:border-sky-200' },
};

type FilterLang = 'all' | 'zh' | 'en';
type FilterCat = 'all' | ResourceCategory;

export default function ResourcesPage() {
  const [lang, setLang] = useState<FilterLang>('all');
  const [cat, setCat] = useState<FilterCat>('all');
  const [search, setSearch] = useState('');
  const mainRef = useRef<HTMLDivElement>(null);

  const filtered = resources.filter((r) => {
    if (lang !== 'all' && r.lang !== lang) return false;
    if (cat !== 'all' && r.category !== cat) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        r.title.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.source.toLowerCase().includes(q) ||
        r.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = mainRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  const categories: { key: FilterCat; label: string; icon: string }[] = [
    { key: 'all', label: '全部', icon: '📋' },
    ...Object.entries(categoryMeta).map(([k, v]) => ({
      key: k as ResourceCategory,
      label: v.label,
      icon: v.icon,
    })),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="hero-glow">
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
          <a
            href="/"
            className="inline-flex items-center gap-1 text-sm mb-6 transition-colors"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            ← 返回首页
          </a>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#fff' }}>
            📚 资源聚合
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
            全网 OpenClaw 教程、视频、文章、工具一站式收录。
            <br />
            开源共享，持续更新，欢迎 <a href="https://github.com/mengjian-github/openclaw101" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'rgba(255,255,255,0.9)' }}>提交 PR</a> 补充资源。
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-8 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <span><b className="text-lg" style={{ color: '#fff' }}>{stats.totalResources}</b> 篇资源</span>
            <span><b className="text-lg" style={{ color: '#fff' }}>{stats.zhResources}</b> 中文</span>
            <span><b className="text-lg" style={{ color: '#fff' }}>{stats.enResources}</b> English</span>
            <span><b className="text-lg" style={{ color: '#fff' }}>{stats.totalCategories}</b> 大分类</span>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-sm">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="搜索资源..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCat(c.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    cat === c.key
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {c.icon} {c.label}
                </button>
              ))}
            </div>

            {/* Language filter */}
            <div className="flex gap-1.5 ml-auto">
              {([['all', '全部'], ['zh', '🇨🇳 中文'], ['en', '🇺🇸 EN']] as const).map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setLang(k)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    lang === k
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div ref={mainRef} className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-6">
          共 <b className="text-gray-900">{filtered.length}</b> 条结果
          {search && <span> · 搜索 &quot;{search}&quot;</span>}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-4xl mb-4">🔍</div>
            <p>没有找到匹配的资源</p>
            <button
              onClick={() => { setSearch(''); setCat('all'); setLang('all'); }}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              清除筛选
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((r, i) => {
              const meta = categoryMeta[r.category];
              const colors = colorMap[meta.color] || colorMap.blue;
              return (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal card-hover group block bg-white rounded-2xl p-6 border border-gray-100 ${colors.border} relative`}
                  style={{ transitionDelay: `${Math.min(i, 8) * 50}ms` }}
                >
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${colors.badge}`}>
                      {meta.icon} {meta.label}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${r.lang === 'zh' ? 'border-red-200 bg-red-50 text-red-600' : 'border-blue-200 bg-blue-50 text-blue-600'}`}>
                      {r.lang === 'zh' ? '中文' : 'EN'}
                    </span>
                    {r.featured && (
                      <span className="text-xs px-2 py-0.5 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-700">
                        ⭐ 推荐
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{r.desc}</p>

                  {/* Tags */}
                  {r.tags && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {r.tags.map((t) => (
                        <span key={t} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{r.source}</span>
                    <span className="text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      访问 ↗
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Contribute CTA */}
        <div className="mt-16 text-center py-12 bg-white rounded-2xl border border-gray-100">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">发现了好资源？</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            OpenClaw 101 是开源项目，欢迎提交 PR 补充你发现的优质教程、视频和文章。
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/mengjian-github/openclaw101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              在 GitHub 提交 PR
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 hover:text-gray-900 font-semibold rounded-xl transition-all duration-300"
            >
              ← 返回首页
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="hero-glow py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <p>
            Made with 🐈‍⬛ by <span style={{ color: 'rgba(255,255,255,0.8)' }}>小墨</span> | <a href="/" style={{ color: 'rgba(255,255,255,0.6)' }} className="hover:underline">OpenClaw 101</a> | <a href="https://github.com/mengjian-github/openclaw101" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)' }} className="hover:underline">GitHub</a>
          </p>
          <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>孟健AI编程出品 · 开源共享</p>
        </div>
      </footer>
    </div>
  );
}

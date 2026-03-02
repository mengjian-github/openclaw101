'use client';

import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Dictionary } from '@/lib/i18n';

interface NavbarProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const prefix = locale === 'en' ? '' : `/${locale}`;

  const links = [
    { label: dict.nav.learn, href: '#what-is' },
    { label: dict.nav.skills, href: '#skills' },
    { label: dict.nav.resources, href: '#resources' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'py-4 sm:py-5'
      }`}
      style={{
        backgroundColor: 'transparent',
        paddingTop: scrolled ? 'calc(env(safe-area-inset-top) + 0.75rem)' : 'calc(env(safe-area-inset-top) + 1rem)',
      }}
    >
      <div
        className="max-w-6xl mx-auto px-4 py-2 sm:py-2.5 rounded-2xl border flex items-center justify-between shadow-sm"
        style={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.84)',
          borderColor: 'rgba(15,23,42,0.08)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Logo */}
        <a href={prefix || '/'} className="inline-flex items-center gap-2 sm:gap-3">
          <span
            className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl border shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(251,146,60,0.28), rgba(244,63,94,0.2))',
              borderColor: 'rgba(251,146,60,0.55)',
              color: '#ffd7a1',
            }}
          >
            🦞
          </span>
          <span className="leading-tight">
            <span className="block font-black text-sm sm:text-base tracking-wide" style={{ color: '#0f172a' }}>
              龙虾妈妈
            </span>
            <span className="block text-[10px] sm:text-xs gradient-text">openclaw.mom</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-200 hover:text-sky-700"
              style={{ color: '#475569' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${prefix}/resources`}
            className="text-sm transition-colors duration-200 font-medium"
            style={{ color: '#0369a1' }}
          >
            {locale === 'zh' ? '全部资源' : 'All Resources'}
          </a>
          
          {/* Language Switcher */}
          <LanguageSwitcher />
          
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden hover:text-slate-900 transition-colors"
          style={{ color: '#475569' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden rounded-2xl mt-2 mx-4 border px-4 py-4" style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderColor: 'rgba(15,23,42,0.08)' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 transition-colors duration-200 hover:text-slate-900"
              style={{ color: '#475569' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${prefix}/resources`}
            onClick={() => setMobileOpen(false)}
            className="block py-3 transition-colors duration-200 hover:text-slate-900 font-medium"
            style={{ color: '#0369a1' }}
          >
            {locale === 'zh' ? '全部资源 →' : 'All Resources →'}
          </a>
          
          {/* Mobile Language Switcher */}
          <div className="py-3 border-t mt-2" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
            <LanguageSwitcher />
          </div>
          
        </div>
      )}
    </nav>
  );
}

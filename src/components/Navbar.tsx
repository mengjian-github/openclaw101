'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: '什么是 OpenClaw', href: '#what-is' },
  { label: '学习路径', href: '#getting-started' },
  { label: '技能', href: '#skills' },
  { label: '📚 资源', href: '#resources' },
  { label: '社区', href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md border-b border-white/10 py-3'
          : 'py-5'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-lg" style={{ color: '#fff' }}>
          🐾 <span className="gradient-text">OpenClaw</span> 101
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resources"
            className="text-sm transition-colors duration-200 font-medium"
            style={{ color: '#10B981' }}
          >
            全部资源
          </a>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
            style={{ color: '#fff' }}
          >
            ⭐ GitHub
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden hover:text-white transition-colors"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
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
        <div className="md:hidden backdrop-blur-md border-t border-white/10 px-4 py-4" style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resources"
            onClick={() => setMobileOpen(false)}
            className="block py-3 transition-colors duration-200 hover:text-white font-medium"
            style={{ color: '#10B981' }}
          >
            全部资源 →
          </a>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            ⭐ GitHub
          </a>
        </div>
      )}
    </nav>
  );
}

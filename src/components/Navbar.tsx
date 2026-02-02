'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Github, Menu, X, PawPrint } from 'lucide-react';

const links = [
  { label: '什么是 OpenClaw', href: '#what-is' },
  { label: '学习路径', href: '#getting-started' },
  { label: '技能', href: '#skills' },
  { label: '资源', href: '#resources' },
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
          : 'py-4 sm:py-5'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(10, 15, 28, 0.9)' : 'transparent',
        paddingTop: scrolled ? 'calc(env(safe-area-inset-top) + 0.75rem)' : 'calc(env(safe-area-inset-top) + 1rem)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-base sm:text-lg whitespace-nowrap flex items-center gap-2" style={{ color: '#fff' }}>
          <PawPrint className="w-5 h-5 text-primary-400" />
          <span className="gradient-text">OpenClaw</span> 101
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
            className="text-sm transition-colors duration-200 font-medium flex items-center gap-1.5"
            style={{ color: '#10B981' }}
          >
            <BookOpen className="w-4 h-4" />
            全部资源
          </a>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 flex items-center gap-2"
            style={{ color: '#fff' }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden hover:text-white transition-colors"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-md border-t border-white/10 px-4 py-4" style={{ backgroundColor: 'rgba(10, 15, 28, 0.95)' }}>
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
            className="block py-3 transition-colors duration-200 hover:text-white font-medium flex items-center gap-2"
            style={{ color: '#10B981' }}
          >
            <BookOpen className="w-4 h-4" />
            全部资源 →
          </a>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 transition-colors duration-200 hover:text-white flex items-center gap-2"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}

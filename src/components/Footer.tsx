import { Dictionary } from '@/lib/i18n';

interface FooterProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const isZh = locale === 'zh';

  return (
    <footer className="hero-glow py-6 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <a
            href="https://openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-white transition-colors"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {isZh ? 'OpenClaw 官网' : 'OpenClaw Website'}
          </a>
          <div className="text-xs sm:text-sm mt-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
            made with{' '}
            <a
              href="https://8848.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              8848.Studio
            </a>
          </div>
          <div className="text-[11px] sm:text-xs mt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
            感谢{' '}
            <a
              href="https://xiaomo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              xiaomo
            </a>{' '}
            的开源项目
          </div>
        </div>
      </div>
    </footer>
  );
}

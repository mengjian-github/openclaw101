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
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
            <a
              href="https://openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors text-center sm:text-left"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {isZh ? 'OpenClaw 官网' : 'OpenClaw Website'}
            </a>

            <div className="text-sm sm:text-base text-center">
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>made with </span>
              <a
                href="https://8848.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-extrabold tracking-wide"
                style={{ color: '#ffffff' }}
              >
                8848.Studio
              </a>
            </div>

            <div className="text-[11px] sm:text-xs text-right self-end" style={{ color: 'rgba(255,255,255,0.32)' }}>
              感谢{' '}
              <a
                href="https://xiaomo.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                xiaomo
              </a>{' '}
              的开源项目
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

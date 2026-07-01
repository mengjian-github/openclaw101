import { Dictionary } from '@/lib/i18n';

interface FooterProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const isZh = locale === 'zh';
  const prefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <footer className="hero-glow py-6 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Link groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-10">
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {isZh ? '官方' : 'Official'}
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li><a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{isZh ? 'OpenClaw 官网' : 'OpenClaw Website'}</a></li>
              <li><a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{isZh ? '官方文档' : 'Documentation'}</a></li>
              <li><a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">OpenClaw GitHub (354k+ ⭐)</a></li>
              <li><a href="https://clawhub.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{isZh ? 'ClawHub 技能市场' : 'ClawHub Skills'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {isZh ? '学习' : 'Learn'}
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li><a href={isZh ? '/zh/start' : '/openclaw-tutorial'} className="hover:text-white transition-colors font-medium">{isZh ? 'OpenClaw 初学者教程' : 'OpenClaw tutorial for beginners'}</a></li>
              <li><a href="#getting-started" className="hover:text-white transition-colors">{isZh ? '7天学习路径' : '7-Day Path'}</a></li>
              <li><a href={`${prefix}/resources`} className="hover:text-white transition-colors">{isZh ? '全部资源' : 'All Resources'}</a></li>
              <li><a href="https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{isZh ? '飞书知识库' : 'Feishu Wiki'}</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">{isZh ? '技能推荐' : 'Featured Skills'}</a></li>
              {isZh && (
                <li>
                  <a href="https://xiaomo.dev/course/openclaw-ai-assistant/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                    🎓 实战训练营
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded">¥199</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {isZh ? '社区' : 'Community'}
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li><a href="https://discord.com/invite/clawd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="https://www.reddit.com/r/ThinkingDeeplyAI/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reddit</a></li>
              <li><a href="https://xiaomo.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">🐈‍⬛ {isZh ? '认识小墨' : 'Meet Xiaomo'}</a></li>
              <li><a href="https://github.com/mengjian-github/openclaw101" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{isZh ? '贡献资源 (PR)' : 'Contribute (PR)'}</a></li>
              <li><a href="https://www.skill-cn.com?from=openclaw101" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{isZh ? 'Skill Hub 中国' : 'Skill Hub CN'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {isZh ? '云平台' : 'Cloud Platforms'}
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li><a href="https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{isZh ? '阿里云' : 'Alibaba Cloud'}</a></li>
              <li><a href="https://cloud.tencent.com/developer/article/2625073" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{isZh ? '腾讯云' : 'Tencent Cloud'}</a></li>
              <li><a href="https://www.digitalocean.com/community/tutorials/how-to-run-openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DigitalOcean</a></li>
              <li><a href="https://www.hostinger.com/tutorials/how-to-set-up-openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Hostinger</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Made with 🐈‍⬛ by <a href="https://xiaomo.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.8)' }}>{isZh ? '小墨' : 'Xiaomo'}</a> | OpenClaw 101
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <a href="https://mengjian.site" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{isZh ? '孟健AI编程出品' : 'By Mengjian'}</a>
              <span className="hidden sm:inline">·</span>
              <span className="sm:hidden">|</span>
              <span>{isZh ? '开源共享' : 'Open Source'}</span>
              <span className="hidden sm:inline">·</span>
              <span className="sm:hidden">|</span>
              <a href="https://github.com/mengjian-github/openclaw101" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <span className="hidden sm:inline">·</span>
              <span className="sm:hidden">|</span>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <span className="hidden sm:inline">·</span>
              <span className="sm:hidden">|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

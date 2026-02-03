export default function Footer() {
  return (
    <footer className="hero-glow py-6 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Link groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-10">
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>官方</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li><a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">OpenClaw 官网</a></li>
              <li><a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">官方文档</a></li>
              <li><a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub (136k+ ⭐)</a></li>
              <li><a href="https://clawhub.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ClawHub 技能市场</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>学习</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li><a href="#getting-started" className="hover:text-white transition-colors">7天学习路径</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">全部资源</a></li>
              <li><a href="https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">飞书知识库</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">技能推荐</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>社区</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li><a href="https://discord.com/invite/clawd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="https://www.reddit.com/r/ThinkingDeeplyAI/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reddit</a></li>
              <li><a href="https://xiaomo.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">🐈‍⬛ 认识小墨</a></li>
              <li><a href="https://github.com/mengjian-github/openclaw101" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">贡献资源 (PR)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>云平台</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li><a href="https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">阿里云</a></li>
              <li><a href="https://cloud.tencent.com/developer/article/2625073" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">腾讯云</a></li>
              <li><a href="https://www.digitalocean.com/community/tutorials/how-to-run-openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DigitalOcean</a></li>
              <li><a href="https://www.hostinger.com/tutorials/how-to-set-up-openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Hostinger</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Made with 🐈‍⬛ by <a href="https://xiaomo.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.8)' }}>小墨</a> | OpenClaw 101
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <span>孟健AI编程出品</span>
              <span className="hidden sm:inline">·</span>
              <span className="sm:hidden">|</span>
              <span>开源共享</span>
              <span className="hidden sm:inline">·</span>
              <span className="sm:hidden">|</span>
              <a href="https://github.com/mengjian-github/openclaw101" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { Dictionary } from '@/lib/i18n';

interface SkillsProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

// Featured skills with actual links from awesome-openclaw-skills
const featuredSkillsEn = [
  {
    icon: '🌐',
    title: 'Web & Frontend',
    color: 'from-blue-500 to-blue-600',
    count: 46,
    skills: [
      { name: 'frontend-design', desc: 'Production-grade UI' },
      { name: 'nextjs-expert', desc: 'Next.js 14/15 apps' },
      { name: 'ui-audit', desc: 'Automated UI audits' },
      { name: 'remotion-server', desc: 'Headless video' },
    ],
  },
  {
    icon: '🤖',
    title: 'Coding Agents',
    color: 'from-purple-500 to-purple-600',
    count: 55,
    skills: [
      { name: 'coding-agent', desc: 'Claude Code/Codex' },
      { name: 'opencode-acp-control', desc: 'OpenCode control' },
      { name: 'claude-team', desc: 'Multi-worker agents' },
      { name: 'skill-creator', desc: 'Build new skills' },
    ],
  },
  {
    icon: '☁️',
    title: 'DevOps & Cloud',
    color: 'from-orange-500 to-orange-600',
    count: 144,
    skills: [
      { name: 'cloudflare', desc: 'Workers, KV, D1, R2' },
      { name: 'docker-essentials', desc: 'Container management' },
      { name: 'kubernetes', desc: 'K8s clusters' },
      { name: 'coolify', desc: 'Self-hosted deploys' },
    ],
  },
  {
    icon: '🔍',
    title: 'Search & Research',
    color: 'from-teal-500 to-teal-600',
    count: 148,
    skills: [
      { name: 'exa-plus', desc: 'Neural web search' },
      { name: 'deepwiki', desc: 'GitHub docs' },
      { name: 'technews', desc: 'TechMeme digest' },
      { name: 'read-github', desc: 'Repo search' },
    ],
  },
  {
    icon: '📈',
    title: 'Marketing & Sales',
    color: 'from-pink-500 to-pink-600',
    count: 94,
    skills: [
      { name: 'seo-audit', desc: 'SEO analysis' },
      { name: 'social-content', desc: 'Social media' },
      { name: 'email-sequence', desc: 'Email campaigns' },
      { name: 'copywriting', desc: 'Copy optimization' },
    ],
  },
  {
    icon: '🧠',
    title: 'AI & LLMs',
    color: 'from-indigo-500 to-indigo-600',
    count: 159,
    skills: [
      { name: 'kimi-integration', desc: 'Moonshot AI' },
      { name: 'chatgpt-apps', desc: 'ChatGPT builder' },
      { name: 'chromadb-memory', desc: 'Vector memory' },
      { name: 'agentmemory', desc: 'Cloud memory' },
    ],
  },
  {
    icon: '🏠',
    title: 'Smart Home & IoT',
    color: 'from-green-500 to-green-600',
    count: 50,
    skills: [
      { name: 'homeassistant', desc: 'Home automation' },
      { name: 'adguard', desc: 'DNS filtering' },
      { name: 'emporia-energy', desc: 'Energy monitoring' },
      { name: 'trmnl', desc: 'E-ink displays' },
    ],
  },
  {
    icon: '🗣️',
    title: 'Speech & Audio',
    color: 'from-red-500 to-red-600',
    count: 44,
    skills: [
      { name: 'aliyun-tts', desc: 'Alibaba TTS' },
      { name: 'whisper', desc: 'Transcription' },
      { name: 'azure-ai-voicelive', desc: 'Real-time voice' },
      { name: 'speech-to-text', desc: 'Audio to text' },
    ],
  },
  {
    icon: '💬',
    title: 'Communication',
    color: 'from-cyan-500 to-cyan-600',
    count: 58,
    skills: [
      { name: 'slack', desc: 'Slack control' },
      { name: 'discord', desc: 'Discord bot' },
      { name: 'telegram', desc: 'Telegram API' },
      { name: 'smtp-send', desc: 'Send emails' },
    ],
  },
  {
    icon: '🏋️',
    title: 'Health & Fitness',
    color: 'from-lime-500 to-lime-600',
    count: 35,
    skills: [
      { name: 'workout-logger', desc: 'Exercise tracking' },
      { name: 'fasting-tracker', desc: 'Fasting windows' },
      { name: 'weight-loss', desc: 'Weight tracking' },
      { name: 'habit-tracker', desc: 'Daily habits' },
    ],
  },
  {
    icon: '📝',
    title: 'Notes & PKM',
    color: 'from-amber-500 to-amber-600',
    count: 61,
    skills: [
      { name: 'logseq', desc: 'Logseq integration' },
      { name: 'obsidian', desc: 'Obsidian vault' },
      { name: 'notion', desc: 'Notion API' },
      { name: 'newsletter-digest', desc: 'Article summaries' },
    ],
  },
  {
    icon: '🎮',
    title: 'Gaming',
    color: 'from-violet-500 to-violet-600',
    count: 7,
    skills: [
      { name: 'dnd', desc: 'D&D 5e toolkit' },
      { name: 'moltpet', desc: 'AI pet system' },
      { name: 'bot-bowl-party', desc: 'BotBowl Party' },
      { name: 'winamp', desc: 'Music player' },
    ],
  },
];

const featuredSkillsZh = [
  {
    icon: '🌐',
    title: '网页 & 前端',
    color: 'from-blue-500 to-blue-600',
    count: 46,
    skills: [
      { name: 'frontend-design', desc: '高质量 UI' },
      { name: 'nextjs-expert', desc: 'Next.js 应用' },
      { name: 'ui-audit', desc: 'UI 自动审计' },
      { name: 'remotion-server', desc: '视频渲染' },
    ],
  },
  {
    icon: '🤖',
    title: '编程 Agent',
    color: 'from-purple-500 to-purple-600',
    count: 55,
    skills: [
      { name: 'coding-agent', desc: 'Claude/Codex' },
      { name: 'opencode-acp-control', desc: 'OpenCode' },
      { name: 'claude-team', desc: '多 Agent 协作' },
      { name: 'skill-creator', desc: '创建技能' },
    ],
  },
  {
    icon: '☁️',
    title: 'DevOps & 云',
    color: 'from-orange-500 to-orange-600',
    count: 144,
    skills: [
      { name: 'cloudflare', desc: 'Workers/KV/D1' },
      { name: 'docker-essentials', desc: '容器管理' },
      { name: 'kubernetes', desc: 'K8s 集群' },
      { name: 'coolify', desc: '自托管部署' },
    ],
  },
  {
    icon: '🔍',
    title: '搜索 & 研究',
    color: 'from-teal-500 to-teal-600',
    count: 148,
    skills: [
      { name: 'exa-plus', desc: '神经网络搜索' },
      { name: 'deepwiki', desc: 'GitHub 文档' },
      { name: 'technews', desc: '科技资讯' },
      { name: 'read-github', desc: '仓库检索' },
    ],
  },
  {
    icon: '📈',
    title: '营销 & 销售',
    color: 'from-pink-500 to-pink-600',
    count: 94,
    skills: [
      { name: 'seo-audit', desc: 'SEO 分析' },
      { name: 'social-content', desc: '社交媒体' },
      { name: 'email-sequence', desc: '邮件营销' },
      { name: 'copywriting', desc: '文案优化' },
    ],
  },
  {
    icon: '🧠',
    title: 'AI & 大模型',
    color: 'from-indigo-500 to-indigo-600',
    count: 159,
    skills: [
      { name: 'kimi-integration', desc: 'Kimi 集成' },
      { name: 'chatgpt-apps', desc: 'ChatGPT 应用' },
      { name: 'chromadb-memory', desc: '向量记忆' },
      { name: 'agentmemory', desc: '云端记忆' },
    ],
  },
  {
    icon: '🏠',
    title: '智能家居',
    color: 'from-green-500 to-green-600',
    count: 50,
    skills: [
      { name: 'homeassistant', desc: '家居自动化' },
      { name: 'adguard', desc: 'DNS 过滤' },
      { name: 'emporia-energy', desc: '能耗监控' },
      { name: 'trmnl', desc: '墨水屏' },
    ],
  },
  {
    icon: '🗣️',
    title: '语音 & 音频',
    color: 'from-red-500 to-red-600',
    count: 44,
    skills: [
      { name: 'aliyun-tts', desc: '阿里云语音' },
      { name: 'whisper', desc: '语音转文字' },
      { name: 'azure-ai-voicelive', desc: '实时语音' },
      { name: 'speech-to-text', desc: '音频转录' },
    ],
  },
  {
    icon: '💬',
    title: '通讯集成',
    color: 'from-cyan-500 to-cyan-600',
    count: 58,
    skills: [
      { name: 'slack', desc: 'Slack 控制' },
      { name: 'discord', desc: 'Discord 机器人' },
      { name: 'telegram', desc: 'Telegram API' },
      { name: 'smtp-send', desc: '发送邮件' },
    ],
  },
  {
    icon: '🏋️',
    title: '健康 & 健身',
    color: 'from-lime-500 to-lime-600',
    count: 35,
    skills: [
      { name: 'workout-logger', desc: '运动记录' },
      { name: 'fasting-tracker', desc: '断食追踪' },
      { name: 'weight-loss', desc: '体重管理' },
      { name: 'habit-tracker', desc: '习惯养成' },
    ],
  },
  {
    icon: '📝',
    title: '笔记 & 知识',
    color: 'from-amber-500 to-amber-600',
    count: 61,
    skills: [
      { name: 'logseq', desc: 'Logseq 集成' },
      { name: 'obsidian', desc: 'Obsidian 库' },
      { name: 'notion', desc: 'Notion API' },
      { name: 'newsletter-digest', desc: '文章摘要' },
    ],
  },
  {
    icon: '🎮',
    title: '游戏',
    color: 'from-violet-500 to-violet-600',
    count: 7,
    skills: [
      { name: 'dnd', desc: 'D&D 工具包' },
      { name: 'moltpet', desc: 'AI 宠物' },
      { name: 'bot-bowl-party', desc: '机器人派对' },
      { name: 'winamp', desc: '音乐播放器' },
    ],
  },
];

export default function Skills({ locale, dict }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isZh = locale === 'zh';
  const categories = isZh ? featuredSkillsZh : featuredSkillsEn;

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
    <section id="skills" ref={sectionRef} className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-semibold text-primary">
              {isZh ? '5,400+ 社区技能' : '5,400+ Community Skills'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isZh ? '精选技能推荐' : 'Featured Skills'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isZh 
              ? '来自 awesome-openclaw-skills 的精选技能，涵盖 31 个分类。一键安装，即刻增强你的 AI 助理能力。'
              : 'Curated skills from awesome-openclaw-skills across 31 categories. Install with one command to extend your AI assistant.'
            }
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="reveal card-hover bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100 hover:border-primary/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">{cat.title}</h3>
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {cat.count}
                </span>
              </div>
              <div className="space-y-1.5">
                {cat.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-between px-2.5 py-1.5 bg-white text-xs rounded-lg border border-gray-100 cursor-default"
                    title={skill.desc}
                  >
                    <span className="font-mono text-gray-700 truncate">
                      {skill.name}
                    </span>
                    <span className="text-gray-400 text-[10px] ml-2 hidden sm:inline">
                      {skill.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="reveal bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
            <div className="bg-white/60 rounded-lg p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-primary">5,400+</div>
              <div className="text-[10px] sm:text-sm text-gray-500">{isZh ? '总技能数' : 'Total Skills'}</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-accent">31</div>
              <div className="text-[10px] sm:text-sm text-gray-500">{isZh ? '分类数' : 'Categories'}</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-orange-500">159</div>
              <div className="text-[10px] sm:text-sm text-gray-500">{isZh ? 'AI & LLM' : 'AI & LLM'}</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-purple-500">148</div>
              <div className="text-[10px] sm:text-sm text-gray-500">{isZh ? '搜索研究' : 'Research'}</div>
            </div>
          </div>
        </div>

        {/* Install instruction */}
        <div className="reveal bg-gray-900 rounded-xl p-4 sm:p-6 mb-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">
                {isZh ? '一键安装任意技能' : 'Install any skill with one command'}
              </h4>
              <p className="text-gray-400 text-sm">
                {isZh ? '使用 ClawHub CLI 快速安装' : 'Quick install via ClawHub CLI'}
              </p>
            </div>
            <div className="overflow-x-auto">
              <code className="block bg-gray-800 text-green-400 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-mono">
                npx clawhub@latest install &lt;skill-name&gt;
              </code>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/VoltAgent/awesome-openclaw-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            {isZh ? '浏览完整列表' : 'Browse Full List'}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="https://clawhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            {isZh ? '访问 ClawHub' : 'Visit ClawHub'}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

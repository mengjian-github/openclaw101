export interface Resource {
  title: string;
  desc: string;
  url: string;
  source: string;
  sourceIcon?: string;
  lang: 'zh' | 'en';
  category: ResourceCategory;
  featured?: boolean;
  tags?: string[];
}

export type ResourceCategory =
  | 'official'
  | 'getting-started'
  | 'channel-integration'
  | 'skill-dev'
  | 'video'
  | 'deep-dive'
  | 'tools'
  | 'cloud-deploy';

export const categoryMeta: Record<
  ResourceCategory,
  { icon: string; label: string; labelEn: string; color: string }
> = {
  official: {
    icon: '📖',
    label: '官方资源',
    labelEn: 'Official',
    color: 'blue',
  },
  'getting-started': {
    icon: '🏁',
    label: '入门部署',
    labelEn: 'Getting Started',
    color: 'green',
  },
  'channel-integration': {
    icon: '📱',
    label: '平台接入',
    labelEn: 'Channels',
    color: 'purple',
  },
  'skill-dev': {
    icon: '🧩',
    label: '技能开发',
    labelEn: 'Skills',
    color: 'orange',
  },
  video: {
    icon: '📹',
    label: '视频教程',
    labelEn: 'Videos',
    color: 'red',
  },
  'deep-dive': {
    icon: '🔬',
    label: '深度文章',
    labelEn: 'Deep Dives',
    color: 'indigo',
  },
  tools: {
    icon: '🔧',
    label: '工具与插件',
    labelEn: 'Tools',
    color: 'teal',
  },
  'cloud-deploy': {
    icon: '☁️',
    label: '云平台部署',
    labelEn: 'Cloud Deploy',
    color: 'sky',
  },
};

export const resources: Resource[] = [
  // ============ Official Resources ============
  {
    title: 'OpenClaw 官方文档',
    desc: '完整的 API 参考、配置指南和架构说明',
    url: 'https://docs.openclaw.ai',
    source: 'OpenClaw',
    lang: 'en',
    category: 'official',
    featured: true,
    tags: ['文档', '必读'],
  },
  {
    title: 'GitHub — openclaw/openclaw',
    desc: '源代码、Issue 跟踪和社区贡献指南 (136k+ ⭐)',
    url: 'https://github.com/openclaw/openclaw',
    source: 'GitHub',
    lang: 'en',
    category: 'official',
    featured: true,
    tags: ['源码', '开源'],
  },
  {
    title: 'ClawHub 技能市场',
    desc: '发现、安装和分享 AI 技能插件',
    url: 'https://clawhub.com',
    source: 'ClawHub',
    lang: 'en',
    category: 'official',
    featured: true,
    tags: ['技能', '市场'],
  },
  {
    title: 'Getting Started — 官方入门指南',
    desc: '从零到第一次对话的最快路径',
    url: 'https://docs.openclaw.ai/start/getting-started',
    source: 'OpenClaw Docs',
    lang: 'en',
    category: 'official',
    tags: ['入门', '必读'],
  },
  {
    title: 'Discord 社区',
    desc: '与数万开发者和用户实时交流',
    url: 'https://discord.com/invite/clawd',
    source: 'Discord',
    lang: 'en',
    category: 'official',
    tags: ['社区', '讨论'],
  },
  {
    title: 'OpenClaw — Wikipedia',
    desc: '维基百科词条，了解 OpenClaw 的历史和影响',
    url: 'https://en.wikipedia.org/wiki/OpenClaw',
    source: 'Wikipedia',
    lang: 'en',
    category: 'official',
    tags: ['百科'],
  },
  {
    title: 'ClawHub Skills 仓库',
    desc: '所有已发布技能的源码归档',
    url: 'https://github.com/openclaw/skills',
    source: 'GitHub',
    lang: 'en',
    category: 'official',
    tags: ['技能', '源码'],
  },

  // ============ Cloud Deploy (云平台) ============
  {
    title: '阿里云 — 部署 OpenClaw 构建钉钉 AI 助理',
    desc: '轻量应用服务器一键部署，可视化配置面板接入钉钉',
    url: 'https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw',
    source: '阿里云',
    lang: 'zh',
    category: 'cloud-deploy',
    featured: true,
    tags: ['阿里云', '钉钉', '一键部署'],
  },
  {
    title: '阿里云 — AppFlow 集成企业微信',
    desc: '通过应用连接器将 OpenClaw 与企业微信集成，群聊直接交互',
    url: 'https://help.aliyun.com/zh/simple-application-server/use-cases/openclaw-enterprise-wechat-integration',
    source: '阿里云',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['阿里云', '企业微信', 'AppFlow'],
  },
  {
    title: '腾讯云 — OpenClaw 接入飞书保姆级教程',
    desc: 'Lighthouse 一键部署 + 飞书机器人全流程配置',
    url: 'https://cloud.tencent.com/developer/article/2625073',
    source: '腾讯云',
    lang: 'zh',
    category: 'cloud-deploy',
    featured: true,
    tags: ['腾讯云', '飞书', 'Lighthouse'],
  },
  {
    title: '腾讯云 — OpenClaw 接入企业微信完全指南',
    desc: '可视化配置面板，几步完成企业微信接入',
    url: 'https://cloud.tencent.com/developer/article/2625147',
    source: '腾讯云',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['腾讯云', '企业微信'],
  },
  {
    title: 'DigitalOcean — One-Click Deploy OpenClaw',
    desc: 'Learn how to deploy OpenClaw using DigitalOcean\'s 1-Click solution',
    url: 'https://www.digitalocean.com/community/tutorials/how-to-run-openclaw',
    source: 'DigitalOcean',
    lang: 'en',
    category: 'cloud-deploy',
    featured: true,
    tags: ['DigitalOcean', '一键部署'],
  },
  {
    title: 'Hostinger — How to Set Up OpenClaw on a Private Server',
    desc: 'Step-by-step guide for Hostinger VPS deployment',
    url: 'https://www.hostinger.com/tutorials/how-to-set-up-openclaw',
    source: 'Hostinger',
    lang: 'en',
    category: 'cloud-deploy',
    tags: ['Hostinger', 'VPS'],
  },

  // ============ Getting Started (入门部署) ============
  {
    title: 'OpenClaw 下载安装使用 — 详细图文教程',
    desc: '系统要求、多种安装方式对比、常见问题排查、Web/终端两种界面入门',
    url: 'https://apifox.com/apiskills/openclaw-installation-and-usage-guide/',
    source: 'Apifox',
    lang: 'zh',
    category: 'getting-started',
    featured: true,
    tags: ['图文', '新手友好'],
  },
  {
    title: '小白零基础教程 — 安装 OpenClaw',
    desc: '零基础也能看懂，Telegram 连接详细步骤',
    url: 'https://www.cnblogs.com/gyc567/p/19561281',
    source: '博客园',
    lang: 'zh',
    category: 'getting-started',
    tags: ['零基础', 'Telegram'],
  },
  {
    title: 'ClawdBot 火爆全网 — 手把手部署 + 钉钉操作',
    desc: '国内用户部署指南，包含踩坑经验和钉钉接入',
    url: 'https://www.53ai.com/news/OpenSourceLLM/2026012862704.html',
    source: '53AI',
    lang: 'zh',
    category: 'getting-started',
    tags: ['部署', '钉钉', '踩坑'],
  },
  {
    title: '怎么用上一夜爆火的 Clawdbot — 详细配置教程',
    desc: '实测踩了三个大坑，分享避坑指南',
    url: 'https://news.qq.com/rain/a/20260127A05EEN00',
    source: '腾讯新闻',
    lang: 'zh',
    category: 'getting-started',
    tags: ['避坑', '实测'],
  },
  {
    title: 'Openclaw 安装部署一文详解 + 国产平替方案',
    desc: '产品介绍、官网资源、本地/云端部署四维度全面解析',
    url: 'https://www.ai-indeed.com/article/15272.html',
    source: '实在智能',
    lang: 'zh',
    category: 'getting-started',
    tags: ['全面', '平替'],
  },
  {
    title: 'Codecademy — OpenClaw Installation to First Chat',
    desc: 'Structured tutorial from installation to your first conversation',
    url: 'https://www.codecademy.com/article/open-claw-tutorial-installation-to-first-chat-setup',
    source: 'Codecademy',
    lang: 'en',
    category: 'getting-started',
    tags: ['Codecademy', '结构化'],
  },
  {
    title: 'Full Tutorial: Set Up Your 24/7 AI Employee in 20 Minutes',
    desc: 'From zero to a running AI agent in 20 minutes flat',
    url: 'https://creatoreconomy.so/p/full-tutorial-set-up-your-247-ai-employee-clawd-molt',
    source: 'Creator Economy',
    lang: 'en',
    category: 'getting-started',
    tags: ['快速', '20分钟'],
  },
  {
    title: 'How to Get OpenClaw Set Up in an Afternoon',
    desc: 'Practical guide from the AI Product Playbook newsletter',
    url: 'https://amankhan1.substack.com/p/how-to-get-clawdbotmoltbotopenclaw',
    source: 'Substack',
    lang: 'en',
    category: 'getting-started',
    tags: ['实用'],
  },

  // ============ Channel Integration (平台接入) ============
  {
    title: '保姆级飞书对接教程 — 手把手搭建 AI 助手',
    desc: 'Linux 下安装 OpenClaw 并对接飞书机器人，打造专属智能助理',
    url: 'https://www.cnblogs.com/catchadmin/p/19556552',
    source: '博客园',
    lang: 'zh',
    category: 'channel-integration',
    featured: true,
    tags: ['飞书', '保姆级'],
  },
  {
    title: '飞书对接教程 — CSDN 版',
    desc: '详细的 OpenClaw 飞书机器人配置指南',
    url: 'https://blog.csdn.net/qq_31470439/article/details/157578441',
    source: 'CSDN',
    lang: 'zh',
    category: 'channel-integration',
    tags: ['飞书', 'CSDN'],
  },
  {
    title: 'MiniMax — Build AI Assistant on Telegram',
    desc: 'Connect MiniMax M2.1 to Telegram via OpenClaw',
    url: 'https://platform.minimax.io/docs/solutions/moltbot',
    source: 'MiniMax',
    lang: 'en',
    category: 'channel-integration',
    tags: ['Telegram', 'MiniMax'],
  },

  // ============ Skill Development ============
  {
    title: 'ClawHub 技能开发文档',
    desc: '如何创建、发布和管理自定义技能',
    url: 'https://docs.openclaw.ai/tools/clawhub',
    source: 'OpenClaw Docs',
    lang: 'en',
    category: 'skill-dev',
    featured: true,
    tags: ['技能', '开发'],
  },
  {
    title: 'OpenClaw Skills 在 Claude Code 中使用',
    desc: 'Reddit 社区分享：在 Claude Code 中运行 OpenClaw 的提示词和技能',
    url: 'https://www.reddit.com/r/ClaudeAI/comments/1qs49hw/',
    source: 'Reddit',
    lang: 'en',
    category: 'skill-dev',
    tags: ['Claude Code', 'Reddit'],
  },
  {
    title: 'ClawHub Skill Directory 源码',
    desc: 'ClawHub 的 GitHub 仓库，了解技能目录结构',
    url: 'https://github.com/openclaw/clawhub',
    source: 'GitHub',
    lang: 'en',
    category: 'skill-dev',
    tags: ['源码', '参考'],
  },

  // ============ Video Tutorials ============
  {
    title: 'OpenClaw 海量全玩法攻略 — 国内网络使用 + 本地部署',
    desc: 'B站详细视频教程，涵盖所有主要功能和配置',
    url: 'https://www.bilibili.com/video/BV1kH6nBFEPq/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    featured: true,
    tags: ['B站', '全面'],
  },

  // ============ Deep Dive Articles ============
  {
    title: 'IBM Think — OpenClaw: The Viral "Space Lobster" Agent',
    desc: 'IBM 深度分析 OpenClaw 的架构创新和垂直集成策略',
    url: 'https://www.ibm.com/think/news/clawdbot-ai-agent-testing-limits-vertical-integration',
    source: 'IBM',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['IBM', '深度分析'],
  },
  {
    title: 'DigitalOcean — What is OpenClaw?',
    desc: '全面介绍 OpenClaw 的功能、架构和使用场景',
    url: 'https://www.digitalocean.com/resources/articles/what-is-openclaw',
    source: 'DigitalOcean',
    lang: 'en',
    category: 'deep-dive',
    tags: ['概览', '入门'],
  },
  {
    title: 'Reddit — The Ultimate Guide to OpenClaw',
    desc: '从功能到安全风险的全面指南，不回避争议话题',
    url: 'https://www.reddit.com/r/ThinkingDeeplyAI/comments/1qsoq4h/',
    source: 'Reddit',
    lang: 'en',
    category: 'deep-dive',
    tags: ['Reddit', '全面', '安全'],
  },
  {
    title: 'NxCode — OpenClaw Complete Guide 2026',
    desc: 'Clawdbot → Moltbot → OpenClaw 完整演进指南',
    url: 'https://www.nxcode.io/resources/news/openclaw-complete-guide-2026',
    source: 'NxCode',
    lang: 'en',
    category: 'deep-dive',
    tags: ['历史', '完整'],
  },

  // ============ Tools & Plugins ============
  {
    title: 'ClawdBot 一键部署工具',
    desc: 'Mac/Linux 一键安装脚本，自动化环境配置',
    url: 'https://github.com/miaoxworld/ClawdBotInstaller',
    source: 'GitHub',
    lang: 'zh',
    category: 'tools',
    tags: ['一键', '脚本'],
  },
  {
    title: 'Clawdbot 中文文档',
    desc: '社区翻译的中文 README 和使用指南',
    url: 'https://github.com/bbylw/clawdbot-cn',
    source: 'GitHub',
    lang: 'zh',
    category: 'tools',
    tags: ['中文', '文档'],
  },

  // ============ Our Own ============
  {
    title: 'OpenClaw 7天入门指南 — 飞书知识库',
    desc: '从认识到进阶，每天一个主题的系统化学习路径',
    url: 'https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf',
    source: 'OpenClaw 101',
    lang: 'zh',
    category: 'getting-started',
    featured: true,
    tags: ['7天', '系统化', '飞书'],
  },
];

export function getResourcesByCategory(cat: ResourceCategory): Resource[] {
  return resources.filter((r) => r.category === cat);
}

export function getFeaturedResources(): Resource[] {
  return resources.filter((r) => r.featured);
}

export function getResourcesByLang(lang: 'zh' | 'en'): Resource[] {
  return resources.filter((r) => r.lang === lang);
}

export const stats = {
  totalResources: resources.length,
  totalCategories: Object.keys(categoryMeta).length,
  zhResources: resources.filter((r) => r.lang === 'zh').length,
  enResources: resources.filter((r) => r.lang === 'en').length,
};

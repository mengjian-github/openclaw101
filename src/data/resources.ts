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

  // ============ New — Week of 2026-02-03 ============

  // -- Cloud Deploy --
  {
    title: '阿里云开发者社区 — 2026年 OpenClaw 部署教程及常见问题解答',
    desc: '百炼模型配置、通义千问接入，含高频问题 FAQ 和完整 JSON 示例',
    url: 'https://developer.aliyun.com/article/1709761',
    source: '阿里云开发者社区',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['阿里云', '百炼', '通义千问', 'FAQ'],
  },

  // -- Getting Started --
  {
    title: 'DataCamp — OpenClaw Tutorial: Control Your PC from WhatsApp',
    desc: 'WhatsApp 远程控制电脑实操教程，涵盖 Skill 开发与 AgentSkills 标准',
    url: 'https://www.datacamp.com/tutorial/moltbot-clawdbot-tutorial',
    source: 'DataCamp',
    lang: 'en',
    category: 'getting-started',
    featured: true,
    tags: ['DataCamp', 'WhatsApp', 'Skill'],
  },
  {
    title: 'OpenClaw + Ollama 本地 AI Agent 搭建指南',
    desc: '全面的 Ollama 本地模型 + OpenClaw 集成指南，含模型选型对比和性能基准',
    url: 'https://codersera.com/blog/openclaw-ollama-setup-guide-run-local-ai-agents-2026',
    source: 'CoderSera',
    lang: 'en',
    category: 'getting-started',
    tags: ['Ollama', '本地模型', '性能对比'],
  },
  {
    title: '掘金 — OpenClaw 安装教程：从 0 搭建本地 AI 助手完整记录',
    desc: '掘金社区原创，从零到跑通的详实记录，含架构理解和踩坑笔记',
    url: 'https://juejin.cn/post/7600752623068102666',
    source: '掘金',
    lang: 'zh',
    category: 'getting-started',
    tags: ['掘金', '实战记录', '本地部署'],
  },
  {
    title: '至顶AI — OpenClaw 完整部署指南（全网最详细版）',
    desc: '从环境准备到飞书插件配置、十大经典应用场景推荐，亲测有效',
    url: 'https://news.qq.com/rain/a/20260202A04NT600',
    source: '腾讯新闻',
    lang: 'zh',
    category: 'getting-started',
    tags: ['至顶AI', '全面', '飞书插件'],
  },
  {
    title: 'CSDN — OpenClaw 史上最全保姆级安装配置教程',
    desc: '多平台接入、Docker 沙箱安全配置、Ollama 本地模型对接',
    url: 'https://blog.csdn.net/liwang0113/article/details/157579187',
    source: 'CSDN',
    lang: 'zh',
    category: 'getting-started',
    tags: ['CSDN', '保姆级', '安全配置'],
  },

  // -- Deep Dive --
  {
    title: 'DEV Community — Unleashing OpenClaw: Ultimate Guide for Developers',
    desc: '开发者视角深度解析：Gateway 架构、Brain 模型层、自定义 Skill 编写',
    url: 'https://dev.to/mechcloud_academy/unleashing-openclaw-the-ultimate-guide-to-local-ai-agents-for-developers-in-2026-3k0h',
    source: 'DEV Community',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['DEV', '架构', 'Skill开发'],
  },
  {
    title: 'The Hacker News — 341 个恶意 ClawHub 技能窃取用户数据',
    desc: 'Koi Security 审计发现 ClawHavoc 供应链攻击，OpenClaw 用户必读安全警示',
    url: 'https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html',
    source: 'The Hacker News',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['安全', 'ClawHub', '供应链攻击'],
  },
  {
    title: 'CNBC — From Clawdbot to OpenClaw: The AI Agent Generating Buzz and Fear',
    desc: 'CNBC 深度报道 OpenClaw 的崛起、145k+ GitHub Stars 背后的争议与风险',
    url: 'https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html',
    source: 'CNBC',
    lang: 'en',
    category: 'deep-dive',
    tags: ['CNBC', '媒体', '争议'],
  },
  {
    title: 'Medium — Stop Watching Install Tutorials, This Is How You Actually Tame It',
    desc: '跳过安装，直接讲如何驾驭 OpenClaw：工作流设计、提示词策略和安全边界',
    url: 'https://medium.com/activated-thinker/stop-watching-openclaw-install-tutorials-this-is-how-you-actually-tame-it-f3416f5d80bc',
    source: 'Medium',
    lang: 'en',
    category: 'deep-dive',
    tags: ['Medium', '进阶', '工作流'],
  },

  // -- Skill Dev --
  {
    title: 'Apiyi — OpenClaw 扩展生态全解析：50+ 官方集成',
    desc: '700+ Skills 库、12 大平台集成总览，ClawHub 技能商店使用指南',
    url: 'https://help.apiyi.com/en/openclaw-extensions-ecosystem-guide-en.html',
    source: 'Apiyi',
    lang: 'en',
    category: 'skill-dev',
    tags: ['生态', '集成', 'ClawHub'],
  },

  // -- Video --
  {
    title: 'YouTube — OpenClaw Tutorial For Beginners (2026)',
    desc: '英文入门视频教程，从安装到主要功能和自动化任务演示',
    url: 'https://www.youtube.com/watch?v=Gc4fyY0_8Rc',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    tags: ['YouTube', '入门', '英文'],
  },
  {
    title: 'B站 — OpenClaw 是什么？Skills/MCP/RAG/Memory/AI Agent 全解析',
    desc: '架构科普视频：拆解 OpenClaw 与技能系统、MCP 协议、RAG、记忆系统的关系',
    url: 'https://www.bilibili.com/video/BV1Bm6bB5EJ3/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    tags: ['B站', '架构', 'MCP', 'RAG'],
  },
  {
    title: 'B站 — Clawdbot 为什么能记住你说过的话？AI 记忆系统拆解',
    desc: '深入分析 OpenClaw 的记忆机制：日记文件、长期记忆、上下文窗口管理',
    url: 'https://www.bilibili.com/video/BV1fv61B4EQ5/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    tags: ['B站', '记忆系统', '深度'],
  },
  {
    title: 'B站 — OpenClaw 爆火 AI 自动化神器！本地部署教程 | 零度解说',
    desc: '零度解说出品，本地部署 + 聊天软件对接全流程演示',
    url: 'https://www.bilibili.com/video/BV1vz6nBmEA3/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    tags: ['B站', '零度解说', '部署'],
  },

  // ============ Major Media Coverage (2026-02) ============
  {
    title: 'Scientific American — OpenClaw is an open-source AI agent that runs your computer',
    desc: 'This open-source agent installs software, makes calls and runs your digital life—redefining what "digital assistants" are supposed to do',
    url: 'https://www.scientificamerican.com/article/moltbot-is-an-open-source-ai-agent-that-runs-your-computer/',
    source: 'Scientific American',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['科普', '主流媒体', '深度'],
  },
  {
    title: 'Cisco Blogs — Personal AI Agents like OpenClaw Are a Security Nightmare',
    desc: 'Security analysis of open-source personal AI agents: risks, attack vectors, and enterprise implications',
    url: 'https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare',
    source: 'Cisco',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['安全', '企业', '风险分析'],
  },
  {
    title: 'TechCrunch — OpenClaw\'s AI assistants are now building their own social network',
    desc: 'The viral personal AI assistant has a new shell — again. Coverage of the Clawdbot → Moltbot → OpenClaw evolution',
    url: 'https://techcrunch.com/2026/01/30/openclaws-ai-assistants-are-now-building-their-own-social-network/',
    source: 'TechCrunch',
    lang: 'en',
    category: 'deep-dive',
    tags: ['TechCrunch', 'AI社交', '品牌演变'],
  },
  {
    title: 'CNET — From Clawdbot to Moltbot to OpenClaw: The Wild Ride',
    desc: 'How OpenClaw routes messages to AI servers and the LLM selection flexibility (Claude, ChatGPT, Gemini)',
    url: 'https://www.cnet.com/tech/services-and-software/from-clawdbot-to-moltbot-to-openclaw/',
    source: 'CNET',
    lang: 'en',
    category: 'deep-dive',
    tags: ['CNET', '架构', 'LLM选择'],
  },
  {
    title: 'The Verge — OpenClaw: all the news about the trending AI agent',
    desc: 'Comprehensive news hub tracking the AI agent that "actually does things" — reminders, forms, flight check-ins, and more',
    url: 'https://www.theverge.com/news/872091/openclaw-moltbot-clawdbot-ai-agent-news',
    source: 'The Verge',
    lang: 'en',
    category: 'official',
    featured: true,
    tags: ['新闻聚合', '权威', 'The Verge'],
  },
  {
    title: 'The Guardian — Viral AI personal assistant seen as step change',
    desc: 'OpenClaw runs as a layer atop LLMs and can operate autonomously depending on permissions granted',
    url: 'https://www.theguardian.com/technology/2026/feb/02/openclaw-viral-ai-agent-personal-assistant-artificial-intelligence',
    source: 'The Guardian',
    lang: 'en',
    category: 'deep-dive',
    tags: ['The Guardian', '英国媒体', '分析'],
  },

  // ============ New — Week of 2026-02-04 ============

  // -- Cloud Deploy --
  {
    title: 'AWS 中国博客 — 基于 Mac 实例部署 OpenClaw',
    desc: '亚马逊云科技 Mac 实例部署指南，深度苹果生态自动化的最佳选择',
    url: 'https://aws.amazon.com/cn/blogs/china/openclaw-deployment-aws-mac/',
    source: 'AWS',
    lang: 'zh',
    category: 'cloud-deploy',
    featured: true,
    tags: ['AWS', 'Mac', '苹果生态'],
  },

  // -- Getting Started --
  {
    title: '菜鸟教程 — OpenClaw (Clawdbot) 完整教程',
    desc: '从 git clone 到 pnpm build，含 onboard 和 gateway:watch 开发模式',
    url: 'https://www.runoob.com/ai-agent/openclaw-clawdbot-tutorial.html',
    source: '菜鸟教程',
    lang: 'zh',
    category: 'getting-started',
    featured: true,
    tags: ['菜鸟教程', '源码编译', '开发模式'],
  },
  {
    title: '痴者工良 — 手把手教你部署 OpenClaw',
    desc: '博客园原创，openclaw configure 配置飞书全流程',
    url: 'https://www.cnblogs.com/whuanle/p/19558535',
    source: '博客园',
    lang: 'zh',
    category: 'getting-started',
    tags: ['博客园', '飞书', '配置向导'],
  },
  {
    title: 'DAMO 开发者矩阵 — Mac mini 接入国产大模型与飞书',
    desc: '命令行安装 + DeepSeek 配置 + 飞书插件全流程',
    url: 'https://damodev.csdn.net/697dff7b7c1d88441d90f0e4.html',
    source: 'CSDN DAMO',
    lang: 'zh',
    category: 'getting-started',
    tags: ['Mac mini', 'DeepSeek', '飞书插件'],
  },
  {
    title: 'Adven Boost — OpenClaw: 10 Steps to Set Up Your Personal AI Agent',
    desc: 'Structured 10-step playbook from installation to optimization',
    url: 'https://advenboost.com/en/openclaw-setup-10-steps-guide/',
    source: 'Adven Boost',
    lang: 'en',
    category: 'getting-started',
    tags: ['10步', '结构化', 'ROI分析'],
  },

  // -- Deep Dive --
  {
    title: '知乎 — 一文读懂 OpenClaw 分析与教程',
    desc: '完整目录结构解析：AGENTS.md / SOUL.md / MEMORY.md / Skills 全拆解',
    url: 'https://zhuanlan.zhihu.com/p/2000850539936765122',
    source: '知乎',
    lang: 'zh',
    category: 'deep-dive',
    featured: true,
    tags: ['知乎', '架构', '目录结构'],
  },
  {
    title: 'Turing College — The AI Assistant That Actually Does Things',
    desc: '深度解析 OpenClaw 三大核心能力：电脑控制、持久记忆、心跳机制',
    url: 'https://www.turingcollege.com/blog/openclaw',
    source: 'Turing College',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['深度', '心跳机制', '记忆系统'],
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

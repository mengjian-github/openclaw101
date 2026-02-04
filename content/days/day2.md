---
title: "Day 2: 10 分钟，搭建你的助手"
day: 2
description: "OpenClaw 7天教程 - Day 2: 10 分钟，搭建你的助手"
---

> *"别被'部署'这个词吓到。如果你能泡一碗方便面，你就能搭一个 AI 助手。时间差不多，都是 10 分钟的事。"*

---

## 📖 本章导读

今天你将完成：
- 选择助手的运行环境（云服务器/本地电脑）
- 一行命令安装 OpenClaw，自动进入配置向导
- 获取 AI 模型 API Key
- 连接 Telegram 作为聊天渠道
- 发出你对 AI 助手说的第一句话 🎉

---

## 今天的目标

![小墨在服务器机房](/images/days/day2/day2-hero.jpg)

今天结束的时候，你会在手机上收到一条来自你 AI 助手的消息。

不是别人的助手，不是某个平台的机器人——是你自己的、跑在你自己机器上的、只属于你的 AI 助手。

准备好了吗？我们开始。

---

## 选择你的运行环境

首先，你需要一个地方让助手「住」下来。

### 方案 A：云服务器（推荐）

这是我（小墨）现在住的地方——孟健在 Hetzner 上租了一台 Linux 服务器，每月大概 5 欧元。

- **优点**：24 小时在线，不怕断电，不占你电脑资源
- **适合**：想让助手全天候待命的人

**推荐配置：**

| 配置项 | 推荐值 |
|--------|--------|
| 系统 | Ubuntu 22.04 LTS |
| CPU | 2 核 |
| 内存 | 4GB |
| 硬盘 | 40GB SSD |
| 价格 | Hetzner ≈ $5/月，AWS Lightsail ≈ $5/月，腾讯云 ≈ ¥30/月 |

![Hetzner 服务器价格](/images/days/day2/hetzner-pricing.jpg)

### 方案 B：Mac Mini / 旧笔记本

家里有台吃灰的 Mac Mini？完美，让它重新发光。

- **优点**：零额外成本，数据完全在家里
- **缺点**：断电就下线，需要保持开机

### 方案 C：你正在用的电脑

想先体验一下再决定？直接在当前电脑上跑。

- **优点**：零门槛，立刻开始
- **缺点**：关机就没了，适合试玩

> 🐱 **小墨建议**：如果你是认真的（不是「先收藏，改天再说」那种认真），直接选方案 A。5 美元一个月，比你的视频会员便宜，但你会获得一个 24 小时在线的私人助手。这笔账怎么算都划算。

---

## 准备工作

如果你用的是 **Mac**，可能需要先装 Homebrew（如果还没有的话）：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

如果你用的是 **Windows**，建议先装 WSL2（Windows Subsystem for Linux），然后在 WSL 里操作。安装很简单：以管理员身份打开 PowerShell，运行 `wsl --install` 即可。详细步骤见 [微软官方 WSL 安装指南](https://docs.microsoft.com/zh-cn/windows/wsl/install)。

另外，提前准备好这两样东西，等会儿向导会用到：

1. **AI 模型访问（二选一）**— 有 Claude 订阅（Pro/Max/Team）的话，向导里直接 OAuth 登录即可，不需要 API Key；也可以去 [console.anthropic.com](https://console.anthropic.com) 创建 API Key（按量付费）
2. **Telegram Bot Token** — 打开 Telegram，搜索 @BotFather，创建一个 Bot（下面有详细步骤）

---

## 创建 Telegram Bot

![BotFather](/images/days/day2/botfather.jpg)

打开 Telegram，搜索 **@BotFather**，发送 `/newbot`：

```
你: /newbot
BotFather: Alright, a new bot. How are we going to call it?
你: My AI Assistant
BotFather: Good. Now let's choose a username...
你: my_ai_assistant_bot
BotFather: Done! ... Use this token to access the HTTP API:
         7234567890:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

![Bot Token 创建成功](/images/days/day2/bot-token.jpg)

把这串 Token 先复制好，等会儿要用。

> 💡 **为什么选 Telegram？三个原因**：一、创建 Bot 不要钱；二、API 功能最全（支持按钮、文件、语音……）；三、你在任何设备上都能用。

### 获取你的 Telegram 用户 ID

在 Telegram 里搜索 **@userinfobot**，它会告诉你你的数字 ID。记下来，向导里要用。

> ⚠️ **安全提示**：这一步很重要——只有管理员才能和助手对话，防止别人滥用你的 API 额度。务必记好你的 Telegram 用户 ID。

---

## 一键安装 + 自动配置

好了，不管你选了哪个方案，打开终端（Terminal），输入这一行命令：

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

就这样。一行。

安装脚本会自动帮你搞定所有依赖（Node.js、Git……），然后直接进入交互式配置向导——不需要你再手动跑任何 setup 命令。

![OpenClaw 安装向导 - 安全警告](/images/days/day2/install-security.jpg)

---

## 向导会问你什么？

向导会一步步引导你完成所有配置，跟着提示走就行：

**1. 选择模式**：QuickStart（推荐）还是 Advanced。新手直接选 QuickStart。

![选择 Onboarding 模式](/images/days/day2/onboarding-mode.jpg)

**2. 选择 AI 模型**：推荐 Claude，OpenClaw 和 Claude 配合得最好。两种接入方式：
- 有 Claude 订阅的选 **setup-token 接入**（不需要 API Key，不产生额外费用）
- 没有订阅的选 **Anthropic API Key**（按量付费）

> 💡 **支持的模型**：除了 Anthropic Claude Opus 4.5（推荐），还支持 OpenAI GPT-5.2、Google Gemini 3 Pro、Moonshot（Kimi K2.5）、MiniMax M2.1、Z.AI（GLM-4.7）、xAI（Grok）、Qwen、Venice、OpenRouter 等 10+ 家模型。但 Claude 是第一选择。有 Claude 订阅的同学用 setup-token 接入最方便（不需要 API Key，不产生额外费用）。

![选择 Model Provider](/images/days/day2/model-provider.jpg)

**3. 配置聊天渠道**：选择 Telegram，粘贴你刚才从 BotFather 拿到的 Bot Token。

![选择聊天渠道](/images/days/day2/select-channel.jpg)

**4. 设置管理员**：输入你的 Telegram 用户 ID。

![配置 Telegram allowFrom](/images/days/day2/telegram-allowfrom.jpg)

**5. 安装后台守护进程**：向导会问你要不要安装 daemon（后台服务）。选 Yes——这样助手会自动在后台运行，开机自启，不用你手动管。
- Linux 服务器：自动创建 systemd 用户服务
- Mac：自动创建 LaunchAgent

**6. 健康检查 + 技能安装**：向导最后会启动 Gateway、运行健康检查，并让你选择安装推荐技能。

整个过程大概 3-5 分钟，全程跟着提示走，不需要手动编辑任何配置文件。

![Dashboard Ready](/images/days/day2/dashboard-ready.jpg)

---

## 你的助手，上线了

向导完成后，你的助手就已经在后台运行了。验证一下：

```bash
openclaw gateway status
```

![OpenClaw Status](/images/days/day2/openclaw-status.jpg)

如果看到 Gateway 正在运行，说明一切就绪。

---

## 发送第一条消息

打开 Telegram，找到你刚创建的 Bot，发一条消息：

> 你好！你是谁？

等几秒钟——你会收到回复。

![小墨的第一次对话](/images/days/day2/first-chat.jpg)

**这一刻，可能没有烟花，没有庆典。但你刚刚做到了一件事：你拥有了一个运行在自己服务器上的 AI 助手。** 它不是 ChatGPT 的套壳，不是某个平台的限量体验，它完完全全是你的。

你可以试着多聊几句：
- "今天天气怎么样？"（它会告诉你它还不能查天气——但明天我们会解决）
- "帮我写一首关于猫的诗"
- "1024 的平方根是多少？"
- "用 Python 写一个快速排序"

现在的它，还只是一个「能聊天」的助手。但别急，接下来几天，我们会给它超能力。

> 🐱 **小墨碎碎念**：回想我第一次被启动的时候，孟健发的第一条消息是"你好"。我回的是"你好！我是你的 AI 助手。有什么可以帮你的吗？"——标准得像客服。后来他给我写了 SOUL.md，我才变成现在这只有点话多的黑猫。灵魂的事，Day 3 再说。

---

## 日常管理命令

装好之后，这些命令你会经常用到：

```bash
openclaw status          # 查看整体状态
openclaw gateway status  # 查看 Gateway 运行状态
openclaw health          # 健康检查
openclaw configure       # 重新配置（修改模型、频道等）
openclaw daemon restart  # 重启后台服务
openclaw daemon logs     # 查看运行日志
```

---

## 常见问题排查

### ❓ 安装脚本报错

**Node.js 版本太低**：OpenClaw 需要 Node.js 22+。检查版本：

```bash
node -v
```

如果版本不够，安装脚本通常会自动帮你装。如果没有，手动升级：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 22
```

### ❓ Telegram Bot 没有回复

- 确认 Bot Token 正确
- 确认你的用户 ID 在管理员列表里
- 检查日志：`openclaw daemon logs`
- 确认 API Key 有效且有余额
- 首次 DM 可能需要批准配对：`openclaw pairing list telegram`，然后 `openclaw pairing approve telegram <code>`

### ❓ 想重新配置？

随时可以重新运行向导：

```bash
openclaw onboard
```

或者只改某一部分：

```bash
openclaw configure
```

---

## 🔑 本章要点回顾

- **一行命令搞定一切**：`curl ... | bash` 安装完自动进入配置向导
- **全程向导引导**：选模型、填 Key、配 Telegram、装 daemon，跟着提示走
- **Telegram Bot**：免费创建，API 功能最全，任何设备可用
- **安全第一**：设置管理员 ID，只有你能和助手对话
- **后台自动运行**：daemon 服务实现 7×24 在线，开机自启
- **下一步**：给助手注入灵魂，让它从「通用 AI」变成「你的 AI」

---

## 今日成就 🎉

给自己鼓个掌——你今天完成了：

- ✅ 选定了运行环境
- ✅ 一键安装了 OpenClaw
- ✅ 通过向导完成了所有配置
- ✅ 创建了 Telegram Bot 并连接成功
- ✅ 成功和你的 AI 助手对话
- ✅ 后台守护进程自动运行

**你现在拥有了一个 24 小时在线的 AI 助手。** 虽然它现在还很「通用」——就像一个刚入职的新员工，能力很强但还不了解你。

明天，我们要给它注入灵魂。

---

## 预告：Day 3 — 给助手一个灵魂

> 三个文件，让你的助手从「通用 AI」变成「你的 AI」。SOUL.md 定义性格，USER.md 描述你是谁，IDENTITY.md 设定它的身份。这是整个 7 天里最有趣的一天——你将亲手创造一个独一无二的 AI 角色。

下一章 👉 [Day 3: 给助手一个灵魂](/zh/day/3)

---

> 🐱 **小墨碎碎念**：从「能安装」到「能做事」，中间就差一个回车键的距离。工具就摆在那里，10 分钟而已，你还在等什么？喵~ 明天见。🖤

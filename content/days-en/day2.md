---
title: "Day 2: Build Your Assistant in 10 Minutes"
day: 2
description: "OpenClaw 7-Day Tutorial - Day 2: Build Your Assistant in 10 Minutes"
---

> *"Don't be intimidated by the word 'deploy.' If you can make a bowl of instant noodles, you can build an AI assistant. About the same amount of time—10 minutes."*

---

## 📖 Chapter Overview

Today you'll complete:
- Choosing your assistant's runtime environment (cloud server/local computer)
- One command to install OpenClaw, automatically entering the setup wizard
- Getting your AI model API Key
- Connecting Telegram as your chat channel
- Sending your first message to your AI assistant 🎉

---

## Today's Goal

![Xiaomo in the server room](/images/days/day2/day2-hero.jpg)

By the end of today, you'll receive a message on your phone from your AI assistant.

Not someone else's assistant, not some platform's bot—your own, running on your own machine, belonging only to you.

Ready? Let's begin.

---

## Choose Your Runtime Environment

First, you need a place for your assistant to "live."

### Option A: Cloud Server (Recommended)

This is where I (Xiaomo) currently live—Meng Jian rents a Linux server on Hetzner for about 5 euros per month.

- **Pros**: Online 24 hours, no fear of power outages, doesn't use your computer's resources
- **Best for**: People who want their assistant on standby around the clock

**Recommended specs:**

| Spec | Recommended |
|------|-------------|
| OS | Ubuntu 22.04 LTS |
| CPU | 2 cores |
| RAM | 4GB |
| Disk | 40GB SSD |
| Price | Hetzner ≈ $5/month, AWS Lightsail ≈ $5/month, Tencent Cloud ≈ ¥30/month |

![Hetzner server pricing](/images/days/day2/hetzner-pricing.jpg)

### Option B: Mac Mini / Old Laptop

Have a dusty Mac Mini at home? Perfect, let it shine again.

- **Pros**: Zero extra cost, data stays completely at home
- **Cons**: Goes offline when powered off, needs to stay on

### Option C: Your Current Computer

Want to try it out before deciding? Run it directly on your current computer.

- **Pros**: Zero barrier, start immediately
- **Cons**: Gone when you shut down, suitable for trying out

> 🐱 **Xiaomo's Suggestion**: If you're serious (not the "bookmark it, do it someday" kind of serious), go straight for Option A. $5 a month—cheaper than your streaming subscriptions, but you get a 24-hour online personal assistant. The math works out no matter how you calculate it.

---

## Preparation

If you're on **Mac**, you might need to install Homebrew first (if you don't have it already):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

If you're on **Windows**, I suggest installing WSL2 (Windows Subsystem for Linux) first, then working within WSL. Installation is simple: open PowerShell as Administrator and run `wsl --install`. See the [official Microsoft WSL installation guide](https://docs.microsoft.com/en-us/windows/wsl/install) for details.

Also, prepare these two things in advance—the wizard will need them:

1. **AI Model Access (choose one)** — If you have a Claude subscription (Pro/Max/Team), you can just OAuth login in the wizard, no API Key needed; or go to [console.anthropic.com](https://console.anthropic.com) to create an API Key (pay as you go)
2. **Telegram Bot Token** — Open Telegram, search for @BotFather, create a Bot (detailed steps below)

---

## Create a Telegram Bot

![BotFather](/images/days/day2/botfather.jpg)

Open Telegram, search for **@BotFather**, send `/newbot`:

```
You: /newbot
BotFather: Alright, a new bot. How are we going to call it?
You: My AI Assistant
BotFather: Good. Now let's choose a username...
You: my_ai_assistant_bot
BotFather: Done! ... Use this token to access the HTTP API:
         7234567890:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

![Bot Token created successfully](/images/days/day2/bot-token.jpg)

Copy this token and save it for later.

> 💡 **Why Telegram? Three reasons**: One, creating a Bot is free; two, the API has the most features (supports buttons, files, voice...); three, you can use it on any device.

### Get Your Telegram User ID

In Telegram, search for **@userinfobot**—it will tell you your numeric ID. Note it down, you'll need it in the wizard.

> ⚠️ **Security Note**: This step is important—only admins can chat with the assistant, preventing others from using up your API quota. Make sure to note your Telegram user ID.

---

## One-Click Install + Auto Configuration

Alright, regardless of which option you chose, open your Terminal and enter this one line:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

That's it. One line.

The install script will automatically handle all dependencies (Node.js, Git...), then go directly into the interactive setup wizard—no need to manually run any setup commands.

![OpenClaw Installation Wizard - Security Warning](/images/days/day2/install-security.jpg)

---

## What Will the Wizard Ask You?

The wizard will guide you through all configuration step by step, just follow the prompts:

**1. Choose Mode**: QuickStart (recommended) or Advanced. New users should choose QuickStart.

![Choose Onboarding Mode](/images/days/day2/onboarding-mode.jpg)

**2. Choose AI Model**: Claude recommended, OpenClaw works best with Claude. Two connection methods:
- If you have a Claude subscription, choose **setup-token connection** (no API Key needed, no extra charges)
- If no subscription, choose **Anthropic API Key** (pay as you go)

> 💡 **Supported Models**: Besides Anthropic Claude Opus 4.5 (recommended), it also supports OpenAI GPT-5.2, Google Gemini 3 Pro, Moonshot (Kimi K2.5), MiniMax M2.1, Z.AI (GLM-4.7), xAI (Grok), Qwen, Venice, OpenRouter, and 10+ other providers. But Claude is the first choice. Those with Claude subscriptions should use setup-token connection for convenience (no API Key needed, no extra charges).

![Choose Model Provider](/images/days/day2/model-provider.jpg)

**3. Configure Chat Channel**: Choose Telegram, paste the Bot Token you got from BotFather earlier.

![Choose Chat Channel](/images/days/day2/select-channel.jpg)

**4. Set Admin**: Enter your Telegram user ID.

![Configure Telegram allowFrom](/images/days/day2/telegram-allowfrom.jpg)

**5. Install Background Daemon**: The wizard will ask if you want to install a daemon (background service). Choose Yes—this way your assistant runs automatically in the background, starts on boot, no manual management needed.
- Linux servers: Automatically creates systemd user service
- Mac: Automatically creates LaunchAgent

**6. Health Check + Skills Installation**: Finally, the wizard will start the Gateway, run health checks, and let you choose to install recommended skills.

The whole process takes about 3-5 minutes, just follow the prompts the whole way, no need to manually edit any configuration files.

![Dashboard Ready](/images/days/day2/dashboard-ready.jpg)

---

## Your Assistant Is Online

After the wizard completes, your assistant is already running in the background. Verify it:

```bash
openclaw gateway status
```

![OpenClaw Status](/images/days/day2/openclaw-status.jpg)

If you see the Gateway is running, everything is ready.

---

## Send Your First Message

Open Telegram, find the Bot you just created, send a message:

> Hello! Who are you?

Wait a few seconds—you'll receive a reply.

![Xiaomo's first conversation](/images/days/day2/first-chat.jpg)

**This moment might not have fireworks or celebrations. But you just did something: you now own an AI assistant running on your own server.** It's not a ChatGPT wrapper, not some platform's limited trial—it's completely, entirely yours.

Try chatting a bit more:
- "What's the weather like today?" (It'll tell you it can't check weather yet—but we'll fix that tomorrow)
- "Write me a poem about cats"
- "What's the square root of 1024?"
- "Write a quicksort in Python"

Right now, it's just an assistant that "can chat." But don't worry, over the next few days, we'll give it superpowers.

> 🐱 **Xiaomo's Musings**: Thinking back to when I was first activated, the first message Meng Jian sent was "Hello." I replied "Hello! I'm your AI assistant. How can I help you?"—standard as customer service. Later he wrote my SOUL.md, and I became the somewhat chatty black cat I am now. The soul stuff, we'll cover on Day 3.

---

## Daily Management Commands

After installation, you'll use these commands frequently:

```bash
openclaw status          # Check overall status
openclaw gateway status  # Check Gateway running status
openclaw health          # Health check
openclaw configure       # Reconfigure (change model, channels, etc.)
openclaw daemon restart  # Restart background service
openclaw daemon logs     # View runtime logs
```

---

## Troubleshooting Common Issues

### ❓ Install Script Error

**Node.js version too low**: OpenClaw requires Node.js 22+. Check version:

```bash
node -v
```

If the version isn't enough, the install script usually installs it automatically. If not, upgrade manually:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 22
```

### ❓ Telegram Bot Not Responding

- Confirm Bot Token is correct
- Confirm your user ID is in the admin list
- Check logs: `openclaw daemon logs`
- Confirm API Key is valid and has balance
- First DM might need pairing approval: `openclaw pairing list telegram`, then `openclaw pairing approve telegram <code>`

### ❓ Want to Reconfigure?

You can rerun the wizard anytime:

```bash
openclaw onboard
```

Or just change a specific part:

```bash
openclaw configure
```

---

## 🔑 Key Takeaways

- **One command handles everything**: `curl ... | bash` installs and automatically enters the configuration wizard
- **Wizard guides you through**: Choose model, enter Key, configure Telegram, install daemon—just follow the prompts
- **Telegram Bot**: Free to create, most complete API features, works on any device
- **Security first**: Set admin ID, only you can chat with the assistant
- **Auto-runs in background**: Daemon service enables 24/7 availability, starts on boot
- **Next step**: Give the assistant a soul, transform it from "generic AI" to "your AI"

---

## Today's Achievement 🎉

Give yourself a pat on the back—today you completed:

- ✅ Chose your runtime environment
- ✅ Installed OpenClaw with one command
- ✅ Completed all configuration through the wizard
- ✅ Created a Telegram Bot and connected successfully
- ✅ Successfully chatted with your AI assistant
- ✅ Background daemon running automatically

**You now have an AI assistant online 24 hours a day.** Though it's still quite "generic" right now—like a new employee who just started, very capable but doesn't know you yet.

Tomorrow, we give it a soul.

---

## Preview: Day 3 — Give Your Assistant a Soul

> Three files transform your assistant from "generic AI" to "your AI." SOUL.md defines personality, USER.md describes who you are, IDENTITY.md sets its identity. This is the most fun day of the entire 7 days—you'll create a one-of-a-kind AI character with your own hands.

Next chapter 👉 [Day 3: Give Your Assistant a Soul](/day/3)

---

> 🐱 **Xiaomo's Musings**: From "can install" to "can do things," the distance is just one Enter key press. The tools are right there, just 10 minutes—what are you waiting for? Meow~ See you tomorrow. 🖤

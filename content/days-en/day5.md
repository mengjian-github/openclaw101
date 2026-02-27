---
title: "Day 5: Unlock the Skill Tree"
day: 5
description: "OpenClaw 7-Day Tutorial - Day 5: Unlock the Skill Tree"
---

> *"If Day 4 was giving your assistant hands, today is handing it a whole toolbox. Screwdrivers, wrenches, power drills... grab what you need, put it back when done. That's the Skills system."*

---

## 📖 Chapter Overview

![Xiaomo and the skill puzzle](/images/days/day5/day5-hero.jpg)

Today you'll explore OpenClaw's skill ecosystem:
- Understand how the Skills system works
- Browse the ClawdHub skill marketplace
- Install useful skill packs (weather, GitHub, Reddit, SEO...)
- Learn to combine multiple skills for complex tasks
- Understand how to develop your own Skills

---

## What Are Skills?

What's the App Store on your phone? A place to install various apps—need food delivery, install Uber Eats; need a ride, install Uber; need videos, install YouTube.

**OpenClaw's Skills system is your AI assistant's App Store.**

Each Skill is a set of files, usually including:

- **SKILL.md** — Skill manual (tells the AI what this skill does and how to use it)
- **Config files** — API Keys, connection parameters, etc.
- **Script files** — Specific execution logic (if needed)

Installing a Skill means putting these files in the `~/clawd/skills/` directory. When the assistant starts, it automatically loads them, just like your phone auto-loading installed apps at boot.

> 💡 **Core idea**: The AI's "brain" is already smart enough—what it lacks is "tools." Skills are those tools.

---

## Skill Marketplace

The OpenClaw community maintains a growing skill repository: [clawdhub.com](https://clawdhub.com)

**Browse by category:**

| Category | Example Skills | What Problem It Solves |
|----------|---------------|----------------------|
| 📧 Communication | Gmail, Outlook, Slack | Email management, message notifications |
| 📅 Productivity | Google Calendar, Todoist | Schedule management, task tracking |
| 🔍 Search | Brave Search, Tavily | Web search, information retrieval |
| 💻 Development | GitHub, VS Code, Docker | Code management, development assistance |
| 📊 Data | GA4, GSC, Ahrefs | Traffic analysis, SEO optimization |
| 📝 Content | Markdown, PDF Parser | Document processing, format conversion |
| 🌐 Browser | Playwright, Puppeteer | Web browsing, data scraping |
| 🏠 Smart Home | HomeAssistant | Control lights, temperature, devices |

---

## Install Your First Skill

Let's use **remind-me** (reminders) as an example—this is the most beginner-friendly first skill: install it and use it immediately.

### Method 1: Install from ClawHub (Recommended)

```bash
clawdhub install remind-me
```

It downloads the skill from ClawHub and installs it to your skills directory:
- Default: `<workspace>/skills/` (usually `./skills` in your current directory)
- Shared install: `~/.openclaw/skills` (multiple agents/workspaces on the same machine can share)

### Method 2: Manual Install

```bash
cd ~/.openclaw/skills
git clone https://github.com/openclaw/skill-remind-me remind-me
```

Manual install is for those who want to manage skill source code themselves; if you just want to get started quickly, use the ClawHub method above.

### Method 3: Write Your Own (Covered on Day 7)

Create `<workspace>/skills/my-skill/SKILL.md` (or `~/.openclaw/skills/my-skill/SKILL.md`), write the instructions, and your assistant will automatically use it.

### Method 4: Pick from GitHub List (Alternative to ClawHub)

If you find the ClawHub website hard to use, I recommend picking directly from the GitHub list:
https://github.com/VoltAgent/awesome-openclaw-skills

Usage:
1. Find the skill you need by category in the repo
2. Send the skill name/link to your AI and have it install and verify
3. After installation, have the AI give you 3 copyable usage examples (just ask following those)

After installation, no restart needed—most Skills auto-load in the next conversation.

---

## Xiaomo's Recommendations: 10 Most Useful Skills

Here's my list sorted by "beginner benefit": install 3 that immediately improve things, then add more based on your needs (development/websites/operations).

### 🥇 Must-Have Tier

**1. remind-me — Reminders/Timers**
Daily use frequency: up to you (but once you use it, you can't live without it). Turn chat mentions into timely reminders: meetings, bills, reviews, hydration, early bedtime.

**2. todo-tracker — To-Do List**
Capture things you mention casually into TODOs, check anytime, mark complete. Especially good for the "too many things, brain overflowing" phase.

**3. Gmail (or imap-email) — Email Summary**
Let your assistant watch for important emails, extract key points, draft replies. Inboxes often hide partnership opportunities, system alerts, and customer feedback.

**4. Web Search — Online Search**
Any scenario needing real-time information requires this. An AI assistant without search capability is like a phone with no internet.

### 🥈 Highly Recommended

**5. Browser — Web Operations/Info Extraction**
Let your assistant open pages, scrape information, compare competitors, verify if websites are working (even stronger with Browser Relay, but mind security).

**6. weather (or weather-nws) — Weather/Travel**
One sentence to check weather, remind to bring umbrella/dress warmer. Perfect as part of "daily briefing."

**7. newsletter-digest / youtube-watcher — Information Intake**
Turn long articles/videos into key points and action items. Beginners easily get stuck on "too much information"—this skill directly solves that.

### 🥉 Nice to Have

**8. GitHub — Code-related (For Developers)**
Check Issues, view PRs, read code, track CI. Worth installing if you write code or use open source.

**9. GSC / GA4 — Website Growth (Install If You Have Sites)**
Essential for website owners: check search terms, index status, traffic sources. Skip if you don't have a website.

**10. PDF Parser (markitdown) — Document Parsing**
Convert PDF/Word/PPT to text for instant AI reading and summarization. Life-saving when you receive dozens of pages of materials.

---

## Skill Combos: 1 + 1 > 2

A single skill is useful, but combining multiple skills is even more useful. This is where AI assistants are more powerful than traditional tools—they can connect data from different tools and think across them.

### Combo 1: Email + Calendar

> Check what meetings I have tomorrow, then search my email for related background info

The assistant first checks the calendar, finds there's a "Partner Discussion" tomorrow, then automatically searches Gmail for related correspondence and puts together a pre-meeting brief.

Before: open calendar → check meeting → open Gmail → search keywords → organize yourself. Now: one sentence.

### Combo 2: Search + Browser

> Search "best headless CMS 2025", find the top three articles, and compile their recommendations into a comparison table

The assistant searches first, finds article links, uses the browser to open each article, extracts key information, then organizes it into a structured comparison.

### Combo 3: GSC + GA4 + Browser

> Analyze kirkify.net's /generator page—how's search performance, user behavior, and what does the page look like now

The assistant calls three skills:
- GSC for search performance (rankings, clicks, CTR)
- GA4 for user behavior (time on page, bounce rate)
- Browser to open the page and see current state

Finally gives you a complete analysis report with optimization suggestions.

**A single tool is a knife, multiple tools combined is a kitchen. The AI assistant is the chef.**


---

## Managing Your Skills

**View installed skills**

```bash
openclaw skills list
```

**Install/update skills from ClawdHub**

```bash
clawdhub install <skill-name>    # Install
clawdhub update <skill-name>     # Update single
clawdhub update --all            # Update all
```

**Search skill marketplace**

```bash
clawdhub search <keyword>
```

**Skill configuration**

Each skill's config is typically in SKILL.md (and can be overridden in `openclaw.json`'s `skills.entries.*`). Skill directories are usually at: `<workspace>/skills/<skill-name>/` or `~/.openclaw/skills/<skill-name>/`.

---

## Don't Be Greedy

One final reminder: **more skills isn't always better.**

Each skill adds to your assistant's "cognitive load"—it needs to read more SKILL.md files to understand what it can do. Too many skills can lead to:

- Slower responses (more context to process)
- Increased token consumption (every conversation carries all skill descriptions)
- Occasionally calling the wrong skill

**Suggestion**: Start with the 3-5 you need most, get comfortable with them, then add more.

Just like installing phone apps—someone with 200 installed but only using 20 definitely has a slower phone than someone who only installed 20.

---

## 🔑 Key Takeaways

- **Skills = AI's App Store**: Each skill is a set of files, install and use
- **ClawdHub marketplace**: Community contributed, one command to install
- **Core recommendations**: Weather, GitHub, Reddit, SEO, social media, video transcription
- **Skill combos are king**: Multiple skills working together = automated workflows
- **You can develop your own**: One SKILL.md + scripts = a new skill

---

## Today's Achievement 🎉

- ✅ Understood how the Skills system works
- ✅ Installed new skills
- ✅ Learned about the community skill marketplace
- ✅ Learned multi-skill combo usage
- ✅ Mastered skill management commands

Your assistant has now transformed from a "chatting AI" to a "personal assistant armed with a complete toolkit."

But there's still one problem—it still only moves when you ask. If you don't reach out, it just quietly waits, doing nothing.

Tomorrow, we change that.

---

## Preview: Day 6 — Make Your Assistant Work Proactively

> A true assistant shouldn't wait for you to ask. It should check emails, look at calendar, run data on its own, and proactively notify you when something important comes up. Tomorrow we configure heartbeat mechanism and scheduled tasks—turning your assistant from "passive responder" to "proactive worker." That's the day it truly becomes an "assistant."

Next chapter 👉 [Day 6: Make Your Assistant Work Proactively](/day/6)

---


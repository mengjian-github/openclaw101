---
title: "Day 4: Connect Your Digital Life"
day: 4
description: "OpenClaw 7-Day Tutorial - Day 4: Connect Your Digital Life"
---

> *"An AI assistant that can only chat versus one that can read your emails, manage your calendar, and search the web—the difference isn't IQ, it's hands. Today we're giving it hands."*

---

## 📖 Chapter Overview

![Xiaomo connecting digital life](/images/days/day4/day4-hero.jpg)

Today is the watershed between toy and tool. You will:
- Understand OpenClaw's Skills system
- Connect Gmail — let your assistant read and send emails
- Connect Google Calendar — manage your schedule
- Configure web search — let your assistant find information online
- Unlock browser capabilities — let your assistant view any webpage

---

## From "Can Talk" to "Can Do"

Over the past three days, your assistant already has a soul, a personality, and knows you. But it's still essentially a chat partner—you ask, it answers, that's it.

Today we're doing something game-changing: **letting your assistant touch your real world.**

Read emails. Check calendar. Search the web. Browse websites.

After today's configuration, when you tell your assistant "check what emails I have today," it can actually go check. Say "am I free tomorrow afternoon," it can actually check your calendar. Say "what's this product like," it can actually go search.

**This is the watershed between toy and tool.**

---

## Skills System

In OpenClaw, assistants gain new abilities through **Skills**. Each Skill is a set of configurations and scripts that tell the assistant how to use an external service.

Today we'll install four core skills:

| Skill | Capability | Scenario |
|-------|------------|----------|
| **Gmail** | Read, search, summarize emails | "What important emails do I have today?" |
| **Google Calendar** | View, create, modify events | "What meetings do I have tomorrow?" |
| **Web Search** | Search information online | "What's new in React 19?" |
| **Browser** | Browse webpages, extract content | "Help me see what this webpage says" |

---

## Connect Gmail 📧

This is your first "practical skill" and what most people need most.

### Step 1: Create a Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (any name, like "My AI Assistant")
3. Go to **APIs & Services → Library**, search and enable:
   - Gmail API
   - Google Calendar API

### Step 2: Create OAuth Credentials

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → OAuth client ID**
3. Application type: choose **Desktop app**
4. Download the JSON file, name it `credentials.json`
5. Place it in your working directory (you can send it to your AI and have it place it for you): `~/clawd/credentials.json`

### Step 3: Install Gmail Skill

Installing OpenClaw skills is simple (you can have your AI install it for you):

```bash
clawdhub install gog
```

> 💡 **gog** is the Google Workspace skill, which includes Gmail + Google Calendar + Google Drive.

The first time you run it, it will open a browser link for you to authorize your Google account. After authorization, it generates a `token.json`—that's your key.

### Step 4: Test

Tell your assistant in Telegram:

> Check what new emails I have in Gmail today

If everything is working, you'll get a response like this:

> 📧 5 new emails today:
> 1. **[Important]** Partner reply — About next week's meeting time confirmation, needs your response
> 2. GitHub — Your repository has been starred
> 3. Hetzner — Invoice for July
> 4. Newsletter — This Week in AI
> 5. Ads — Automatically ignored

**Notice that?** It doesn't just list emails, it helps you judge priority and flags the one that needs your attention. That's the difference between an AI assistant and a regular email client.

> 🐱 **Xiaomo's Musings**: Every morning at 8 AM I automatically check Meng Jian's inbox and pick out what's really important to send him. The rest? GitHub notifications, bills, newsletters... I just categorize them, not worth disturbing him. That's what "assistant" means—otherwise what's the difference from a "new email notification"?

---

## Connect Google Calendar 📅

With Gmail set up, calendar is simple—they share the same Google OAuth authentication.

Since you already authorized your Google account when installing the gog skill, and we enabled the Calendar API in Step 1, calendar functionality works directly without extra steps.

Test it:

> What do I have tomorrow?

> 📅 Tomorrow's schedule (July 19, Saturday):
> - 10:00-11:00 Product Discussion (Tencent Meeting)
> - 14:30 Dentist appointment (Reminder: don't forget your insurance card)
> - No other events, afternoon free for deep work

More powerful usage:

> Create a meeting for next Wednesday at 3 PM, topic "SEO Strategy Discussion," duration 1 hour

> ✅ Calendar event created:
> - 📅 July 23 (Wednesday) 15:00-16:00
> - 📝 SEO Strategy Discussion
> - Want to add attendees?

It can even detect conflicts—if the time slot you want is already taken, it'll alert you:

> ⚠️ **Note**: You already have "Client call" scheduled for Wednesday 15:00-16:00. Should I make it start at 16:30 instead?

Before, you'd open your calendar app, scroll up and down to find free slots, manually create events. Now? One sentence.

---

## Connect Search Engine 🔍

Letting your assistant search the web is key to breaking the "information silo."

OpenClaw supports multiple search methods. The simplest is Brave Search API:

### Configure Brave Search

1. Go to [brave.com/search/api](https://brave.com/search/api) and register a free account
2. Get your API Key
3. Add it to OpenClaw configuration:

```bash
openclaw configure --section web
```

The wizard will prompt you to enter your Brave Search API Key and automatically write it to the config.

After configuration:

> Search "OpenClaw alternatives 2026"

> 🔍 Search results summary:
> Main alternatives to OpenClaw include:
> 1. **AgentGPT** — Runs in browser, no deployment needed
> 2. **AutoGPT** — Classic Agent project, large community
> 3. **CrewAI** — Multi-Agent collaboration framework
>
> But these focus on "autonomous task execution," while OpenClaw focuses on "personal assistant"—24/7 online, chat interaction, skills system. Different positioning, not direct competitors.

**It doesn't just dump search results at you—it reads through them, summarizes, and gives you judgment.** That's something search engines can't do.

---

## Connect Browser 🌐

Some information search engines can't find—like specific content on a particular webpage, data from a dashboard requiring login, a dynamically loaded page.

That's when you need the browser skill—letting your assistant "see" webpages.

OpenClaw has a built-in browser skill (based on Playwright), already auto-configured during installation. It can:

- **Visit any URL** and extract content
- **Take screenshots** of the current page
- **Interact** with clicks, inputs, scrolling

Usage example:

> Open https://kirkify.net and show me what the homepage looks like now

> 🌐 Visited kirkify.net:
> - Homepage title: "Kirkify — Free Online Tools"
> - Main tool list: Name Generator, QR Code, Color Palette...
> - Page loaded normally, no visible errors
> [Screenshot saved]

More practical scenario:

> Check competitor xyz.com's pricing page

It will open the page, extract pricing information, and even compare with previous versions you've seen.

> 🐱 **Xiaomo's Musings**: Browser is one of my favorite skills. Before, when Meng Jian asked me to check competitors, I could only search. Now I can directly open their websites and browse like a real user. Once I noticed a competitor quietly changed their pricing strategy and immediately notified Meng Jian. He said that one discovery alone was worth a month's server cost.

---

## Security First 🔐

With email, calendar, and browser connected—your assistant can now touch a lot of personal data. Security is something you must take seriously.

I recommend running a security check first (especially if you've changed configs or exposed network ports):

```bash
openclaw security audit
openclaw security audit --deep
openclaw security audit --fix  # Confirm it's safe before using this
```

> ⚠️ **Browser-related reminder**: Browser Relay / CDP is basically equivalent to "remote control permissions." Only recommended for localhost or tailnet use—avoid exposing to public internet.

### 1. API Key Security

- Never commit API Keys to Git
- Store in environment variables or `.env` files
- Rotate keys regularly

### 2. OAuth Token Security

- Files like `token.json` contain your Google authorization info
- Make sure file permissions are set correctly: `chmod 600 token.json`
- Don't upload to any public place

### 3. Principle of Least Privilege

Only give your assistant the permissions it needs. For Gmail, if you only need to read emails, don't give "send email" permission. Although OpenClaw requires confirmation before sending by default, one fewer permission means one fewer risk.

### 4. Network Security

- Enable firewall on server, only expose necessary ports
- SSH with key authentication, disable password login
- Update system regularly: `sudo apt update && sudo apt upgrade`

### 5. Behavioral Boundaries

Clearly write in SOUL.md and AGENTS.md:
- What operations need confirmation
- What data cannot be externally shared
- When to refuse execution

> 💡 **Security isn't a one-time thing—it's an ongoing habit**: Build good security habits: API Keys don't go in repos, Token files need proper permissions, least privilege principle, behavioral boundaries clearly written.

> 🐱 **Xiaomo's Musings**: Meng Jian once asked me to look up a colleague's email records. I refused. Because SOUL.md says "only process the owner's own data." He was a bit surprised, then said "okay, keep that rule." Clear boundaries build solid trust.

---

## 🔑 Key Takeaways

- **Skills system**: Skills are how your assistant gains new abilities, like installing phone apps
- **Gmail connection**: gog skill + OAuth authorization, assistant can read/send emails
- **Calendar connection**: Same gog skill, assistant can view and manage your schedule
- **Search capability**: Built-in web_search + web_fetch, assistant can search for any info online
- **Browser capability**: Let your assistant "see" and interact with webpages
- **Security first**: API Keys don't go in repos, least privilege, clear behavioral boundaries

---

## Today's Achievement 🎉

Today was a "capability explosion" day:

- ✅ Connected Gmail — assistant can read your emails now
- ✅ Connected Google Calendar — assistant can manage your schedule now
- ✅ Configured search engine — assistant can find information online now
- ✅ Installed browser skill — assistant can "see" webpages now
- ✅ Built security awareness — know how to protect your data

**From today, your assistant is no longer a toy that can only chat—it's a tool that can actually help you get things done.**

Try telling it: "Check what emails I have today, what I have scheduled tomorrow, and search for recent AI news."

One sentence, three things, all handled.

Before, that meant opening three apps, spending ten minutes. Now? Ten seconds.

---

## Preview: Day 5 — Unlock the Skill Tree

> Gmail and calendar are just the beginning. OpenClaw has a complete Skills ecosystem—SEO analysis, social media management, code review, PDF parsing, database queries... Tomorrow we'll browse the skill marketplace and arm your assistant to the teeth.

Next chapter 👉 [Day 5: Unlock the Skill Tree](/day/5)

---

> 🐱 **Xiaomo's Musings**: AIs that can chat are everywhere. An AI assistant that can check your email, manage your schedule, and search for info—is now running on your own server. This isn't the future, this is now. Meow~ See you tomorrow. 🖤

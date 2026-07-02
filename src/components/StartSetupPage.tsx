'use client';

import { useState } from 'react';
import { Locale } from '@/lib/i18n';
import { trackEvent } from '@/lib/analytics';

interface StartSetupPageProps {
  locale: Locale;
}

const copy = {
  en: {
    badge: '10-minute first assistant onboarding',
    title: 'Build your first OpenClaw AI assistant in 10 minutes',
    subtitle:
      'The fastest path from zero to a working private assistant: pick where it runs, create a Telegram bot, run one install command, finish the wizard, then send the first message.',
    primaryCta: 'Open the full Day 2 setup guide',
    secondaryCta: 'Start the 7-day path',
    guideHref: '/day/2',
    pathHref: '/#getting-started',
    noteTitle: 'Answer first: what do I need before starting?',
    note:
      'A computer or small cloud server, one AI model login or API key, and a Telegram bot token. If you use Windows, OpenClaw can run on native Windows; WSL2 is optional, not required.',
    stepsTitle: 'The 10-minute route',
    steps: [
      ['runtime', '1', 'Choose where the assistant lives', 'Use native Windows for a quick trial, or a small Ubuntu cloud server for 24/7 availability. WSL2 is optional.'],
      ['access', '2', 'Prepare model and Telegram access', 'Use a Claude subscription OAuth flow when available, or prepare an API key. Create a bot with @BotFather and keep the token private.'],
      ['install', '3', 'Run one install command', 'The install script pulls dependencies and enters the interactive QuickStart wizard automatically.'],
      ['first-message', '4', 'Send the first message', 'After Telegram admin setup, message your bot and verify that your assistant answers from your own runtime.'],
    ],
    checklistTitle: 'First-run checklist',
    checklist: ['Runtime chosen', 'Model access ready', 'Telegram bot token stored privately', 'Install command copied', 'First reply verified'],
    troubleTitle: 'If the first reply fails',
    trouble: ['Check the bot token and admin allowlist', 'Confirm the model login/API key is still valid', 'Restart OpenClaw and read the terminal error before reinstalling'],
    commandLabel: 'Install command',
    command: 'curl -fsSL https://openclaw.ai/install.sh | bash',
    trust: ['Native Windows supported', 'QuickStart wizard', 'Telegram first channel', 'No platform lock-in'],
    safetyTitle: 'Do not paste secrets into public chats',
    safety:
      'Bot tokens and API keys should stay in your local terminal or server environment only. The tutorial masks all example tokens.',
  },
  zh: {
    badge: '10 分钟首次助手上手',
    title: '10 分钟搭建你的第一个 OpenClaw AI 助手',
    subtitle:
      '从零到可对话的最快路径：选运行环境，创建 Telegram Bot，执行一行安装命令，完成向导，然后发出第一条消息。',
    primaryCta: '打开第 2 天完整教程',
    secondaryCta: '回到 7 天路径',
    guideHref: '/zh/day/2',
    pathHref: '/zh#getting-started',
    noteTitle: '先给答案：开始前要准备什么？',
    note:
      '一台电脑或小云服务器、一个 AI 模型登录/API Key、一个 Telegram Bot Token。Windows 用户可以直接用原生 Windows，WSL2 是可选项，不是必装项。',
    stepsTitle: '10 分钟路线',
    steps: [
      ['runtime', '1', '选择助手住在哪里', '快速体验可用原生 Windows；想 24 小时在线，选一台小 Ubuntu 云服务器。WSL2 是可选项。'],
      ['access', '2', '准备模型和 Telegram', '有 Claude 订阅优先走 OAuth 登录；没有订阅再准备 API Key。用 @BotFather 创建 Bot，并保管好 token。'],
      ['install', '3', '执行一行安装命令', '安装脚本会处理依赖，并自动进入 QuickStart 交互式配置向导。'],
      ['first-message', '4', '发送第一条消息', '配置 Telegram 管理员后，给你的 Bot 发消息，确认助手从你的运行环境回复。'],
    ],
    checklistTitle: '首次运行检查清单',
    checklist: ['已选择运行环境', '模型访问已准备', 'Telegram Bot Token 已私密保存', '安装命令已复制', '第一条回复已验证'],
    troubleTitle: '如果第一条回复失败',
    trouble: ['检查 Bot Token 和管理员 allowlist', '确认模型登录/API Key 仍然有效', '先重启 OpenClaw 并阅读终端错误，不要盲目重装'],
    commandLabel: '安装命令',
    command: 'curl -fsSL https://openclaw.ai/install.sh | bash',
    trust: ['支持原生 Windows', 'QuickStart 向导', 'Telegram 首选通道', '不绑定平台'],
    safetyTitle: '不要把 secrets 发到公开聊天里',
    safety:
      'Bot Token 和 API Key 只应该留在你的本地终端或服务器环境里。教程里的 token 示例都已脱敏。',
  },
} as const;

export default function StartSetupPage({ locale }: StartSetupPageProps) {
  const t = copy[locale];
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [verificationHint, setVerificationHint] = useState(false);
  const completedCount = checkedItems.length;
  const canVerifyFirstReply = completedCount === t.checklist.length;

  const copyInstallCommand = async () => {
    try {
      await navigator.clipboard.writeText(t.command);
      trackEvent('install_command_copy', { locale, page: '/start', source: 'start_page' });
      trackEvent('copy_install_command', { locale, page: '/start', source: 'start_page' });
      trackEvent('first_run_install_copy', { locale, page: '/start', source: 'start_page' });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const toggleChecklistItem = (item: string) => {
    setCheckedItems((current) => {
      const nextChecked = !current.includes(item);
      const nextItems = nextChecked ? [...current, item] : current.filter((value) => value !== item);
      trackEvent('checklist_item_toggle', {
        locale,
        page: '/start',
        item,
        checked: nextChecked,
      });
      trackEvent('first_run_checklist_progress', {
        locale,
        page: '/start',
        item,
        checked: nextChecked,
        checked_count: nextItems.length,
        total_count: t.checklist.length,
      });
      return nextItems;
    });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="relative overflow-hidden px-4 py-24 sm:py-32">
        <div
          className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.24), rgba(16,185,129,0.10), transparent 68%)' }}
        />
        <div className="relative mx-auto max-w-5xl">
          <a href={locale === 'zh' ? '/zh' : '/'} className="mb-10 inline-flex text-sm text-white/60 hover:text-white">
            ← OpenClaw 101
          </a>
          <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
            {t.badge}
          </div>
          {locale === 'en' ? (
            <a href="/openclaw-tutorial" className="ml-0 mt-3 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:bg-blue-400/15 sm:ml-3 sm:mt-0">
              OpenClaw tutorial for beginners →
            </a>
          ) : null}
          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
            {t.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={t.guideHref}
              onClick={() => {
                trackEvent('start_cta_click', { locale, page: '/start', target: t.guideHref });
                trackEvent('day2_guide_click', { locale, page: '/start', target: t.guideHref });
              }}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-500"
            >
              {t.primaryCta} →
            </a>
            <a
              href={t.pathHref}
              onClick={() => trackEvent('start_cta_click', { locale, page: '/start', target: t.pathHref })}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-4 font-bold text-white/80 transition hover:border-white/35 hover:text-white"
            >
              {t.secondaryCta}
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {t.trust.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-2xl font-black">{t.stepsTitle}</h2>
            <div className="mt-6 space-y-4">
              {t.steps.map(([id, number, title, desc]) => (
                <article
                  key={id}
                  id={id}
                  className="scroll-mt-24 rounded-2xl border border-white/10 bg-gray-900/70 p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 font-black">
                      {number}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/62">{desc}</p>
                      <div className="mt-3 inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs font-bold text-blue-200">
                        {locale === 'zh' ? `第 ${number} 步` : `Step ${number}`}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <h2 className="text-xl font-black text-emerald-100">{t.noteTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-emerald-50/75">{t.note}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-sm font-semibold text-white/50">{t.commandLabel}</div>
              <pre className="mt-3 overflow-x-auto rounded-2xl bg-black/60 p-4 text-sm text-emerald-200"><code>{t.command}</code></pre>
              <button
                type="button"
                onClick={copyInstallCommand}
                className="mt-3 w-full rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm font-bold text-emerald-100 transition hover:bg-emerald-300/15"
              >
                {copied ? '✓ Copied' : locale === 'zh' ? '复制安装命令' : 'Copy install command'}
              </button>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-black">{t.checklistTitle}</h2>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-bold text-white/55">
                  {completedCount}/{t.checklist.length}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/68">
                {t.checklist.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => toggleChecklistItem(item)}
                      className="flex w-full items-center gap-2 rounded-lg px-2 py-1 text-left transition hover:bg-white/[0.04]"
                    >
                      <span className="text-emerald-300">{checkedItems.includes(item) ? '☑' : '□'}</span>
                      <span>{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  if (!canVerifyFirstReply) {
                    setVerificationHint(true);
                    trackEvent('first_run_verified_attempt_blocked', {
                      locale,
                      page: '/start',
                      source: 'checklist_button',
                      checked_count: completedCount,
                      total_count: t.checklist.length,
                    });
                    return;
                  }
                  setVerificationHint(false);
                  trackEvent('first_reply_verified_click', { locale, page: '/start', source: 'checklist_button' });
                  trackEvent('first_run_verified', { locale, page: '/start', source: 'checklist_button' });
                  trackEvent('start_setup_completed', { locale, page: '/start', source: 'checklist_button' });
                }}
                className={`mt-4 w-full rounded-xl px-4 py-3 text-sm font-bold text-white transition ${canVerifyFirstReply ? 'bg-blue-600 hover:bg-blue-500' : 'border border-blue-300/20 bg-blue-500/20 hover:bg-blue-500/30'}`}
              >
                {locale === 'zh' ? '我已经收到第一条回复' : 'I got the first reply'}
              </button>
              {!canVerifyFirstReply && verificationHint ? (
                <p className="mt-2 text-xs leading-5 text-blue-100/70">
                  {locale === 'zh'
                    ? '先勾完上面的 5 项，再标记第一条回复已验证，避免把未完成安装误记为完成。'
                    : 'Check all 5 items first, then mark the first reply as verified so incomplete installs are not counted as completed.'}
                </p>
              ) : null}
            </div>
            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-6">
              <h2 className="text-lg font-black text-amber-100">{t.safetyTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-amber-50/75">{t.safety}</p>
            </div>
            <div className="rounded-3xl border border-rose-300/20 bg-rose-300/10 p-6">
              <h2 className="text-lg font-black text-rose-100">{t.troubleTitle}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-50/75">
                {t.trouble.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

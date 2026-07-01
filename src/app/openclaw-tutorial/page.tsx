import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL, buildPageMetadata, getStructuredDataLanguage } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'OpenClaw Tutorial for Beginners',
  description:
    'OpenClaw tutorial for beginners: choose Windows or server, install OpenClaw, connect Telegram, verify the first reply, and keep learning.',
  locale: 'en',
  enPath: '/openclaw-tutorial',
  zhPath: '/zh/start',
});

const steps = [
  {
    id: 'runtime',
    title: 'Choose your runtime',
    body: 'Use native Windows for a local first run, or a small Ubuntu server when you want a 24/7 assistant. WSL2 is optional, not mandatory.',
    href: '/start#runtime',
  },
  {
    id: 'access',
    title: 'Prepare model and Telegram access',
    body: 'Sign in to a supported model provider or prepare an API key. Create a private Telegram bot with BotFather and keep the token out of public chats.',
    href: '/start#access',
  },
  {
    id: 'install',
    title: 'Install OpenClaw',
    body: 'Run the installer, complete the QuickStart wizard, and verify that your config is stored on your own computer or server.',
    href: '/start#install',
  },
  {
    id: 'first-message',
    title: 'Send the first assistant message',
    body: 'Message your bot, check that OpenClaw replies from your runtime, then continue through the 7-day guide to add skills, memory, and proactive workflows.',
    href: '/start#first-message',
  },
];

const faq = [
  {
    question: 'Is this OpenClaw tutorial for beginners?',
    answer:
      'Yes. Start with /start if you only want the fastest first-run checklist, or follow the 7-day path when you want installation, skills, integrations, and automation in order.',
  },
  {
    question: 'Do I need Linux or WSL2 to run OpenClaw?',
    answer:
      'No. OpenClaw can run on native Windows for a first local setup. A Linux server is useful when you want an assistant that stays online all day.',
  },
  {
    question: 'What should I prepare before installing OpenClaw?',
    answer:
      'Prepare one runtime machine, one model login or API key, and one Telegram bot token. Never paste tokens into public channels or shared screenshots.',
  },
  {
    question: 'Where should I go after the first reply works?',
    answer:
      'Continue to Day 3 through Day 7 to customize the assistant soul, connect tools, install skills, and build proactive workflows.',
  },
  {
    question: 'Is the Telegram bot required?',
    answer:
      'Telegram is the fastest first channel because BotFather makes setup predictable. After the first run, you can explore Feishu, DingTalk, email, browser automation, and other integrations.',
  },
  {
    question: 'Can I run OpenClaw on a cheap cloud server?',
    answer:
      'Yes. A small Ubuntu server is enough for a personal assistant that stays online. Start local first if you only want to test the workflow.',
  },
  {
    question: 'How do I know the setup really worked?',
    answer:
      'The first proof is a real reply from your Telegram bot, sent by the OpenClaw runtime you control. Do not count installation as complete until that reply works.',
  },
];

const beginnerSections = [
  {
    title: 'What OpenClaw is',
    body:
      'OpenClaw is a self-hosted AI assistant framework. Instead of only chatting in a web app, you run an assistant that can connect to tools, remember context, use skills, and work through channels such as Telegram.',
  },
  {
    title: 'Prerequisites before you install',
    body:
      'Prepare one runtime machine, one model login or API key, and one Telegram bot token. Keep tokens private and do not paste them into public chats, screenshots, or GitHub issues.',
  },
  {
    title: 'Windows or server: which should beginners choose?',
    body:
      'Choose native Windows when you want the fastest local test. Choose a small Ubuntu server when you want the assistant online all day. WSL2 is optional, not a blocker for the first run.',
  },
  {
    title: 'Safe copy-paste setup route',
    body:
      'Copy the install command from the checklist page, run it in your own terminal, follow the QuickStart prompts, then add the Telegram bot token and model access only inside your local or server environment.',
  },
  {
    title: 'Verify the first reply',
    body:
      'After configuration, message your Telegram bot. A successful first reply proves the runtime, bot token, model access, and admin allowlist are all wired correctly.',
  },
  {
    title: 'Troubleshooting the first run',
    body:
      'If the bot does not reply, check the token, admin allowlist, model login, terminal logs, and whether the OpenClaw process is still running before reinstalling.',
  },
  {
    title: 'Examples and use cases',
    body:
      'Once the first reply works, use OpenClaw for personal reminders, writing workflows, browser-backed research, file operations, daily summaries, and proactive automation.',
  },
  {
    title: 'Next steps after the tutorial',
    body:
      'Continue the 7-day path: define your assistant soul, connect your digital life, install useful skills, and turn repeated workflows into durable automations.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/openclaw-tutorial#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'OpenClaw 101', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'OpenClaw Tutorial', item: `${SITE_URL}/openclaw-tutorial` },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': `${SITE_URL}/openclaw-tutorial#howto`,
      name: 'OpenClaw Tutorial for Beginners',
      description: 'Install OpenClaw, connect Telegram, and send the first assistant message.',
      inLanguage: getStructuredDataLanguage('en'),
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: step.body,
        url: `${SITE_URL}${step.href}`,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/openclaw-tutorial#faq`,
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    {
      '@type': ['Article', 'TechArticle'],
      '@id': `${SITE_URL}/openclaw-tutorial#article`,
      headline: 'OpenClaw Tutorial for Beginners',
      description: 'Install OpenClaw, connect Telegram, verify the first assistant reply, and continue through the 7-day learning path.',
      datePublished: '2026-06-30',
      dateModified: '2026-07-01',
      inLanguage: getStructuredDataLanguage('en'),
      author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      mainEntityOfPage: `${SITE_URL}/openclaw-tutorial`,
    },
  ],
};

export default function OpenClawTutorialPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative overflow-hidden px-4 py-24 sm:py-32">
        <div
          className="absolute left-1/2 top-0 h-[460px] w-[780px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.24), rgba(16,185,129,0.12), transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-5xl">
          <Link href="/" className="mb-10 inline-flex text-sm text-white/60 hover:text-white">
            ← OpenClaw 101
          </Link>
          <div className="inline-flex rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200">
            Complete beginner tutorial · checked 2026-06-30
          </div>
          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            OpenClaw Tutorial for Beginners: Install, Connect Telegram, Send the First Message
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
            This OpenClaw tutorial is built for beginners who want the fastest reliable first run: choose a runtime, connect Telegram, install OpenClaw, and verify the first assistant reply before continuing into the 7-day course.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-500">
              Start the 10-minute checklist →
            </Link>
            <Link href="/#getting-started" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-4 font-bold text-white/80 transition hover:border-white/35 hover:text-white">
              Follow the 7-day path
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-5">
            <h2 className="text-2xl font-black">OpenClaw first-run tutorial path</h2>
            {steps.map((step, index) => (
              <article key={step.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-black">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-2 leading-7 text-white/68">{step.body}</p>
                    <Link href={step.href} className="mt-4 inline-flex text-sm font-bold text-blue-300 hover:text-blue-200">
                      Open checklist section →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <h2 className="text-xl font-black text-emerald-100">Fast answer</h2>
              <p className="mt-3 text-sm leading-6 text-emerald-50/75">
                If you already know your runtime and have a Telegram bot token, go directly to /start. If not, read this page first and choose the right path.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-lg font-black">Source freshness</h2>
              <p className="mt-3 text-sm leading-6 text-white/62">
                This route is aligned with the current OpenClaw101 first-run contract: native Windows is supported, WSL2 is optional, and the first proof is a real Telegram reply.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-black">Beginner guide: from zero to first reply</h2>
            <p className="mt-3 leading-7 text-white/62">
              This section expands the short checklist into a complete OpenClaw tutorial for beginners, with setup choices, safety notes, troubleshooting, and next steps.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {beginnerSections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h2 className="text-xl font-black text-white">{section.title}</h2>
                <p className="mt-3 leading-7 text-white/66">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <h2 className="text-2xl font-black">OpenClaw tutorial FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-white/10 bg-gray-900/70 p-5">
                <h3 className="font-bold text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

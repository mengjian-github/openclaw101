import type { Metadata } from 'next';
import Link from 'next/link';
import TutorialTrackedLink from '@/components/TutorialTrackedLink';
import TrackedOutboundLink from '@/components/TrackedOutboundLink';
import { SITE_NAME, SITE_URL, buildPageMetadata, getStructuredDataLanguage } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'OpenClaw Tutorial: Beginner Setup Guide',
  description:
    'OpenClaw tutorial for beginners: choose Windows or server, install OpenClaw, connect Telegram, verify the first assistant reply, and keep learning.',
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

const proofPoints = [
  'Native Windows is a valid first-run path; WSL2 is optional, not required.',
  'The first success signal is a real Telegram reply from the OpenClaw runtime you control.',
  'The /start checklist records install-copy, checklist progress, and first-run verification events.',
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

const decisionTable = [
  ['Fast local test', 'Native Windows', 'You only need a quick first reply and do not need 24/7 uptime yet.'],
  ['Always-on assistant', 'Small Ubuntu server', 'You want Telegram to answer while your laptop is closed.'],
  ['Team or advanced workflows', 'Server + monitored process', 'You plan to add scheduled tasks, browser automation, or shared workflows.'],
];

const serpAnswerBlocks = [
  {
    title: 'Fastest OpenClaw tutorial route',
    body: 'For most beginners, the fastest route is: prepare Telegram BotFather, choose native Windows or a small Ubuntu server, run the installer, finish QuickStart, then send one message to prove the assistant is alive.',
  },
  {
    title: 'What to verify before moving on',
    body: 'Do not count setup as done after the installer exits. The reliable proof is a Telegram reply from the runtime you control, plus a saved config that keeps tokens out of public chats and repositories.',
  },
  {
    title: 'When to use the full 7-day guide',
    body: 'Use the 7-day path after the first reply works. It adds soul design, tools, memory, skills, proactive jobs, and daily automation without making the first install harder than it needs to be.',
  },
];

const videoComparisonRows = [
  ['freeCodeCamp-style walkthroughs', 'Good for broad AI agent context', 'Use this page when you need the OpenClaw-specific first-run checklist and verification signals.'],
  ['YouTube setup videos', 'Good for watching terminal flow', 'Use this page when you need copyable steps, troubleshooting branches, and schema-friendly FAQ answers.'],
  ['Official docs', 'Best for reference depth', 'Use this page as the beginner bridge before you read every config option.'],
];

const conversionContractRows = [
  ['course_click', 'Course intent', 'Reader wants a guided setup path after reading the tutorial.'],
  ['community_click', 'Community help intent', 'Reader has a first-run problem and wants troubleshooting help.'],
  ['product_referral', 'Workflow/catalog intent', 'Reader is ready to browse adjacent skills, prompts, or workflow templates.'],
  ['first_run_verified', 'First-run success', 'Reader marked the first Telegram reply as verified on the checklist page.'],
];


const nextStepCards = [
  {
    title: 'Need the shortest route?',
    body: 'Use the /start checklist. It tracks install-copy, checklist progress, and first-reply verification as separate conversion signals.',
    href: '/start',
    label: 'Open /start checklist',
    intent: 'start_checklist',
  },
  {
    title: 'Prefer the full course?',
    body: 'Follow Day 1–Day 7 when you want soul design, tool access, skills, memory, and automation after setup.',
    href: '/#getting-started',
    label: 'View the 7-day path',
    intent: 'seven_day_path',
  },
  {
    title: 'Exploring the ecosystem?',
    body: 'Browse curated resources after your first reply works: official docs, GitHub, cloud guides, and community learning links.',
    href: '/resources',
    label: 'Browse resources',
    intent: 'resources',
  },
];

const leadProxyCards = [
  {
    title: 'Guided course path',
    body: 'For readers who want a complete first-assistant build with fewer dead ends.',
    href: 'https://xiaomo.dev/course/openclaw-ai-assistant/?utm_source=openclaw101&utm_medium=openclaw_tutorial&utm_campaign=lead_proxy',
    label: 'View course',
    eventName: 'course_click' as const,
  },
  {
    title: 'Community troubleshooting',
    body: 'Best after the reader has a first-run screenshot, token state, or terminal log.',
    href: 'https://discord.com/invite/clawd?utm_source=openclaw101&utm_medium=openclaw_tutorial&utm_campaign=lead_proxy',
    label: 'Open community',
    eventName: 'community_click' as const,
  },
  {
    title: 'Skill and workflow catalog',
    body: 'For readers who already got a first reply and now need reusable skills or workflows.',
    href: 'https://www.skill-cn.com?utm_source=openclaw101&utm_medium=openclaw_tutorial&utm_campaign=product_referral',
    label: 'Browse Skill Hub CN',
    eventName: 'product_referral' as const,
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
      name: 'OpenClaw Tutorial: Beginner Setup Guide',
      description: 'Install OpenClaw, connect Telegram, and send the first assistant message with a verified first-run checklist.',
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
      headline: 'OpenClaw Tutorial: Beginner Setup Guide',
      description: 'Install OpenClaw, connect Telegram, verify the first assistant reply, and continue through the 7-day learning path.',
      datePublished: '2026-06-30',
      dateModified: '2026-07-06',
      inLanguage: getStructuredDataLanguage('en'),
      author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      mainEntityOfPage: `${SITE_URL}/openclaw-tutorial`,
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/openclaw-tutorial#software`,
      name: 'OpenClaw',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Windows, Linux, macOS',
      isAccessibleForFree: true,
      url: 'https://openclaw.ai',
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
            Complete beginner tutorial · checked 2026-07-06
          </div>
          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            OpenClaw Tutorial: Install, Connect Telegram, Verify the First Assistant Reply
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
            This OpenClaw tutorial is built for beginners who want the fastest reliable first run: choose a runtime, connect Telegram, install OpenClaw, and verify the first assistant reply before continuing into the 7-day course.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <TutorialTrackedLink href="/start" source="hero_primary" intent="start_checklist" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-500">
              Start the 10-minute checklist →
            </TutorialTrackedLink>
            <TutorialTrackedLink href="/#getting-started" source="hero_secondary" intent="seven_day_path" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-4 font-bold text-white/80 transition hover:border-white/35 hover:text-white">
              Follow the 7-day path
            </TutorialTrackedLink>
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
                    <TutorialTrackedLink href={step.href} eventName="tutorial_step_click" source={`step_${step.id}`} intent="open_checklist_section" className="mt-4 inline-flex text-sm font-bold text-blue-300 hover:text-blue-200">
                      Open checklist section →
                    </TutorialTrackedLink>
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
            <div className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6">
              <h2 className="text-lg font-black text-blue-100">Why this OpenClaw tutorial is different</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-blue-50/75">
                {proofPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
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

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6 sm:p-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200/75">Snippet answer</div>
            <h2 className="mt-3 text-2xl font-black">OpenClaw tutorial answer block for beginners</h2>
            <p className="mt-3 leading-7 text-white/64">
              Google currently needs a clearer beginner answer for “OpenClaw tutorial”. These blocks summarize the setup path, verification proof, and when to continue into the longer guide.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {serpAnswerBlocks.map((block) => (
              <article key={block.title} className="rounded-2xl border border-white/10 bg-gray-950/55 p-5">
                <h3 className="text-lg font-black text-white">{block.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{block.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-2xl font-black">How this tutorial complements videos and docs</h2>
            <p className="mt-3 leading-7 text-white/62">
              The current SERP is dominated by broad tutorials and videos. OpenClaw101 should win the specific first-run job: choose a runtime, connect Telegram, copy one command, and verify the first reply.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              {videoComparisonRows.map(([source, strength, useThisPage]) => (
                <div key={source} className="grid gap-3 border-b border-white/10 p-4 last:border-b-0 md:grid-cols-[190px_1fr_1fr]">
                  <div className="text-sm font-black text-white">{source}</div>
                  <div className="text-sm leading-6 text-white/62">{strength}</div>
                  <div className="text-sm leading-6 text-emerald-100/75">{useThisPage}</div>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-xl font-black text-emerald-100">Internal links to reduce dead ends</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-emerald-50/75">
              <TutorialTrackedLink href="/day/2" source="comparison_rail" intent="day2_setup" className="block rounded-xl border border-emerald-300/15 bg-emerald-300/10 px-4 py-3 font-bold text-emerald-100 hover:bg-emerald-300/15">
                Day 2 setup guide →
              </TutorialTrackedLink>
              <TutorialTrackedLink href="/resources" source="comparison_rail" intent="resource_hub" className="block rounded-xl border border-emerald-300/15 bg-emerald-300/10 px-4 py-3 font-bold text-emerald-100 hover:bg-emerald-300/15">
                Resource hub →
              </TutorialTrackedLink>
              <TutorialTrackedLink href="/start#first-message" source="comparison_rail" intent="first_reply_check" className="block rounded-xl border border-emerald-300/15 bg-emerald-300/10 px-4 py-3 font-bold text-emerald-100 hover:bg-emerald-300/15">
                First reply checklist →
              </TutorialTrackedLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-2xl font-black">Which OpenClaw setup path should I choose?</h2>
            <p className="mt-3 leading-7 text-white/62">
              Beginners usually lose time by choosing a runtime before deciding what “success” means. Pick the smallest path that proves a real assistant reply, then upgrade only when you need uptime.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              {decisionTable.map(([goal, path, reason]) => (
                <div key={goal} className="grid gap-3 border-b border-white/10 p-4 last:border-b-0 md:grid-cols-[170px_170px_1fr]">
                  <div className="text-sm font-black text-white">{goal}</div>
                  <div className="text-sm font-bold text-emerald-200">{path}</div>
                  <div className="text-sm leading-6 text-white/62">{reason}</div>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6">
            <h2 className="text-xl font-black text-blue-100">Conversion signals now tracked</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-blue-50/75">
              <li>• Install command copied</li>
              <li>• Checklist progress and first-reply verification</li>
              <li>• Course, community, consulting, and product referral clicks</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-black">Choose your next step</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {nextStepCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-black text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{card.body}</p>
                <TutorialTrackedLink href={card.href} source="next_step_card" intent={card.intent} className="mt-5 inline-flex text-sm font-bold text-blue-300 hover:text-blue-200">
                  {card.label} →
                </TutorialTrackedLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6 sm:p-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200/75">Lead proxy, no paid action</div>
            <h2 className="mt-3 text-2xl font-black">If the OpenClaw tutorial worked, route the next intent</h2>
            <p className="mt-3 text-sm leading-6 text-white/62">
              These links do not trigger payment or public posting. They turn course interest, community help, and product-referral intent into measurable lead proxies for the next site review.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {leadProxyCards.map((card) => (
              <article key={card.href} className="rounded-2xl border border-white/10 bg-gray-950/55 p-5">
                <h3 className="text-lg font-black text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{card.body}</p>
                <TrackedOutboundLink eventName={card.eventName} source="openclaw_tutorial_lead_proxy" analyticsTarget={card.href} locale="en" href={card.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-bold text-emerald-200 hover:text-emerald-100">
                  {card.label} →
                </TrackedOutboundLink>
              </article>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-300/15 bg-gray-950/35">
            {conversionContractRows.map(([eventName, leadType, meaning]) => (
              <div key={eventName} className="grid gap-2 border-b border-emerald-300/10 p-4 last:border-b-0 md:grid-cols-[180px_170px_1fr]">
                <div className="font-mono text-xs text-emerald-100">{eventName}</div>
                <div className="text-sm font-bold text-white">{leadType}</div>
                <div className="text-sm leading-6 text-white/62">{meaning}</div>
              </div>
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

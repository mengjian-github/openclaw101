'use client';

import { trackEvent } from '@/lib/analytics';

const legacyLinks = [
  {
    title: 'OpenClaw tutorial for beginners',
    body: 'Install OpenClaw, connect Telegram, and verify the first assistant reply before going deeper.',
    href: '/openclaw-tutorial',
    intent: 'openclaw_tutorial',
  },
  {
    title: '10-minute first-run checklist',
    body: 'Copy the install command, choose Windows or server, and mark the first real reply only after the checklist is complete.',
    href: '/start',
    intent: 'start_checklist',
  },
  {
    title: 'Resource hub',
    body: 'Search official docs, cloud deployment guides, videos, and community references in one place.',
    href: '/resources',
    intent: 'resources_list',
  },
];

export default function LegacyJellyfishPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="relative overflow-hidden px-4 py-20 sm:py-28">
        <div
          className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.24), rgba(16,185,129,0.10), transparent 68%)' }}
        />
        <div className="relative mx-auto max-w-5xl">
          <a href="/" className="text-sm font-semibold text-white/55 transition hover:text-white">← OpenClaw 101</a>
          <div className="mt-10 inline-flex rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
            Legacy Jellyfish link recovery
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">You probably wanted the OpenClaw tutorial or resource hub</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
            The old Jellyfish entry no longer matches the current OpenClaw101 learning path. Choose a clear next step below instead of bouncing back to search.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {legacyLinks.map((link) => (
              <a
                key={link.intent}
                href={link.href}
                onClick={() => trackEvent('resource_recovery_click', {
                  locale: 'en',
                  page: '/jellyfish',
                  source: 'legacy_jellyfish_page',
                  target: link.href,
                  intent: link.intent,
                })}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-0.5 hover:border-blue-300/35 hover:bg-blue-400/10"
              >
                <h2 className="text-lg font-black text-white">{link.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/62">{link.body}</p>
                <div className="mt-5 text-sm font-bold text-blue-200">Open →</div>
              </a>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6 text-sm leading-6 text-emerald-50/75">
            Current review focus: lower quickback, keep resource recovery measurable, and route readers toward tutorial, checklist, or resources rather than a dead legacy page.
          </div>
        </div>
      </section>
    </main>
  );
}

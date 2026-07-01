import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Use',
  description: 'Terms of Use for OpenClaw 101: tutorial content, third-party links, no warranty, acceptable use, and contact information.',
  locale: 'en',
  enPath: '/terms',
  zhPath: '/terms',
});

const sections = [
  {
    title: 'Educational content only',
    body: 'OpenClaw 101 provides tutorials, resource links, and setup guidance. The content is for educational use and does not replace official OpenClaw documentation, provider documentation, legal advice, or security review.',
  },
  {
    title: 'No affiliation claim',
    body: 'OpenClaw 101 is an independent learning site. References to OpenClaw, cloud providers, GitHub, Telegram, model providers, and other third-party products are for identification and tutorial purposes only.',
  },
  {
    title: 'Your setup responsibility',
    body: 'You are responsible for your own runtime, model account, API keys, Telegram bot token, cloud server, costs, access control, backups, and compliance with the terms of the tools you connect.',
  },
  {
    title: 'Security and secrets',
    body: 'Never publish bot tokens, API keys, OAuth codes, server passwords, or private logs. If a tutorial step asks you to run a command, read it first and run it only in an environment you control.',
  },
  {
    title: 'Third-party resources',
    body: 'The site links to third-party tutorials, videos, cloud guides, documentation, and community pages. We do not control those resources and are not responsible for their content, availability, pricing, or security.',
  },
  {
    title: 'No warranty',
    body: 'The site is provided as-is. We try to keep guides accurate, but software, model providers, cloud platforms, and OpenClaw itself can change. We do not guarantee uninterrupted access or error-free content.',
  },
  {
    title: 'Acceptable use',
    body: 'Do not use OpenClaw 101 or linked materials to abuse platforms, bypass access controls, spam users, violate laws, or automate actions against third-party terms.',
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm font-semibold text-white/55 transition hover:text-white">← OpenClaw 101</Link>
          <p className="mt-10 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
            Effective July 1, 2026
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Terms of Use</h1>
          <p className="mt-5 text-lg leading-8 text-white/68">
            These terms govern your use of {SITE_NAME}, including tutorial pages, resource lists, links, and code snippets.
          </p>
          <div className="mt-10 space-y-5">
            {sections.map((section) => (
              <section key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h2 className="text-xl font-black">{section.title}</h2>
                <p className="mt-3 leading-7 text-white/66">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6 text-emerald-50/80">
            Contact: <a href="mailto:hello@openclaw101.dev" className="font-semibold text-emerald-100 underline">hello@openclaw101.dev</a>
            <br />Canonical URL: {SITE_URL}/terms
          </div>
        </div>
      </section>
    </main>
  );
}

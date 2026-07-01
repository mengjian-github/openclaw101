import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for OpenClaw 101: analytics, cookies, data use, third-party services, and user rights for the tutorial site.',
  locale: 'en',
  enPath: '/privacy',
  zhPath: '/privacy',
});

const sections = [
  {
    title: 'What this site is',
    body: 'OpenClaw 101 is a public tutorial and resource site. It provides setup guides, learning paths, and links to OpenClaw-related resources. It does not sell products, process payments, or host user accounts.',
  },
  {
    title: 'Information we collect',
    body: 'We may collect aggregate usage data such as page views, referrers, device/browser information, approximate location, clicks on tutorial links, code-copy actions, checklist interactions, and first-run completion events.',
  },
  {
    title: 'Analytics and cookies',
    body: 'The site uses analytics and measurement services including Plausible, Google Analytics, Microsoft Clarity, Ahrefs verification/analytics, Cloudflare, and Google AdSense scripts. These services may use cookies or similar technologies according to their own policies.',
  },
  {
    title: 'How we use data',
    body: 'We use aggregate data to understand which tutorials are useful, improve navigation, detect broken flows, measure first-run completion, and decide which pages need clearer examples.',
  },
  {
    title: 'Third-party links',
    body: 'The site links to OpenClaw, GitHub, cloud providers, documentation sites, community resources, and tutorial platforms. Visiting those sites is governed by their own terms and privacy policies.',
  },
  {
    title: 'Secrets and setup data',
    body: 'Do not paste Telegram bot tokens, model API keys, OAuth codes, or server credentials into public pages, comments, issues, or shared screenshots. The tutorial only shows masked examples and does not ask you to submit secrets to this site.',
  },
  {
    title: 'Your rights',
    body: 'If you want to ask about data removal or analytics opt-out options, contact us. You can also block analytics scripts with your browser settings or extensions.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm font-semibold text-white/55 transition hover:text-white">← OpenClaw 101</Link>
          <p className="mt-10 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100">
            Effective July 1, 2026
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-lg leading-8 text-white/68">
            This policy explains how {SITE_NAME} handles analytics, cookies, third-party services, and tutorial interaction data.
          </p>
          <div className="mt-10 space-y-5">
            {sections.map((section) => (
              <section key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h2 className="text-xl font-black">{section.title}</h2>
                <p className="mt-3 leading-7 text-white/66">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6 text-blue-50/80">
            Contact: <a href="mailto:hello@openclaw101.dev" className="font-semibold text-blue-100 underline">hello@openclaw101.dev</a>
            <br />Canonical URL: {SITE_URL}/privacy
          </div>
        </div>
      </section>
    </main>
  );
}

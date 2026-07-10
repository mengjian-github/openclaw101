import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Pricing Not Applicable | ${SITE_NAME}`,
  description: 'OpenClaw 101 is a free tutorial and resource site. There is no checkout or paid plan on this site.',
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

const facts = [
  ['Site scope', 'Free OpenClaw tutorial, setup checklist, 7-day guide, and curated resources.'],
  ['Payment status', 'No checkout, paid plan, subscription, order form, or billing account is available on OpenClaw 101.'],
  ['Cost readers may still have', 'Your own model API/subscription and the computer or server where you run OpenClaw.'],
  ['Paid gate', 'Site-review currently keeps paid acquisition and ad spend at NO_GO until stronger lead-proxy and search signals are available.'],
];

export default function PricingNotApplicablePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm font-semibold text-white/55 transition hover:text-white">← OpenClaw 101</Link>
          <p className="mt-10 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
            Free tutorial site · no checkout
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">OpenClaw 101 pricing is not applicable</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
            OpenClaw 101 does not sell a plan or collect payment. This page exists to prevent dead-end visits from legacy pricing links and to clarify the current free tutorial scope.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {facts.map(([title, body]) => (
              <section key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h2 className="text-lg font-black text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/64">{body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/openclaw-tutorial" className="inline-flex justify-center rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-500">
              Read the OpenClaw tutorial →
            </Link>
            <Link href="/resources" className="inline-flex justify-center rounded-xl border border-white/15 px-5 py-3 font-bold text-white/80 transition hover:border-white/35 hover:text-white">
              Browse free resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

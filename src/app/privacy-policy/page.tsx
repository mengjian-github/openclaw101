import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Privacy Policy Alias | ${SITE_NAME}`,
  description: 'Compatibility alias for the OpenClaw 101 privacy policy. The canonical policy lives at /privacy.',
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyAliasPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <Link href="/" className="text-sm font-semibold text-white/55 transition hover:text-white">← OpenClaw 101</Link>
          <p className="mt-10 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100">
            Compatibility route · canonical policy
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-lg leading-8 text-white/68">
            This path exists so old links and crawlers do not hit a 404. The canonical OpenClaw 101 privacy policy is maintained at <Link href="/privacy" className="font-semibold text-blue-200 underline">/privacy</Link>.
          </p>
          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-sm leading-6 text-blue-50/80">
            The policy covers analytics, cookies, third-party services, tutorial interaction events, and user rights for this free tutorial site. No payment, checkout, or user-account data is collected by OpenClaw 101.
          </div>
          <Link href="/privacy" className="mt-8 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-500">
            Open canonical privacy policy →
          </Link>
        </div>
      </section>
    </main>
  );
}

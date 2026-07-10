import type { Metadata } from 'next';
import LegacyJellyfishPage from '@/components/LegacyJellyfishPage';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Legacy Jellyfish Link Recovery | ${SITE_NAME}`,
  description: 'Legacy Jellyfish visitors are routed to the OpenClaw tutorial, first-run checklist, and resource hub instead of a dead page.',
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function JellyfishRoute() {
  return <LegacyJellyfishPage />;
}

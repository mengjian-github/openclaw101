import type { Metadata } from 'next';
import StartSetupPage from '@/components/StartSetupPage';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'OpenClaw Setup Tutorial | OpenClaw 101',
  },
  description:
    'A 10-minute OpenClaw setup tutorial for building your first AI assistant and sending the first message.',
  alternates: {
    canonical: `${SITE_URL}/start`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function OpenClawSetupTutorialAliasPage() {
  return <StartSetupPage locale="en" />;
}

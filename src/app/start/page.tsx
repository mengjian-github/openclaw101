import type { Metadata } from 'next';
import StartSetupPage from '@/components/StartSetupPage';
import { SITE_NAME, SITE_URL, buildPageMetadata, getStructuredDataLanguage } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Start OpenClaw in 10 Minutes',
  description:
    'Answer-first OpenClaw setup route: prepare a runtime, model access, Telegram bot token, run one install command, and send the first assistant message.',
  locale: 'en',
  enPath: '/start',
  zhPath: '/zh/start',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/start#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'OpenClaw 101', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: '10-minute setup', item: `${SITE_URL}/start` },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': `${SITE_URL}/start#howto`,
      name: 'Build your first OpenClaw AI assistant in 10 minutes',
      description: 'A fast onboarding route for installing OpenClaw and sending the first message to your own AI assistant.',
      inLanguage: getStructuredDataLanguage('en'),
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
      step: [
        { '@type': 'HowToStep', name: 'Choose a runtime environment', url: `${SITE_URL}/start#runtime` },
        { '@type': 'HowToStep', name: 'Prepare model and Telegram access', url: `${SITE_URL}/start#access` },
        { '@type': 'HowToStep', name: 'Run the install command', url: `${SITE_URL}/start#install` },
        { '@type': 'HowToStep', name: 'Send the first message', url: `${SITE_URL}/start#first-message` },
      ],
    },
  ],
};

export default function StartPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StartSetupPage locale="en" />
    </>
  );
}

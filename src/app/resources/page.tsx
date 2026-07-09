import type { Metadata } from 'next';
import ResourcesPage from '@/components/ResourcesPage';
import {
  SITE_NAME,
  SITE_URL,
  buildPageMetadata,
  getStructuredDataLanguage,
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'OpenClaw Resource Hub',
  description:
    'Curated OpenClaw tutorials, setup guides, videos, cloud deployment resources, and beginner references for the 7-day learning path.',
  locale: 'en',
  enPath: '/resources',
  zhPath: '/zh/resources',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/resources#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'OpenClaw 101', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/resources#collection`,
      name: 'OpenClaw Resource Hub',
      url: `${SITE_URL}/resources`,
      description:
        'Curated OpenClaw tutorials, deployment guides, videos, and integration resources in one place.',
      inLanguage: getStructuredDataLanguage('en'),
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  ],
};

export default function EnResourcesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcesPage locale="en" />
    </main>
  );
}

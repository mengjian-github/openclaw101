import { Metadata } from 'next';
import ResourcesPage from '@/components/ResourcesPage';

export const metadata: Metadata = {
  title: 'Resource Hub',
  description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  alternates: {
    canonical: 'https://openclaw.mom/resources',
    languages: {
      'en': 'https://openclaw.mom/resources',
      'zh': 'https://openclaw.mom/zh/resources',
    },
  },
  openGraph: {
    title: 'Resource Hub',
    description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
    type: 'website',
    url: 'https://openclaw.mom/resources',
    siteName: 'openclaw.mom',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resource Hub - openclaw.mom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resource Hub',
    description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resource Hub - openclaw.mom',
  url: 'https://openclaw.mom/resources',
  description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'openclaw.mom',
    url: 'https://openclaw.mom',
  },
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

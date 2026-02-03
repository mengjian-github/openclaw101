import { Metadata } from 'next';
import ResourcesPage from '@/components/ResourcesPage';

export const metadata: Metadata = {
  title: 'Resource Hub - OpenClaw 101',
  description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  alternates: {
    canonical: 'https://openclaw101.dev/resources',
    languages: {
      'en': 'https://openclaw101.dev/resources',
      'zh': 'https://openclaw101.dev/zh/resources',
    },
  },
  openGraph: {
    title: 'Resource Hub - OpenClaw 101',
    description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
    type: 'website',
    url: 'https://openclaw101.dev/resources',
    siteName: 'OpenClaw 101',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resource Hub - OpenClaw 101',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resource Hub - OpenClaw 101',
    description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resource Hub - OpenClaw 101',
  url: 'https://openclaw101.dev/resources',
  description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'OpenClaw 101',
    url: 'https://openclaw101.dev',
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

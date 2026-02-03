import { Metadata } from 'next';
import ResourcesPage from '@/components/ResourcesPage';

export const metadata: Metadata = {
  title: '全网资源聚合 - OpenClaw 101',
  description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
  alternates: {
    canonical: 'https://openclaw101.dev/zh/resources',
    languages: {
      'en': 'https://openclaw101.dev/resources',
      'zh': 'https://openclaw101.dev/zh/resources',
    },
  },
  openGraph: {
    title: '全网资源聚合 - OpenClaw 101',
    description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
    type: 'website',
    url: 'https://openclaw101.dev/zh/resources',
    siteName: 'OpenClaw 101',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '全网资源聚合 - OpenClaw 101',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '全网资源聚合 - OpenClaw 101',
    description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '全网资源聚合 - OpenClaw 101',
  url: 'https://openclaw101.dev/zh/resources',
  description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
  inLanguage: 'zh-CN',
  isPartOf: {
    '@type': 'WebSite',
    name: 'OpenClaw 101',
    url: 'https://openclaw101.dev',
  },
};

export default function ZhResourcesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcesPage locale="zh" />
    </main>
  );
}

import { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: '7天掌握你的AI私人助理',
  description: '从零开始，7天掌握你的AI私人助理。教程、技能和社区资源一站式获取。',
  alternates: {
    canonical: 'https://openclaw.mom/zh',
    languages: {
      'en': 'https://openclaw.mom',
      'zh': 'https://openclaw.mom/zh',
    },
  },
  openGraph: {
    title: 'openclaw.mom - 从零开始，7天掌握你的AI私人助理',
    description: '从零开始，7天掌握你的AI私人助理',
    type: 'website',
    url: 'https://openclaw.mom/zh',
    siteName: 'openclaw.mom',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'openclaw.mom - 从零开始，7天掌握你的AI私人助理',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'openclaw.mom - 从零开始，7天掌握你的AI私人助理',
    description: '从零开始，7天掌握你的AI私人助理',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'openclaw.mom',
  url: 'https://openclaw.mom/zh',
  description: '从零开始，7天掌握你的AI私人助理',
  inLanguage: 'zh-CN',
};

export default function ZhHome() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage locale="zh" />
    </main>
  );
}

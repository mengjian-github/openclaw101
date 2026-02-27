import { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'openclaw.mom - Master Your AI Assistant in 7 Days',
  description: 'The definitive guide to building your AI assistant with OpenClaw. Tutorials, skills, and community resources for your personal AI agent.',
  alternates: {
    canonical: 'https://openclaw.mom',
    languages: {
      'en': 'https://openclaw.mom',
      'zh': 'https://openclaw.mom/zh',
    },
  },
  openGraph: {
    title: 'openclaw.mom - Master Your AI Assistant in 7 Days',
    description: 'The definitive guide to building your AI assistant with OpenClaw.',
    type: 'website',
    url: 'https://openclaw.mom',
    siteName: 'openclaw.mom',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'openclaw.mom - Master Your AI Assistant in 7 Days',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'openclaw.mom - Master Your AI Assistant in 7 Days',
    description: 'The definitive guide to building your AI assistant with OpenClaw.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'openclaw.mom',
  url: 'https://openclaw.mom',
  description: 'Master your AI personal assistant in 7 days',
  inLanguage: 'en',
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage locale="en" />
    </main>
  );
}

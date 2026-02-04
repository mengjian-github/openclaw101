import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://openclaw101.dev'),
  title: {
    default: 'OpenClaw 101 - Master Your AI Assistant in 7 Days | Free Tutorial',
    template: '%s | OpenClaw 101',
  },
  description: 'Free 7-day tutorial to master OpenClaw (Clawdbot/Moltbot). Learn to build your own AI personal assistant with installation guides, skills, automation, and 70+ curated resources.',
  keywords: [
    'OpenClaw', 'OpenClaw tutorial', 'OpenClaw guide', 'OpenClaw 教程',
    'Clawdbot', 'Moltbot', 'AI assistant', 'AI Agent', 'personal AI',
    'Telegram bot', 'self-hosted AI', 'open source AI', 'AI automation',
    'OpenClaw skills', 'OpenClaw installation', 'OpenClaw setup',
    '7 day AI tutorial', 'AI助理', 'AI私人助手', '开源AI'
  ],
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'OpenClaw 101 - Master Your AI Assistant in 7 Days',
    description: 'Free 7-day tutorial to build your own AI personal assistant with OpenClaw. 70+ curated resources, skills ecosystem, and step-by-step guides.',
    url: 'https://openclaw101.dev',
    siteName: 'OpenClaw 101',
    images: [
      {
        url: 'https://openclaw101.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpenClaw 101 - AI Assistant Tutorial',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw 101 - Master Your AI Assistant in 7 Days',
    description: 'Free 7-day tutorial to build your own AI personal assistant with OpenClaw.',
    images: ['https://openclaw101.dev/og-image.png'],
  },
  verification: {
    google: 'G-86ESEQC7V8',
  },
  alternates: {
    canonical: 'https://openclaw101.dev',
    languages: {
      'en': 'https://openclaw101.dev',
      'zh': 'https://openclaw101.dev/zh',
    },
  },
};

// Schema.org structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://openclaw101.dev/#website',
      url: 'https://openclaw101.dev',
      name: 'OpenClaw 101',
      description: 'The definitive guide to mastering OpenClaw AI assistant',
      inLanguage: ['en', 'zh'],
    },
    {
      '@type': 'Course',
      '@id': 'https://openclaw101.dev/#course',
      name: 'OpenClaw 7-Day Tutorial',
      description: 'Learn to build and customize your own AI personal assistant with OpenClaw in 7 days',
      provider: {
        '@type': 'Organization',
        name: 'OpenClaw 101',
        url: 'https://openclaw101.dev',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'P7D',
      },
      numberOfLessons: 7,
      teaches: ['AI Assistant Setup', 'OpenClaw Configuration', 'Skills Development', 'Automation'],
      isAccessibleForFree: true,
      availableLanguage: ['en', 'zh'],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://openclaw101.dev/#tutorial-list',
      name: 'OpenClaw 7-Day Learning Path',
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Day 1: Meet OpenClaw', url: 'https://openclaw101.dev/day/1' },
        { '@type': 'ListItem', position: 2, name: 'Day 2: Installation', url: 'https://openclaw101.dev/day/2' },
        { '@type': 'ListItem', position: 3, name: 'Day 3: Give Your Assistant a Soul', url: 'https://openclaw101.dev/day/3' },
        { '@type': 'ListItem', position: 4, name: 'Day 4: Connect Your Digital Life', url: 'https://openclaw101.dev/day/4' },
        { '@type': 'ListItem', position: 5, name: 'Day 5: Skills Ecosystem', url: 'https://openclaw101.dev/day/5' },
        { '@type': 'ListItem', position: 6, name: 'Day 6: Automation & Heartbeat', url: 'https://openclaw101.dev/day/6' },
        { '@type': 'ListItem', position: 7, name: 'Day 7: Advanced Techniques', url: 'https://openclaw101.dev/day/7' },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* hreflang tags for i18n */}
        <link rel="alternate" hrefLang="en" href="https://openclaw101.dev" />
        <link rel="alternate" hrefLang="zh" href="https://openclaw101.dev/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://openclaw101.dev" />
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-86ESEQC7V8"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-86ESEQC7V8');`}
        </Script>

        {/* Privacy-friendly analytics by Plausible */}
        <Script
          src="https://plausible.shipsolo.io/js/pa-JFzm3YyWo6Cak1n9mzePz.js"
          strategy="afterInteractive"
        />
        <Script id="plausible" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)};
plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init();`}
        </Script>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

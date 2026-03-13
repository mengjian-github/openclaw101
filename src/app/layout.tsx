import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import KnowledgeAssistant from '@/components/KnowledgeAssistant';

export const metadata: Metadata = {
  metadataBase: new URL('https://openclaw.mom'),
  title: {
    default: 'openclaw.mom - Master Your AI Assistant in 7 Days | Free Tutorial',
    template: '%s | openclaw.mom',
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
    title: 'openclaw.mom - Master Your AI Assistant in 7 Days',
    description: 'Free 7-day tutorial to build your own AI personal assistant with OpenClaw. 70+ curated resources, skills ecosystem, and step-by-step guides.',
    url: 'https://openclaw.mom',
    siteName: 'openclaw.mom',
    images: [
      {
        url: 'https://openclaw.mom/og-image.png',
        width: 1200,
        height: 630,
        alt: 'openclaw.mom - AI Assistant Tutorial',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'openclaw.mom - Master Your AI Assistant in 7 Days',
    description: 'Free 7-day tutorial to build your own AI personal assistant with OpenClaw.',
    images: ['https://openclaw.mom/og-image.png'],
  },
  verification: {
    google: 'google4f8d30bcb0cf610f',
  },
  alternates: {
    canonical: 'https://openclaw.mom',
    languages: {
      'en': 'https://openclaw.mom',
      'zh': 'https://openclaw.mom/zh',
    },
  },
};

// Schema.org structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://openclaw.mom/#website',
      url: 'https://openclaw.mom',
      name: 'openclaw.mom',
      description: 'The definitive guide to mastering OpenClaw AI assistant',
      inLanguage: ['en', 'zh'],
    },
    {
      '@type': 'Course',
      '@id': 'https://openclaw.mom/#course',
      name: 'OpenClaw 7-Day Tutorial',
      description: 'Learn to build and customize your own AI personal assistant with OpenClaw in 7 days',
      provider: {
        '@type': 'Organization',
        name: 'openclaw.mom',
        url: 'https://openclaw.mom',
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
      '@type': 'FAQPage',
      '@id': 'https://openclaw.mom/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is OpenClaw?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenClaw is an open-source AI agent framework that lets you build a self-hosted personal AI assistant. It connects to services like Telegram, Gmail, Google Calendar, and web browsers, and can execute code, automate tasks, and manage your digital life 24/7. It was formerly known as Clawdbot and Moltbot.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is OpenClaw free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, OpenClaw is fully open-source and free to use. You only pay for the AI model API costs (e.g., Claude ~$3-15/month) and server hosting (~$5-20/month).',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I install OpenClaw?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You need a Linux server (Ubuntu 22.04+ recommended), Node.js 20+, and an API key for your chosen AI model. Clone the repository, run the setup wizard, configure your Telegram bot token, and start the gateway. The Day 2 tutorial at openclaw.mom/day/2 covers this step by step.',
          },
        },
        {
          '@type': 'Question',
          name: 'What AI models does OpenClaw support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenClaw supports Anthropic Claude (recommended), OpenAI GPT-4, Google Gemini, xAI Grok, and any model available through OpenRouter.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can an OpenClaw assistant do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An OpenClaw assistant can manage email, schedule calendar events, browse the web with a real browser, write and execute code, analyze SEO data, create content, monitor websites, automate workflows, and more through its extensible skills system with 100+ community plugins.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between OpenClaw and ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT is a conversational AI in the cloud. OpenClaw is a framework for building your own AI agent on your server, with persistent memory, real tool access (email, browser, code execution), proactive automation (heartbeats, cron jobs), and full customization. ChatGPT is a chat app; OpenClaw is a personal AI employee.',
          },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://openclaw.mom/#tutorial-list',
      name: 'OpenClaw 7-Day Learning Path',
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Day 1: Meet OpenClaw', url: 'https://openclaw.mom/day/1' },
        { '@type': 'ListItem', position: 2, name: 'Day 2: Installation', url: 'https://openclaw.mom/day/2' },
        { '@type': 'ListItem', position: 3, name: 'Day 3: Give Your Assistant a Soul', url: 'https://openclaw.mom/day/3' },
        { '@type': 'ListItem', position: 4, name: 'Day 4: Connect Your Digital Life', url: 'https://openclaw.mom/day/4' },
        { '@type': 'ListItem', position: 5, name: 'Day 5: Skills Ecosystem', url: 'https://openclaw.mom/day/5' },
        { '@type': 'ListItem', position: 6, name: 'Day 6: Automation & Heartbeat', url: 'https://openclaw.mom/day/6' },
        { '@type': 'ListItem', position: 7, name: 'Day 7: Advanced Techniques', url: 'https://openclaw.mom/day/7' },
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
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-1081201777589554" />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1081201777589554"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* hreflang tags for i18n */}
        <link rel="alternate" hrefLang="en" href="https://openclaw.mom" />
        <link rel="alternate" hrefLang="zh" href="https://openclaw.mom/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://openclaw.mom" />
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZE588NQGD8"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ZE588NQGD8');`}
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
      <body className="font-sans">
        {children}
        <KnowledgeAssistant />
      </body>
    </html>
  );
}

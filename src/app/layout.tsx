import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://openclaw101.dev'),
  title: {
    default: 'OpenClaw 101 - Master Your AI Assistant in 7 Days',
    template: '%s | OpenClaw 101',
  },
  description: 'The definitive guide to building your AI assistant with OpenClaw. Tutorials, skills, and community resources.',
  keywords: ['OpenClaw', 'AI助理', 'AI Assistant', 'Telegram Bot', '开源', 'self-hosted', 'personal AI', 'agent'],
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'G-86ESEQC7V8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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

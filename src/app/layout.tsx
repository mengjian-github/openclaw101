import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OpenClaw 101 — 从零开始，7天掌握你的AI私人助理',
  description:
    'The definitive guide to building your AI assistant with OpenClaw. 从零开始，7天掌握你的AI私人助理。',
  keywords: ['OpenClaw', 'AI助理', 'AI Assistant', 'Telegram Bot', '开源', 'self-hosted'],
  openGraph: {
    title: 'OpenClaw 101',
    description: '从零开始，7天掌握你的AI私人助理',
    type: 'website',
    url: 'https://openclaw101.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">{children}</body>
    </html>
  );
}

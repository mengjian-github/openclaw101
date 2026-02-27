import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '全网 OpenClaw 资源聚合 — 35+ 篇精选教程 | openclaw.mom',
  description:
    '阿里云、腾讯云、DigitalOcean、B站、Codecademy 等 35+ 篇 OpenClaw 教程资源聚合，涵盖部署、平台接入、技能开发等 8 大分类。',
  alternates: {
    canonical: 'https://openclaw.mom/resources',
  },
  openGraph: {
    title: '全网 OpenClaw 资源聚合 — 35+ 篇精选教程 | openclaw.mom',
    description:
      '阿里云、腾讯云、DigitalOcean、B站、Codecademy 等 35+ 篇 OpenClaw 教程资源聚合，涵盖部署、平台接入、技能开发等 8 大分类。',
    type: 'website',
    url: 'https://openclaw.mom/resources',
    siteName: 'openclaw.mom',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '全网 OpenClaw 资源聚合 — 35+ 篇精选教程',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '全网 OpenClaw 资源聚合 — 35+ 篇精选教程 | openclaw.mom',
    description:
      '阿里云、腾讯云、DigitalOcean、B站、Codecademy 等 35+ 篇 OpenClaw 教程资源聚合，涵盖部署、平台接入、技能开发等 8 大分类。',
    images: ['/og-image.png'],
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

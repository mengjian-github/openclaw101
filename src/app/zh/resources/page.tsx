import type { Metadata } from 'next';
import ResourcesPage from '@/components/ResourcesPage';
import {
  SITE_NAME,
  SITE_URL,
  buildPageMetadata,
  getStructuredDataLanguage,
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: '全网 OpenClaw 资源聚合',
  description:
    '汇总 35+ 篇 OpenClaw 精选教程、部署指南、视频和平台接入资源，覆盖阿里云、腾讯云、DigitalOcean、B 站、IBM、Codecademy 等来源。',
  locale: 'zh',
  enPath: '/resources',
  zhPath: '/zh/resources',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/zh/resources#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'OpenClaw 101', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: '资源', item: `${SITE_URL}/zh/resources` },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/zh/resources#collection`,
      name: '全网 OpenClaw 资源聚合',
      url: `${SITE_URL}/zh/resources`,
      description: '一站式收录 OpenClaw 教程、部署指南、视频与接入资源。',
      inLanguage: getStructuredDataLanguage('zh'),
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  ],
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

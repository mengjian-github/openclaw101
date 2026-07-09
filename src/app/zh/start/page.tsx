import type { Metadata } from 'next';
import StartSetupPage from '@/components/StartSetupPage';
import { SITE_NAME, SITE_URL, buildPageMetadata, getStructuredDataLanguage } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: '10 分钟搭建 OpenClaw AI 助手',
  description:
    'OpenClaw 新手最快上手路线：准备运行环境、模型访问、Telegram Bot Token，执行一行安装命令，发出第一条助手消息。',
  locale: 'zh',
  enPath: '/start',
  zhPath: '/zh/start',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/zh/start#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'OpenClaw 101', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: '10 分钟上手', item: `${SITE_URL}/zh/start` },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': `${SITE_URL}/zh/start#howto`,
      name: '10 分钟搭建你的第一个 OpenClaw AI 助手',
      description: 'OpenClaw 快速上手路线：安装、配置 Telegram、完成向导并发出第一条消息。',
      inLanguage: getStructuredDataLanguage('zh'),
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
      step: [
        { '@type': 'HowToStep', name: '选择运行环境', url: `${SITE_URL}/zh/start#runtime` },
        { '@type': 'HowToStep', name: '准备模型和 Telegram', url: `${SITE_URL}/zh/start#access` },
        { '@type': 'HowToStep', name: '执行安装命令', url: `${SITE_URL}/zh/start#install` },
        { '@type': 'HowToStep', name: '发送第一条消息', url: `${SITE_URL}/zh/start#first-message` },
      ],
    },
  ],
};

export default function ZhStartPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StartSetupPage locale="zh" />
    </>
  );
}

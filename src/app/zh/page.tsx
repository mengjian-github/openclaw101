import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import {
  SITE_NAME,
  SITE_URL,
  buildPageMetadata,
  getStructuredDataLanguage,
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: '10 分钟搭建你的第一个 AI 助手',
  description:
    'OpenClaw 10 分钟首次助手上手教程：支持原生 Windows 或服务器运行，Telegram Bot 接入，一行命令安装，再进入 7 天学习路径。',
  locale: 'zh',
  enPath: '/',
  zhPath: '/zh',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/zh#website`,
      url: `${SITE_URL}/zh`,
      name: SITE_NAME,
      description: '从零开始，7天掌握你的 AI 私人助理。',
      inLanguage: getStructuredDataLanguage('zh'),
    },
    {
      '@type': 'Course',
      '@id': `${SITE_URL}/zh#course`,
      url: `${SITE_URL}/zh`,
      name: 'OpenClaw 7天教程',
      description: '7天循序渐进学习 OpenClaw 的安装、配置、技能、接入与自动化。',
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'P7D',
      },
      numberOfLessons: 7,
      isAccessibleForFree: true,
      availableLanguage: ['zh-CN', 'en'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/zh#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'OpenClaw 是什么？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenClaw 是一个开源 AI Agent 框架，你可以把它部署到自己的电脑或服务器上，打造能聊天、调用工具、执行自动化任务的私人 AI 助手。',
          },
        },
        {
          '@type': 'Question',
          name: 'OpenClaw 免费吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenClaw 本身是开源免费的。你主要需要承担模型 API 调用费用，以及运行它的本地机器或云服务器成本。',
          },
        },
        {
          '@type': 'Question',
          name: '这套教程适合新手吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '适合。教程按 7 天拆解，从部署、配置到技能和自动化，尽量用最少术语带你一步步搭起来。',
          },
        },
        {
          '@type': 'Question',
          name: 'OpenClaw 支持哪些模型？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenClaw 支持 Claude、OpenAI、Google Gemini、xAI Grok，以及通过 OpenRouter 接入的其他模型。',
          },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/zh#tutorial-list`,
      name: 'OpenClaw 7天学习路径',
      numberOfItems: 7,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '第 1 天：初识 OpenClaw',
          url: `${SITE_URL}/zh/day/1`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '第 2 天：10 分钟，搭建你的助手',
          url: `${SITE_URL}/zh/day/2`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '第 3 天：给助手一个灵魂',
          url: `${SITE_URL}/zh/day/3`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: '第 4 天：接入你的数字生活',
          url: `${SITE_URL}/zh/day/4`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: '第 5 天：解锁技能树',
          url: `${SITE_URL}/zh/day/5`,
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: '第 6 天：让助手主动工作',
          url: `${SITE_URL}/zh/day/6`,
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: '第 7 天：进阶玩法 & 未来展望',
          url: `${SITE_URL}/zh/day/7`,
        },
      ],
    },
  ],
};

export default function ZhHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage locale="zh" />
    </>
  );
}

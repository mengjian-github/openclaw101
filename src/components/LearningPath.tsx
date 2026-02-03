'use client';

import { useEffect, useRef } from 'react';
import { Dictionary } from '@/lib/i18n';

interface LearningPathProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

const daysZh = [
  {
    day: 1,
    icon: '👋',
    title: '认识 OpenClaw',
    desc: '了解核心概念、架构设计和能力边界，建立正确的使用预期。',
    link: 'https://my.feishu.cn/wiki/MlyEwRKIwikkBlkGew0ckLfonEu',
  },
  {
    day: 2,
    icon: '🚀',
    title: '安装部署',
    desc: '10分钟搞定服务器部署，从零到运行只需要一杯咖啡的时间。',
    link: 'https://my.feishu.cn/wiki/JCd8wARjliivC6kl4eMcGTvlnQg',
  },
  {
    day: 3,
    icon: '🔗',
    title: '连接平台',
    desc: '接入 Telegram、Discord 等平台，让 AI 助理出现在你常用的聊天工具中。',
    link: 'https://my.feishu.cn/wiki/DEaTwoZn0izajqkk98mcRge3nae',
  },
  {
    day: 4,
    icon: '🎭',
    title: '定制人设',
    desc: '打造专属 AI 助理，定义性格、语言风格和回应方式。',
    link: 'https://my.feishu.cn/wiki/YJWNwd6s1isVz3kTVrbctCyAnIe',
  },
  {
    day: 5,
    icon: '🧩',
    title: '安装技能',
    desc: '从 ClawHub 技能市场获取能力，让助理学会查天气、管邮箱、写代码。',
    link: 'https://my.feishu.cn/wiki/QGvewvXyEiFKOpkSPxrcQONrn8g',
  },
  {
    day: 6,
    icon: '⏰',
    title: '自动化',
    desc: 'Cron 任务、心跳检测、定时提醒，让 AI 助理自主工作。',
    link: 'https://my.feishu.cn/wiki/NGWmwdFkeioH5mkqem6cygRnnSe',
  },
  {
    day: 7,
    icon: '🏆',
    title: '进阶',
    desc: '多 Agent 协作、浏览器控制、Node 设备联动，解锁全部潜力。',
    link: 'https://my.feishu.cn/wiki/HVttw0Cfcik8VWkHLs1c34DznFf',
  },
];

const daysEn = [
  {
    day: 1,
    icon: '👋',
    title: 'Meet OpenClaw',
    desc: 'Understand core concepts, architecture, and capabilities. Set the right expectations.',
    link: 'https://my.feishu.cn/wiki/MlyEwRKIwikkBlkGew0ckLfonEu',
  },
  {
    day: 2,
    icon: '🚀',
    title: 'Installation',
    desc: 'Deploy your server in 10 minutes. From zero to running in the time it takes for a coffee.',
    link: 'https://my.feishu.cn/wiki/JCd8wARjliivC6kl4eMcGTvlnQg',
  },
  {
    day: 3,
    icon: '🔗',
    title: 'Connect Platforms',
    desc: 'Integrate with Telegram, Discord, and more. Bring your AI assistant to your favorite chat apps.',
    link: 'https://my.feishu.cn/wiki/DEaTwoZn0izajqkk98mcRge3nae',
  },
  {
    day: 4,
    icon: '🎭',
    title: 'Customize Persona',
    desc: 'Create your unique AI assistant. Define personality, language style, and response patterns.',
    link: 'https://my.feishu.cn/wiki/YJWNwd6s1isVz3kTVrbctCyAnIe',
  },
  {
    day: 5,
    icon: '🧩',
    title: 'Install Skills',
    desc: 'Get capabilities from ClawHub. Teach your assistant to check weather, manage emails, write code.',
    link: 'https://my.feishu.cn/wiki/QGvewvXyEiFKOpkSPxrcQONrn8g',
  },
  {
    day: 6,
    icon: '⏰',
    title: 'Automation',
    desc: 'Cron jobs, heartbeat checks, scheduled reminders. Let your AI work autonomously.',
    link: 'https://my.feishu.cn/wiki/NGWmwdFkeioH5mkqem6cygRnnSe',
  },
  {
    day: 7,
    icon: '🏆',
    title: 'Advanced',
    desc: 'Multi-agent collaboration, browser control, device integration. Unlock full potential.',
    link: 'https://my.feishu.cn/wiki/HVttw0Cfcik8VWkHLs1c34DznFf',
  },
];

export default function LearningPath({ locale, dict }: LearningPathProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isZh = locale === 'zh';
  const days = isZh ? daysZh : daysEn;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="getting-started" ref={sectionRef} className="py-12 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isZh ? '7天学习路径' : '7-Day Learning Path'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isZh 
              ? '从入门到进阶，每天一个主题，循序渐进掌握 OpenClaw 的全部能力。'
              : 'From beginner to advanced, one topic per day. Progressively master all OpenClaw capabilities.'
            }
          </p>
        </div>

        {/* Day cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {days.map((d, i) => (
            <a
              key={d.day}
              href={d.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal card-hover group block bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Day badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] sm:text-xs font-bold text-primary/40 bg-primary/5 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                DAY {d.day}
              </div>

              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{d.icon}</div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">{d.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 sm:mb-4">{d.desc}</p>
              <span className="text-primary text-xs sm:text-sm font-medium group-hover:translate-x-1 inline-block transition-transform duration-300">
                {isZh ? '查看详情 →' : 'Learn more →'}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

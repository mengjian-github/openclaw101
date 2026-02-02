'use client';

import { useEffect, useRef } from 'react';
import { Hand, Rocket, Link, Smile, Puzzle, Clock, Trophy } from 'lucide-react';

const days = [
  {
    day: 1,
    icon: Hand,
    title: '认识 OpenClaw',
    desc: '了解核心概念、架构设计和能力边界，建立正确的使用预期。',
    link: 'https://my.feishu.cn/wiki/MlyEwRKIwikkBlkGew0ckLfonEu',
  },
  {
    day: 2,
    icon: Rocket,
    title: '安装部署',
    desc: '10分钟搞定服务器部署，从零到运行只需要一杯咖啡的时间。',
    link: 'https://my.feishu.cn/wiki/JCd8wARjliivC6kl4eMcGTvlnQg',
  },
  {
    day: 3,
    icon: Link,
    title: '连接平台',
    desc: '接入 Telegram、Discord 等平台，让 AI 助理出现在你常用的聊天工具中。',
    link: 'https://my.feishu.cn/wiki/DEaTwoZn0izajqkk98mcRge3nae',
  },
  {
    day: 4,
    icon: Smile,
    title: '定制人设',
    desc: '打造专属 AI 助理，定义性格、语言风格和回应方式。',
    link: 'https://my.feishu.cn/wiki/YJWNwd6s1isVz3kTVrbctCyAnIe',
  },
  {
    day: 5,
    icon: Puzzle,
    title: '安装技能',
    desc: '从 ClawHub 技能市场获取能力，让助理学会查天气、管邮箱、写代码。',
    link: 'https://my.feishu.cn/wiki/QGvewvXyEiFKOpkSPxrcQONrn8g',
  },
  {
    day: 6,
    icon: Clock,
    title: '自动化',
    desc: 'Cron 任务、心跳检测、定时提醒，让 AI 助理自主工作。',
    link: 'https://my.feishu.cn/wiki/NGWmwdFkeioH5mkqem6cygRnnSe',
  },
  {
    day: 7,
    icon: Trophy,
    title: '进阶',
    desc: '多 Agent 协作、浏览器控制、Node 设备联动，解锁全部潜力。',
    link: 'https://my.feishu.cn/wiki/HVttw0Cfcik8VWkHLs1c34DznFf',
  },
];

export default function LearningPath() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="getting-started" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">
            7天学习路径
          </h2>
          <p className="section-subtitle">
            从入门到进阶，每天一个主题，循序渐进掌握 OpenClaw 的全部能力。
          </p>
        </div>

        {/* Day cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {days.map((d, i) => {
            const Icon = d.icon;
            return (
              <a
                key={d.day}
                href={d.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal card-hover group block bg-white rounded-2xl p-6 border border-gray-100 relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Day badge */}
                <div className="absolute top-4 right-4 text-xs font-bold text-primary-40 bg-primary-5 px-2 py-1 rounded-full">
                  DAY {d.day}
                </div>

                <div className="icon-container w-12 h-12 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-primary-600" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{d.desc}</p>
                <span className="text-primary-600 text-sm font-medium group-hover:translate-x-1 inline-block transition-transform duration-300">
                  查看详情 →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { Dictionary } from '@/lib/i18n';

interface SkillsProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

const categoriesZh = [
  {
    icon: '📧',
    title: '效率工具',
    color: 'from-blue-500 to-blue-600',
    skills: ['Gmail 管理', '日历提醒', 'TODO 追踪', '文件整理'],
  },
  {
    icon: '🔍',
    title: 'SEO & 营销',
    color: 'from-orange-500 to-orange-600',
    skills: ['Google Search Console', 'GA4 分析', '关键词研究', '排名追踪'],
  },
  {
    icon: '💻',
    title: '开发工具',
    color: 'from-purple-500 to-purple-600',
    skills: ['GitHub 集成', '代码 Agent', 'Claude Code 追踪', 'CI/CD 监控'],
  },
  {
    icon: '🎨',
    title: '内容创作',
    color: 'from-pink-500 to-pink-600',
    skills: ['公众号策略', '社交媒体管理', '视频制作', 'SEO 写作'],
  },
  {
    icon: '🏋️',
    title: '生活习惯',
    color: 'from-green-500 to-green-600',
    skills: ['习惯追踪', '健身记录', '冥想提醒', '作息管理'],
  },
  {
    icon: '🧘',
    title: '心理健康',
    color: 'from-teal-500 to-teal-600',
    skills: ['焦虑缓解', '冥想引导', '情绪追踪', '正念练习'],
  },
];

const categoriesEn = [
  {
    icon: '📧',
    title: 'Productivity',
    color: 'from-blue-500 to-blue-600',
    skills: ['Gmail Management', 'Calendar Reminders', 'TODO Tracking', 'File Organization'],
  },
  {
    icon: '🔍',
    title: 'SEO & Marketing',
    color: 'from-orange-500 to-orange-600',
    skills: ['Google Search Console', 'GA4 Analytics', 'Keyword Research', 'Rank Tracking'],
  },
  {
    icon: '💻',
    title: 'Developer Tools',
    color: 'from-purple-500 to-purple-600',
    skills: ['GitHub Integration', 'Coding Agent', 'Claude Code Usage', 'CI/CD Monitoring'],
  },
  {
    icon: '🎨',
    title: 'Content Creation',
    color: 'from-pink-500 to-pink-600',
    skills: ['Content Strategy', 'Social Media', 'Video Production', 'SEO Writing'],
  },
  {
    icon: '🏋️',
    title: 'Life & Habits',
    color: 'from-green-500 to-green-600',
    skills: ['Habit Tracking', 'Workout Logging', 'Meditation', 'Sleep Schedule'],
  },
  {
    icon: '🧘',
    title: 'Mental Health',
    color: 'from-teal-500 to-teal-600',
    skills: ['Anxiety Relief', 'Guided Meditation', 'Mood Tracking', 'Mindfulness'],
  },
];

export default function Skills({ locale, dict }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isZh = locale === 'zh';
  const categories = isZh ? categoriesZh : categoriesEn;

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
    <section id="skills" ref={sectionRef} className="py-12 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isZh ? '精选技能推荐' : 'Featured Skills'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isZh 
              ? '按场景分类的 AI 技能，让你的助理覆盖工作与生活的方方面面。'
              : 'AI skills categorized by use case. Make your assistant cover all aspects of work and life.'
            }
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="reveal card-hover bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">{cat.icon}</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white text-xs sm:text-sm text-gray-600 rounded-lg border border-gray-200 hover:border-primary/30 hover:text-primary transition-colors duration-200 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a
            href="https://clawhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            {isZh ? '浏览全部技能' : 'Browse All Skills'}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

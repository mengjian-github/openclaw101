'use client';

import { useEffect, useRef } from 'react';
import { Mail, Search, Code, Palette, Dumbbell, Sparkles, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Mail,
    title: '效率工具',
    color: 'from-blue-500 to-blue-600',
    skills: ['Gmail 管理', '日历提醒', 'TODO 追踪', '文件整理'],
  },
  {
    icon: Search,
    title: 'SEO & 营销',
    color: 'from-orange-500 to-orange-600',
    skills: ['Google Search Console', 'GA4 分析', '关键词研究', '排名追踪'],
  },
  {
    icon: Code,
    title: '开发工具',
    color: 'from-purple-500 to-purple-600',
    skills: ['GitHub 集成', '代码 Agent', 'Claude Code 追踪', 'CI/CD 监控'],
  },
  {
    icon: Palette,
    title: '内容创作',
    color: 'from-pink-500 to-pink-600',
    skills: ['公众号策略', '社交媒体管理', '视频制作', 'SEO 写作'],
  },
  {
    icon: Dumbbell,
    title: '生活习惯',
    color: 'from-green-500 to-green-600',
    skills: ['习惯追踪', '健身记录', '冥想提醒', '作息管理'],
  },
  {
    icon: Sparkles,
    title: '心理健康',
    color: 'from-teal-500 to-teal-600',
    skills: ['焦虑缓解', '冥想引导', '情绪追踪', '正念练习'],
  },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">
            精选技能推荐
          </h2>
          <p className="section-subtitle">
            按场景分类的 AI 技能，让你的助理覆盖工作与生活的方方面面。
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="reveal card-hover bg-gray-50 rounded-2xl p-6 border border-gray-100"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-container w-12 h-12 rounded-xl">
                    <Icon className="w-6 h-6 text-primary-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 bg-white text-sm text-gray-600 rounded-lg border border-gray-200 hover:border-primary-30 hover:text-primary-600 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a
            href="https://clawhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            浏览全部技能
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

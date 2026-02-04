import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import DayContent from '@/components/DayContent';

interface Props {
  params: Promise<{ day: string }>;
}

const DAYS = [1, 2, 3, 4, 5, 6, 7];

export async function generateStaticParams() {
  return DAYS.map((day) => ({ day: day.toString() }));
}

function getDay(day: string): { content: string; frontmatter: any } | null {
  const dayNum = parseInt(day);
  if (!DAYS.includes(dayNum)) return null;
  
  const filePath = path.join(process.cwd(), 'content', 'days', `day${dayNum}.md`);
  if (!fs.existsSync(filePath)) return null;
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return { content, frontmatter: data };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { day } = await params;
  const data = getDay(day);
  if (!data) return { title: 'Not Found' };
  
  const dayNum = parseInt(day);
  const titles: Record<number, string> = {
    1: '初识 OpenClaw',
    2: '深入对话',
    3: '文件与代码',
    4: '网络能力',
    5: '技能扩展',
    6: '自动化',
    7: '高级技巧',
  };
  
  const title = `第 ${dayNum} 天：${titles[dayNum]} | OpenClaw 101`;
  
  return {
    title,
    description: data.frontmatter.description,
    alternates: {
      canonical: `https://openclaw101.dev/zh/day/${day}`,
      languages: {
        'en': `https://openclaw101.dev/day/${day}`,
        'zh': `https://openclaw101.dev/zh/day/${day}`,
      },
    },
    openGraph: {
      title,
      description: data.frontmatter.description,
      type: 'article',
      url: `https://openclaw101.dev/zh/day/${day}`,
      locale: 'zh_CN',
    },
  };
}

export default async function DayPage({ params }: Props) {
  const { day } = await params;
  const data = getDay(day);
  
  if (!data) {
    notFound();
  }
  
  const dayNum = parseInt(day);
  const prevDay = dayNum > 1 ? dayNum - 1 : null;
  const nextDay = dayNum < 7 ? dayNum + 1 : null;
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <DayContent 
        day={dayNum}
        content={data.content}
        frontmatter={data.frontmatter}
        prevDay={prevDay}
        nextDay={nextDay}
        locale="zh"
      />
    </main>
  );
}

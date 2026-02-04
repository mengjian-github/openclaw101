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
  
  const filePath = path.join(process.cwd(), 'content', 'days-en', `day${dayNum}.md`);
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
  const titles: Record<number, { en: string; zh: string }> = {
    1: { en: 'Meet OpenClaw', zh: '初识 OpenClaw' },
    2: { en: 'Build Your Assistant in 10 Minutes', zh: '10 分钟，搭建你的助手' },
    3: { en: 'Give Your Assistant a Soul', zh: '给助手一个灵魂' },
    4: { en: 'Connect Your Digital Life', zh: '接入你的数字生活' },
    5: { en: 'Unlock the Skill Tree', zh: '解锁技能树' },
    6: { en: 'Make Your Assistant Work Proactively', zh: '让助手主动工作' },
    7: { en: 'Advanced Techniques & Future Outlook', zh: '进阶玩法 & 未来展望' },
  };
  
  const title = `Day ${dayNum}: ${titles[dayNum]?.en || ''} | OpenClaw 101`;
  
  return {
    title,
    description: data.frontmatter.description,
    alternates: {
      canonical: `https://openclaw101.dev/day/${day}`,
      languages: {
        'en': `https://openclaw101.dev/day/${day}`,
        'zh': `https://openclaw101.dev/zh/day/${day}`,
      },
    },
    openGraph: {
      title,
      description: data.frontmatter.description,
      type: 'article',
      url: `https://openclaw101.dev/day/${day}`,
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
        locale="en"
      />
    </main>
  );
}

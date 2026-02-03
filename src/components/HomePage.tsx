'use client';

import { Locale, getDictionary } from '@/lib/i18n';
import Navbar from './Navbar';
import Hero from './Hero';
import WhatIs from './WhatIs';
import LearningPath from './LearningPath';
import Skills from './Skills';
import ResourcesSection from './ResourcesSection';
import Community from './Community';
import Footer from './Footer';

interface HomePageProps {
  locale: Locale;
}

export default function HomePage({ locale }: HomePageProps) {
  const dict = getDictionary(locale);

  return (
    <main>
      <Navbar locale={locale} dict={dict} />
      <Hero locale={locale} dict={dict} />
      <WhatIs locale={locale} dict={dict} />
      <LearningPath locale={locale} dict={dict} />
      <Skills locale={locale} dict={dict} />
      <ResourcesSection locale={locale} dict={dict} />
      <Community locale={locale} dict={dict} />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}

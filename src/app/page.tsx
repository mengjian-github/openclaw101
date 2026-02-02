import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIs from '@/components/WhatIs';
import LearningPath from '@/components/LearningPath';
import Skills from '@/components/Skills';
import ResourcesSection from '@/components/ResourcesSection';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIs />
      <LearningPath />
      <Skills />
      <ResourcesSection />
      <Community />
      <Footer />
    </main>
  );
}

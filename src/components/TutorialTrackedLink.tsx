'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { AnalyticsEventName, trackEvent } from '@/lib/analytics';

interface TutorialTrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: AnalyticsEventName;
  source: string;
  target?: string;
  intent?: string;
}

export default function TutorialTrackedLink({
  href,
  children,
  className,
  eventName = 'openclaw_tutorial_cta_click',
  source,
  target,
  intent,
}: TutorialTrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        trackEvent(eventName, {
          locale: 'en',
          page: '/openclaw-tutorial',
          source,
          target: target || href,
          intent,
        })
      }
    >
      {children}
    </Link>
  );
}

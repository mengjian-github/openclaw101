'use client';

import { AnchorHTMLAttributes, ReactNode } from 'react';
import { AnalyticsEventName, trackEvent } from '@/lib/analytics';

interface TrackedOutboundLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: AnalyticsEventName;
  eventCategory?: string;
  source: string;
  analyticsTarget: string;
  locale?: 'en' | 'zh';
  children: ReactNode;
}

export default function TrackedOutboundLink({
  eventName,
  eventCategory = 'business_referral',
  source,
  analyticsTarget,
  locale = 'en',
  children,
  onClick,
  ...props
}: TrackedOutboundLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, {
          event_category: eventCategory,
          source,
          target: analyticsTarget,
          locale,
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

export type AnalyticsEventName =
  | 'copy_code'
  | 'copy_install_command'
  | 'install_command_copy'
  | 'first_run_install_copy'
  | 'copy_troubleshooting_command'
  | 'github_click'
  | 'start_cta_click'
  | 'hero_cta_click'
  | 'tutorial_cta_click'
  | 'openclaw_tutorial_cta_click'
  | 'tutorial_step_click'
  | 'route_step_click'
  | 'course_click'
  | 'community_click'
  | 'product_referral'
  | 'consulting_click'
  | 'newsletter_interest_click'
  | 'checklist_item_toggle'
  | 'first_run_checklist_progress'
  | 'first_run_checklist_complete'
  | 'first_run_help_click'
  | 'first_run_verified_attempt_blocked'
  | 'first_reply_verified_click'
  | 'first_run_verified'
  | 'day2_guide_click'
  | 'start_setup_completed'
  | 'resource_click'
  | 'utm_copy_click';

interface AnalyticsEventProperties {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: AnalyticsEventProperties }) => void;
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: AnalyticsEventName, props: AnalyticsEventProperties = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  window.plausible?.(eventName, { props });
  window.gtag?.('event', eventName, {
    ...props,
    event_category: props.event_category || 'first_run_funnel',
  });

  if (window.clarity) {
    window.clarity('event', eventName);
    window.clarity('set', 'last_first_run_event', eventName);
  }
}

export type AnalyticsEventName =
  | 'copy_code'
  | 'copy_install_command'
  | 'install_command_copy'
  | 'github_click'
  | 'start_cta_click'
  | 'openclaw_tutorial_cta_click'
  | 'route_step_click'
  | 'checklist_item_toggle'
  | 'first_reply_verified_click'
  | 'day2_guide_click'
  | 'start_setup_completed';

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
  window.gtag?.('event', eventName, props);

  if (window.clarity) {
    window.clarity('event', eventName);
  }
}

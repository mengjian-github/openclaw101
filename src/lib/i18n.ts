import en from '@/locales/en.json';
import zh from '@/locales/zh.json';

export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];
export const defaultLocale: Locale = 'en';

const dictionaries = {
  en,
  zh,
};

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove any existing locale prefix
  const cleanPath = path.replace(/^\/(en|zh)/, '') || '/';
  
  // Default locale doesn't need prefix
  if (locale === defaultLocale) {
    return cleanPath;
  }
  
  // Add locale prefix
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  zh: '🇨🇳',
};

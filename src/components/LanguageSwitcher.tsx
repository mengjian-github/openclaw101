'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale, locales, localeNames, localeFlags, getLocalizedPath, getLocaleFromPath } from '@/lib/i18n';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        const href = getLocalizedPath(pathname, locale);
        
        return (
          <Link
            key={locale}
            href={href}
            className={`
              px-2 py-1 text-xs sm:text-sm rounded-md transition-all duration-200
              ${isActive 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }
            `}
            title={localeNames[locale]}
          >
            <span className="hidden sm:inline">{localeFlags[locale]} </span>
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

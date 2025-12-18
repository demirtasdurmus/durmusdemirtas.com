export const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' }
] as const;

export const locales = languages.map((language) => language.code);
export const defaultLocale = 'en';

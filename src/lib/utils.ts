import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number, locale: string = 'en-US'): string {
  const date = new Date(input);
  return date.toLocaleDateString(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL ?? ''}${path}`;
}

/**
 * Get the initials of a name
 * @param name - The name to get the initials of
 * @returns The initials of the name
 */
export function getNameInitials(name: string) {
  return (
    name
      ?.toString()
      ?.split(' ')
      ?.map((n) => n[0])
      ?.join('') ?? 'U'
  );
}

import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 px-6">
      <p className="text-muted-foreground text-sm font-semibold tracking-[0.2em] uppercase">
        {t('NotFoundPage.title')}
      </p>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t('NotFoundPage.subtitle')}
      </h1>

      <p className="text-muted-foreground text-center text-lg leading-relaxed">
        {t('NotFoundPage.description')}
      </p>

      <Link href="/" className={cn(buttonVariants({ size: 'lg' }))}>
        {t('Shared.goHome')}
      </Link>
    </div>
  );
}

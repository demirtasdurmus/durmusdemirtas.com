import { notFound } from 'next/navigation';
import { authors as allAuthors, posts as allPosts } from '#site/content';

import '@/styles/mdx.css';

import { Metadata } from 'next';
import Image from 'next/image';
import type { PromiseParams } from '@/types';
import { getTranslations } from 'next-intl/server';

import { cn, formatDate } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Mdx } from '@/components/mdx';

type BlogPostProps = PromiseParams<{ locale: string; slug: string[] }>;

function getPostBySlug(slug: string[], locale: string) {
  const slugPath = slug.join('/');
  return allPosts.find((post) => post.slugAsParams === slugPath && post.locale === locale) ?? null;
}

export async function generateMetadata(props: BlogPostProps): Promise<Metadata> {
  const { slug, locale } = await props.params;
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return {};
  }

  /**
   * TODO: Understand what this og generation is all about and then implement it.
   */
  // const url = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

  // const ogUrl = new URL(`${url}/api/og`);
  // ogUrl.searchParams.set('heading', post.title);
  // ogUrl.searchParams.set('type', 'Blog Post');
  // ogUrl.searchParams.set('mode', 'dark');

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author
    }))
    //   openGraph: {
    //     title: post.title,
    //     description: post.description,
    //     type: 'article',
    //     url: absoluteUrl(post.slug),
    //     images: [
    //       {
    //         url: ogUrl.toString(),
    //         width: 1200,
    //         height: 630,
    //         alt: post.title
    //       }
    //     ]
    //   },
    //   twitter: {
    //     card: 'summary_large_image',
    //     title: post.title,
    //     description: post.description,
    //     images: [ogUrl.toString()]
    //   }
  };
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    locale: post.locale,
    slug: post.slugAsParams.split('/')
  }));
}

export default async function PostPage(props: BlogPostProps) {
  const { slug, locale } = await props.params;
  const t = await getTranslations();
  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `authors/${locale}/${author}`)
  );

  return (
    <article className="relative container mx-auto max-w-3xl px-6 py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute top-14 -left-50 hidden xl:inline-flex'
        )}
      >
        <Icons.ChevronLeft className="mr-2 size-4" />
        {t('Shared.seeAllPosts')}
      </Link>
      <div>
        {post.date && (
          <time dateTime={post.date} className="text-muted-foreground block text-sm">
            {t('Shared.publishedOn', { date: formatDate(post.date, locale) })}
          </time>
        )}
        <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <a
                  key={author.slug}
                  href={`https://twitter.com/${author.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-muted-foreground text-[12px]">@{author.twitter}</p>
                  </div>
                </a>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="bg-muted my-8 rounded-md border transition-colors"
          priority
        />
      )}
      <Mdx code={post.body} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: 'ghost' }))}>
          <Icons.ChevronLeft className="mr-2 size-4" />
          {t('Shared.seeAllPosts')}
        </Link>
      </div>
    </article>
  );
}

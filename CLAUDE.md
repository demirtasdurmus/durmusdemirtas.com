# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio and blog website built with Next.js 15 (App Router), featuring multi-language support (English/Turkish), dark mode, and MDX-based blog content.

## Package Manager

**Always use `pnpm`** for all package management operations. Never use npm or yarn.

## Development Commands

```bash
# Development
pnpm dev              # Start development server with Turbopack (http://localhost:3000)

# Build
pnpm build            # Build for production with Turbopack
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format all code with Prettier
pnpm format:check     # Check formatting without modifying files
pnpm typecheck        # Run TypeScript type checking (no emit)
pnpm i18n:check       # Validate i18n message files
```

## Architecture

### Content Management with Velite

- **Content location**: `src/content/` directory contains all MDX content
- **Collections**:
  - `blog/[locale]/`: Blog posts organized by locale (e.g., `blog/en/`, `blog/tr/`)
  - `authors/[locale]/`: Author profiles by locale
- **Build process**: Velite runs automatically during `dev` and `build` via `next.config.mjs`
- **Output**: Generated content types are available at `#site/content` (aliased to `.velite/` directory)
- **Schema**: See `velite.config.ts` for Post and Author schemas with computed fields

### Internationalization (i18n)

- **Framework**: next-intl with locale-based routing
- **Supported locales**: English (`en`), Turkish (`tr`) - defined in `src/config/i18n.ts`
- **Default locale**: `en`
- **Locale strategy**: `localePrefix: 'never'` - default locale has no prefix in URLs
- **Translation files**: `messages/[locale].json` contain all UI strings
- **Routing config**: `src/i18n/routing.ts` defines localized pathnames
  - `/about` → `/hakkımda` (Turkish)
  - `/projects` → `/projeler` (Turkish)
  - Blog paths remain the same across locales

### App Structure

```
src/app/[locale]/
├── layout.tsx              # Root layout with locale detection, fonts, providers
└── (marketing)/            # Marketing route group
    ├── layout.tsx          # Marketing layout with navigation
    ├── page.tsx            # Home page
    ├── about/              # About page
    ├── projects/           # Projects page
    └── blog/               # Blog pages
        ├── page.tsx        # Blog listing
        └── [...slug]/      # Dynamic blog post pages
            └── page.tsx
```

- **Route groups**: `(marketing)` wraps all public pages, shares navigation layout
- **Locale params**: All pages receive `locale` param via `params` prop (Next.js 15 async params)
- **Static generation**: Uses `generateStaticParams` for blog posts with locale + slug combinations

### Content Rendering

- **MDX rendering**: `src/components/mdx/index.tsx` provides custom MDX components
- **Code highlighting**: rehype-pretty-code with Dracula theme
- **Heading links**: rehype-slug + rehype-autolink-headings for automatic anchor links
- **Custom components**: Callout, MdxCard, Pre (with copy button) available in MDX

### Styling

- **CSS framework**: Tailwind CSS v4 (uses `@tailwindcss/postcss`)
- **UI components**: Radix UI primitives with shadcn/ui patterns in `src/components/ui/`
- **Theme**: next-themes for dark mode with system preference support
- **Utility function**: `cn()` in `src/lib/utils.ts` combines clsx + tailwind-merge for conditional classes
- **Animations**: Motion (Framer Motion) for smooth transitions

### TypeScript Configuration

- **Path aliases**:
  - `@/*` → `./src/*` for all source files
  - `#site/content` → `./.velite` for generated Velite content
- **Target**: ES2017 for broad compatibility
- **Module resolution**: bundler mode for Next.js

## Git Workflow

- **Pre-commit hooks**: Husky runs lint-staged before commits
- **Lint-staged tasks** (`.lintstagedrc.mjs`):
  - TypeScript files: ESLint → Type checking → Prettier
  - Translation files: i18n validation
  - MDX/JSON/YAML: Prettier formatting

## Key Patterns

### Content Queries

```typescript
import { authors, posts } from '#site/content';

// Filter by locale and slug
const post = posts.find((p) => p.locale === locale && p.slugAsParams === slugPath);
const author = authors.find((a) => a.slug === `authors/${locale}/${authorName}`);
```

### Computed Fields

Velite automatically adds these to all content:

- `locale`: Extracted from file path (e.g., `blog/en/` → `en`)
- `slugAsParams`: URL-safe slug without locale prefix

### Localized Links

```typescript
import { Link } from '@/i18n/navigation';

// Automatically uses correct locale and localized pathname
<Link href="/about">About</Link>
```

### Translations

```typescript
import { getTranslations } from 'next-intl/server';

const t = await getTranslations();
t('Shared.publishedOn', { date: formatDate(post.date, locale) });
```

## Content Creation

To add a new blog post:

1. Create `src/content/blog/[locale]/[slug].mdx`
2. Add frontmatter: `title`, `description`, `date`, `image`, `authors`, `published`
3. Velite will generate TypeScript types and make it available via `#site/content`
4. Post automatically appears in blog listing and has generated static page

## SEO Configuration

### Sitemap & Robots

- **Sitemap**: Auto-generated at `/sitemap.xml` (`src/app/sitemap.ts`)
  - Includes all static routes (home, about, projects, blog) for both locales
  - Includes all published blog posts with locale information
  - Implements alternate language links (hreflang)
  - Updates `lastModified` based on post publication dates
- **Robots.txt**: Generated at `/robots.txt` (`src/app/robots.ts`)
  - Allows all crawlers by default
  - References sitemap location

### Metadata Strategy

- **Root layout** (`src/app/[locale]/layout.tsx`): Base metadata with Open Graph, Twitter cards, robots directives
- **Page-specific metadata**: Each page uses `generateMetadata()` helper from `src/lib/seo.ts`
- **Blog posts**: Rich metadata including article-specific Open Graph tags, publication dates, authors
- **Utility function**: `generateMetadata()` in `src/lib/seo.ts` creates consistent metadata across pages

### Structured Data (JSON-LD)

- **Home page**: Person schema for author profile
- **Blog posts**: BlogPosting schema with article metadata
- Helper: `generateStructuredData()` in `src/lib/seo.ts`

### Manifest

- **PWA manifest**: Generated at `/manifest.json` (`src/app/manifest.ts`)
- Configures app name, icons, theme colors for mobile devices

## Important Notes

- **Async params**: Next.js 15 requires `await params` in all pages/layouts
- **Turbopack**: Uses Turbopack for faster builds (`--turbopack` flag in scripts)
- **Fonts**: Uses Geist Sans and Geist Mono (Google Fonts) loaded in root layout
- **Environment**: Set `NEXT_PUBLIC_APP_URL` for absolute URLs in metadata (required for SEO)

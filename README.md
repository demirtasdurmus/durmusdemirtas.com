# durmusdemirtas.com

Personal portfolio and blog website built with Next.js, featuring a modern design with smooth animations and multi-language support.

## Tech Stack

- **Framework:** Next.js 15 (App Router) with Turbopack
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI, shadcn/ui
- **Animations:** Motion (Framer Motion)
- **Internationalization:** next-intl (English/Turkish)
- **Content:** Velite (MDX-based)
- **Theme:** next-themes (dark mode)
- **Code Quality:** ESLint, Prettier, Husky, lint-staged

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

## Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm i18n:check` - Validate i18n messages

## Project Structure

```
src/
├── app/[locale]/          # App Router with locale routing
│   └── (marketing)/       # Marketing pages (home, blog, projects, about)
├── components/            # React components
│   ├── home/              # Home page components
│   ├── motion/            # Animation variants
│   └── ui/                # UI components (shadcn/ui)
├── config/                # Configuration files
├── content/               # MDX content (blog posts, authors)
│   ├── blog/
│   └── authors/
├── i18n/                  # Internationalization setup
└── styles/                # Global styles
```

## Features

- ✨ Modern, responsive design
- 🌍 Multi-language support (EN/TR)
- 📝 MDX-based blog with syntax highlighting
- 🎨 Dark mode support
- 🎭 Smooth animations and transitions
- 📱 Fully responsive
- ⚡ Optimized performance with Turbopack

## License

See [LICENSE](LICENSE) file for details.

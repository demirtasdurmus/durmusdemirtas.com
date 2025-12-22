import createNextIntlPlugin from 'next-intl/plugin';

const isDev = process.argv.indexOf('dev') !== -1;
const isBuild = process.argv.indexOf('build') !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1';
  const { build } = await import('velite');
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // @see https://nextjs.org/docs/15/app/api-reference/config/next-config-js/output#automatically-copying-traced-files
  ...(process.env.NEXT_BUILD_OUTPUT === 'standalone' ? { output: 'standalone' } : {})
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { defineCollection, defineConfig, s } from 'velite';

const computedFields = <T extends { slug: string }>(data: T) => {
  // Extract locale and slug from path like "blog/en/post-name" or "blog/tr/post-name"
  const slugParts = data.slug.split('/').slice(1); // Remove 'blog' prefix
  const locale = slugParts[0]; // First part is locale (en/tr)
  const slugAsParams = slugParts.slice(1).join('/'); // Rest is the actual slug

  return {
    ...data,
    locale,
    slugAsParams
  };
};

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(150),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      image: s.string().max(99),
      authors: s.array(s.string()),
      body: s.mdx()
    })
    .transform(computedFields)
});

const authors = defineCollection({
  name: 'Author',
  pattern: 'authors/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      avatar: s.string().max(99),
      twitter: s.string().max(99)
    })
    .transform(computedFields)
});

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { authors, posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'dracula' }],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
});

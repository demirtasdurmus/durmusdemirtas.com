import { BlogItemProps } from "@/components/Blog";
import { MediumArticle } from "@/lib/services/medium";

export function parseMediumArticles(
  articles: MediumArticle[]
): BlogItemProps[] {
  return articles.map((article) => {
    const thumbnailMatch = article.description.match(
      /<img.*?src=["'](https:\/\/cdn-images-1\.medium\.com\/max\/.*?|https:\/\/miro\.medium\.com\/max\/.*?)["']/
    );
    return {
      title: article.title,
      description: article.description,
      thumbnail: thumbnailMatch
        ? thumbnailMatch[1]
        : "/blog-image-placeholder.webp",
      href: article.link,
      publishedDate: new Date(article.pubDate).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      categories: article.categories,
    };
  });
}

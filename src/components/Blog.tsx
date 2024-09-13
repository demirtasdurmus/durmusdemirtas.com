import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Heading2, Heading4 } from "./ui/Heading";
import { Button } from "./ui/Button";
import { getMediumArticles } from "@/lib/services/medium";
import { parseMediumArticles } from "@/utils";

export default async function Blog() {
  const rawArticles = await getMediumArticles();
  const articles = parseMediumArticles(rawArticles);

  return (
    <section
      id="blog"
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
    >
      <Heading2 className="font-bold tracking-tight text-primary-200">
        My Blog
      </Heading2>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <BlogItem key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
}

export interface BlogItemProps {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
  publishedDate: string;
  categories: string[];
}

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  thumbnail,
  href,
  publishedDate,
  categories,
}) => {
  return (
    <Card className="animate-fade-in-up flex flex-col h-full">
      <CardContent className="flex flex-col h-full p-2 md:p-4">
        <div className="relative w-full pt-[56.25%]">
          {/* 16:9 aspect ratio */}
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-lg object-cover"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <Heading4 className="font-bold text-primary-200">{title}</Heading4>

          <p className="text-sm text-neutral-300 mt-2">{publishedDate}</p>

          <div className="mt-4 flex-grow">
            {categories.map((category, index) => (
              <CategoryBadge key={index} category={category} />
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <Link
              href={href}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Read More</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
  return (
    <span className="mr-2 mb-2 inline-block rounded bg-primary-200 px-3 py-1 text-xs text-white">
      {category}
    </span>
  );
};

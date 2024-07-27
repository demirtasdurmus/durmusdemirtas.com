import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Blog() {
  return (
    <section
      id="blog"
      className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#6c5ce7]">
        My Blog
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BlogItem
          title="Blog Post 1"
          description="A brief description of the first blog post."
          image="/blog-image-placeholder.webp"
          href="#"
        />

        <BlogItem
          title="Blog Post 2"
          description="A brief description of the second blog post."
          image="/blog-image-placeholder.webp"
          href="#"
        />

        <BlogItem
          title="Blog Post 3"
          description="A brief description of the third blog post."
          image="/blog-image-placeholder.webp"
          href="#"
        />
      </div>
    </section>
  );
}

function BlogItem(props: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Card className="animate-fade-in-up h-[450px]">
      <CardContent className="pt-8">
        <Image
          src={props.image}
          width="400"
          height="300"
          alt="Blog Post 1"
          className="rounded-t-lg"
          priority
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-[#6c5ce7]">{props.title}</h3>

          <p className="mt-2 text-[#7b7b7b]">{props.description}</p>

          <div className="mt-4 flex justify-end">
            <Link
              href={props.href}
              className="inline-flex items-center rounded-md bg-[#6c5ce7] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#5a49c5] focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 animate-pulse"
              prefetch={false}
            >
              Read More
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

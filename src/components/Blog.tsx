import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";
import { Heading2, Heading4 } from "./ui/Heading";
import { Button } from "./ui/Button";

export default function Blog() {
  return (
    <section
      id="blog"
      className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <Heading2 className="font-bold tracking-tight text-primary-200">
        My Blog
      </Heading2>

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
          <Heading4 className="font-bold text-primary-200">
            {props.title}
          </Heading4>

          <p className="mt-2 text-neutral-400">{props.description}</p>

          <div className="mt-4 flex justify-end">
            <Link href={props.href} prefetch={false}>
              <Button>Read More</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

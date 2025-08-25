import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Heading2, Heading4 } from "./ui/Heading";
import { Button } from "./ui/Button";

const portfolioItems = [
  {
    name: "Emparazon",
    description:
      "Amazon keyword ranking tool that helps you find the best keywords to rank for and improve your sales.",
    image: "/portfolio/emparazon-com.png",
    href: "https://emparazon.com",
  },
  {
    name: "Udao",
    description:
      "Udao platform website where you can find information about the platform and the token.",
    image: "/portfolio/udao-org.png",
    href: "https://udao.org",
  },
  {
    name: "Udao Platform",
    description:
      "Decentralized education and learning platform built on blockchain technology.",
    image: "/portfolio/app-udao-org.png",
    href: "https://app.udao.org",
  },
  {
    name: "Rexven Platform",
    description:
      "A global e-commerce supply and fulfillment platform that enables entrepreneurs to sell products without holding inventory by handling sourcing, production, and shipping through a unified dashboard.",
    image: "/portfolio/rexven-com.png",
    href: "https://rexven.com",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
    >
      <Heading2 className="font-bold tracking-tight text-primary-200">
        My Portfolio
      </Heading2>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

interface PortfolioItemProps {
  name: string;
  description: string;
  image: string;
  href: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  name,
  description,
  image,
  href,
}) => {
  return (
    <Card className="animate-fade-in-up">
      <CardContent className="flex flex-col h-full p-2 md:p-4">
        <div className="relative w-full pt-[56.25%]">
          {/* 16:9 aspect ratio */}
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-lg object-cover"
          />
        </div>

        <div className="p-4">
          <Heading4 className="font-bold text-primary-200">{name}</Heading4>

          <p className="mt-2 text-neutral-400">{description}</p>

          <div className="mt-4 flex justify-end">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Button>View Project</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

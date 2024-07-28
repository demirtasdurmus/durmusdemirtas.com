import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-neutral-200 text-neutral-400">
      <Header />

      <main className="flex-1">
        <Hero />

        <About />

        <Portfolio />

        <Blog />

        <Contact />
      </main>
    </div>
  );
}

import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#f5f5f5] text-[#333]">
      <Header />

      <main className="flex-1">
        <Hero />

        <About />

        <Projects />

        <Blog />

        <Contact />
      </main>
    </div>
  );
}

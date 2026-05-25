import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Technologies } from "@/components/sections/technologies";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground dark:bg-[#0B1120] dark:text-white">
      <Navbar />

      <Hero />

      <About />

      <Technologies />

      <Projects />

      <Experience />

      <Contact />
    </main>
  );
}
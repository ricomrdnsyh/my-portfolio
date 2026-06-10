import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}


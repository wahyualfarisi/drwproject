import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Metrics } from "@/components/sections/Metrics";
import { Work } from "@/components/sections/Work";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Insights } from "@/components/sections/Insights";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg relative">
      <ScrollProgress />
      <Navbar />

      <Hero />
      <Services />
      <Process />
      <Metrics />
      <Work />
      <TechStack />
      <About />
      <Insights />
      <CTA />

      <Footer />
    </main>
  );
}

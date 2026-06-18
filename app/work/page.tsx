import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg relative">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 min-h-[70vh] flex items-center justify-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Our Work Placeholder</h1>
      </div>
      <Footer />
    </main>
  );
}

import Hero from "@/components/sections/Hero";
import File from "@/components/sections/File";
import Experiments from "@/components/sections/Experiments";
import Abilities from "@/components/sections/Abilities";
import Battles from "@/components/sections/Battles";
import Signal from "@/components/sections/Signal";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Very light overlay to ensure text readability */}
      <div className="fixed inset-0 bg-black/10 pointer-events-none z-0" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

      {/* The File Section (About) */}
      <File />

      {/* Experiments Section (Projects) */}
      <Experiments />

      {/* Abilities Section (Skills) */}
      <Abilities />

      {/* Battles Section (Experience) */}
      <Battles />

      {/* Signal Section (Contact) */}
      <Signal />
      </div>
    </main>
  );
}

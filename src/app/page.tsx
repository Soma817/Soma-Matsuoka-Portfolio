import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-[#e8e8ed] overflow-x-hidden">
      {/* Interactive Particle Canvas */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <TechStackSection />
        <ContactSection />
      </main>
    </div>
  );
}

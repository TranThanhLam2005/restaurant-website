// Landing page entry

import {
  HeroSection,
  HeroCTA,
  AboutSection,
  MenuPreviewSection,
  TestimonialsSection,
  GalarySection,
  BranchSection,
  FooterSection
} from "@/features/landing";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      <HeroCTA />
      <HeroSection />
      <AboutSection />
      <MenuPreviewSection />
      <TestimonialsSection />
      <GalarySection />
      <BranchSection />
      <FooterSection />
    </main>
  );
}

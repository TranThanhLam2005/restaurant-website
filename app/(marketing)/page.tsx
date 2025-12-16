// Landing page entry

import {
  HeroSection,
  HeroCTA,
  AboutSection,
  MenuPreviewSection,
  TestimonialsSection,
  GalarySection,
  BranchSection,
  RuleSection,
  FooterSection,
} from "@/features/landing";

export default function MarketingPage() {
  return (
    <main className="min-h-screen scroll-smooth px-2">
      <HeroCTA />
      <HeroSection />
      <AboutSection />
      <MenuPreviewSection />
      <TestimonialsSection />
      <GalarySection />
      <BranchSection />
      <RuleSection />
      <FooterSection />
    </main>
  );
}

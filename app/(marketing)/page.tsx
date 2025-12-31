// Landing page entry
import {
  HeroSection,
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

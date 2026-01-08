import MarketingHeader from "@/components/layout/marketing-header";
import FooterSection from "@/components/layout/footer-section";
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MarketingHeader />
      <main>{children}</main>
      <FooterSection />
    </>
  );
}

import AppHeader from "@/components/layout/app-header";
import FooterSection from "@/components/layout/footer-section";
export default function BookingLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <AppHeader />
      <main className="flex flex-col mx-40 my-24">{children}</main>
      <FooterSection />
    </>
  );
}

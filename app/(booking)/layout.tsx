import AppHeader from "@/components/layout/app-header";
export default function BookingLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
    </>
  );
}

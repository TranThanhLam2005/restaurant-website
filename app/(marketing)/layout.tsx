import AppHeader from "@/components/layout/app-header";
export default function BookingLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <AppHeader />
      <main className="flex flex-col mx-12 md:mx-40 mt-24">{children}</main>
    </>
  );
}

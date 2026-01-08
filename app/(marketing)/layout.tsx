import AppHeader from "@/components/layout/app-header";
export default function BookingLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <AppHeader />
      <main className="flex flex-col mx-40 my-24">{children}</main>
    </>
  );
}

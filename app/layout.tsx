import type {Metadata} from "next";
import {Cormorant_Garamond, Montserrat} from "next/font/google";
import "@/styles/globals.css";
import Providers from "./providers";

// Serif font - For headings, elegant display text, premium elements
const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// Sans-serif font - For body text, UI elements, buttons, labels
const fontSans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RoadHouse | Premium Steakhouse & Fine Dining",
  description: "Experience exceptional steaks and fine dining at RoadHouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSerif.variable} ${fontSans.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

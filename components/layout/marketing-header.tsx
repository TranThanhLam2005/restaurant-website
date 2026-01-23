"use client";

// import libraries
import {useRouter} from "next/navigation";

// import UI components
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";

import {AuthDialog} from "@/features/auth";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 40; // Height of fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default function MarketingHeader() {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h4
          className="font-bold tracking-wider bg-gradient-to-r from-[#4A3728] to-[#8B7355] bg-clip-text text-transparent cursor-pointer"
          onClick={() => router.push("/")}
        >
          RoadHouse
        </h4>
        <Tabs defaultValue="home" className="hidden md:block">
          <TabsList>
            <TabsTrigger value="home" onClick={() => scrollToSection("hero")}>
              Home
            </TabsTrigger>
            <TabsTrigger value="menu" onClick={() => scrollToSection("menu")}>
              Menu
            </TabsTrigger>
            <TabsTrigger
              value="testimonials"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </TabsTrigger>
            <TabsTrigger
              value="branches"
              onClick={() => scrollToSection("branches")}
            >
              Branches
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-4">
          <Button
            className="items-center gap-2"
            variant="outline"
            onClick={() => router.push("/booking")}
          >
            Book Now
          </Button>
          <AuthDialog />
        </div>
      </div>
    </header>
  );
}

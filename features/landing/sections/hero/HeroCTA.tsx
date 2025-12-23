"use client";

import { useRouter } from "next/navigation";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

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

export default function HeroCTA() {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#4A3728] to-[#8B7355] bg-clip-text text-transparent">
          RoadHouse
        </h1>
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
          <Button className="items-center gap-2" variant="outline" onClick = {() => router.push('/booking')}>
            Book Now
          </Button>
          <Avatar>
            <AvatarImage
              src="https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"
              alt="Avatar"
            />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

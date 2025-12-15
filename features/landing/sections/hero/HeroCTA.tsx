"use client";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Search} from "lucide-react";
export default function HeroCTA() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-[#8B7355]/20 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#4A3728] to-[#8B7355] bg-clip-text text-transparent">
          RoadHouse
        </h1>
        <Tabs defaultValue="home" className="hidden md:block">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="explore">Explore</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5" />
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

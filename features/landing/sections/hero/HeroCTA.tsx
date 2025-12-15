"use client"
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Search} from "lucide-react";
export default function HeroCTA() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              RoadHouse
            </h1>
            <Tabs defaultValue="home" className="hidden md:block">
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="home" className="data-[state=active]:bg-white data-[state=active]:text-black">Home</TabsTrigger>
                <TabsTrigger value="explore" className="data-[state=active]:bg-white data-[state=active]:text-black">Explore</TabsTrigger>
                <TabsTrigger value="favorites" className="data-[state=active]:bg-white data-[state=active]:text-black">Favorites</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Avatar className="border-2 border-white/20">
                <AvatarImage
                  src="https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"
                  alt="Avatar"
                />
                <AvatarFallback className="bg-white text-black">AB</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
    )
}
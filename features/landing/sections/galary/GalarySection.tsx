"use client";

import {Badge} from "@/components/ui/badge";
import {Camera} from "lucide-react";

export default function GalarySection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold tracking-tight mb-4">Gallery</h2>
          <p className="text-gray-400 text-xl mb-8">A visual journey through our culinary world</p>
          
          <div className="flex gap-3 justify-center flex-wrap">
            <Badge variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
              Outdoor Seating
            </Badge>
            <Badge variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
              Cozy Interior
            </Badge>
            <Badge variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
              Delicious Dishes
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          <div className="row-span-1 group relative overflow-hidden rounded-xl border border-white/10">
            <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-12 h-12 text-white/30" />
            </div>
          </div>
          <div className="row-span-2 group relative overflow-hidden rounded-xl border border-white/10">
            <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-16 h-16 text-white/30" />
            </div>
          </div>
          <div className="row-span-1 group relative overflow-hidden rounded-xl border border-white/10">
            <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-12 h-12 text-white/30" />
            </div>
          </div>
          <div className="row-span-1 group relative overflow-hidden rounded-xl border border-white/10">
            <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-12 h-12 text-white/30" />
            </div>
          </div>
          <div className="row-span-1 group relative overflow-hidden rounded-xl border border-white/10">
            <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-12 h-12 text-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {Badge} from "@/components/ui/badge";
import {Camera} from "lucide-react";

export default function GalarySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold tracking-tight mb-4 text-[#4A3728]">
            Gallery
          </h2>
          <p className="text-[#6B5444] text-xl mb-8">
            A visual journey through our culinary world
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Badge>Outdoor Seating</Badge>
            <Badge>Cozy Interior</Badge>
            <Badge>Delicious Dishes</Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          <div className="row-span-1 group relative overflow-hidden rounded-xl border border-[#8B7355]/20">
            <div className="w-full h-full bg-gradient-to-br from-[#8B7355]/15 to-[#8B7355]/5 group-hover:from-[#8B7355]/25 group-hover:to-[#8B7355]/15 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-12 h-12 text-[#8B7355]/40" />
            </div>
          </div>
          <div className="row-span-2 group relative overflow-hidden rounded-xl border border-[#8B7355]/20">
            <div className="w-full h-full bg-gradient-to-br from-[#8B7355]/15 to-[#8B7355]/5 group-hover:from-[#8B7355]/25 group-hover:to-[#8B7355]/15 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-16 h-16 text-[#8B7355]/40" />
            </div>
          </div>
          <div className="row-span-1 group relative overflow-hidden rounded-xl border border-[#8B7355]/20">
            <div className="w-full h-full bg-gradient-to-br from-[#8B7355]/15 to-[#8B7355]/5 group-hover:from-[#8B7355]/25 group-hover:to-[#8B7355]/15 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-12 h-12 text-[#8B7355]/40" />
            </div>
          </div>
          <div className="row-span-1 group relative overflow-hidden rounded-xl border border-[#8B7355]/20">
            <div className="w-full h-full bg-gradient-to-br from-[#8B7355]/15 to-[#8B7355]/5 group-hover:from-[#8B7355]/25 group-hover:to-[#8B7355]/15 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-12 h-12 text-[#8B7355]/40" />
            </div>
          </div>
          <div className="row-span-1 group relative overflow-hidden rounded-xl border border-[#8B7355]/20">
            <div className="w-full h-full bg-gradient-to-br from-[#8B7355]/15 to-[#8B7355]/5 group-hover:from-[#8B7355]/25 group-hover:to-[#8B7355]/15 transition-all duration-300 flex items-center justify-center">
              <Camera className="w-12 h-12 text-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

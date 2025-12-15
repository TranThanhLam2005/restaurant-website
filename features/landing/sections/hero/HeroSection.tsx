"use client";

import {Button} from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {ArrowRight, Sparkles} from "lucide-react";

export default function HeroSection() {
  return (
    <Skeleton 
      className="h-[500px] md:h-[600px] lg:h-[700px] w-full rounded-4xl"
    />
  );
}

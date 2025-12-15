"use client";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Star, Quote} from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4">What Our Guests Say</h2>
          <p className="text-gray-400 text-xl">Experiences that speak for themselves</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12 border-2 border-white/20">
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSM3QUB_nzTSFDZDsYEzD13W4XkESqeC4tqg6fulLS7iTQd5b0KVOPsFvWvPpmXeosZyYG5wz7m4nLQqzs"
                    alt="User Avatar"
                  />
                  <AvatarFallback className="bg-white text-black">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">Jane Doe</CardTitle>
                  <CardDescription className="text-gray-400">Food Critic</CardDescription>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="w-4 h-4 text-yellow-500" />
                  ))}
                </div>
              </div>
              <Quote className="w-8 h-8 text-white/20 mb-2" />
            </CardHeader>
            <CardContent className="text-gray-300">
              "An absolutely extraordinary dining experience. The attention to detail and flavors are unmatched. This is fine dining at its best!"
            </CardContent>
            <CardFooter>
              <CardDescription className="text-gray-500 text-sm">2 months ago</CardDescription>
            </CardFooter>
          </Card>
          
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12 border-2 border-white/20">
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSM3QUB_nzTSFDZDsYEzD13W4XkESqeC4tqg6fulLS7iTQd5b0KVOPsFvWvPpmXeosZyYG5wz7m4nLQqzs"
                    alt="User Avatar"
                  />
                  <AvatarFallback className="bg-white text-black">MS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">Michael Smith</CardTitle>
                  <CardDescription className="text-gray-400">Regular Guest</CardDescription>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="w-4 h-4 text-yellow-500" />
                  ))}
                </div>
              </div>
              <Quote className="w-8 h-8 text-white/20 mb-2" />
            </CardHeader>
            <CardContent className="text-gray-300">
              "The ambiance is perfect for any occasion. Service is impeccable and the menu never disappoints. Our family's favorite spot!"
            </CardContent>
            <CardFooter>
              <CardDescription className="text-gray-500 text-sm">3 weeks ago</CardDescription>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

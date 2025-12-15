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
    <section className="py-24 bg-gradient-to-b from-[#E8DED0] to-[#F5F1EB] rounded-4xl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4 text-[#4A3728]">
            What Our Guests Say
          </h2>
          <p className="text-[#6B5444] text-xl">
            Experiences that speak for themselves
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12 border-2 border-[#8B7355]/30">
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSM3QUB_nzTSFDZDsYEzD13W4XkESqeC4tqg6fulLS7iTQd5b0KVOPsFvWvPpmXeosZyYG5wz7m4nLQqzs"
                    alt="User Avatar"
                  />
                  <AvatarFallback>
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle>
                    Jane Doe
                  </CardTitle>
                  <CardDescription>
                    Food Critic
                  </CardDescription>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill="currentColor"
                      className="w-4 h-4 text-[#B8860B]"
                    />
                  ))}
                </div>
              </div>
              <Quote className="w-8 h-8 text-[#8B7355]/20 mb-2" />
            </CardHeader>
            <CardContent>
              "An absolutely extraordinary dining experience. The attention to
              detail and flavors are unmatched. This is fine dining at its
              best!"
            </CardContent>
            <CardFooter>
              <CardDescription>
                2 months ago
              </CardDescription>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12 border-2 border-[#8B7355]/30">
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSM3QUB_nzTSFDZDsYEzD13W4XkESqeC4tqg6fulLS7iTQd5b0KVOPsFvWvPpmXeosZyYG5wz7m4nLQqzs"
                    alt="User Avatar"
                  />
                  <AvatarFallback>
                    MS
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle>Michael Smith</CardTitle>
                  <CardDescription>
                    Regular Guest
                  </CardDescription>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                    />
                  ))}
                </div>
              </div>
              <Quote className="w-8 h-8 text-white/20 mb-2" />
            </CardHeader>
            <CardContent>
              "The ambiance is perfect for any occasion. Service is impeccable
              and the menu never disappoints. Our family's favorite spot!"
            </CardContent>
            <CardFooter>
              <CardDescription>
                3 weeks ago
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

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
import {Award, Heart, Users} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-5xl font-bold tracking-tight">About Us</h2>
          <p className="text-xl text-gray-400">
            Welcome to RoadHouse! We are dedicated to providing the finest dining experience
            with passion, quality, and exceptional service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl">Excellence</CardTitle>
              <CardDescription className="text-gray-400">
                Award-winning cuisine crafted by world-class chefs
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              We believe in delivering nothing short of perfection in every dish we serve.
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl">Passion</CardTitle>
              <CardDescription className="text-gray-400">
                Created with love and dedication to the culinary arts
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              Every ingredient is carefully selected and every recipe is perfected with care.
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl">Community</CardTitle>
              <CardDescription className="text-gray-400">
                Building connections through exceptional experiences
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              We create memorable moments that bring people together around great food.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
              <CardTitle className="text-2xl">Community</CardTitle>
              <CardDescription className="text-gray-400">
                Building connections through exceptional experiences
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              We create memorable moments that bring people together around great food.
            </CardContent>
          </Card>
        </div>
    </div>
  );
}

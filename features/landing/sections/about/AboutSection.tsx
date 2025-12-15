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

export default function AboutSection() {
  return (
    <section className="py-24 bg-white rounded-4xl">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-[#4A3728]">
            About Us
          </h2>
          <p className="text-xl text-[#6B5444]">
            Welcome to RoadHouse! We are dedicated to providing the finest
            dining experience with passion, quality, and exceptional service.
          </p>
        </div>

        <div className="flex justify-evenly">
          <Card>
            <CardHeader>
              <CardTitle>Excellence</CardTitle>
              <CardDescription>
                Award-winning cuisine crafted by world-class chefs
              </CardDescription>
            </CardHeader>
            <CardContent>
              We believe in delivering nothing short of perfection in every dish
              we serve.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription>
                Building connections through exceptional experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              We create memorable moments that bring people together around
              great food.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

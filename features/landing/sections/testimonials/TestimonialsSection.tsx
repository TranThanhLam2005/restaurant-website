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

const reviews = [
  {
    name: "Jane Doe",
    role: "Food Critic",
    avatar:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSM3QUB_nzTSFDZDsYEzD13W4XkESqeC4tqg6fulLS7iTQd5b0KVOPsFvWvPpmXeosZyYG5wz7m4nLQqzs",
    rating: 5,
    quote:
      "From the moment I walked in, I was captivated by the ambiance and the exquisite menu. Each dish was a masterpiece, bursting with flavor and creativity.",
    timeAgo: "2 months ago",
  },
  {
    name: "John Smith",
    role: "Gourmet Blogger",
    avatar:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSM3QUB_nzTSFDZDsYEzD13W4XkESqeC4tqg6fulLS7iTQd5b0KVOPsFvWvPpmXeosZyYG5wz7m4nLQqzs",
    rating: 5,
    quote:
      "From the moment I walked in, I was captivated by the ambiance and the exquisite menu. Each dish was a masterpiece, bursting with flavor and creativity.",
    timeAgo: "3 months ago",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-[#E8DED0] to-[#F5F1EB] py-24 px-20 rounded-4xl">
      <h2 className="text-4xl text-primary font-bold tracking-tight mb-16 ">
        What Our Guests Say
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <Card className="hover:bg-background hover:shadow-[6px_6px_0px_rgba(139,69,19,1)] transition-shadow" key={index}>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={review.avatar} alt="User Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle>{review.name}</CardTitle>
                  <CardDescription>{review.role}</CardDescription>
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
              <Quote className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent>"{review.quote}"</CardContent>
            <CardFooter>
              <CardDescription>{review.timeAgo}</CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

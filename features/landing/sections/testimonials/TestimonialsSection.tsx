"use client";

import {motion} from "framer-motion";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Star, Quote} from "lucide-react";
import {
  sectionVariants,
  headingVariants,
  containerStaggerVariants,
  cardVariants,
  createStarVariants,
} from "../../animations/variants";

const starVariants = createStarVariants(0.3, 0.05);

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
    <motion.section
      id="testimonials"
      className="px-2 py-6 md:py-24 md:px-20 bg-gradient-to-b from-[#E8DED0] to-[#F5F1EB] rounded-4xl"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-10% 0px"}}
    >
      {/* Title */}
      <motion.h2
        className="text-primary font-bold mb-16"
        variants={headingVariants}
      >
        What Our Guests Say
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerStaggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{y: -6, transition: {duration: 0.2}}}
          >
            <Card className="hover:bg-background hover:shadow-[6px_6px_0px_rgba(139,69,19,1)] transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <CardTitle>{review.name}</CardTitle>
                    <CardDescription className="font-light">
                      {review.role}
                    </CardDescription>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={starVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                      >
                        <Star
                          fill="currentColor"
                          className="w-4 h-4 text-[#B8860B]"
                        />
                      </motion.span>
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-primary" />
              </CardHeader>

              <CardContent className="font-light italic">
                “{review.quote}”
              </CardContent>

              <CardFooter>
                <CardDescription>{review.timeAgo}</CardDescription>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

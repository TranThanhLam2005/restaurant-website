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

const sectionVariants = {
  hidden: {opacity: 0, y: 40},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.8, ease: "easeOut"},
  },
};

const headingVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6},
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const starVariants = {
  hidden: {opacity: 0, scale: 0.6},
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {delay: 0.3 + i * 0.05},
  }),
};

export default function TestimonialsSection() {
  return (
    <motion.section
      className="bg-gradient-to-b from-[#E8DED0] to-[#F5F1EB] py-24 px-20 rounded-4xl"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl text-primary font-bold tracking-tight mb-16"
        variants={headingVariants}
      >
        What Our Guests Say
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-2 gap-6"
        variants={containerVariants}
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
                    <CardDescription>{review.role}</CardDescription>
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

              <CardContent className="text-foreground">
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

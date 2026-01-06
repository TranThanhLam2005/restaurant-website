"use client";

import {motion} from "framer-motion";
import {GoogleMapsEmbed} from "@next/third-parties/google";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Clock} from "lucide-react";
import {
  sectionVariants,
  headingVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  createIndexedVariants,
} from "../../animations/variants";

const hourItemVariants = createIndexedVariants(0.2, 0.1);

export default function AboutSection() {
  return (
    <motion.section
      className="p-2 bg-white rounded-4xl mt-[-40px] relative z-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-10% 0px"}}
    >
      {/* Heading */}
      <motion.div
        className="mx-auto text-center space-y-6 mb-16"
        variants={headingVariants}
      >
        <h2 className="font-bold tracking-tight text-primary mt-10">
          About Us
        </h2>
        <p className="text-xl text-foreground">
          Welcome to RoadHouse! We are dedicated to providing the finest dining
          experience with passion, quality, and exceptional service.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-2 items-center">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 h-80 overflow-hidden rounded-3xl"
          variants={fadeInLeftVariants}
        >
          <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY || ""}
            height={500}
            width="100%"
            mode="place"
            q={"RoadHouse Restaurant, New York, NY"}
          />
        </motion.div>

        {/* Card */}
        <motion.div className="w-full md:w-1/2" variants={fadeInRightVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="text-primary text-3xl">
                OPENING HOURS
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {["Monday - Thursday", "Friday", "Saturday - Sunday"].map(
                (day, index) => (
                  <motion.div
                    key={day}
                    className="flex flex-col md:flex-row justify-between items-center bg-background p-4 rounded-xl"
                    custom={index}
                    variants={hourItemVariants}
                    whileHover={{scale: 1.02}}
                    transition={{duration: 0.2}}
                  >
                    <div>{day}</div>
                    <div className="font-bold">
                      <Clock className="inline-block w-5 h-5 mr-2 mb-1" />
                      11:00 AM - 10:00 PM
                    </div>
                  </motion.div>
                )
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}

"use client";
// import libraries
import {motion} from "framer-motion";

// import animations
import {
  containerStaggerVariants,
  cardVariants,
} from "@/components/common/animations";

export default function Post() {
  return (
    <motion.section
      variants={containerStaggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: false, amount: 0.3}}
      className="relative w-full max-w-xl mx-auto"
    >
      {/* Image Container */}
      <motion.div
        variants={cardVariants}
        className="relative overflow-hidden shadow-xl"
      >
        <img
          src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg"
          alt="Hanasaki King Crab"
          className="w-full h-[240px] object-cover"
        />
      </motion.div>

      {/* Content Card (Overlapping) */}
      <motion.div
        variants={cardVariants}
        className="relative -mt-16 mx-auto w-[90%] bg-white p-4 shadow-lg"
      >
        <h4 className="mb-4">
          Sushi Hokkaido Sachi continues to pursue its mission of offering
          delicious seasonal dishes.
        </h4>
        <h5 className="font-light">
          Sushi Hokkaido Sachi continues to pursue its mission of offering
          delicious seasonal dishes, so that customers can fully experience
          authentic seasonal cuisine as in Japan. For example, in spring there
          are cherry blossoms...
        </h5>
      </motion.div>
    </motion.section>
  );
}

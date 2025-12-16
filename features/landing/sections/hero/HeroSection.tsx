"use client";

import {motion} from "framer-motion";

const imageVariants = {
  hidden: {opacity: 0, y: 40},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <motion.img
      src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/texas-roadhouse-exterior.jpg?quality=82&strip=1"
      alt="Hero Image"
      className="w-full h-auto rounded-4xl shadow-lg mt-20"
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      style={{willChange: "opacity, transform"}}
    />
  );
}

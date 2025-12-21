"use client";

import {motion} from "framer-motion";
import {sectionVariants} from "../../animations/variants";

export default function HeroSection() {
  return (
    <motion.img
      id="hero"
      src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/texas-roadhouse-exterior.jpg?quality=82&strip=1"
      alt="Hero Image"
      className="w-full h-auto rounded-4xl shadow-lg mt-20"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      style={{willChange: "opacity, transform"}}
    />
  );
}

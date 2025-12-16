"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

/* ------------------ Data ------------------ */
const foods = [
  {
    id: "food1",
    src: "https://images.summitmedia-digital.com/spotph/images/2024/09/26/texas-roadhouse-menu-featured-image-1727344788.jpg",
    title: "Outdoor Seating",
    content:
      "Enjoy spacious outdoor seating with a relaxed atmosphere and fresh air.",
  },
  {
    id: "food2",
    src: "https://preview.redd.it/obligatory-friday-texas-roadhouse-pic-v0-kow6w0u9vivc1.jpg?width=640&crop=smart&auto=webp&s=7fead84a7b1200ad4add7b8f2756b6830c8ea42a",
    title: "Cozy Interior",
    content:
      "Warm wooden interior, soft lighting, and a comfortable dining vibe.",
  },
  {
    id: "food3",
    src: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_336,q_75,w_510/v1/crm/reddirt/Texas-Roadhouse-f88835bf5056b3a_f8883785-5056-b3a8-4945dc8a38629751.jpg",
    title: "Delicious Dishes",
    content:
      "Signature dishes prepared fresh with bold flavors and premium ingredients.",
  },
  {
    id: "food4",
    src: "https://www.allrecipes.com/thmb/4rByQ6x1OxcAZE1gJ0Qe9rpQEmk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-texasroadhouseprimerib-0b0f74de758f4a0fa6bedcdace94597c.jpg",
    title: "Prime Rib",
    content: "Slow-cooked prime rib, juicy, tender, and packed with flavor.",
  },
  {
    id: "food5",
    src: "https://www.allrecipes.com/thmb/dLOWVvXaxRuCNc8kfOZyPC5XmP0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-texasroadhousecountryfriedsteak-4f98495c08244dbcbeca318dc44fb0f5.jpg",
    title: "Country Fried Steak",
    content: "Classic comfort food with crispy coating and rich gravy.",
  },
];

/* ------------------ Motion Variants ------------------ */
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

/* ------------------ Component ------------------ */
export default function GalarySection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <motion.section
      className="py-24 px-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* ---------- Header ---------- */}
      <motion.div className="mb-12" variants={itemVariants}>
        <h2 className="text-4xl text-primary font-bold tracking-tight mb-4">
          PHOTOS
        </h2>
        <motion.div className="flex gap-3" variants={itemVariants}>
          <Badge>Outdoor Seating</Badge>
          <Badge>Cozy Interior</Badge>
          <Badge>Delicious Dishes</Badge>
        </motion.div>
      </motion.div>

      {/* ---------- Grid ---------- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
        {foods.map((food, index) => (
          <motion.div
            key={food.id}
            layoutId={food.id}
            variants={itemVariants}
            className={`overflow-hidden rounded-2xl cursor-pointer ${
              index === 1 ? "row-span-2" : "row-span-1"
            }`}
            onClick={() => setSelected(food)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{willChange: "transform"}}
          >
            <img
              src={food.src}
              alt={food.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* ---------- Modal ---------- */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-6"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={selected.id}
              className="bg-background rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-[400px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {selected.title}
                </h3>
                <p className="text-muted-foreground">
                  {selected.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {Collapsible, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";
import {ChevronDown} from "lucide-react";
import {
  sectionVariants,
  headingVariants,
  expandVariants,
  createCardIndexedVariants,
} from "../../animations/variants";

const cardVariants = createCardIndexedVariants(0.1);

const datashow = [
  {
    title: "Margherita Pizza",
    description: "Classic delight with fresh tomatoes, mozzarella, and basil",
    price: "$28",
  },
  {
    title: "Truffle Risotto",
    description: "Creamy arborio rice with black truffle and parmesan",
    price: "$42",
  },
  {
    title: "Wagyu Steak",
    description: "Premium A5 wagyu with seasonal vegetables",
    price: "$85",
  },
];

const dataHide = [
  {
    title: "Seafood Linguine",
    description: "Fresh lobster, shrimp, and clams in white wine sauce",
    price: "$38",
  },
  {
    title: "Caesar Salad",
    description: "Crisp romaine with house-made Caesar dressing",
    price: "$18",
  },
];

export default function MenuPreviewSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      className="px-2 py-6 md:py-24 md:px-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
    >
      <div className="mx-auto">
        <motion.h2
          className="text-4xl font-bold tracking-tight text-primary text-center mb-8 md:mb-20"
          variants={headingVariants}
        >
          Featured Menu Items
        </motion.h2>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="space-y-4">
            {/* Always visible cards */}
            {datashow.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                whileHover={{y: -4, transition: {duration: 0.2}}}
              >
                <Card className="bg-background hover:bg-card hover:shadow-[6px_6px_0px_rgba(139,69,19,1)] transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-primary text-2xl mb-2 font-semibold">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-foreground">
                          {item.description}
                        </CardDescription>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        {item.price}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}

            {/* Expandable cards */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="space-y-4"
                  variants={expandVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {dataHide.map((item, index) => (
                    <motion.div
                      key={item.title}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{y: -4, transition: {duration: 0.2}}}
                    >
                      <Card className="bg-background hover:bg-card hover:shadow-[6px_6px_0px_rgba(139,69,19,1)] transition-all">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <CardTitle className="text-primary text-2xl mb-2 font-semibold">
                                {item.title}
                              </CardTitle>
                              <CardDescription className="text-foreground">
                                {item.description}
                              </CardDescription>
                            </div>
                            <span className="text-2xl font-bold text-primary">
                              {item.price}
                            </span>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle button */}
            <div className="flex items-center justify-center gap-4 pt-6">
              <CollapsibleTrigger asChild>
                <Button variant="outline">
                  {isOpen ? "Show Less" : "Show More"}
                  <motion.span
                    animate={{rotate: isOpen ? 180 : 0}}
                    transition={{duration: 0.3}}
                    className="ml-2 inline-flex"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </Collapsible>
      </div>
    </motion.section>
  );
}

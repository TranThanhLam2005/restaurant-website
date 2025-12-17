"use client";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {Progress} from "@/components/ui/progress";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {Star} from "lucide-react";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {useIsMobile} from "@/hooks/use-mobile";
import {
  sectionStaggerVariants,
  headingVariants,
  cardVariants,
  progressVariants,
} from "../../animations/variants";

export default function BranchSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const branches = [
    {
      name: "Downtown Branch",
      description: "Our flagship location in the heart of the city",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
    {
      name: "Waterfront Branch",
      description: "Stunning views with exceptional dining",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
    {
      name: "Garden District",
      description: "Intimate dining in a charming neighborhood",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
    {
      name: "Garden District",
      description: "Intimate dining in a charming neighborhood",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
    {
      name: "Garden District",
      description: "Intimate dining in a charming neighborhood",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
  ];

  return (
    <motion.section
      className="px-2 py-6 md:py-24 md:px-20 bg-gradient-to-b from-[#E8DED0] to-[#F5F1EB] rounded-4xl"
      variants={sectionStaggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold tracking-tight mb-12 text-primary text-center md:text-left"
        variants={headingVariants}
      >
        PEOPLE ALSO SEARCHED
      </motion.h2>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        <CarouselContent className="py-2">
          {(isMobile ? branches.slice(0, 2) : branches).map((branch, index) => (
            <CarouselItem key={index}>
              <motion.div
                variants={cardVariants}
                whileHover={{y: -6, transition: {duration: 0.2}}}
              >
                <Card className="hover:bg-background hover:shadow-[6px_6px_0px_rgba(139,69,19,1)] transition-all">
                  <div className="overflow-hidden mx-4 rounded-2xl">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle>{branch.name}</CardTitle>
                    <CardDescription>{branch.description}</CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill="currentColor"
                          className="w-5 h-5 text-[#B8860B]"
                        />
                      ))}
                      <span className="ml-2 text-lg font-semibold">5.0</span>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {!isMobile ? (
          <>
            <CarouselPrevious className="-left-12 bg-background text-foreground hover:text-primary" />
            <CarouselNext className="-right-12 bg-background text-foreground hover:text-primary" />
          </>
        ) : (
          <></>
        )}
      </Carousel>

      {/* Progress */}
      <motion.div className="mt-8 space-y-4" variants={progressVariants}>
        <div className="text-center text-sm text-foreground">
          Branch {current} of {count}
        </div>
        <Progress value={(current / count) * 100} />
      </motion.div>
    </motion.section>
  );
}

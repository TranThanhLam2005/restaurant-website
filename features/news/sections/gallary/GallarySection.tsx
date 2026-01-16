"use client";
// import libraries
import {useState, useEffect} from "react";
import {motion} from "framer-motion";

// import components
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {useIsMobile} from "@/hooks/use-mobile";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {fadeVariants} from "@/components/common/animations";

export default function GallarySection() {
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

  const news = [
    {
      image:
        "https://zeroinchinteriorsltd.com/wp-content/uploads/2023/09/The-primary-dining-area-of-a-modern-and-minimalistic-Italian-Fine-Dining-restaurant-adorned-in-raspberry-tones.-2.jpg",
    },
    {
      image:
        "https://www.texasroadhouse.com/sites/default/files/2021-10/og-image.jpg",
    },
    {
      image:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/texas-roadhouse-exterior.jpg?quality=82&strip=1",
    },
    {
      image:
        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    },
  ];
  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: false}}
      className="w-full max-w-5xl mx-auto"
    >
      <Carousel
        setApi={setApi}
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        <CarouselContent>
          {news.map((item, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={3 / 1}>
                <img src={item.image} className="w-full h-full object-cover" />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 py-4">
          {Array.from({length: count}).map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                current === i + 1 ? "bg-primary " : "bg-muted"
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>

        {!isMobile ? (
          <>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </>
        ) : (
          <></>
        )}
      </Carousel>
    </motion.div>
  );
}

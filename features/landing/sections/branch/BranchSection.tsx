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
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {Star, MapPin, Clock} from "lucide-react";
import {useState, useEffect} from "react";

export default function BranchSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
      address: "123 Main Street, Downtown",
      hours: "Mon-Sun: 11AM - 11PM",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
    {
      name: "Waterfront Branch",
      description: "Stunning views with exceptional dining",
      address: "456 Harbor Drive, Waterfront",
      hours: "Mon-Sun: 10AM - 12AM",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
    {
      name: "Garden District",
      description: "Intimate dining in a charming neighborhood",
      address: "789 Garden Lane, West Side",
      hours: "Tue-Sun: 12PM - 10PM",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
    {
      name: "Garden District",
      description: "Intimate dining in a charming neighborhood",
      address: "789 Garden Lane, West Side",
      hours: "Tue-Sun: 12PM - 10PM",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
    {
      name: "Garden District",
      description: "Intimate dining in a charming neighborhood",
      address: "789 Garden Lane, West Side",
      hours: "Tue-Sun: 12PM - 10PM",
      image:
        "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#E8DED0] to-[#F5F1EB] rounded-4xl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold tracking-tight mb-4 text-[#4A3728]">
            Our Locations
          </h2>
          <p className="text-[#6B5444] text-xl">
            Visit us at any of our branches
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {branches.map((branch, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{branch.name}</CardTitle>
                      <CardDescription>{branch.description}</CardDescription>

                      <div className="space-y-3 text-[#5D4A3A]">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-[#8B7355]" />
                          <span>{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-[#8B7355]" />
                          <span>{branch.hours}</span>
                        </div>
                      </div>

                      <CardFooter>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              fill="currentColor"
                              className="w-5 h-5 text-[#B8860B]"
                            />
                          ))}
                          <span className="ml-2 text-lg font-semibold text-[#4A3728]">
                            5.0
                          </span>
                        </div>
                      </CardFooter>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 bg-[#F5F1EB] border-[#8B7355]/30 hover:bg-[#E8DED0] text-[#4A3728]" />
            <CarouselNext className="-right-12 bg-[#F5F1EB] border-[#8B7355]/30 hover:bg-[#E8DED0] text-[#4A3728]" />
          </Carousel>

          <div className="mt-8 space-y-4">
            <div className="text-center text-sm text-[#6B5444]">
              Branch {current} of {count}
            </div>
            <Progress value={(current / count) * 100} />
          </div>
        </div>
      </div>
    </section>
  );
}

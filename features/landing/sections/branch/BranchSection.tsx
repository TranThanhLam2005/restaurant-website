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
    <section className="py-24 px-20 bg-gradient-to-b from-[#E8DED0] to-[#F5F1EB] rounded-4xl">
      <h2 className="text-4xl font-bold tracking-tight mb-12 text-primary">
        PEOPLE ALSO SEARCHED
      </h2>

      <div>
        <Carousel setApi={setApi}>
          <CarouselContent className="py-2">
            {branches.map((branch, index) => (
              <CarouselItem key={index}>
                <Card className="hover:bg-background hover:shadow-[6px_6px_0px_rgba(139,69,19,1)] transition-shadow">
                  <div className="overflow-hidden mx-2 rounded-2xl">
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
                      <span className="ml-2 text-lg font-semibold text-foreground">
                        5.0
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 bg-background text-foreground hover:text-primary" />
          <CarouselNext className="-right-12 bg-background text-foreground hover:text-primary" />
        </Carousel>

        <div className="mt-8 space-y-4">
          <div className="text-center text-sm text-foreground">
            Branch {current} of {count}
          </div>
          <Progress value={(current / count) * 100} />
        </div>
      </div>
    </section>
  );
}

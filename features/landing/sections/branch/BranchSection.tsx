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
      image: "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA"
    },
    {
      name: "Waterfront Branch",
      description: "Stunning views with exceptional dining",
      address: "456 Harbor Drive, Waterfront",
      hours: "Mon-Sun: 10AM - 12AM",
      image: "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA"
    },
    {
      name: "Garden District",
      description: "Intimate dining in a charming neighborhood",
      address: "789 Garden Lane, West Side",
      hours: "Tue-Sun: 12PM - 10PM",
      image: "https://vcdn1-english.vnecdn.net/2025/11/07/5-1762499974.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=9Gk5E04oZzB58k3LCe33EA"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold tracking-tight mb-4">Our Locations</h2>
          <p className="text-gray-400 text-xl">Visit us at any of our branches</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {branches.map((branch, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white/5 border-white/10 overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={branch.image} 
                        alt={branch.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-3xl mb-2">{branch.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-lg mb-4">
                        {branch.description}
                      </CardDescription>
                      
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-gray-400" />
                          <span>{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-gray-400" />
                          <span>{branch.hours}</span>
                        </div>
                      </div>
                      
                      <CardFooter className="px-0 pt-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" className="w-5 h-5 text-yellow-500" />
                          ))}
                          <span className="ml-2 text-lg font-semibold">5.0</span>
                        </div>
                      </CardFooter>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 bg-white/5 border-white/10 hover:bg-white/10" />
            <CarouselNext className="-right-12 bg-white/5 border-white/10 hover:bg-white/10" />
          </Carousel>
          
          <div className="mt-8 space-y-4">
            <div className="text-center text-sm text-gray-400">
              Branch {current} of {count}
            </div>
            <Progress 
              value={(current / count) * 100} 
              className="h-1 bg-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

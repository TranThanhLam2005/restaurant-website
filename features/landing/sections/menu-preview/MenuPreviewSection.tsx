"use client";
import {useState} from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";
import {ChevronDown, Sparkles} from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className="py-24 px-20">
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold tracking-tight  text-primary text-center mb-20">
          Featured Menu Items
        </h2>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="space-y-4">
            {datashow.map((item, index) => (
              <Card
                key={index}
                className="bg-background hover:bg-card hover:shadow-[6px_6px_0px_rgba(139,69,19,1)] transition-shadow"
              >
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
            ))}
            <CollapsibleContent>
              <div className="space-y-4">
                {dataHide.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-background hover:bg-card hover:shadow-[6px_6px_0px_rgba(139,69,19,1)] transition-shadow"
                  >
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
                ))}
              </div>
            </CollapsibleContent>
            <div className="flex items-center justify-center gap-4">
              <CollapsibleTrigger asChild>
                <Button variant="outline">
                  {isOpen ? "Show Less" : "Show More"}
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </Collapsible>
      </div>
    </section>
  );
}

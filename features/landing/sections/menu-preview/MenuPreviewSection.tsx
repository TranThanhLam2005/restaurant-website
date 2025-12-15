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

export default function MenuPreviewSection() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-[#4A3728]">
              Featured Menu
            </h2>
            <p className="text-[#6B5444] text-xl">
              Handcrafted culinary masterpieces
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
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

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle>
                        Margherita Pizza
                        <Sparkles className="w-4 h-4 text-[#B8860B]" />
                      </CardTitle>
                      <CardDescription>
                        Classic delight with fresh tomatoes, mozzarella, and
                        basil
                      </CardDescription>
                    </div>
                    <span className="text-2xl font-bold text-[#4A3728]">
                      $28
                    </span>
                  </div>
                </CardHeader>
              </Card>

              <CollapsibleContent>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle>Truffle Risotto</CardTitle>
                        <CardDescription>
                          Creamy arborio rice with black truffle and parmesan
                        </CardDescription>
                      </div>
                      <span className="text-2xl font-bold text-[#4A3728]">
                        $42
                      </span>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle>Wagyu Steak</CardTitle>
                        <CardDescription>
                          Premium A5 wagyu with seasonal vegetables
                        </CardDescription>
                      </div>
                      <span className="text-2xl font-bold text-[#4A3728]">
                        $85
                      </span>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle>Seafood Linguine</CardTitle>
                        <CardDescription>
                          Fresh lobster, shrimp, and clams in white wine sauce
                        </CardDescription>
                      </div>
                      <span className="text-2xl font-bold text-[#4A3728]">
                        $38
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}

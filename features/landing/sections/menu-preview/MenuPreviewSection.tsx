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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Featured Menu</h2>
            <p className="text-gray-400 text-xl">Handcrafted culinary masterpieces</p>
          </div>
          
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-4">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="text-sm text-gray-400 hover:text-white hover:bg-white/5">
                  {isOpen ? 'Show Less' : 'Show More'}
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        Margherita Pizza
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                      </CardTitle>
                      <CardDescription className="text-gray-400 mt-2">
                        Classic delight with fresh tomatoes, mozzarella, and basil
                      </CardDescription>
                    </div>
                    <span className="text-2xl font-bold">$28</span>
                  </div>
                </CardHeader>
              </Card>
              
              <CollapsibleContent className="space-y-4">
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-2xl">Truffle Risotto</CardTitle>
                        <CardDescription className="text-gray-400 mt-2">
                          Creamy arborio rice with black truffle and parmesan
                        </CardDescription>
                      </div>
                      <span className="text-2xl font-bold">$42</span>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-2xl">Wagyu Steak</CardTitle>
                        <CardDescription className="text-gray-400 mt-2">
                          Premium A5 wagyu with seasonal vegetables
                        </CardDescription>
                      </div>
                      <span className="text-2xl font-bold">$85</span>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-2xl">Seafood Linguine</CardTitle>
                        <CardDescription className="text-gray-400 mt-2">
                          Fresh lobster, shrimp, and clams in white wine sauce
                        </CardDescription>
                      </div>
                      <span className="text-2xl font-bold">$38</span>
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
        </CardHeader>
      </Card>
      <CollapsibleContent className="flex flex-col gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Margherita Pizza</CardTitle>
            <CardDescription className="flex justify-between">
              <p>Classic delight with fresh tomatoes and basil</p>
              <p>$28.00</p>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Margherita Pizza</CardTitle>
            <CardDescription className="flex justify-between">
              <p>Classic delight with fresh tomatoes and basil</p>
              <p>$28.00</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}

"use client";
import {useState} from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

export default function MenuNav({children}: {children: React.ReactNode}) {
  const [selectedTab, setSelectedTab] = useState("Meat");
  return (
    <div className="h-[calc(100vh-12rem)]">
      <Tabs defaultValue="Meat" onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="Meat">Meat</TabsTrigger>
          <TabsTrigger value="Wine">Wine</TabsTrigger>
          <TabsTrigger value="Dessert">Dessert</TabsTrigger>
          <TabsTrigger value="Drink">Drinks</TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator className="my-6" />

      {/* ================= BODY ================= */}
      <ResizablePanelGroup orientation="horizontal">
        {/* ===== LEFT SIDEBAR ===== */}
        <ResizablePanel defaultSize={25} minSize={20}>
          <ScrollArea className="h-full w-full pr-4">
            <h2 className="font-bold text-muted-foreground text-center mb-4">
              {selectedTab}
            </h2>
            {/* <StateCitySelected
              states={states}
              selectedState={formData.state}
              selectedStateId={formData.stateId}
              selectedCity={formData.city}
              selectedCityId={formData.cityId}
              onStateChange={(stateName, stateId) => {
                updateField("state", stateName);
                updateField("stateId", stateId);
                updateField("city", "");
                updateField("cityId", "");
                updateField("branch", "");
                syncStepWithValidation();
              }}
              onCityChange={(cityName, cityId) => {
                updateField("city", cityName);
                updateField("cityId", cityId);
                updateField("branch", "");
                syncStepWithValidation();
              }}
            /> */}

            <Accordion type="multiple" className="w-full">
              {/* ===== MEAT ===== */}
              <AccordionItem value="meat">
                <AccordionTrigger>Meat</AccordionTrigger>
                <AccordionContent>
                  <Button variant="link" className="w-full justify-start">
                    Sausage
                  </Button>
                  <Button variant="link" className="w-full justify-start">
                    Lamb
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="wine">
                <AccordionTrigger>Wine</AccordionTrigger>
                <AccordionContent>
                  <Button variant="link" className="w-full justify-start">
                    Champagne
                  </Button>
                  <Button variant="link" className="w-full justify-start">
                    Sparkling
                  </Button>
                  <Button variant="link" className="w-full justify-start">
                    Red Wine
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="dessert">
                <AccordionTrigger>Dessert</AccordionTrigger>
                <AccordionContent>
                  <Button variant="link" className="w-full justify-start">
                    Cake
                  </Button>
                  <Button variant="link" className="w-full justify-start">
                    Ice Cream
                  </Button>
                  <Button variant="link" className="w-full justify-start">
                    Chocolate
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="drinks">
                <AccordionTrigger>Drinks</AccordionTrigger>
                <AccordionContent>
                  <Button variant="link" className="w-full justify-start">
                    Champagne
                  </Button>
                  <Button variant="link" className="w-full justify-start">
                    Sparkling
                  </Button>
                  <Button variant="link" className="w-full justify-start">
                    Cocktails
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="burger">
                <AccordionTrigger>Burger - Spaghetti</AccordionTrigger>
                <AccordionContent>
                  <Button variant="link" className="w-full justify-start">
                    Burger
                  </Button>
                  <Button variant="link" className="w-full justify-start">
                    Spaghetti
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        </ResizablePanel>

        <ResizableHandle />
        {children}
      </ResizablePanelGroup>
    </div>
  );
}

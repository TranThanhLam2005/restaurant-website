"use client";
import {useEffect, useState, cloneElement, ReactElement} from "react";
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
import {MenuSection} from "@/features/menu/types";

export default function MenuNav({
  children,
  menuSections,
}: {
  children: React.ReactNode;
  menuSections: MenuSection[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const meatSection = menuSections.find((s) => s.name === "Meat");
    const steaksCategory = meatSection?.categories.find(
      (c) => c.name === "Steaks"
    );

    if (steaksCategory) {
      setActiveCategory(steaksCategory.id);
    }
  }, [menuSections]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <Tabs defaultValue="Meat">
        <TabsList>
          {menuSections.map((section) => (
            <TabsTrigger key={section.id} value={section.name}>
              {section.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Separator className="my-6" />

      {/* ================= BODY ================= */}
      <ResizablePanelGroup orientation="horizontal">
        {/* ===== LEFT SIDEBAR ===== */}
        <ResizablePanel defaultSize={25} minSize={20}>
          <ScrollArea className="h-full w-full pr-4">
            <h2 className="font-bold text-muted-foreground text-center mb-4">
              Menu
            </h2>
            <Accordion
              type="multiple"
              className="w-full"
              defaultValue={["meat"]}
            >
              {menuSections.map((section) => (
                <AccordionItem
                  key={section.id}
                  value={section.name.toLowerCase()}
                >
                  <AccordionTrigger>{section.name}</AccordionTrigger>
                  <AccordionContent>
                    {section.categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={
                          activeCategory === category.id ? "secondary" : "link"
                        }
                        className="w-full justify-start"
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </ResizablePanel>

        <ResizableHandle />
        {cloneElement(
          children as ReactElement<{activeCategory: string | null}>,
          {activeCategory}
        )}
      </ResizablePanelGroup>
    </div>
  );
}

"use client";
// import libraries
import {useEffect, useState, cloneElement, ReactElement} from "react";

// import hooks and store
import {useBookingStore} from "@/features/booking/store/useBookingStore";
import {useBranches} from "@/features/location/hooks";
import {State} from "@/features/location/types";

// import UI components
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {MenuSection} from "@/features/menu/types";
import {StateCitySelected} from "@/features/location";

export default function MenuNav({
  children,
  menuSections,
  states,
}: {
  children: React.ReactNode;
  menuSections: MenuSection[];
  states: State[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const formData = useBookingStore((state) => state.formData);
  const updateField = useBookingStore((state) => state.updateField);

  const {data: branches, isLoading: branchesLoading} = useBranches(
    formData.cityId,
  );

  useEffect(() => {
    const meatSection = menuSections.find((s) => s.name === "Meat");
    const steaksCategory = meatSection?.categories.find(
      (c) => c.name === "Steaks",
    );

    if (steaksCategory) {
      setActiveCategory(steaksCategory.id);
    }
  }, [menuSections]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="h-[calc(100vh-7rem)]">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={25} minSize={20}>
          <ScrollArea className="h-full w-full pr-4">
            <h2 className="font-bold text-muted-foreground text-center mb-4">
              Menu
            </h2>
            <div>
              <StateCitySelected
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
                }}
                onCityChange={(cityName, cityId) => {
                  updateField("city", cityName);
                  updateField("cityId", cityId);
                  updateField("branch", "");
                }}
                vertical
              />
              <Label className="mb-2 mt-2">Restaurant</Label>
              {!formData.state || !formData.city ? (
                <Select disabled>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select city first" />
                  </SelectTrigger>
                </Select>
              ) : branchesLoading ? (
                <Select disabled>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Loading..." />
                  </SelectTrigger>
                </Select>
              ) : branches?.length ? (
                <Select
                  value={formData.branch}
                  onValueChange={(value) => updateField("branch", value)}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Choose a location" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((branch) => (
                      <SelectItem key={branch.id} value={branch.address}>
                        {branch.address}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Select disabled>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="No locations found" />
                  </SelectTrigger>
                </Select>
              )}
            </div>
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
          {activeCategory},
        )}
      </ResizablePanelGroup>
    </div>
  );
}

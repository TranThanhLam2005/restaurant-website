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
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {MenuSection} from "@/features/menu/types";
import {StateCitySelected} from "@/features/location";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// import icons
import {ChevronsUpDown} from "lucide-react";

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
  const [open, setOpen] = useState(false);
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
                <Button variant="outline" disabled>
                  Select city first
                  <ChevronsUpDown className="h-4 w-4 opacity-50" />
                </Button>
              ) : branchesLoading ? (
                <Button variant="outline" disabled>
                  Loading...
                  <ChevronsUpDown className="h-4 w-4 animate-spin" />
                </Button>
              ) : branches?.length ? (
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-48 justify-between"
                    >
                      {formData.branch || "Choose a location"}
                      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search restaurant"
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No restaurant found.</CommandEmpty>
                        <CommandGroup>
                          {branches.map((branch) => (
                            <CommandItem
                              key={branch.id}
                              value={branch.address}
                              onSelect={(currentValue) => {
                                const foundBranch = branches?.find(
                                  (b) => b.address === currentValue,
                                );
                                if (foundBranch) {
                                  updateField("branch", foundBranch.address);
                                }
                                setOpen(false);
                              }}
                            >
                              <span className="font-medium">
                                {branch.address}
                              </span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              ) : (
                <Button
                  variant="outline"
                  className="w-full md:w-64 justify-between text-destructive"
                  disabled
                >
                  No locations found
                  <ChevronsUpDown className="h-4 w-4 opacity-50" />
                </Button>
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

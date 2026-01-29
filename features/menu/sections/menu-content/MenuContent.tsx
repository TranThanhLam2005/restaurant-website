"use client";

//import libraries and hooks
import {useState} from "react";

// imports components and icons
import {Clock, Flame, ShoppingCart} from "lucide-react";
import {ResizablePanel} from "@/components/ui/resizable";
import {Skeleton} from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useMenuCategory} from "@/features/menu/hooks/useMenuCategory";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Separator} from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
export default function MenuContent({
  activeCategory,
}: {
  activeCategory: string | null;
}) {
  const {
    data: categoryData,
    isLoading,
    error,
  } = useMenuCategory(activeCategory);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <ResizablePanel defaultSize={75}>
        <ScrollArea className="h-full w-full px-6">
          {isLoading ? (
            <>
              <h3 className="mb-4">Loading menu items...</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-80" />
                ))}
              </div>
            </>
          ) : error ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-destructive">
                Failed to load menu items. Please try again.
              </p>
            </div>
          ) : categoryData ? (
            <div>
              <h3 className="mb-4">{categoryData.name}</h3>

              {categoryData.foods && categoryData.foods.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryData.foods.map((food) => (
                    <Card key={food.id}>
                      <CardHeader>
                        {food.imageUrl && (
                          <AspectRatio ratio={16 / 9}>
                            <img
                              src={food.imageUrl}
                              alt={food.name}
                              className="object-cover w-full h-full rounded-lg"
                            />
                            {!food.isAvailable && (
                              <Badge
                                className="absolute top-2 right-2"
                                variant="destructive"
                              >
                                Unavailable
                              </Badge>
                            )}
                          </AspectRatio>
                        )}
                        <div className="flex justify-between items-center">
                          <CardTitle>{food.name}</CardTitle>
                          <span className="font-light">
                            ${food.price.toFixed(2)}
                          </span>
                        </div>
                        <CardDescription>{food.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {food.ingredients && (
                            <p className="text-sm text-muted-foreground line-clamp-3 min-h-16">
                              <span className="font-semibold">
                                Ingredients:
                              </span>{" "}
                              {food.ingredients}
                            </p>
                          )}
                          <div className="flex items-center justify-between text-sm text-muted-foreground font-light">
                            {food.preparationTime && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{food.preparationTime} min</span>
                              </div>
                            )}
                            {food.calories && (
                              <div className="flex items-center gap-1">
                                <Flame className="w-4 h-4" />
                                <span>{food.calories} cal</span>
                              </div>
                            )}
                            <ShoppingCart
                              className="w-5 h-5 hover:cursor-pointer hover:text-primary"
                              onClick={() => setIsDialogOpen(true)}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  No items available in this category.
                </p>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">
                Select a category to view menu items
              </p>
            </div>
          )}
        </ScrollArea>
      </ResizablePanel>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger></DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-3xl">
                Choose your options
              </DialogTitle>
              <Separator className="my-4" />
              <div className="flex items-center justify-around">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Food Item"
                  className="object-cover w-20 h-20 rounded-lg"
                />
                <div className="flex flex-col items-center">
                  <h4>Product Choose</h4>
                  <h5>THĂN NỘI 2 LOẠI</h5>
                </div>
              </div>
              <DialogDescription className="text-center font-light">
                125G THĂN NỘI BÒ USDA PRIME100G THĂN NỘI BÒ BLACK ANGUS
              </DialogDescription>
            </DialogHeader>

            <Separator />
            <div className="max-h-80 overflow-y-auto px-2 custom-scrollbar space-y-4">
              <Select>
                <Label>WEIGHT</Label>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Options</SelectLabel>
                    <SelectItem value="250g">250G</SelectItem>
                    <SelectItem value="300g">300G</SelectItem>
                    <SelectItem value="500g">500G</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <Label>DONENESS</Label>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Options</SelectLabel>
                    <SelectItem value="rare">RARE</SelectItem>
                    <SelectItem value="medium-rare">MEDIUM RARE</SelectItem>
                    <SelectItem value="medium">MEDIUM</SelectItem>
                    <SelectItem value="medium-well">MEDIUM WELL</SelectItem>
                    <SelectItem value="well-done">WELL DONE</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="space-y-3">
                <Label>ADD ON</Label>
                <div className="flex items-center">
                  <Checkbox id="cheese" className="mr-2" />
                  <Label htmlFor="cheese">Extra Cheese (+$2.00)</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="tiger-shrimp" className="mr-2" />
                  <Label htmlFor="tiger-shrimp">
                    Add tiger shrimp (+$5.00)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="cavia" className="mr-2" />
                  <Label htmlFor="cavia">Add Cavia</Label>
                </div>
              </div>
              <div className="space-y-3">
                <Label>SAUCES</Label>
                <div className="flex items-center">
                  <Checkbox id="sauces-argentina" className="mr-2" />
                  <Label htmlFor="sauces-argentina">
                    SAUCES ARGENTINA (+$3.00)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="pepper-sauce" className="mr-2" />
                  <Label htmlFor="pepper-sauce">Pepper Sauce (+$5.00)</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="mushroom-sauce" className="mr-2" />
                  <Label htmlFor="mushroom-sauce">
                    Mushroom Sauce (+ $4.00)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="bearnaise-sauce" className="mr-2" />
                  <Label htmlFor="bearnaise-sauce">
                    Bearnaise Sauce (+ $4.00)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="red-wine-sauce" className="mr-2" />
                  <Label htmlFor="red-wine-sauce">
                    Red Wine Sauce (+ $4.00)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="blue-cheese-sauce" className="mr-2" />
                  <Label htmlFor="blue-cheese-sauce">
                    Blue Cheese Sauce (+ $4.00)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="truffle-mushroom-sauce" className="mr-2" />
                  <Label htmlFor="truffle-mushroom-sauce">
                    Truffle Mushroom Sauce (+ $4.00)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="bbq-sauce" className="mr-2" />
                  <Label htmlFor="bbq-sauce">BBQ Sauce (+ $4.00)</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="horsetail-sauce" className="mr-2" />
                  <Label htmlFor="horsetail-sauce">
                    Horsetail Sauce (+ $4.00)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="spicy-bbq-sauce" className="mr-2" />
                  <Label htmlFor="spicy-bbq-sauce">
                    Spicy BBQ Sauce (+ $4.00)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="radish" className="mr-2" />
                  <Label htmlFor="radish">Radish (+ $4.00)</Label>
                </div>
              </div>

              <Label>Note (optional)</Label>
              <Textarea
                className="w-full mb-4"
                placeholder="Add your note here"
              />
            </div>
            <DialogFooter>
              <Button className="w-full">Add to Cart - $25.00</Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
}

"use client";
import {ResizablePanel} from "@/components/ui/resizable";
import {Skeleton} from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useMenuCategory} from "@/features/menu/hooks/useMenuCategory";
import {Clock, Flame} from "lucide-react";

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

  return (
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
                  <Card
                    key={food.id}
                    className={!food.isAvailable ? "opacity-60" : ""}
                  >
                    {food.imageUrl && (
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <img
                          src={food.imageUrl}
                          alt={food.name}
                          className="object-cover w-full h-full"
                        />
                        {!food.isAvailable && (
                          <Badge
                            className="absolute top-2 right-2"
                            variant="destructive"
                          >
                            Unavailable
                          </Badge>
                        )}
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{food.name}</CardTitle>
                        <span className="text-lg font-bold text-primary">
                          ${food.price.toFixed(2)}
                        </span>
                      </div>
                      <CardDescription>{food.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {food.ingredients && (
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold">Ingredients:</span>{" "}
                            {food.ingredients}
                          </p>
                        )}
                        <div className="flex gap-4 text-sm text-muted-foreground">
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
  );
}

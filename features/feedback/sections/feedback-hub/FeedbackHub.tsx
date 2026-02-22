"use client";
import {useState} from "react";
import {Flag, Layers, X, SlidersHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button";
import {FeedbackUI} from "@/features/feedback";
import {Badge} from "@/components/ui/badge";
const feedbackHubData = [
  {
    avatarUrl: "https://example.com/user1.jpg",
    name: "User One",
    timeAgo: "1 day ago",
    tags: ["Product", "Very Satisfied", "Meat"],
  },
  {
    avatarUrl: "https://example.com/user2.jpg",
    name: "User Two",
    timeAgo: "3 days ago",
    tags: ["Service", "Satisfied"],
  },
  {
    avatarUrl: "https://example.com/user3.jpg",
    name: "User Three",
    timeAgo: "5 days ago",
    tags: ["Ambience", "Neutral"],
  },
  {
    avatarUrl: "https://example.com/user3.jpg",
    name: "User Three",
    timeAgo: "5 days ago",
    tags: ["Ambience", "Neutral"],
  },
  {
    avatarUrl: "https://example.com/user3.jpg",
    name: "User Three",
    timeAgo: "5 days ago",
    tags: ["Ambience", "Neutral"],
  },
  {
    avatarUrl: "https://example.com/user3.jpg",
    name: "User Three",
    timeAgo: "5 days ago",
    tags: ["Ambience", "Neutral"],
  },
];
export default function FeedbackHub() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: ["Shirt"],
    issues: ["Product"],
    satisfaction: [
      "Very Satisfied",
      "Satisfied",
      "Neutral",
      "Dissatisfied",
      "Very Dissatisfied",
    ],
  });

  const toggleFilter = (type: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[type as keyof typeof prev];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return {...prev, [type]: updated};
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      categories: [],
      issues: [],
      satisfaction: [],
    });
  };

  const activeFilterCount =
    selectedFilters.categories.length +
    selectedFilters.issues.length +
    selectedFilters.satisfaction.length;

  return (
    <div className="flex items-start justify-between gap-10">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Flag className="h-4 w-4 inline-block" />
            <span className="font-medium">Feedback</span>
            <span className="text-muted-foreground">
              {feedbackHubData.length} total feedback
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-1 text-xs">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        </div>
        <div className="space-y-8">
          {feedbackHubData.map((feedback, index) => (
            <FeedbackUI key={index} />
          ))}
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isFilterOpen
            ? "max-w-md w-full opacity-100 translate-x-0"
            : "max-w-0 w-0 opacity-0 translate-x-8 overflow-hidden"
        }`}
      >
        <div className="border rounded-xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b bg-muted/30">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              <h5 className="font-semibold">Filter Feedback</h5>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFilterOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-4 space-y-6">
            <section>
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-sm font-semibold text-gray-700">
                  Category
                </h5>
                <span className="text-xs text-muted-foreground">
                  {selectedFilters.categories.length} selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <FilterPill
                  label="Weatherwear"
                  count={11}
                  active={selectedFilters.categories.includes("Weatherwear")}
                  onClick={() => toggleFilter("categories", "Weatherwear")}
                />
                <FilterPill
                  label="Textured Trousers"
                  count={11}
                  active={selectedFilters.categories.includes(
                    "Textured Trousers",
                  )}
                  onClick={() =>
                    toggleFilter("categories", "Textured Trousers")
                  }
                />
                <FilterPill
                  label="Snicker"
                  count={11}
                  active={selectedFilters.categories.includes("Snicker")}
                  onClick={() => toggleFilter("categories", "Snicker")}
                />
                <FilterPill
                  label="Shirt"
                  count={11}
                  active={selectedFilters.categories.includes("Shirt")}
                  onClick={() => toggleFilter("categories", "Shirt")}
                />
                <FilterPill
                  label="Jacket"
                  count={10}
                  active={selectedFilters.categories.includes("Jacket")}
                  onClick={() => toggleFilter("categories", "Jacket")}
                />
                <FilterPill
                  label="Sweatshirt"
                  count={11}
                  active={selectedFilters.categories.includes("Sweatshirt")}
                  onClick={() => toggleFilter("categories", "Sweatshirt")}
                />
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-sm font-semibold text-gray-700">
                  Issue Type
                </h5>
                <span className="text-xs text-muted-foreground">
                  {selectedFilters.issues.length} selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <FilterPill
                  label="Delivery Issues"
                  count={11}
                  active={selectedFilters.issues.includes("Delivery Issues")}
                  onClick={() => toggleFilter("issues", "Delivery Issues")}
                />
                <FilterPill
                  label="Product Quality"
                  count={11}
                  active={selectedFilters.issues.includes("Product Quality")}
                  onClick={() => toggleFilter("issues", "Product Quality")}
                />
                <FilterPill
                  label="Customer Service"
                  count={11}
                  active={selectedFilters.issues.includes("Customer Service")}
                  onClick={() => toggleFilter("issues", "Customer Service")}
                />
                <FilterPill
                  label="Refund"
                  count={11}
                  active={selectedFilters.issues.includes("Refund")}
                  onClick={() => toggleFilter("issues", "Refund")}
                />
                <FilterPill
                  label="Return"
                  count={11}
                  active={selectedFilters.issues.includes("Return")}
                  onClick={() => toggleFilter("issues", "Return")}
                />
                <FilterPill
                  label="Product"
                  count={10}
                  active={selectedFilters.issues.includes("Product")}
                  onClick={() => toggleFilter("issues", "Product")}
                />
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-sm font-semibold text-gray-700">
                  Satisfaction Level
                </h5>
                <span className="text-xs text-muted-foreground">
                  {selectedFilters.satisfaction.length} selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <FilterPill
                  label="Very Satisfied"
                  count={11}
                  active={selectedFilters.satisfaction.includes(
                    "Very Satisfied",
                  )}
                  onClick={() => toggleFilter("satisfaction", "Very Satisfied")}
                />
                <FilterPill
                  label="Satisfied"
                  count={11}
                  active={selectedFilters.satisfaction.includes("Satisfied")}
                  onClick={() => toggleFilter("satisfaction", "Satisfied")}
                />
                <FilterPill
                  label="Neutral"
                  count={11}
                  active={selectedFilters.satisfaction.includes("Neutral")}
                  onClick={() => toggleFilter("satisfaction", "Neutral")}
                />
                <FilterPill
                  label="Dissatisfied"
                  count={11}
                  active={selectedFilters.satisfaction.includes("Dissatisfied")}
                  onClick={() => toggleFilter("satisfaction", "Dissatisfied")}
                />
                <FilterPill
                  label="Very Dissatisfied"
                  count={11}
                  active={selectedFilters.satisfaction.includes(
                    "Very Dissatisfied",
                  )}
                  onClick={() =>
                    toggleFilter("satisfaction", "Very Dissatisfied")
                  }
                />
              </div>
            </section>

            <section className="pt-2 border-t">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear all filters
                </Button>
                <Button size="sm" className="gap-2">
                  Apply Filters
                  {activeFilterCount > 0 && (
                    <Badge variant="secondary" className="bg-white/20">
                      {activeFilterCount}
                    </Badge>
                  )}
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
const FilterPill = ({
  label = "",
  count = 0,
  active = false,
  onClick = () => {},
}: {
  label: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Badge
      variant={active ? "default" : "outline"}
      onClick={onClick}
      className="cursor-pointer"
    >
      <span className="font-medium">{label}</span>
      <span className={`text-xs opacity-70 ${active ? "font-bold" : ""}`}>
        ({count})
      </span>
    </Badge>
  );
};

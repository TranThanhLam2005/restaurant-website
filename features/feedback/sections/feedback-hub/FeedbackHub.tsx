import {Flag, Layers, X} from "lucide-react";
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
  return (
    <div className="flex items-start justify-between gap-10">
      <div>
        <div className="flex items-center mb-6">
          <Flag className="h-4 w-4 mr-2 inline-block" />
          Feedback {feedbackHubData.length} total feedback
        </div>
        <div className="space-y-8">
          {feedbackHubData.map((feedback, index) => (
            <FeedbackUI key={index} />
          ))}
        </div>
      </div>
      <div className="max-w-md border rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            <h5>Filter Feedback</h5>
          </div>
          <Button variant="ghost" size="icon">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4 space-y-4">
          <section>
            <h5 className="text-gray-700 mb-3">Issue Type</h5>
            <div className="flex flex-wrap gap-2">
              <FilterPill label="Weatherwear" count={11} />
              <FilterPill label="Textured Trousers" count={11} />
              <FilterPill label="Snicker" count={11} />
              <FilterPill
                label="Shirt"
                count={11}
                active
                activeColor="bg-blue-100 text-blue-700"
              />
              <FilterPill label="Jacket" count={10} />
              <FilterPill label="Sweatshirt" count={11} />
            </div>
          </section>

          <section>
            <h5 className="text-gray-700 mb-3">Issue Type</h5>
            <div className="flex flex-wrap gap-2">
              <FilterPill label="Delivery Issues" count={11} />
              <FilterPill label="Product Quality" count={11} />
              <FilterPill label="Customer Service" count={11} />
              <FilterPill label="Refund" count={11} />
              <FilterPill label="Return" count={11} />
              <FilterPill
                label="Product"
                count={10}
                active
                activeColor="bg-pink-100 text-pink-700"
              />
            </div>
          </section>

          <section>
            <h5 className="text-gray-700 mb-3">Satisfaction Level</h5>
            <div className="flex flex-wrap gap-2">
              <FilterPill
                label="Very Satisfied"
                count={11}
                active
                activeColor="bg-indigo-200 text-indigo-800"
              />
              <FilterPill
                label="Satisfied"
                count={11}
                active
                activeColor="bg-amber-100 text-amber-800"
              />
              <FilterPill
                label="Neutral"
                count={11}
                active
                activeColor="bg-fuchsia-200 text-fuchsia-800"
              />
              <FilterPill
                label="Dissatisfied"
                count={11}
                active
                activeColor="bg-red-300 text-red-900"
              />
              <FilterPill
                label="Very Dissatisfied"
                count={11}
                active
                activeColor="bg-emerald-300 text-emerald-900"
              />
            </div>
          </section>
          <section>
            <h5 className="text-gray-700">Time and Date</h5>
          </section>
        </div>
      </div>
    </div>
  );
}
// Reusable Pill Component
const FilterPill = ({
  label = "",
  count = 0,
  active = false,
  activeColor = "",
}) => {
  return (
    <Badge variant={active ? "default" : "outline"} className={activeColor}>
      <span className="font-medium">{label}</span>
      <span className={`text-xs opacity-70 ${active ? "font-bold" : ""}`}>
        {count}
      </span>
    </Badge>
  );
};

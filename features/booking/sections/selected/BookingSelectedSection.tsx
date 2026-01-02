"use client";

// import hooks and store
import {useCities, useBranches} from "@/features/booking/hooks";
import {useBookingStore} from "@/features/booking/store/useBookingStore";
import {BookingSectionProps} from "@/features/booking/types";


// import UI components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Badge} from "@/components/ui/badge";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";


// import icons
import {Map} from "lucide-react";

export default function BookingSelectedSection({
  states,
}: BookingSectionProps) {
  const formData = useBookingStore((state) => state.formData);
  const updateField = useBookingStore((state) => state.updateField);
  const setIsDialogOpen = useBookingStore((state) => state.setIsDialogOpen);

  const {data: cities, isLoading: citiesLoading} = useCities(formData.stateId);
  const {data: branches, isLoading: branchesLoading} = useBranches(
    formData.cityId
  );
  return (
    <div>
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20240425/pngtree-top-desk-with-blur-restaurant-background-wooden-table-image_15665383.jpg"
        alt="Hero Image"
        className="w-full h-screen rounded-4xl shadow-lg relative object-cover"
      />
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-end justify-evenly rounded-lg shadow-lg bg-white/80 p-4 gap-2">
          <div>
            <Label htmlFor="State" className="mb-2">
              State
            </Label>
            <Select
              value={formData.state}
              onValueChange={(value) => {
                updateField("state", value);
                updateField(
                  "stateId",
                  states?.find((s) => s.name === value)?.id || ""
                );
                updateField("city", ""); // Reset city when state changes
                updateField("branch", ""); // Reset branch when state changes
              }}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {states?.map((state) => (
                  <SelectItem key={state.id} value={state.name}>
                    {state.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="city" className="mb-2">
              City
            </Label>
            <Select
              value={formData.city}
              onValueChange={(value) => {
                updateField("city", value);
                updateField(
                  "cityId",
                  cities?.find((c) => c.name === value)?.id || ""
                );
                updateField("branch", ""); // Reset branch when city changes
              }}
              disabled={!formData.state}
            >
              <SelectTrigger className="w-48">
                <SelectValue
                  placeholder={
                    formData.state ? "Select City" : "Select State First"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {cities?.map((city) => (
                  <SelectItem key={city.id} value={city.name}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={() => setIsDialogOpen(true)}>Reserve</Button>
        </div>
        <div className="flex justify-evenly bg-white/80 rounded-lg mt-6 p-4 gap-4">
          {!formData.state || !formData.city ? (
            <p className="text-sm italic text-muted-foreground">
              Please select a state and city to see available restaurants.
            </p>
          ) : branchesLoading ? (
            <p className="text-sm italic text-muted-foreground">
              Loading restaurants...
            </p>
          ) : branches?.length ? (
            branches.map((branch, id) => (
              <Card key={id} className="gap-1 px-2">
                <CardHeader>
                  <CardTitle>{branch.address}</CardTitle>
                </CardHeader>
                <div className="flex items-center">
                  <Badge variant="secondary">{branch.phoneNumber}</Badge>
                  <Button variant="link">
                    <Map size={24} />
                    Google Maps
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-sm italic text-muted-foreground">
              No restaurants available in this city.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

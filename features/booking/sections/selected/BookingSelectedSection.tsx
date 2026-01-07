"use client";

// import hooks and store
import {useBranches} from "@/features/location/hooks";
import {useBookingStore} from "@/features/booking/store/useBookingStore";
import {BookingSectionProps} from "@/features/location/types";

// import UI components
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";

// import icons
import {Map} from "lucide-react";
import StateCitySelected from "@/features/location/components/state-city-selected/StateCitySelected";

export default function BookingSelectedSection({states}: BookingSectionProps) {
  const formData = useBookingStore((state) => state.formData);
  const updateField = useBookingStore((state) => state.updateField);
  const setIsDialogOpen = useBookingStore((state) => state.setIsDialogOpen);
  const syncStepWithValidation = useBookingStore(
    (state) => state.syncStepWithValidation
  );

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
              syncStepWithValidation();
            }}
            onCityChange={(cityName, cityId) => {
              updateField("city", cityName);
              updateField("cityId", cityId);
              updateField("branch", "");
              syncStepWithValidation();
            }}
          />
          <Button onClick={() => setIsDialogOpen(true)}>Reserve</Button>
        </div>
        <div className="flex justify-evenly bg-white/80 rounded-lg mt-6 p-4 gap-4">
          {!formData.state || !formData.city ? (
            <p className="text-sm italic font-light">
              Please select a state and city to see available restaurants.
            </p>
          ) : branchesLoading ? (
            <p className="text-sm italic font-light">Loading restaurants...</p>
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
            <p className="text-sm italic font-light">
              No restaurants available in this city.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import {useEffect} from "react";
import {useDebounce} from "use-debounce";
import StateCitySelected from "@/features/location/components/state-city-selected/StateCitySelected";
import {useNearbyStore} from "@/features/nearby/hooks/useNearbyStore";
import {useBookingStore} from "@/features/booking/store/useBookingStore";

import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardAction,
  CardContent,
} from "@/components/ui/card";

import {Label} from "@/components/ui/label";

import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Input} from "@/components/ui/input";
import GoogleMap from "@/features/location/components/google-map-embedded/GoogleMap";

export default function NearbySelected({states}: {states: Array<any>}) {
  const {
    restaurantType,
    searchQuery,
    setRestaurantType,
    setSearchQuery,
    setDebouncedSearchQuery,
  } = useNearbyStore();

  const {formData, updateField} = useBookingStore();

  const [debouncedQuery] = useDebounce(searchQuery, 500);

  // Combine search query with state and city
  const fullQuery =
    `${debouncedQuery} ${formData.state} ${formData.city} + texas roadhouse`.trim();

  useEffect(() => {
    setDebouncedSearchQuery(fullQuery);
  }, [fullQuery, setDebouncedSearchQuery]);

  const handleStateChange = (stateName: string, stateId: string) => {
    updateField("state", stateName);
    updateField("stateId", stateId);
  };

  const handleCityChange = (cityName: string, cityId: string) => {
    updateField("city", cityName);
    updateField("cityId", cityId);
  };
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>Please select restaurant type system</CardTitle>
        <RadioGroup
          value={restaurantType}
          onValueChange={(value) =>
            setRestaurantType(value as "dine-in" | "takeaway" | "delivery")
          }
          className="flex justify-center gap-8 mt-4"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="dine-in"
              id="dine-in"
              className="border-black"
            />
            <Label htmlFor="dine-in" className="cursor-pointer">
              Dine In
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="takeaway"
              id="takeaway"
              className="border-black"
            />
            <Label htmlFor="takeaway" className="cursor-pointer">
              Take Away
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="delivery"
              id="delivery"
              className="border-black"
            />
            <Label htmlFor="delivery" className="cursor-pointer">
              Delivery
            </Label>
          </div>
        </RadioGroup>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Input
            type="text"
            placeholder="Enter your location to find nearby restaurants"
            className="border-black w-1/3"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <StateCitySelected
            states={states}
            selectedState={formData.state}
            selectedStateId={formData.stateId}
            selectedCity={formData.city}
            selectedCityId={formData.cityId}
            onStateChange={handleStateChange}
            onCityChange={handleCityChange}
            headless={true}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <GoogleMap query={fullQuery} />
        </div>
      </CardContent>
      <CardFooter>
        <CardAction>{/* Action button or link can be added here */}</CardAction>
      </CardFooter>
    </Card>
  );
}

"use client";

// import react and utils
import {useState} from "react";
import {cn} from "@/lib/utils";

// import hooks and types
import {useCities} from "@/features/location/hooks";
import {StateCitySelectedProps} from "@/features/location/types";

// import UI components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

// import icons
import {Check, ChevronsUpDown} from "lucide-react";

export default function StateCitySelected({
  states,
  selectedState,
  selectedStateId,
  selectedCity,
  className,
  selectedCityId,
  onStateChange,
  onCityChange,
  stateLabel = "State",
  cityLabel = "City",
  statePlaceholder = "Select State...",
  cityPlaceholder = "Select City",
  cityPlaceholderNoState = "Select State First",
  disabled = false,
  required = false,
  headless = false,
  vertical = false,
}: StateCitySelectedProps) {
  const [open, setOpen] = useState(false);
  const {data: cities, isLoading: citiesLoading} = useCities(selectedStateId);

  return (
    <div
      className={cn(
        "flex",
        vertical
          ? "flex-col items-start gap-2"
          : "items-end justify-evenly gap-2",
      )}
    >
      <div>
        {headless ? null : (
          <Label htmlFor="state" className="mb-2" required={required}>
            {stateLabel}
          </Label>
        )}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-48 justify-between"
              disabled={disabled}
            >
              {selectedState || statePlaceholder}
              <ChevronsUpDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-0">
            <Command>
              <CommandInput placeholder="Search State..." className="h-9" />
              <CommandList>
                <CommandEmpty>No state found.</CommandEmpty>
                <CommandGroup>
                  {states.map((state) => (
                    <CommandItem
                      key={state.id}
                      value={state.name}
                      onSelect={(currentValue) => {
                        const foundState = states?.find(
                          (s) => s.name === currentValue,
                        );
                        if (foundState) {
                          onStateChange(foundState.name, foundState.id);
                        }
                        setOpen(false);
                      }}
                    >
                      {state.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          selectedState === state.name
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div>
        {headless ? null : (
          <Label htmlFor="city" className="mb-2" required={required}>
            {cityLabel}
          </Label>
        )}
        <Select
          value={selectedCity}
          onValueChange={(value) => {
            const foundCity = cities?.find((c) => c.name === value);
            if (foundCity) {
              onCityChange(foundCity.name, foundCity.id);
            }
          }}
          disabled={!selectedState || disabled}
        >
          <SelectTrigger className="w-48">
            <SelectValue
              placeholder={
                selectedState ? cityPlaceholder : cityPlaceholderNoState
              }
            />
          </SelectTrigger>
          <SelectContent>
            {citiesLoading ? (
              <div className="p-2 text-sm font-light">Loading cities...</div>
            ) : cities?.length ? (
              cities.map((city) => (
                <SelectItem key={city.id} value={city.name}>
                  {city.name}
                </SelectItem>
              ))
            ) : (
              <div className="p-2 text-sm font-light">No cities available</div>
            )}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

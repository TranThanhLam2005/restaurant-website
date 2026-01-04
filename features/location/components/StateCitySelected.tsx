"use client";

import {useState} from "react";
import {cn} from "@/lib/utils";
// import hooks and store
import {useCities, useBranches} from "@/features/location/hooks";
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
import {Map, Check, ChevronsUpDown} from "lucide-react";

export default function StateCitySelected() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <Label htmlFor="State" className="mb-2">
          State
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-48 justify-between"
            >
              {formData.state ? formData.state : "Select State..."}
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
                        updateField("state", currentValue);
                        updateField(
                          "stateId",
                          states?.find((s) => s.name === currentValue)?.id || ""
                        );
                        updateField("city", ""); // Reset city when state changes
                        updateField("branch", ""); // Reset branch when state changes
                        syncStepWithValidation();
                        setOpen(false);
                      }}
                    >
                      {state.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          formData.state === state.name
                            ? "opacity-100"
                            : "opacity-0"
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
            syncStepWithValidation();
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
    </div>
  );
}

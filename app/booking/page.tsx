"use client";
import {HeroSection} from "@/features/booking"
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
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";
import {
  CalendarIcon,
  ChevronLeft,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";

import {Progress} from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Map} from "lucide-react";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {useReservationForm} from "./useReservationForm";
import {
  US_STATES_CITIES,
  getCitiesForState,
  getStateName,
  getCityName,
  getRestaurantsForCity,
} from "./locationData";

export default function BookingPage() {
  const {
    formData,
    updateField,
    currentStep,
    nextStep,
    prevStep,
    progressValue,
    canProceed,
    isDialogOpen,
    setIsDialogOpen,
  } = useReservationForm();
  return (
    <div>
      <HeroSection />
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20240425/pngtree-top-desk-with-blur-restaurant-background-wooden-table-image_15665383.jpg"
        alt="Hero Image"
        className="w-full h-screen rounded-4xl shadow-lg relative object-cover"
      />
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-end justify-evenly rounded-lg shadow-lg bg-white/80 p-4 gap-2">
          <div>
            <Label htmlFor="location" className="mb-2">
              Location
            </Label>
            <Select
              value={formData.location}
              onValueChange={(value) => {
                updateField("location", value);
                updateField("city", ""); // Reset city when state changes
                updateField("branch", ""); // Reset branch when state changes
              }}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {US_STATES_CITIES.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
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
                updateField("branch", ""); // Reset branch when city changes
              }}
              disabled={!formData.location}
            >
              <SelectTrigger className="w-48">
                <SelectValue
                  placeholder={
                    formData.location ? "Select City" : "Select Location First"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {getCitiesForState(formData.location).map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={() => setIsDialogOpen(true)}>Reserve</Button>
        </div>
        <div className="flex justify-evenly bg-white/80 rounded-lg mt-6 p-4 gap-4">
          {!formData.location || !formData.city ? (
            <p className="text-sm italic text-muted-foreground">
              Please select a location and city to see available restaurants.
            </p>
          ) : (
            getRestaurantsForCity(formData.location, formData.city).map(
              (restaurant, id) => (
                <Card key={id} className="gap-1 px-2">
                  <CardHeader>
                    <CardTitle>{restaurant.address}</CardTitle>
                  </CardHeader>
                  <div className="flex items-center">
                    <Badge variant="secondary">{restaurant.phone}</Badge>
                    <Button
                      variant="link"
                      onClick={() => setIsDialogOpen(true)}
                    >
                      <Map size={24} />
                      Google Maps
                    </Button>
                  </div>
                </Card>
              )
            )
          )}
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle>
              {currentStep === 1 && "Select Branch"}
              {currentStep === 2 && "Personal Information"}
              {currentStep === 3 && "Confirm Details"}
            </DialogTitle>
            <DialogDescription>
              Step {currentStep} of 3:{" "}
              {currentStep === 3
                ? "Review your booking"
                : "Fill in the details"}
            </DialogDescription>
          </DialogHeader>

          <Progress value={progressValue} className="h-2" />

          <div className="space-y-4 py-4 min-h-[300px]">
            {/* STEP 1: BRANCH & DATE */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <div className="flex justify-evenly">
                  <div className="grid gap-2">
                    <Label htmlFor="location" required>
                      Location
                    </Label>
                    <Select
                      onValueChange={(value) => {
                        updateField("location", value);
                        updateField("city", ""); // Reset city when state changes
                        updateField("branch", ""); // Reset branch when state changes
                      }}
                      value={formData.location}
                    >
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                      <SelectContent>
                        {US_STATES_CITIES.map((state) => (
                          <SelectItem key={state.value} value={state.value}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="city" required>
                      City
                    </Label>
                    <Select
                      onValueChange={(value) => updateField("city", value)}
                      value={formData.city}
                      disabled={!formData.location}
                    >
                      <SelectTrigger className="w-48">
                        <SelectValue
                          placeholder={
                            formData.location
                              ? "Select a city"
                              : "Select location first"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {getCitiesForState(formData.location).map((city) => (
                          <SelectItem key={city.value} value={city.value}>
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Separator />

                <div className="grid gap-2">
                  <Label htmlFor="branch" required>
                    Restaurant Address
                  </Label>
                  <Select
                    onValueChange={(value) => updateField("branch", value)}
                    value={formData.branch}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a address" />
                    </SelectTrigger>
                    <SelectContent>
                      {getRestaurantsForCity(
                        formData.location,
                        formData.city
                      ).map((restaurant, id) => (
                        <SelectItem key={id} value={restaurant.address}>
                          {restaurant.address}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  placeholder="Any special note (if needed)"
                  value={formData.specialNote}
                  onChange={(e) => updateField("specialNote", e.target.value)}
                />
                <Separator />
                <div className="grid gap-2">
                  <Label required>Reservation Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="justify-start font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date
                          ? format(formData.date, "PPP")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => updateField("date", date)}
                        initialFocus
                        disabled={{before: new Date()}}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex justify-around">
                  <div className="grid gap-2">
                    <Label htmlFor="time" required>
                      Check-in Time
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.checkInTime}
                      onChange={(e) =>
                        updateField("checkInTime", e.target.value)
                      }
                      className="h-11 shadow-none border-b rounded-none border-x-0 border-t-0 px-0"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <RadioGroup
                      className="flex gap-4"
                      value={formData.guests}
                      onValueChange={(value) => updateField("guests", value)}
                    >
                      {["1", "2", "3", "4", "5"].map((num, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center space-y-1"
                        >
                          <RadioGroupItem value={num} />
                          <span className="text-sm">{num}</span>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: PERSONAL INFO */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" required>
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="e.g. Jane Doe"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" required>
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="e.g. (123) 456-7890"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="e.g. jane@example.com"
                  />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="marketing"
                    checked={formData.receiveOffers}
                    onCheckedChange={(checked) =>
                      updateField("receiveOffers", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="marketing"
                    className="text-xs text-muted-foreground"
                  >
                    Receive special offers via email
                  </Label>
                </div>
              </div>
            )}

            {/* STEP 3: RE-CHECK */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in zoom-in-95">
                <div className="rounded-lg bg-muted p-4 space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium">Location:</span>
                    <span className="text-sm capitalize">
                      {getStateName(formData.location) || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium">City:</span>
                    <span className="text-sm capitalize">
                      {getCityName(formData.location, formData.city) ||
                        "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium">Branch:</span>
                    <span className="text-sm capitalize">
                      {formData.branch || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium">Date:</span>
                    <span className="text-sm">
                      {formData.date
                        ? format(formData.date, "PPP")
                        : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium">Time:</span>
                    <span className="text-sm">
                      {formData.checkInTime || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium">Guests:</span>
                    <span className="text-sm">{formData.guests || "N/A"}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium">Name:</span>
                    <span className="text-sm">{formData.name || "N/A"}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium">Email:</span>
                    <span className="text-sm">{formData.email || "N/A"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Phone:</span>
                    <span className="text-sm">{formData.phone || "N/A"}</span>
                  </div>
                </div>
                <p className="text-[10px] text-center text-muted-foreground">
                  By clicking submit, you confirm that the information above is
                  correct.
                </p>
              </div>
            )}
          </div>

          <DialogFooter className="flex justify-between sm:justify-between w-full">
            {currentStep > 1 ? (
              <Button variant="ghost" onClick={prevStep}>
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <Button onClick={nextStep} disabled={!canProceed}>
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button disabled={!canProceed}>
                <CheckCircle2 className="h-4 w-4" /> Confirm & Submit
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

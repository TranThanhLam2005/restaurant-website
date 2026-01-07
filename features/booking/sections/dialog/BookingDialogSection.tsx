"use client";

// import hooks and store
import {useBranches} from "@/features/location/hooks";
import {useBookingStore} from "@/features/booking/store/useBookingStore";
import {BookingSectionProps} from "@/features/location/types";

// import UI components
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {Checkbox} from "@/components/ui/checkbox";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {Calendar} from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Separator} from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import StateCitySelected from "@/features/location/components/state-city-selected/StateCitySelected";

// import icons and utilities
import {
  CalendarIcon,
  ChevronLeft,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import {format} from "date-fns";

export default function BookingDialogSection({states}: BookingSectionProps) {
  const formData = useBookingStore((state) => state.formData);
  const updateField = useBookingStore((state) => state.updateField);
  const currentStep = useBookingStore((state) => state.currentStep);
  const nextStep = useBookingStore((state) => state.nextStep);
  const prevStep = useBookingStore((state) => state.prevStep);
  const progressValue = useBookingStore((state) => state.progressValue());
  const canProceed = useBookingStore((state) => state.canProceed());
  const isDialogOpen = useBookingStore((state) => state.isDialogOpen);
  const setIsDialogOpen = useBookingStore((state) => state.setIsDialogOpen);

  const {data: branches, isLoading: branchesLoading} = useBranches(
    formData.cityId
  );
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {currentStep === 1 && "Select Branch"}
            {currentStep === 2 && "Personal Information"}
            {currentStep === 3 && "Confirm Details"}
          </DialogTitle>
          <DialogDescription className="font-light">
            Step {currentStep} of 3:{" "}
            {currentStep === 3 ? "Review your booking" : "Fill in the details"}
          </DialogDescription>
        </DialogHeader>

        <Progress value={progressValue} className="h-2" />

        <div className="space-y-4 py-4 min-h-[300px]">
          {/* STEP 1: BRANCH & DATE */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
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
                }}
                onCityChange={(cityName, cityId) => {
                  updateField("city", cityName);
                  updateField("cityId", cityId);
                  updateField("branch", "");
                }}
                required
              />
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
                    {branchesLoading ? (
                      <div className="p-2 text-sm text-muted-foreground">
                        Loading branches...
                      </div>
                    ) : branches?.length ? (
                      branches.map((branch, id) => (
                        <SelectItem key={id} value={branch.address}>
                          {branch.address}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="p-2 text-sm text-muted-foreground">
                        No branches available
                      </div>
                    )}
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
                    onChange={(e) => updateField("checkInTime", e.target.value)}
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
                        <span>{num}</span>
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
              <div className="rounded-lg bg-muted p-4 space-y-3 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span>State:</span>
                  <span>{formData.state || "Not selected"}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>City:</span>
                  <span>{formData.city || "Not selected"}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Address:</span>
                  <span>{formData.branch || "Not selected"}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Date:</span>
                  <span>
                    {formData.date
                      ? format(formData.date, "PPP")
                      : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Time:</span>
                  <span>{formData.checkInTime || "N/A"}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Guests:</span>
                  <span>{formData.guests || "N/A"}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Name:</span>
                  <span>{formData.name || "N/A"}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Email:</span>
                  <span>{formData.email || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span>{formData.phone || "N/A"}</span>
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground font-light">
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
  );
}

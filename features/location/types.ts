export interface State {
  id: string;
  name: string;
}

export interface City {
  id: string;
  name: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
}

export interface BookingFormData {
  // Step 1: Location & Date
  state: string;
  stateId: string;
  city: string;
  cityId: string;
  guests: string;
  branch: string;
  specialNote: string;
  date: Date | undefined;
  checkInTime: string;

  // Step 2: Personal Information
  name: string;
  email: string;
  phone: string;
  receiveOffers: boolean;
}

export interface BookingSectionProps {
  states: State[];
}

export interface StateCitySelectedProps {
  // Data
  states: State[];
  selectedState: string;
  selectedStateId: string;
  selectedCity: string;
  selectedCityId: string;

  // Handlers
  onStateChange: (stateName: string, stateId: string) => void;
  onCityChange: (cityName: string, cityId: string) => void;

  // Optional customization
  className?: string;
  stateLabel?: string;
  cityLabel?: string;
  statePlaceholder?: string;
  cityPlaceholder?: string;
  cityPlaceholderNoState?: string;
  disabled?: boolean;
  required?: boolean;
  headless?: boolean;
  vertical?: boolean;
}

export interface BookingStore {
  formData: BookingFormData;
  currentStep: number;
  isDialogOpen: boolean;
  totalSteps: number;
  updateField: <K extends keyof BookingFormData>(
    field: K,
    value: BookingFormData[K]
  ) => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setIsDialogOpen: (open: boolean) => void;
  isStepValid: (step: number) => boolean;
  canProceed: () => boolean;
  progressValue: () => number;
  syncStepWithValidation: () => void;
}

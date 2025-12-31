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

export interface UseBookingFormReturn {
  // Form data
  formData: BookingFormData;

  // Form actions
  updateField: <K extends keyof BookingFormData>(
    field: K,
    value: BookingFormData[K]
  ) => void;
  resetForm: () => void;

  // Step management
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  progressValue: number;

  // Validation
  isStepValid: (step: number) => boolean;
  canProceed: boolean;

  // UI State
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
}
import {useState, useMemo} from "react";

export interface ReservationFormData {
  // Step 1: Location & Date
  location: string;
  city: string;
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

export interface UseReservationFormReturn {
  // Form data
  formData: ReservationFormData;

  // Form actions
  updateField: <K extends keyof ReservationFormData>(
    field: K,
    value: ReservationFormData[K]
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

const initialFormData: ReservationFormData = {
  location: "",
  city: "",
  branch: "",
  guests: "1",
  specialNote: "",
  date: undefined,
  checkInTime: "",
  name: "",
  email: "",
  phone: "",
  receiveOffers: false,
};

export function useReservationForm(): UseReservationFormReturn {
  const [formData, setFormData] =
    useState<ReservationFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const totalSteps = 3;

  const updateField = <K extends keyof ReservationFormData>(
    field: K,
    value: ReservationFormData[K]
  ) => {
    setFormData((prev) => ({...prev, [field]: value}));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          formData.location &&
          formData.city &&
          formData.guests &&
          formData.branch &&
          formData.date &&
          formData.checkInTime
        );
      case 2:
        return !!(
          formData.name &&
          formData.phone &&
          (!formData.email || /\S+@\S+\.\S+/.test(formData.email))
        );
      case 3:
        return true;
      default:
        return false;
    }
  };

  const canProceed = useMemo(
    () => isStepValid(currentStep),
    [currentStep, formData]
  );

  const nextStep = () => {
    if (currentStep < totalSteps && canProceed) {
      setCurrentStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const progressValue = (currentStep / totalSteps) * 100;

  return {
    formData,
    updateField,
    resetForm,
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    goToStep,
    progressValue,
    isStepValid,
    canProceed,
    isDialogOpen,
    setIsDialogOpen,
  };
}

"use client";

import {create} from "zustand";
import {BookingFormData} from "../types";

const initialFormData: BookingFormData = {
  state: "",
  stateId: "",
  city: "",
  cityId: "",
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

interface BookingStore {
  formData: BookingFormData;
  currentStep: number;
  isDialogOpen: boolean;
  totalSteps: number;
  updateField: <K extends keyof BookingFormData>(
    field: K,
    value: BookingFormData[K]
  ) => void;
  resetForm: () => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  setIsDialogOpen: (open: boolean) => void;
  isStepValid: (step: number) => boolean;
  canProceed: () => boolean;
  progressValue: () => number;
}

export const useBookingStore = create<BookingStore>((set, get) => ({
  formData: initialFormData,
  currentStep: 1,
  isDialogOpen: false,
  totalSteps: 3,

  updateField: (field, value) =>
    set((state) => ({
      formData: {...state.formData, [field]: value},
    })),

  resetForm: () =>
    set({
      formData: initialFormData,
      currentStep: 1,
    }),

  setCurrentStep: (step) => set({currentStep: step}),

  nextStep: () => {
    const {currentStep, totalSteps, canProceed} = get();
    if (currentStep < totalSteps && canProceed()) {
      set({currentStep: currentStep + 1});
    }
  },

  prevStep: () => {
    const {currentStep} = get();
    if (currentStep > 1) {
      set({currentStep: currentStep - 1});
    }
  },

  goToStep: (step) => {
    const {totalSteps} = get();
    if (step >= 1 && step <= totalSteps) {
      set({currentStep: step});
    }
  },

  setIsDialogOpen: (open) => set({isDialogOpen: open}),

  isStepValid: (step) => {
    const {formData} = get();
    switch (step) {
      case 1:
        return !!(
          formData.state &&
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
  },

  canProceed: () => {
    const {currentStep, isStepValid} = get();
    return isStepValid(currentStep);
  },

  progressValue: () => {
    const {currentStep, totalSteps} = get();
    return (currentStep / totalSteps) * 100;
  },
}));

"use client";

import {create} from "zustand";
import {BookingFormData, BookingStore} from "../types";

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

export const useBookingStore = create<BookingStore>((set, get) => ({
  formData: initialFormData,
  currentStep: 1,
  isDialogOpen: false,
  totalSteps: 3,

  updateField: (field, value) =>
    set((state) => ({
      formData: {...state.formData, [field]: value},
    })),

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
        return get().isStepValid(1) && get().isStepValid(2);
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

  syncStepWithValidation: () => {
    const {currentStep, isStepValid, setCurrentStep} = get();
    if (currentStep > 1 && !isStepValid(1)) {
      setCurrentStep(1);
      return;
    } else if (currentStep > 2 && !isStepValid(2)) {
      setCurrentStep(2);
      return;
    }
  },
}));

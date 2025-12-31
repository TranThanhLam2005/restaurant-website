// "use client";

// import {useState, useMemo} from "react";

// import {BookingFormData, UseBookingFormReturn} from "../types";

// const initialFormData: BookingFormData = {
//   state: "",
//   city: "",
//   branch: "",
//   stateId: "",
//   cityId: "",
//   guests: "1",
//   specialNote: "",
//   date: undefined,
//   checkInTime: "",
//   name: "",
//   email: "",
//   phone: "",
//   receiveOffers: false,
// };

// export function useBooking(): UseBookingFormReturn {
//   const [formData, setFormData] = useState<BookingFormData>(initialFormData);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const totalSteps = 3;

//   const updateField = <K extends keyof BookingFormData>(
//     field: K,
//     value: BookingFormData[K]
//   ) => {
//     setFormData((prev) => ({...prev, [field]: value}));
//   };

//   const resetForm = () => {
//     setFormData(initialFormData);
//     setCurrentStep(1);
//   };

//   const isStepValid = (step: number): boolean => {
//     switch (step) {
//       case 1:
//         return !!(
//           formData.state &&
//           formData.city &&
//           formData.guests &&
//           formData.branch &&
//           formData.date &&
//           formData.checkInTime
//         );
//       case 2:
//         return !!(
//           formData.name &&
//           formData.phone &&
//           (!formData.email || /\S+@\S+\.\S+/.test(formData.email))
//         );
//       case 3:
//         return true;
//       default:
//         return false;
//     }
//   };

//   const canProceed = useMemo(
//     () => isStepValid(currentStep),
//     [currentStep, formData]
//   );

//   const nextStep = () => {
//     if (currentStep < totalSteps && canProceed) {
//       setCurrentStep((s) => s + 1);
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep((s) => s - 1);
//     }
//   };

//   const goToStep = (step: number) => {
//     if (step >= 1 && step <= totalSteps) {
//       setCurrentStep(step);
//     }
//   };

//   const progressValue = (currentStep / totalSteps) * 100;

//   return {
//     formData,
//     updateField,
//     resetForm,
//     currentStep,
//     totalSteps,
//     nextStep,
//     prevStep,
//     goToStep,
//     progressValue,
//     isStepValid,
//     canProceed,
//     isDialogOpen,
//     setIsDialogOpen,
//   };
// }

import { createContext, useState } from "react";

export const FormContext = createContext();

const initialFormData = {
  // Step 1
  loanType: "",
  loanAmount: "",
  loanTenure: "",
  loanPurpose: "",

  // Step 2
  fullName: "",
  email: "",
  mobile: "",
  dob: "",
  gender: "",
  maritalStatus: "",

  // Step 3
  pan: "",
  aadhaar: "",
  consent: false,

  // Step 4
  address1: "",
  address2: "",
  city: "",
  state: "",
  pincode: "",
  country: "",

  // Step 5
  employmentType: "",
  companyName: "",
  businessName: "",
  monthlyIncome: "",
  workExperience: "",

  // Step 6
  hasCoApplicant: "",
  coApplicantName: "",
  relationship: "",
  coApplicantMobile: "",
  coApplicantIncome: "",

  // Step 7
  panDocument: null,
  aadhaarDocument: null,
  salarySlip: null,
  bankStatement: null,
};

function FormProvider({ children }) {
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const updateFormData = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const clearFormData = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        errors,
        setErrors,
        clearFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
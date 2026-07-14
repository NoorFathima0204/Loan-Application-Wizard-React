import { createContext, useState } from "react";

export const FormContext = createContext();

function FormProvider({ children }) {
  const [formData, setFormData] = useState({
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

    //step4
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",

    //step 5
    employmentType: "",
    companyName: "",
    businessName: "",
    monthlyIncome: "",
    workExperience: "",

    //step 6
    hasCoApplicant: "",
    coApplicantName: "",
    relationship: "",
    coApplicantMobile: "",
    coApplicantIncome: "",
  });

  // Function to update only the changed fields
  const updateFormData = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
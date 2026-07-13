import { createContext, useState } from "react";

export const FormContext = createContext();

function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    loanType: "",
    loanAmount: "",
    loanTenure: "",
    loanPurpose: "",

    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    maritalStatus: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
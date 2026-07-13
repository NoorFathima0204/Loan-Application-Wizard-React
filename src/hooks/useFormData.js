import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function useFormData() {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    setFormData,
    handleChange,
  };
}

export default useFormData;
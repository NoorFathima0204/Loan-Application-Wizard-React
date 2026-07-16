import { useFormData } from "./useFormData";

export function useFormHandlers() {
  const {
    formData,
    updateFormData,
    errors,
    setErrors,
  } = useFormData();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    updateFormData({
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return {
  formData,
  errors,
  handleChange,
  updateFormData,
};
}
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export function useFormData() {
  return useContext(FormContext);
}
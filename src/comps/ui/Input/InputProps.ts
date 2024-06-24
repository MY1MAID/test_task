import { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps {
  label: string;
  type: "text" | "password";
  register: UseFormRegisterReturn;
  error?: string;
}

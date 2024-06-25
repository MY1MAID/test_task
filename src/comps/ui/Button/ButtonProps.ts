import { ReactNode } from "react";

export interface ButtonProps {
  type?: "submit" | "button" | "reset";
  disabled: boolean;
  children: ReactNode;
}

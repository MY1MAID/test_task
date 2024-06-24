import { FC } from "react";
import { InputProps } from "./InputProps";

const Input: FC<InputProps> = ({ label, type, register, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...register} />
      {error && <p>{error}</p>}
    </div>
  );
};
export default Input;

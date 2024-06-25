import { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import style from "./Button.module.scss";
const Button: FC<ButtonProps> = ({ type, disabled, children }) => {
  return (
    <button className={style.button} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;

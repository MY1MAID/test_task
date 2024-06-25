import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Link, useNavigate } from "react-router-dom";
import Index from "../../ui/Input";
import { IFormSignUp } from "./SignUpProps";
import { registerUser } from "../../../shared/api/authApi/authApi";
import { schema } from "./SignUpValidation";
import style from "../../ui/authStyle/index.module.scss";
import Button from "../../ui/Button";

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignUp>({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.auth.loading);
  const error = useAppSelector((state) => state.auth.error);

  const onSubmit: SubmitHandler<IFormSignUp> = async (data) => {
    const resultAction = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(resultAction)) {
      navigate("/main");
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form_container} onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <Index
          type="text"
          label="Имя"
          placeholder="Артур"
          register={register("name")}
          error={errors.name?.message}
        />
        <Index
          type="text"
          label="Электронная почта"
          placeholder="example@mail.ru"
          register={register("email")}
          error={errors.email?.message}
        />
        <Index
          type="password"
          label="Пароль"
          placeholder="******"
          register={register("password")}
          error={errors.password?.message}
        />
        <Index
          type="password"
          label="Подтвердите пароль"
          placeholder="******"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <Button type="submit" disabled={loading}>
          Зарегистрироваться
        </Button>
        <div className={style.error_auth}>
          <Link to="/signin"> У меня есть аккаунт</Link>
          {error && <p className={style.errorMessage}>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignUp;

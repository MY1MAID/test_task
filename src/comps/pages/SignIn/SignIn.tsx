import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../ui/Input/Input";
import { IFormSignIn } from "./SignInProps";
import { schema } from "./SignInValidatin";
import Button from "../../ui/Button/Button";
import style from "../../ui/authStyle/index.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loginUser } from "../../../store/features/auth/authSlice";

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignIn>({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.auth.loading);
  const error = useAppSelector((state) => state.auth.error);

  const onSubmit: SubmitHandler<IFormSignIn> = async (data) => {
    const resultAction = await dispatch(loginUser(data));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/main");
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form_container} onSubmit={handleSubmit(onSubmit)}>
        <h2>Авторизация</h2>
        <Input
          type="text"
          label="Электронная почта"
          placeholder="example@mail.ru"
          register={register("email")}
          error={errors.email?.message}
        />
        <Input
          type="password"
          label="Пароль"
          placeholder="******"
          register={register("password")}
          error={errors.password?.message}
        />
        <Button type="submit" disabled={loading}>
          Войти
        </Button>
        <div className={style.error_auth}>
          <Link to="/signup"> У меня есть аккаунт</Link>
          {error && <p className={style.errorMessage}>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignUp;

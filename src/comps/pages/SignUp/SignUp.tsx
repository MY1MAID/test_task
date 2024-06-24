import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import Input from "../../ui/Input/Input";
import { IFormSignUp } from "./SignUpProps";
import { registerUser } from "../../../shared/api/authApi/authApi";
import { schema } from "./SignUpValidation";

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

  const handleNavigateToLogin = () => {
    navigate('/signin')
  }

  const onSubmit: SubmitHandler<IFormSignUp> = async (data) => {
    const resultAction = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(resultAction)) {
      navigate("/main");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
            type="text"
            label="Name"
            register={register("name")}
            error={errors.name?.message}
        />
        <Input
            type="text"
            label="Email"
            register={register("email")}
            error={errors.email?.message}
        />
        <Input
            type="password"
            label="Password"
            register={register("password")}
            error={errors.password?.message}
        />
        <Input
            type="password"
            label="Confirm Password"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
        />

        <button type="submit" disabled={loading}>
          Register
        </button>
        <button onClick={handleNavigateToLogin}> У меня есть аккаунт</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;

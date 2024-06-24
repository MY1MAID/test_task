import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../../shared/api/authApi/authApi";
import Input from "../../ui/Input/Input";
import {IFormSignIn} from "./SignInProps";
import {schema} from "./SignInValidatin";

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

    const handleNavigateToRegistration = () => {
        navigate('/signup')
    }

    const onSubmit: SubmitHandler<IFormSignIn> = async (data) => {
        const resultAction = await dispatch(loginUser(data));
        if (loginUser.fulfilled.match(resultAction)) {
            navigate("/main");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <button type="submit" disabled={loading}>
                    Register
                </button>
                <button onClick={handleNavigateToRegistration}> Ещё нет аккаунта</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default SignUp;
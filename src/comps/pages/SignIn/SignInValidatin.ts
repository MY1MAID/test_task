import * as yup from "yup";

export const schema = yup.object().shape({
    email: yup
        .string()
        .email("Неверный адрес электронной почты")
        .required("Требуется электронная почта"),
    password: yup
        .string()
        .min(6, "Пароль должен содержать не менее 6 символов")
        .required("Требуется ввести пароль"),
});
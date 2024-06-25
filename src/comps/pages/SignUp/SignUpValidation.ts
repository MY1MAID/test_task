import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Требуется указать имя"),
  email: yup
    .string()
    .email("Неверный адрес электронной почты")
    .required("Требуется электронная почта"),
  password: yup
    .string()
    .min(6, "Пароль должен содержать не менее 6 символов")
    .required("Требуется ввести пароль"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Пароли должны совпадать")
    .required("Требуется подтвердить пароль"),
});

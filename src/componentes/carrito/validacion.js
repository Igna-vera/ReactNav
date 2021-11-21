import * as yup from "yup";

let Schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo requerido")
    .min(5, "Min 5 caracteres")
    .max(255, "Max 255 caracteres"),
  phone: yup.string().required(),
  email: yup.string().email(),
});

export default Schema;

import * as yup from "yup";

let Schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo requerido")
    .min(5, "Min 5 caracteres")
    .max(255, "Max 255 caracteres"),
  phone: yup
    .string()
    .required("Ingrese solo números")
    .min(8, "Min 8 caracteres")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "El teléfono no es válido"
    ),
  email: yup.string().email(),
  email2: yup.string().email(),
});

export default Schema;

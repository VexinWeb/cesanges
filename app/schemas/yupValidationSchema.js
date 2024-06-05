import * as Yup from "yup";

const yupValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Prénom trop court")
    .required("Veuillez indiquer votre prénom"),
  lastname: Yup.string()
    .min(2, "Nom trop court")
    .required("Veuillez indiquer votre nom"),
  email: Yup.string()
    .email("Le courriel indiqué est invalide")
    .required("Veuillez indiquer votre courriel"),
  phone: Yup.string()
    .min(10, "Numéro trop court")
    .required("Veuillez indiquer votre numéro de téléphone"),
  subject: Yup.string().required("Veuillez indiquer le sujet du message"),
  message: Yup.string().required("Veuillez écrire un message"),
});

export default yupValidationSchema;

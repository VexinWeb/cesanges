"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import yupValidationSchema from "../schemas/yupValidationSchema";
import { useRouter } from "next/navigation"; // Importez useRouter depuis next/navigation

// ContactForm gets values from the form, using Formik
const ContactForm = () => {
  const router = useRouter(); // Initialisez useRouter

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: yupValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      // Empêcher la soumission multiple
      if (isSubmitting) {
        return;
      }
      setSubmitting(true);

      // Effectuer la requête POST vers la route email.js
      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), // Envoyez les données du formulaire au format JSON
      })
        .then((response) => {
          if (response.ok) {
            // La requête a réussi
            console.log("E-mail envoyé avec succès");

            // Réinitialisez le formulaire après la réussite
            resetForm();

            // Naviguez vers une page de confirmation ou toute autre page si nécessaire
            router.push("/confirmation"); // Remplacez "/confirmation" par votre chemin de page de confirmation
          } else {
            // La requête a échoué
            console.error("Erreur lors de l'envoi de l'e-mail");
            // Vous pouvez afficher un message d'erreur ici
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la requête POST :", error);
          // Gérez les erreurs ici
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
  });

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-12">
        Formulaire de contact
      </h1>
      <div>
        {/* Send message via contact form */}
        <div className="flex justify-center items-center bg-slate-200 py-12 w-80">
          <form onSubmit={formik.handleSubmit} autoComplete="off" className="">
            {/* First name */}
            <div className=" mb-3">
              {/* <div className="flex flex-col w-64"> */}
              <div className="flex flex-col w-full">
                {" "}
                <label htmlFor="firstName" className="mb-2">
                  Prénom
                </label>
                <input
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  id="firstname"
                  name="firstname"
                  className={
                    formik.errors.firstname && formik.touched.firstname
                      ? "px-2 focus:outline-none h-8 border-2 border-rose-400"
                      : "px-2 focus:outline-none border-2 border-white"
                  }
                />
              </div>
              {formik.errors.firstname && formik.touched.firstname && (
                <p className="text-rose-400 text-xs my-2">
                  {formik.errors.firstname}
                </p>
              )}
            </div>
            {/* Last name */}
            <div className=" mb-3">
              <div className="flex flex-col w-64">
                {" "}
                <label htmlFor="lastname" className="mb-2">
                  Nom
                </label>
                <input
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  id="lastname"
                  name="lastname"
                  className={
                    formik.errors.lastname && formik.touched.lastname
                      ? "px-2 focus:outline-none h-8 border-2 border-rose-400"
                      : "px-2 focus:outline-none border-2 border-white"
                  }
                />
              </div>
              {formik.errors.lastname && formik.touched.lastname && (
                <p className="text-rose-400 text-xs my-2">
                  {formik.errors.lastname}
                </p>
              )}
            </div>

            {/* Email */}
            <div className=" mb-3">
              <div className="flex flex-col w-64">
                {" "}
                <label htmlFor="email" className="mb-2">
                  Courriel
                </label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  id="email"
                  name="email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "px-2 focus:outline-none h-8 border-2 border-rose-400"
                      : "px-2 focus:outline-none border-2 border-white"
                  }
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <p className="text-rose-400 text-xs my-2">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Phone number */}
            <div className=" mb-3">
              <div className="flex flex-col w-64">
                {" "}
                <label htmlFor="phone" className="mb-2">
                  Numéro de téléphone
                </label>
                <input
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  id="phone"
                  name="phone"
                  className={
                    formik.errors.phone && formik.touched.phone
                      ? "px-2 focus:outline-none h-8 border-2 border-rose-400"
                      : "px-2 focus:outline-none h-8 border-2 border-white"
                  }
                />
              </div>
              {formik.errors.phone && formik.touched.phone && (
                <p className="text-rose-400 text-xs my-2">
                  {formik.errors.phone}
                </p>
              )}
            </div>

            {/* */}
            <div className="mb-9">
              {/* Subject message */}
              <div className="flex flex-col w-64">
                <label htmlFor="subject" className="mb-2">
                  Sujet du message
                </label>
                <input
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  id="subject"
                  name="subject"
                  className={
                    formik.errors.subject && formik.touched.subject
                      ? "px-2 focus:outline-none h-8 border-2 border-rose-400"
                      : "px-2 focus:outline-none border-2 border-white"
                  }
                />
                {/*  */}
              </div>
              {formik.errors.subject && formik.touched.subject && (
                <p className="text-rose-400 text-xs my-2">
                  {formik.errors.subject}
                </p>
              )}
              {/* Input message */}
              <div className="flex flex-col w-64">
                <label htmlFor="message" className="my-2">
                  Message
                </label>
                <textarea
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="message"
                  name="message"
                  rows="5"
                  className={
                    formik.errors.message && formik.touched.message
                      ? "px-2 focus:outline-none border-2 border-rose-400"
                      : "px-2 focus:outline-none border-2 border-white"
                  }
                />
              </div>
              {formik.errors.message && formik.touched.message && (
                <p className="text-rose-400 text-xs my-2">
                  {formik.errors.message}
                </p>
              )}
            </div>
            {/* Submission button */}
            <div>
              <button
                className="w-64 p-5 text-white bg-zinc-800/90 hover:bg-zinc-800"
                disabled={formik.isSubmitting}
                type="submit"
              >
                Envoyer mon message
                <br /> à Aimé Cesanges
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

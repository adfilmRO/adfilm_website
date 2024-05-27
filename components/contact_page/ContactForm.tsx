"use client";

import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import Image from "next/image";
import * as Yup from "yup";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [success, setSuccess] = useState<"error" | "success" | null>(null);
  const [initialValues, setInitialValues] = useState({
    nume: "",
    prenume: "",
    email: "",
    subiect: "",
    mesaj: "",
  });
  const form = useRef<any>(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const sendEmail = (
    values: {
      nume: string;
      prenume: string;
      email: string;
      subiect: string;
      mesaj: string;
    },
    setSubmitting: any,
    resetForm: any
  ) => {
    emailjs
      .sendForm("service_8rvaowr", "template_5mv7bmi", form.current, {
        publicKey: "wyx05WQTxXNEAOKcJ",
      })
      .then(
        () => {
          setSuccess("success");
          setSubmitting(false);
          resetForm();
        },
        (error) => {
          setSuccess("error");
          setSubmitting(false);
        }
      );
  };

  const contactValidationSchema = Yup.object().shape({
    nume: Yup.string().required("Numele este obligatoriu."),
    prenume: Yup.string().required("Prenumele este obligatoriu."),
    email: Yup.string()
      .email("Adresa de email invalidă.")
      .required("Adresa de email este obligatorie."),
    subiect: Yup.string().required("Subiectul este obligatoriu."),
    mesaj: Yup.string()
      .required("Mesajul este obligatoriu.")
      .min(50, "Mesajul trebuie să aibă măcar 50 de caractere."),
  });

  return (
    <>
      <div className="pt-[1rem] pb-[3rem] lg:py-[10rem] w-full flex flex-col">
        <h1 className="text-[42px] text-white font-mustica-semibold hidden lg:block">
          {"Let's Make it Real!  🚀"}
        </h1>
        <div className="pt-[3rem] w-full flex flex-col lg:flex-row gap-[3rem]">
          <div className="w-full lg:w-[60%] flex justify-center ">
            {/* LEFT SIDE FORM */}
            <Formik
              className="flex justify-center items-center w-full"
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                sendEmail(values, setSubmitting, resetForm);
              }}
              validationSchema={contactValidationSchema}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form
                  ref={form}
                  className="w-[90%] lg:w-full flex flex-col gap-[1rem]"
                >
                  <div className="flex flex-col gap-[0.5rem]">
                    <label htmlFor="nume" className="text-white">
                      Nume
                    </label>
                    <Field
                      id="nume"
                      type="text"
                      name="nume"
                      alt="nume_field"
                      placeholder="Nume"
                      className={` ${touched.nume && errors.nume ? "outline-red-500" : "outline-white"} w-full bg-transparent outline outline-1 rounded-xl p-3 text-white font-montserrat focus:outline-purple-400 transition-all duration-100 focus:text-black focus:bg-white`}
                    />
                    {touched.nume && errors.nume && (
                      <div className="text-red-500 font-montserrat font-bold">
                        {errors.nume}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-[0.5rem]">
                    <label htmlFor="prenume" className="text-white">
                      Prenume
                    </label>
                    <Field
                      id="prenume"
                      type="text"
                      name="prenume"
                      alt="prenume_field"
                      placeholder="Prenume"
                      className={` ${touched.prenume && errors.prenume ? "outline-red-500" : "outline-white"} w-full bg-transparent outline outline-1 rounded-xl p-3 text-white font-montserrat focus:outline-purple-400 transition-all duration-100 focus:text-black focus:bg-white`}
                    />
                    {touched.prenume && errors.prenume && (
                      <div className="text-red-500 font-montserrat font-bold">
                        {errors.prenume}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-[0.5rem]">
                    <label htmlFor="email" className="text-white">
                      Adresă de Email
                    </label>
                    <Field
                      id="email"
                      type="text"
                      name="email"
                      alt="email_field"
                      placeholder="Adresă de Email"
                      className={` ${touched.email && errors.email ? "outline-red-500" : "outline-white"} w-full bg-transparent outline outline-1 rounded-xl p-3 text-white font-montserrat focus:outline-purple-400 transition-all duration-100 focus:text-black focus:bg-white`}
                    />
                    {touched.email && errors.email && (
                      <div className="text-red-500 font-montserrat font-bold">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-[0.5rem]">
                    <label htmlFor="subiect" className="text-white">
                      Subiect
                    </label>
                    <Field
                      id="subiect"
                      type="text"
                      name="subiect"
                      alt="subiect_field"
                      placeholder="Subiect"
                      className={` ${touched.subiect && errors.subiect ? "outline-red-500" : "outline-white"} w-full bg-transparent outline outline-1 rounded-xl p-3 text-white font-montserrat focus:outline-purple-400 transition-all duration-100 focus:text-black focus:bg-white`}
                    />
                    {touched.subiect && errors.subiect && (
                      <div className="text-red-500 font-montserrat font-bold">
                        {errors.subiect}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-[0.5rem]">
                    <label htmlFor="mesaj" className="text-white">
                      Mesaj
                    </label>
                    <Field
                      id="mesaj"
                      as="textarea"
                      rows="10"
                      name="mesaj"
                      alt="mesaj_field"
                      placeholder="Mesaj"
                      className={` ${errors.mesaj ? "outline-red-500" : "outline-white"} w-full bg-transparent outline outline-1 rounded-xl p-3 text-white font-montserrat focus:outline-purple-400 transition-all duration-100 focus:text-black focus:bg-white`}
                    />
                    {touched.mesaj && errors.mesaj && (
                      <div className="text-red-500 font-montserrat font-bold">
                        {errors.mesaj}
                      </div>
                    )}
                  </div>

                  {success === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        delay: 0.15,
                      }}
                      className="flex w-full bg-white rounded-lg border border-l-4 border-l-[#2FB551] p-3 gap-2"
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/contactok.svg"
                        alt="contactok"
                      />
                      <h1 className="text-[#2FB551] text-regular">
                        Mesajul a fost trimis cu succes.
                      </h1>
                    </motion.div>
                  ) : success === "error" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        delay: 0.15,
                      }}
                      className="flex w-full bg-white rounded-lg border border-l-4 border-red-500 p-3 gap-2"
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/contactfail.svg"
                        alt="contactok"
                      />
                      <h1 className="text-red-500 text-regular">
                        Mesajul nu a putut fi trimis.
                      </h1>
                    </motion.div>
                  ) : (
                    ""
                  )}

                  <div className="flex gap-[0.5rem] relative mt-[0.5rem] mb-[1rem]">
                    <Field
                      id="acord"
                      type="checkbox"
                      name="acord"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="absolute right-0"
                    />
                    <label htmlFor="acord" className="custom-checkbox">
                      {isChecked ? (
                        <Image
                          width={60}
                          height={60}
                          draggable={false}
                          alt="button_checked"
                          src="/assets/glassListButton.png"
                        />
                      ) : (
                        <Image
                          width={60}
                          height={60}
                          draggable={false}
                          alt="button_checked"
                          src="/assets/unchecked.png"
                        />
                      )}
                    </label>
                    <label
                      htmlFor="acord"
                      className="text-white select-none max-w-[20rem] lg:max-w-[40rem] "
                    >
                      Prin trimiterea mesajului îmi exprim acordul în ceea ce
                      privește prelucrarea datelor cu caracter personal.*
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={
                      !isChecked ||
                      isSubmitting ||
                      Object.keys(errors).length > 0
                    }
                    className="bg-white disabled:bg-gray-500 disabled:text-gray-900 disabled:border-gray-500 disabled:cursor-not-allowed lg:w-[8rem] text-xl justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer py-2 text-black font-mustica-semibold flex rounded-lg"
                  >
                    {isSubmitting ? (
                      <div className="w-full h-full flex justify-center items-center text-xl text-opacity-0">
                        <p className="opacity-0">.</p>
                        <div className="loader absolute"></div>
                      </div>
                    ) : (
                      "Trimite"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="w-[90%] lg:w-1/2 bg-rose-500 p-2 rounded-xl staffCardBorder staffCard mx-auto h-[20rem] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1454139785915!2d26.1006851!3d44.430179300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaed3a959371eccc5%3A0x9a40395fa610a5d8!2sadfilm.ro!5e0!3m2!1sen!2sro!4v1716371233482!5m2!1sen!2sro"
              loading="lazy"
              className="w-full h-full rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

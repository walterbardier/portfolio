import { useRef, useState } from "react";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import { fadeUp } from "./animations";

import {
  useLanguage,
} from "../context/LanguageContext";

import translations from "../data/translations";

export default function Contact() {
  const form = useRef();

  const [sent, setSent] = useState(false);

  const { language } =
    useLanguage();

  const t = translations[language];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_66boxlm",
        "template_wvednvq",
        form.current,
        "-3EGuKZ5BL8Wtis5L"
      )
      .then(() => {
        emailjs.sendForm(
          "service_66boxlm",
          "template_kju65pl",
          form.current,
          "-3EGuKZ5BL8Wtis5L"
        );

        setSent(true);

        form.current.reset();

        setTimeout(() => {
          setSent(false);
        }, 4000);
      });
  };

  return (
    <motion.div
      className="contact glass"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <h2>{t.contactTitle}</h2>

      <p>{t.contactDescription}</p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <div className="form-row">
          <input
            type="text"
            name="user_name"
            placeholder={t.yourName}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder={t.yourEmail}
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder={t.subject}
          required
        />

        <textarea
          name="message"
          placeholder={
            t.messagePlaceholder
          }
          rows="6"
          required
        />

        <button
          type="submit"
          className="primary-button"
        >
          <b>{t.sendMessage}</b>
        </button>

        {sent && (
          <div className="success-message">
            {t.success}
          </div>
        )}
      </form>
    </motion.div>
  );
}
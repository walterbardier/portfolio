import { useRef, useState } from "react";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import { fadeUp } from "./animations";

export default function Contact() {
  const form = useRef();

  const [sent, setSent] = useState(false);

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
    viewport={{ once: true, amount: 0.2 }}
  >
    <h2>Let’s work together 👋</h2>

    <p>
      Have a project in mind or just want to connect?
      I usually reply within a day.
    </p>

    <form
      ref={form}
      onSubmit={sendEmail}
      className="contact-form"
    >
      <div className="form-row">
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
      />

      <textarea
        name="message"
        placeholder="Tell me about your idea..."
        rows="6"
        required
      />

      <button type="submit" className="primary-button">
        <b>Send message</b>
      </button>

      {sent && (
        <div className="success-message">
          ✨ Message sent successfully
        </div>
      )}
    </form>
  </motion.div>
);
}
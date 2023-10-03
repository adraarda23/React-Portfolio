import React, { useEffect, useRef } from "react";
import "../Styles/Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import PageTransition from "../Animation/PageTransitions";
import emailjs from "emailjs-com";

function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string().required("*Name is required"),
    email: Yup.string().email("*Invalid Email").required("*Email is required"),
    message: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const templateParams = {
          user_name: values.name,
          user_email: values.email,
          message: values.message,
        };
    
        const response = await emailjs.send(
          "service_fxwetta",
          "template_2kick9c",
          templateParams,
          "6SkYNlzJ6mPrysTab"
        );
    
        if (response.status === 200) {
          // E-posta başarıyla gönderildiğinde bildirimi göster
          notificationRef.current.style.display = "block";
          setTimeout(() => {
            notificationRef.current.style.display = "none";
          }, 4000);
    
          formik.resetForm();
          console.log("Form submitted:", values);
        } else {
          // E-posta gönderimi başarısız olduğunda hata mesajını göster
          console.error("Email sending failed:", response);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const notificationRef = useRef(null);


  return (
    <PageTransition>
      <div className="contact">
        <div className="inner_contact">
          <div ref={notificationRef} className="notification">
            Message sent !
          </div>
          <div className="contact-text">
            <h1>Contact</h1>
            <h4>
              Get in touch or shoot me an email directly on{" "}
              <b>ardaaydinkilinc@gmail.com</b>
            </h4>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="form"
            autoComplete="off"
          >
            <div
              className={`input-group ${
                formik.touched.name && formik.errors.name ? "error" : ""
              }`}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="(*)Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <span className="error">
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null}
              </span>
            </div>
            <div
              className={`input-group ${
                formik.touched.email && formik.errors.email ? "error" : ""
              }`}
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="(*)Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <span className="error">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null}
              </span>
            </div>
            <div
              className={`input-group ${
                formik.touched.message && formik.errors.message ? "error" : ""
              }`}
            >
              <textarea
                name="message"
                id="message"
                cols="19"
                rows="10"
                placeholder="Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              <span className="error">
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : null}
              </span>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;

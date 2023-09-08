import React, { useEffect, useRef } from "react";
import "../Styles/Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
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
        //Email göndermesi için gerekli API kurulduktan sonra bağlantısı buraya yapılacak
        formik.resetForm();

        console.log("Form submitted:", values);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <div className="contact">
      <div className="inner_contact">
        <div className="contact-text">
          <h1>Contact</h1>
          <h4>
            Get in touch or shoot me an email directly on{" "}
            <b>ardaaydinkilinc@gmail</b>
          </h4>
        </div>
        <form onSubmit={formik.handleSubmit} className="form" autoComplete="off">
          <div className="input-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              ref={nameInputRef} 
            />
            <span className="error">{formik.errors.name ? formik.errors.name : null}</span>
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <span className="error">{formik.errors.email ? formik.errors.email : null}</span>
          </div>
          <div className="input-group">
            <textarea
              name="message"
              id="message"
              cols="19"
              rows="10"
              placeholder="Message"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
            <span className="error">{formik.errors.message ? formik.errors.message : null}</span>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

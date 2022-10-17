import React, { useRef } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();
    emailjs.sendForm("SERV_ID", "TEMPLATE_ID", form.current, "USER_ID");
    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article>
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:papa@gmail.com" target="_blank">
              Send A Message
            </a>
          </article>
          <article>
            <RiMessage2Line className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>lionelsan95</h5>
            <a href="https://m.me/lionelsan95" target="_blank">
              Send A Message
            </a>
          </article>
          <article>
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+24365578125"
              target="_blank"
            >
              Send A Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendMail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="The Subject"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;

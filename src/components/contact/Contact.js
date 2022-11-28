import "./Contact.scss";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then(() => {
        alert("Email was sent successfully!");
        name.current.value = "";
        email.current.value = "";
        subject.current.value = "";
        message.current.value = "";
      }, () => {
        alert("Error: email was not delivered!");
      });
  };

  return (
    <div className="contact__container">
      <h1>Hit me up!</h1>
      <p>
        If you have any opportunity, feedback, or just want to become friends
        feel free to send me an email so we can talk!
      </p>
      <form ref={form} className="contact__form" onSubmit={sendEmail}>
        <fieldset>
          <legend>Name</legend>
          <input name="name" ref={name} type="text" placeholder="Your name"/>
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input name="email" ref={email} type="email" placeholder="random@example.com"/>
        </fieldset>
        <fieldset>
          <legend>Subject</legend>
          <input name="subject" ref={subject} type="text" placeholder="Meme convention"/>
        </fieldset>
        <textarea name="message" ref={message} placeholder="Message"/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

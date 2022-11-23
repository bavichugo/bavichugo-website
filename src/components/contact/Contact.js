import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [isValidForm, setIsValidForm] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);

    // TODO: add form submission logic
  };

  return (
    <div className="contact__container">
      <h1>Hit me up!</h1>
      <p>
        If you have any opportunity, feedback, or just want to become friends
        feel free to send me an email so we can talk!
      </p>
      <form className="contact__form" onSubmit={onSubmitHandler}>
        <fieldset>
          <legend>Name</legend>
          <input id="name" type="text" placeholder="Your name"/>
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input id="email" type="email" placeholder="random@example.com"/>
        </fieldset>
        <fieldset>
          <legend>Subject</legend>
          <input id="subject" type="text" placeholder="Meme convention"/>
        </fieldset>
        <textarea id="message" placeholder="Message"/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

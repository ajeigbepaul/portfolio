import React from "react";
import "./Letstalk.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="letstalk">
      <form className="letstalk__form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input type="text" className="form__input" />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="email" className="form__input" />
        </div>
        <div className="form-control">
          <label>Message</label>
          <textarea rows="5" cols="10" />
        </div>
        <div className="form-control form__submit">
          <input type="submit" value="send" className="form__input" />
        </div>
      </form>
    </div>
  );
}

export default Contact;

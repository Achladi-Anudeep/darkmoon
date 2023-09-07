import React, { useState, useContext } from "react";
import "./ContactUs.css";
import { IoIosAttach } from "react-icons/io";
import { GlobalContext } from "../../contexts/Global/GlobalContext";

const ContactUs = () => {
  const { setContactUsInput } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setContactUsInput({
        name: name,
        email: email,
        message: message,
        file: file,
      });
      setEmail("");
      setFile("");
      setMessage("");
      setName("");
    } else {
      alert("Fill the required fields");
    }
  };
  return (
    <div className="contact-us">
      <h1 data-aos="fade-right">Contact Us</h1>
      <div data-aos="fade-left" className="contact-us-box">
        <h2>Contact Us</h2>
        <form className="contact-us-form">
          <div className="contact-us-field-box">
            <label htmlFor="name">Full name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your name here"
              type="text"
              id="name"
            />
          </div>
          <div className="contact-us-field-box">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="your@email.com"
              type="email"
              id="email"
            />
          </div>
          <div className="contact-us-field-box">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Write your message"
              type="text"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <>
            <label htmlFor="fileUpload" className="contact-us-file-upload">
              <IoIosAttach />
              Attach files
            </label>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              value={""}
              id="fileUpload"
              style={{ display: "none" }}
            />
            {file && (
              <div className="file-to-upload">
                <IoIosAttach className="file-upload-icon" />
                {file.name}
              </div>
            )}
          </>
          <button
            onClick={handleSubmit}
            type="submit"
            className="contact-us-submit-btn"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

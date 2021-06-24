import "./contactUs_body.css";

import React, { useState } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactUs_body = () => {

  const { executeRecaptcha } = useGoogleReCaptcha();

  // state for keeping track of form data
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    message: "",
    subject: "Breaking Barriers Inquiry",
    token: "",
  });

  // Updates formData whenever textfields are changed
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // Do stuff with the inputs
  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
    }
    formData.token = await executeRecaptcha();
    // POST request to server:
    await fetch('/api/contact_us', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setFormData({
      Name: "",
      email: "",
      message: "",
      subject: "Breaking Barriers Inquiry",
      token: "",
    });
  };

  return (
    <React.Fragment>
      <div className="barriers-contact-us-body">
        <div className="contactContainer">
          <div className="contactFormContainer">
            <h1>Contact Us</h1>
            <p>
              If you are interested in volunteering or partnering with us,
              please feel free to contact us below!
            </p>
            <form onSubmit={handleSubmit}>
              <label>
                NAME:
                <input
                  value={formData.Name}
                  type="text"
                  name="Name"
                  onChange={handleChange}
                />
              </label>
              <label>
                EMAIL:
                <input
                  value={formData.email}
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="secondInput"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </label>
              <label>
                COMMENT:
                <br />
                <textarea
                  value={formData.message}
                  type="text"
                  name="message"
                  onChange={handleChange}
                  maxLength="2000"
                ></textarea>
              </label>
              <br />
              {/* button should be disabled until all 3 fields are filled */}
              <input
                type="submit"
                disabled={
                  !(formData.Name && formData.email && formData.message)
                }
              />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs_body;

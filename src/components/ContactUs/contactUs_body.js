import './contactUs_body.css';

import React, { useEffect, useState } from 'react';

const ContactUs_body = () =>{
  // state for keeping track of form data
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    comment: '',
  })

  // Updates formData whenever textfields are changed
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value
    });
  };

  // Do stuff with the inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // do something with form data here.
  }

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
            <form>
              <label>
                NAME:
                <input value={formData.Name} type="text" name="Name" onChange={handleChange}/>
              </label>
              <label>
                EMAIL:
                <input value={formData.email} type="text" name="email" onChange={handleChange}/>
              </label>
              <label>
                COMMENT:
                <br/>
                <textarea value={formData.comment} type="text" name="comment" onChange={handleChange}></textarea>
              </label>
                <br/>
              {/* button should be disabled until all 3 fields are filled */}
              <button disabled={!(formData.Name && formData.email && formData.comment)}onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactUs_body;
import './contactUs_body.css';

import React, { useEffect, useState } from 'react';

const ContactUs_body = () =>{
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
                <input type="text" name="userName"/>
              </label>
              <label>
                EMAIL:
                <input type="text" name="email"/>
              </label>
              <label>
                COMMENT:
                <br/>
                <textarea type="text" name="email"></textarea>
              </label>
                <br/>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactUs_body;
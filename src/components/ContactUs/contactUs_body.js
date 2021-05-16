import './contactUs_body.css';

import React, { useEffect } from 'react';

const ContactUs_body = () =>{
	return (
    <React.Fragment>
      <div className="barriers-contact-us-body">
        <div className="contactContainer">
          <div className="formContainer">
            <h1>Contact Us</h1>
            <p>
              If you are interested in volunteering or partnering with us,
              Please feel free to contact us below!
            </p>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
            </form>
						<form>
              <label>
                Email:
                <input type="text" name="name" />
              </label>
            </form>
						<form>
              <label>
                Comment:
                <input type="text" name="name" />
              </label>
            </form>
						<button>
							Submit
						</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactUs_body;
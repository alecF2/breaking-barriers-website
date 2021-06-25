import './cp_contact.css';

import React, { useEffect } from 'react';

const CP_Contact = () =>{
	return(
		<React.Fragment>
			<div className="cp-contact">
				<div className="cp-contact-text">
					We are always looking for new
					partnerships with local facilities! As an
					organization, we would love to reach out
					and “break” generational barriers
					wherever we go. If you are a facility 
					interested in partnering with, please do 
					not hesitate to contact us!
				</div>
				<button><a href="/contactUs" >Contact Us</a></button>
			</div>
		</React.Fragment>
	);
}

export default CP_Contact;
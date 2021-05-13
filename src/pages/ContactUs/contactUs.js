import './contactUs.css';

import React, { useEffect } from 'react';
import ContactUs_body from '../../components/ContactUs/contactUs_body';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

const ContactUs = () => {
	return(
		<React.Fragment>
			<div className="contactUs-barriers">
				<Navbar />
				<ContactUs_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default ContactUs;
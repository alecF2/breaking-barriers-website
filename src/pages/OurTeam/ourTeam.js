import './ourTeam.css';

import React, { useEffect } from 'react';
import OurTeam_body from '../../components/OurTeam/ourTeam_body';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

const OurTeam = () => {
	return(
		<React.Fragment>
			<div className="ourTeam-barriers">
				<Navbar />
				<OurTeam_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default OurTeam;
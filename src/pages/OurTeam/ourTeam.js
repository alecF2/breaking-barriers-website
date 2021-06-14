import './ourTeam.css';

import React, { useEffect } from 'react';
import OurTeam_body from '../../components/OurTeam/ourTeam_body';
import OurTeam_body2 from '../../components/OurTeam/ourTeam_body2';
import ProjectSlide_OurTeam from '../../components/OurTeam/projectSlide';
import {SliderData_OurTeam} from '../../components/OurTeam/SliderData';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

const OurTeam = () => {
	return(
		<React.Fragment>
			<div className="ourTeam-barriers">
				<Navbar />
				<OurTeam_body />
				<ProjectSlide_OurTeam slides={SliderData_OurTeam}/>
				<OurTeam_body2 />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default OurTeam;
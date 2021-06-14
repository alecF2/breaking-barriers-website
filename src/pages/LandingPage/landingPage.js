import './landingPage.css';

import React, { useEffect } from 'react';
import Home from '../../components/LandingPage/home';
import Mission from '../../components/LandingPage/mission';
import WhoWeAre from '../../components/LandingPage/whoWeAre';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

const LandingPage = () => {
	return(
		<React.Fragment>
			<div className="landingPage-barriers">
				<Navbar />
				<Home />
				<WhoWeAre />
				<Mission />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default LandingPage;
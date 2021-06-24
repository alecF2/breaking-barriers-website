import './ourTeam_body.css';

import React, { useEffect } from 'react';

const OurTeam_body = () =>{
	return(
		<React.Fragment>
		<div className="team-background">
			<h1 className="team-center">Our Team</h1>
			<div className = "our-team">
				<img className="image-two" src="images/Group_128_ourTeam.png"></img> 
			</div>
			<p class="margin-text" id="p1"> 
				<strong>Breaking Barriers</strong> is comprised of compassionate and 
				dedicated students from various disciplines and backgrounds. 
				We are a diverse bunch with the 
				common goal of “breaking barriers. </p>

			<div className="barriers-our-team-body">
				<h2 className="team-center">Meet Our Officers</h2>
				<p className="padding-bottom margin-text"> Our officers are all UC Davis students from various backgrounds! 
					Each board member is in charge of different aspects of 
					Breaking Barriers. As a team, we aspire to provide the 
					best experience possible for our members and partners.</p>
			</div>
		</div>
		<div className="team-background-Desktop">
			<div class="team-flex-container">

				<div class="flex-child-team magenta">
					<img className="temp" src="images/bird_OurTeam.svg"></img> 
				</div>

				<div class="flex-child-team green">
					<h1 className="headings intro-heading">Our Team</h1>
					<p className="intro-paragraph"> 
						Breaking Barriers is comprised of compassionate and 
						dedicated students from various disciplines and backgrounds. 
						We are a diverse bunch with the 
						common goal of “breaking barriers.</p>
				</div>

			</div>
		</div>
			
		</React.Fragment>
	);
}

export default OurTeam_body;
import './whoWeAre.css';

import React, { useEffect } from 'react';

const WhoWeAre = () =>{
	return(
		<React.Fragment>
			<div className="barriers-who-we-are">
				<h1>Who We Are</h1>
				<img src="images/circles/LPRectangle600.svg"></img><br></br>
					<img src="images/circles/LPEllipse17.svg" class="first"></img>
					<img src="images/circles/LPEllipse52(1).svg" class="second"></img>
					<img src="images/circles/LPEllipse52(1).svg" class="second"></img>
					<img src="images/circles/Ellipse 52 (1).svg" class="second"></img>
				<h2>We are a <strong>student-led organization</strong> at UC Davis seeking to build lasting relationships with older adults through various projects. The gap between older adults and the younger generations does not get any smaller as time goes on.</h2>
				<button class="learn-more" onclick="">learn more ></button>
			</div>
			<div className="barriers-tidbits-about-us">
				<h1>Tidbits About Us</h1>
				<h2>Where are we located?</h2>
				<p><strong>Davis, California!</strong>We are a student organization at the University of California, Davis. The Davis community is a big part of our inspiration. It may be a small college town, but our college town is filled with people of all ages, whether they be young, old, or just passing by—<strong>go Aggies!</strong></p>
				<h1>Tidbits About Us</h1>
				<h2>Our Inspiration</h2>
				<p>Many organizations already exist to help niche populations of older adults with various health conditions. However, <strong>what about the majority of older adults who don’t fall in those niche categories?</strong> We were inspired to serve and reach out to that majority in various ways</p>
				<h1>Tidbits About Us</h1>
				<h2>When were we established?</h2>
				<p><strong>September 2020.</strong> Yes, we were established during the year of “Miss ‘Rona.” COVID-19 has helped us realize that if we college students were already feeling isolated (w/ Zoom and whatnot), how must our older adults be feeling with the disconnect? And how can we reach out to them?</p>
			</div>
		</React.Fragment>
	);
}

export default WhoWeAre;
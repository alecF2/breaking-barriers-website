import './mission.css';

import React, { useEffect } from 'react';

const Mission = () =>{
	return(
		<React.Fragment>
			<div className="mission-main">
				<h1>Our Mission Statement</h1>
				<img src="images/circles/LPRectangle500.svg"></img><br></br>
				<h2>Our ultimate goal is to <strong>bridge language and cultural barriers within the underserved elderly population</strong> as well as <strong>inspire a new sense of purpose in college students</strong> as they engage and learn from elderly adults.</h2>
				<button class="volunteer">volunteer with us!</button>
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
			<div class="circle"></div>
			<div class="circle2"></div>

		</React.Fragment>
	);
}

export default Mission;
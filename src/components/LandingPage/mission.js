import './mission.css';

import React, { useEffect } from 'react';

const Mission = () =>{
	return(
		<React.Fragment>
			<div className="barriers-mission">
				<div className="mission-text">
					<h1>Our Mission Statement</h1>
					<p> Our ultimate goal is to <strong>bridge language and<br/>
					cultural barriers within the underserved<br/>
					elderly population</strong> as well as <strong>inspire a new<br/>
					sense of purpose in college students </strong>as they<br/>
					engage and learn from elderly adults.</p>
					<div className="mission-text-button">
						<button>volunteer with us!</button>
					</div>
				</div>
				<div className="mission-pic">
					<img id="mission-pic" src="images/mission-pic.svg"/>
					<img id="mission-frame" src="images/mission-frame.svg"/>
				</div>
			</div>
			{/*<div className="mission-main">
				{/*<h1>Our Mission Statement</h1>
				<div className="first-frame">
					<img src="images/circles/LPRectangle500.svg" class="w2frame"></img>
					<img src="images/mission.svg" class="dog2"></img><br></br>
				</div>
				<h2>Our ultimate goal is to <strong>bridge language and cultural barriers within the underserved elderly population</strong> as well as <strong>inspire a new sense of purpose in college students</strong> as they engage and learn from elderly adults.</h2>
				<button class="volunteer">volunteer with us!</button>
			</div>
			<div className="barriers-tidbits-about-us">
				<h1>Tidbits About Us</h1>
				<h2>Where are we located?</h2><br></br>
				<div className="first-frame">
					<img src="images/circles/LPRectangle500.svg" class="w3frame"></img><br></br>
					<img src="images/tidbits1.svg" class="firstTid"></img><br></br>
				</div>
				<p><strong>Davis, California!</strong>We are a student organization at the University of California, Davis. The Davis community is a big part of our inspiration. It may be a small college town, but our college town is filled with people of all ages, whether they be young, old, or just passing by—<strong>go Aggies!</strong></p>
				<h1>Tidbits About Us</h1>
				<h2>Our Inspiration</h2><br></br>
				<div className="first-frame">
					<img src="images/circles/LPRectangle599.svg" class="w4frame"></img><br></br>
					<img src="images/tidbits2.svg" class="secondTid"></img><br></br>
					</div>
				<p>Many organizations already exist to help niche populations of older adults with various health conditions. However, <strong>what about the majority of older adults who don’t fall in those niche categories?</strong> We were inspired to serve and reach out to that majority in various ways</p>
				<h1>Tidbits About Us</h1>
				<h2>When were we established?</h2><br></br>
				<div className="first-frame">
					<img src="images/circles/LPRectangle601.svg" class="w5frame"></img><br></br>
					<img src="images/tidbits3.svg" class="thirdTid"></img><br></br>
				</div>
				<p><strong>September 2020.</strong> Yes, we were established during the year of “Miss ‘Rona.” COVID-19 has helped us realize that if we college students were already feeling isolated (w/ Zoom and whatnot), how must our older adults be feeling with the disconnect? And how can we reach out to them?</p>
			</div><br></br><br></br><br></br>
			<div class="circle"></div>
			<div class="circle2"></div>*/}

		</React.Fragment>
	);
}

export default Mission;
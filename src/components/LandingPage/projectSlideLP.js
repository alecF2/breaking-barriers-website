import './projectSlideLP.css';
import React, {Component, useState} from 'react';
import Slider from 'infinite-react-carousel';

const SimpleSlider = () => (
  <Slider dots className="sliderY"
  arrows={false}
  adaptiveHeight
  autoplay
  centerMode
  centerPadding="0"
  autoplaySpeed="5000">
    <div className="barriers-who-we-are">
				<h1>Who We Are</h1>
				<div className="first-frame">
					<img src="images/WhoWeAre.svg" class="dog"></img><br></br>
					<img src="images/circles/LPRectangle600.svg" class="wframe"></img><br></br>
				</div>
				<h2>We are a <strong>student-led organization</strong> at UC Davis seeking to build lasting relationships with older adults through various projects. The gap between older adults and the younger generations does not get any smaller as time goes on.</h2>
				<button class="learn-more" onclick="">learn more </button>
    </div>
    <div className="mission-main">			
				<h1>Our Mission Statement</h1>
				<div className="first-frame">
					<img src="images/circles/LPRectangle500.svg" class="w2frame"></img>
					<img src="images/mission.svg" class="dog2"></img><br></br>
				</div>
				<h2>Our ultimate goal is to <strong>bridge language and cultural barriers within the underserved elderly population</strong> as well as <strong>inspire a new sense of purpose in college students</strong> as they engage and learn from elderly adults.</h2>
				<button class="volunteer">volunteer with us!</button>
			</div>
	<div className="tidbits1">
    <div className="barriers-tidbits-about-us">
    <h1>Tidbits About Us</h1>
				<h2>Where are we located?</h2><br></br>
				<div className="first-frame">
					<img src="images/circles/LPRectangle500.svg" class="w3frame"></img><br></br>
					<img src="images/tidbits1.svg" class="firstTid"></img><br></br>
				</div>
        <p><strong>Davis, California!</strong>We are a student organization at the University of California, Davis. The Davis community is a big part of our inspiration. It may be a small college town, but our college town is filled with people of all ages, whether they be young, old, or just passing by—<strong>go Aggies!</strong></p>
    </div>
	</div>
	<div className="tidbits2">
    <div className="barriers-tidbits-about-us">
    <h1>Tidbits About Us</h1>
				<h2>Our Inspiration</h2><br></br>
				<div className="first-frame">
					<img src="images/circles/LPRectangle599.svg" class="w4frame"></img><br></br>
					<img src="images/tidbits2.svg" class="secondTid"></img><br></br>
					</div>
				<p>Many organizations already exist to help niche populations of older adults with various health conditions. However, <strong>what about the majority of older adults who don’t fall in those niche categories?</strong> We were inspired to serve and reach out to that majority in various ways</p>
    </div>
	</div>
	<div className="tidbits3">
    <div className="barriers-tidbits-about-us">
    <h1>Tidbits About Us</h1>
				<h2>When were we established?</h2><br></br>
				<div className="first-frame">
					<img src="images/circles/LPRectangle601.svg" class="w5frame"></img><br></br>
					<img src="images/tidbits3.svg" class="thirdTid"></img><br></br>
				</div>
				<p><strong>September 2020.</strong> Yes, we were established during the year of “Miss ‘Rona.” COVID-19 has helped us realize that if we college students were already feeling isolated (w/ Zoom and whatnot), how must our older adults be feeling with the disconnect? And how can we reach out to them?</p>
    </div>
	</div>
  </Slider>
);

export default SimpleSlider;
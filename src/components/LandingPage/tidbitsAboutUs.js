import './tidbitsAboutUs.css';

import React, { useEffect } from 'react';

const TidbitsAboutUs = () =>{
	var root = document.documentElement;
	const lists = document.querySelectorAll('.hs'); 

	lists.forEach(el => {
	  const listItems = el.querySelectorAll('li');
	  const n = el.children.length;
	  el.style.setProperty('--total', n);
	});

	return(
		<React.Fragment>
			<div className="app">
				<h1>Tidbits About Us</h1>
				<ul className="hs full">
					<li className="item">
					   	<div className="lp-slider-content">
					    	<div className="lp-slider-pic">
					    		<img className="slideshow-pic" src="images/uc davis.jpeg"/>
					    	</div>
					    	<h2><strong>Where are we located?</strong></h2>
					    	<p><strong>Davis, California!</strong> We are a student<br/>
					    	organization at the University of California,<br/>
					    	Davis. The Davis community is a big part of<br/>
					    	our inspiration. It may be a small college town,<br/>
					    	but our college town is filled with people of all<br/>
					    	ages, whether they be young, old, or just<br/>
					    	passing by—<strong>go Aggies!</strong></p>
					    </div>
					</li>
					<li className="item">
					   	<div className="lp-slider-content">
					    	<div className="lp-slider-pic">
					    		<img className="slideshow-pic" src="images/inspiration.jpg"/>
					    	</div>
					    	<h2><strong>Our Inspiration</strong></h2>
					    	<p>Many organizations already exist to help niche<br/>
					    	populations of older adults with various health<br/>
					    	conditions. However, <strong>what about the majority<br/>
					    	of older adults who don’t fall in those niche<br/>
					    	categories?</strong> We were inspired to serve and<br/>
					    	reach out to that majority in various ways.<br/></p>
					   	</div>
					</li>
					<li className="item">
					    <div className="lp-slider-content third-slide">
					    	<div className="lp-slider-pic">
					    		<img className="slideshow-pic third-pic" src="images/when.jpg"/>
					    		<img className="slideshow-frame" src="images/when.jpg"/>
					    	</div>
					    	<h2><strong>When were we established?</strong></h2>
					    	<p><strong>September 2020. </strong>Yes, we were<br/>
					    	established during the year of “Miss<br/>
					    	‘Rona.” COVID-19 has helped us realize<br/>
					    	that if we college students were already<br/>
					    	feeling isolated (w/ Zoom and<br/>
					    	whatnot), how must our older adults be<br/>
					    	feeling with the disconnect? And how<br/>
					    	can we reach out to them?</p>
					    </div>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
}

export default TidbitsAboutUs;

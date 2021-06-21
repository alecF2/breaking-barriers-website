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
					    		<img className="slideshow-pic" src="images/where-located-pic.svg"/>
					    		<img className="slideshow-frame" src="images/where-located-frame.svg"/>
					    	</div>
					    	<h2>Where are we located?</h2>
					    	<p>Davis, California! We are a student<br/>
					    	organization at the University of California,<br/>
					    	Davis. The Davis community is a big part of<br/>
					    	our inspiration. It may be a small college town,<br/>
					    	but our college town is filled with people of all<br/>
					    	ages, whether they be young, old, or just<br/>
					    	passing by—go Aggies!</p>
					    </div>
					</li>
					<li className="item">
					   	<div className="lp-slider-content">
					    	<div className="lp-slider-pic">
					    		<img className="slideshow-pic" src="images/our-inspiration-pic.svg"/>
					    		<img className="slideshow-frame" src="images/our-inspiration-frame.svg"/>
					    	</div>
					    	<h2>Our Inspiration</h2>
					    	<p>Many organizations already exist to help niche<br/>
					    	populations of older adults with various health<br/>
					    	conditions. However, what about the majority<br/>
					    	of older adults who don’t fall in those niche<br/>
					    	categories? We were inspired to serve and<br/>
					    	reach out to that majority in various ways.<br/></p>
					   	</div>
					</li>
					<li className="item">
					    <div className="lp-slider-content">
					    	<div className="lp-slider-pic">
					    		<img className="slideshow-pic" src="images/when-established-pic.svg"/>
					    		<img className="slideshow-frame" src="images/when-established-frame.svg"/>
					    	</div>
					    	<h2>When were we established?</h2>
					    	<p>September 2020. Yes, we were<br/>
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

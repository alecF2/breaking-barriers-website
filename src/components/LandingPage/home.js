import './home.css';

import React, { useEffect } from 'react';

const Home = () =>{
	return(
		<React.Fragment>
			<div className="barriers-home">
			<img className="home-img" src="image.png" alt="Landing"></img>
			<div className="overlay-text">
				<h1><q>Breaking</q> that invisible barrier across generations</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus.</p>
			</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
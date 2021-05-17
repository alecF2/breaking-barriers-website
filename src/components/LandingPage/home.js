import './home.css';

import React, { useEffect } from 'react';

const Home = () =>{
	return(
		<React.Fragment>
			<div className="barriers-home">
			<img className="home-img" src="image.png" alt="Landing"></img>
			<div className="overlay-text">
				<h1><q>Breaking</q> that invisible barrier across generations</h1>
				<br></br>
					<h2>smaller text goes here</h2>
			</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
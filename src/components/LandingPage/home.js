import './home.css';

import React, { useEffect } from 'react';

const Home = () =>{
	return(
		<React.Fragment>
			<div className="barriers-home home-mobile">
				<h1>"Breaking" that<br/>invisible barrier<br/>
				across generations</h1>	
				<img src='images/Vector 2.svg' class='arrow'></img>
			</div>
			<div className="barriers-home home-web">
				<div className="barriers-home-content">
					<div className="home-web-text">
						<h1>"Breaking" that<br/>invisible barrier<br/>across generations</h1>
						<button>
							<a href="/currentProjects">learn more ></a>
						</button>
					</div>
					<div className="landingPage-barriers-pic">
						<img id="lp-pic" src="images/home_hands.jpg"/>
						<img id="lp-frame" src="images/home-image-frame.svg"/>
					</div>
				</div>
				<img src='images/Vector 2.svg' class='arrow'></img>
			</div>
		</React.Fragment>
	);
}

export default Home;
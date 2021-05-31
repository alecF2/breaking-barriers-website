import './home.css';

import React, { useEffect } from 'react';

const Home = () =>{
	return(
		<React.Fragment>
			<img src="images/circles/LPhomeIMG.svg" class="first"></img>
			<img src="images/LPlanding.svg" class="desktopCover"></img>
			<div className="barriers-home">
				<h1 class="overlay-text"><q>Breaking</q> that <i>invisible</i> barrier across generations</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus.</p>
			</div>
			<br></br><br></br><br></br><br></br><br></br><br></br>
		</React.Fragment>
	);
}
//			<img className="home-img" src="image.png" alt="Landing"></img>

export default Home;
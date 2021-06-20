import './home.css';

import React, { useEffect } from 'react';

const Home = () =>{
	return(
		<React.Fragment>
			{/*<img src="images/circles/LPhomeIMG.svg" class="first"></img>
			
			<div className="barriers-home">
				<h1 class="overlay-text"><q>Breaking</q> that invisible barrier across generations</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus.</p>
			</div>
			<img src='images/Vector 2.svg' class='arrow'></img>
			<br></br>*/}
			<div className="barriers-home home-mobile">
				<h1>"Breaking" that<br/>invisible barrier<br/>
				across generations</h1>
				<p> Lorem ipsum dolor sit amet, consectetur<br/>
				adipiscing elit, sed do eiusmod tempor incididunt<br/>
				ut labore et dolore magna aliqua. Nulla<br/>
				malesuada pellentesque elit eget gravida cum<br/>
				sociis natoque penatibus. </p>
				<img src='images/Vector 2.svg' class='arrow'></img>
			</div>
			<div className="barriers-home home-web">
				<div className="barriers-home-content">
					<div className="home-web-text">
						<h1>"Breaking" that<br/>invisible barrier<br/>across generations</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
						eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
						Nulla malesuada pellentesque elit eget gravida cum sociis<br/>
						natoque penatibus. </p>
						<button>learn more ></button>
					</div>
					<div className="landingPage-barriers-pic">
						<img id="lp-pic" src="images/home-web-image.svg"/>
						<img id="lp-frame" src="images/home-image-frame.svg"/>
					</div>
				</div>
				<img src='images/Vector 2.svg' class='arrow'></img>
			</div>
		</React.Fragment>
	);
}

export default Home;
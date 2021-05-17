import './home.css';

import React, { useEffect } from 'react';

const Home = () =>{
	return(
		<React.Fragment>
			<div className="barriers-home">
			<img src="pic_trulli.jpg" alt="Italian Trulli"></img>
				<h1><q>Breaking</q> that invisible barrier across generations</h1>
					<h2>smaller text goes here</h2>
			</div>
		</React.Fragment>
	);
}

export default Home;
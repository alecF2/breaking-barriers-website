import './mission.css';

import React, { useEffect } from 'react';

const Mission = () =>{
	return(
		<React.Fragment>
			<div className="mission-main">
				<h1>Our Mission Statement</h1>
				<h2>Our ultimate goal is to bridge language and cultural barriers within the underserved elderly population as well as inspire a new sense of purpose in college students as they engage and learn from elderly adults.</h2>
				<button class="learn-more">LEARN MORE ></button>
			</div>
		</React.Fragment>
	);
}

export default Mission;
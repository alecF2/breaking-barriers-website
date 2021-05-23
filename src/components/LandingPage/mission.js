import './mission.css';

import React, { useEffect } from 'react';

const Mission = () =>{
	return(
		<React.Fragment>
			<div className="mission-main">
				<h1>Our Mission Statement</h1>
				<h2>Our ultimate goal is to <strong>bridge language and cultural barriers within the underserved elderly population</strong> as well as <strong>inspire a new sense of purpose in college students</strong> as they engage and learn from elderly adults.</h2>
				<button class="volunteer">volunteer with us!</button>
			</div>
			<div class="circle"></div>
			<div class="circle2"></div>

		</React.Fragment>
	);
}

export default Mission;
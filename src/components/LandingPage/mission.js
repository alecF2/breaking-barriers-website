import './mission.css';

import React, { useEffect } from 'react';

const Mission = () =>{
	return(
		<React.Fragment>
			<div className="barriers-mission">
				<div className="mission-text">
					<h1>Our Mission Statement</h1>
					<p> Our ultimate goal is to <strong>bridge language and<br/>
					cultural barriers within the underserved<br/>
					elderly population</strong> as well as <strong>inspire a new<br/>
					sense of purpose in college students </strong>as they<br/>
					engage and learn from elderly adults.</p>
					<div className="mission-text-button">
						<button>volunteer with us!</button>
					</div>
				</div>
				<div className="mission-pic">
					<img id="mission-pic" src="images/mission-pic.svg"/>
					<img id="mission-frame" src="images/mission-frame.svg"/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Mission;
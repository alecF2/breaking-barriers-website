import './currentProjects_body.css';

import React, { useEffect } from 'react';

const CurrentProjects_body = () =>{
	return(
		<React.Fragment>
			<div className="barriers-current-proj-body web">
				<div className="project-row">
					<div className="current-proj-pic">
						<img id="cp-cat" src="images/CPcat.svg"/>
						<img id="cp-frame" src="images/Frame.svg"/>
					</div>
					<div className="current-proj-text">
						<h1 id="current-proj-title">Current Projects</h1>

						<a>We have partnered up with various local
						<br/>facilities to provide different programs to
						<br/>older adults. These local facilities have
						<br/>different objectives and we have partnered
						<br/>with them to further enhance the quality of
						<br/>programming they have for their residents.
						<br/>Some programs we are currently involved with are:</a>
					</div>
				</div>
				<a className="arrow-head">&#8964;</a>
			</div>

			<div className="barriers-current-proj-body mobile">
			
				<div className="current-proj-pic">
					<img id="cp-cat" src="images/CPcat.svg"/>
					<img id="cp-frame" src="images/Frame.svg"/>
				</div>
			</div>

			<div className="current-proj-text mobile">
				<h1 id="current-proj-title">Current Projects</h1>

				<a>We have partnered up with various local
				facilities to provide different programs to
				older adults. These local facilities have
				different objectives and we have partnered
				with them to further enhance the quality of
				programming they have for their residents.
				Some programs we are currently involved with are:</a>

				<a className="arrow-head">&#8964;</a>
			</div>
		</React.Fragment>
	);
}

export default CurrentProjects_body;
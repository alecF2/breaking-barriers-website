import './projectSlide.css';
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ProjectSlide = () =>{

	const [current, setCurrent] = useState(0);

	return(
		<React.Fragment>
			<div className="barriers-project-slide">
				<h1>This is for Ethan, Iftekar, and Raunak!</h1>
				<h1> This is inside slides</h1>
				
				<FaArrowAltCircleLeft className='left-arrow'/>
				<FaArrowAltCircleRight className='right-arrow'/>
			</div>
		</React.Fragment>
	);
}

export default ProjectSlide;
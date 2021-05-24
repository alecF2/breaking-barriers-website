import './projectSlide.css';
import {SliderData} from './SliderData.js'; 
import React, {Component, useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'

const ProjectSlide = ({ slides }) =>{
	const [current, setCurrent] = useState(0);
	const length = slides.length;
  
	const nextSlide = () => {
	  setCurrent(current === length - 1 ? 0 : current + 1);
	};
  
	const prevSlide = () => {
	  setCurrent(current === 0 ? length - 1 : current - 1);
	};
  
	if (!Array.isArray(slides) || slides.length <= 0) {
	  return null;
	}

	return(
		<section className="slider">
			{/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
			<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/> */}
			<IoIosArrowDown className='down-arrow'/>
			{SliderData.map((slide, index) => {

				return (
					<div className={index === current ? 'slide active' : 'slide'}
					key={index}>
            		{index === current && (
						<div className='projectInfo'>
							<img className='CPimage' src={slide.CPimage} alt='travel image'/>
							<h1 className='CPTitle'> {slide.titleText} </h1>
							<h2 className='CPsubtitle'> {slide.CPsubtitle}  </h2>
							<p className='CPCaption'> {slide.CPCaption} </p>
						</div>

            		)}
         			</div>
				);
			})}
		</section>
	)
}

export default ProjectSlide;
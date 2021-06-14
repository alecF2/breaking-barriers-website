import './projectSlide.css';
import {SliderData} from './SliderData.js'; 
import React, {Component, useState} from 'react';
//import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {IoIosArrowForward, IoIosArrowBack,IoIosArrowDown} from 'react-icons/io'

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
		<div style={{width: '100%', margin: '0', padding: '0'}}>
		<div className="CPSlideDiv">
			<section className="slider">
				<IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
				<IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
				
				{SliderData.map((slide, index) => {

					return (
						<div className={index === current ? 'slide active' : 'slide'}
						key={index}>
						{index === current && (
							<div className='projectInfo'>
								<img className='CPimage' src={slide.CPimage} alt='travel image'/>
								<h1 className='CPTitle'> {slide.titleText} </h1>
								<p className='CPsubtitle'> {slide.CPsubtitle}  </p>
								<p className='CPCaption'> {slide.CPCaption} </p>
								{/* <img className='CPBimg1' src={slide.CPBimg1} alt='bkgd_im1'/>
								<img className='CPBimg2' src={slide.CPBimg2} alt='bkgd_im2'/> */}
								{/* <IoIosArrowDown className='down-arrow'/> */}
							</div>
						)}
						
						</div>
					);
				})}
		</section>
		</div>

			<div className='CPSlideDiv-Web'>
				<div className='CPTech'>
					<div className='CP-head-container'>
						<div className='img-container'>
							<img className='CPwImg' src={SliderData[0].CPimage}/>
						</div>
						<div className='content-container'>
							<h1 className='CPwTitle'> {SliderData[0].titleText}</h1>
							<p className='CPwsubtitle'> {SliderData[0].CPsubtitle}</p>
						</div>
					</div>
					<p className='CPwCaption'> {SliderData[0].CPCaption} </p>
				</div>
				<div className='CPPen'>
					<div className='CP-head-container'>
						<div className='img-container'>
							<img className='CPwImg' src={SliderData[1].CPimage}/>
						</div>
						<div className='content-container'>
							<h1 className='CPwTitle'> {SliderData[1].titleText}</h1>
							<p className='CPwsubtitle'> {SliderData[1].CPsubtitle}</p>
						</div>
					</div>
					<p className='CPwCaption'> {SliderData[1].CPCaption} </p>
				</div>
				<div className='CPArt'>
				<div className='CP-head-container'>
						<div className='img-container'>
							<img className='CPwImg' src={SliderData[2].CPimage}/>
						</div>
						<div className='content-container'>
							<h1 className='CPwTitle'> {SliderData[2].titleText}</h1>
							<p className='CPwsubtitle'> {SliderData[2].CPsubtitle}</p>
						</div>
					</div>
					<p className='CPwCaption'> {SliderData[2].CPCaption} </p>
				</div>
			</div>
		</div>
	)
}

export default ProjectSlide;
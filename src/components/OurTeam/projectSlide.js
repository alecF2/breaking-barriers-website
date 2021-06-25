import './projectSlide_OurTeam.css';
import {SliderData_OurTeam} from './SliderData.js'; 
import React, {Component, useState} from 'react';
// import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'


const ProjectSlide_OurTeam = ({ slides }) =>{
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
		<section className="team-slider-1">
			<FaChevronLeft className="left-arrow-1" onClick={prevSlide}/>
			<FaChevronRight className="right-arrow-1" onClick={nextSlide}/>
			{SliderData_OurTeam.map((slide, index) => {

				return (
					<div className={index === current ? 'slide active-1' : 'slide-1'}
					key={index}>
            		{index === current && (
						<div>
							<div className="team-mobile">
								<img className='CPimage-1' src={slide.CPimage} alt='travel image'/>
								<h2 className='CPTitle-1'> {slide.titleText} </h2>
								<p className='CPsubtitle-1'> {slide.CPsubtitle}  </p>
								<p className='CPCaption-1'> {slide.CPCaption} </p>
								<img className='loader-mobile' src={slide.CPloader} alt='loader'/>
							</div>
							<div className="team-desktop">
								<table style={{"width" : "100%"}}>
									<tbody>
										<tr>
											<td style={{"width" : "40%"}}><img className='CPimage-1-desktop' src={slide.CPimage} alt='travel image'/></td>
											<td style={{"width" : "60%"}}>
												<h1 className="team-headings">Meet Our Officers</h1>
												<h2 className='CPTitle-1-desktop'> {slide.titleText} </h2>
												<p className='CPsubtitle-1-desktop'> {slide.CPsubtitle}  </p>
												<p className='CPCaption-1-desktop'> {slide.CPCaption} </p>
												<img className='loader-desktop' src={slide.CPloader} alt='loader'/>
											</td>
										</tr>
									</tbody>
								</table>
								{/* <p className="desktop">Our officers are all UC Davis students from various backgrounds! Each board member is in charge of different aspects of Breaking Barriers. As a team, we aspire to provide the best experience possible for our members and partners.</p> */}
							</div>
						</div>

            		)}
         			</div>
				);
			})}
		</section>
	)
}

export default ProjectSlide_OurTeam;
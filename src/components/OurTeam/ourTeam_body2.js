import './ourTeam_body.css';

import React, { useEffect } from 'react';

const OurTeam_body2 = () =>{
	return(
		<React.Fragment>
			<div className="team-mobile">
				<div className="barriers-our-team-body1">
				<div>
					<h2 className="team-center team-padding-top">
						Meet Our Volunteers
					</h2>
				</div>
					<p className="barriers-our-team-body team-center team-subtitle-volunteer">Our volunteers are a group of creative, talented individuals</p>
					<img className="image-size1" src="group.jpeg"></img>
					<div class="ul-holder-desktop margin-shift">						
							<ul>
								<li>
									<i class="fa fa-check"></i>Andrea Lopez
								</li>
								<li>
									<i class="fa fa-check"></i> Ngoc Le
								</li>
								<li>
									<i class="fa fa-check"></i> Tulika Singhal
								</li>
	              				<li>
									<i class="fa fa-check"></i>Shaian Mostaghni
								</li>
	              				<li>
									<i class="fa fa-check"></i>Jagnoor Randhawa
								</li>
								<li>
									<i class="fa fa-check"></i>Rashmi Parashar
								</li>
								<li>
									<i class="fa fa-check"></i>Ivy Nguyen
								</li>
								<li>
									<i class="fa fa-check"></i>Addison Ali
								</li>
								<li>
									<i class="fa fa-check"></i>Jonathan Kwok
								</li>
	              				<li>
								<i class="fa fa-check"></i>Avantika Gokulnatha
	              				</li>
							</ul>
							<ul>
								<li>
									<i class="fa fa-check"></i>Jocelyn Lee
								</li>
								<li>
									<i class="fa fa-check"></i>Jessie Deng
								</li>
								<li>
									<i class="fa fa-check"></i>Melanie Toy
								</li><li>
									<i class="fa fa-check"></i>Yutong Ji
								</li>
								<li>
									<i class="fa fa-check"></i>Patience Nguyen
								</li>
								<li>
									<i class="fa fa-check"></i>James Zhang
								</li>
								<li>
									<i class="fa fa-check"></i>Harika Kovvuri
								</li>
								<li>
									<i class="fa fa-check"></i>Nabiya Haider
								</li>
								<li>
									<i class="fa fa-check"></i>Anna Krueger
								</li>
							</ul>
					</div>
			</div>
		</div>



		{/* <div>
			<table style="width: 100%;">
			<tbody>
			<tr>
			<td style="width: 40%;"> <img src="//cdn.shopify.com/s/files/1/1961/3139/files/DF_Laptop_medium.png?v=1505153623" alt="online interior design" /></td>
			<td style="width: 60%;">
			<p>Orangetree Interiors is an online interior decorating boutique that focuses on helping busy people across North America create inspired interior spaces in an easy, convenient and efficient way.  </p>
			<p>Between work, taking care of family, appointments, activities and social obligations, it's hard to get much else done. Never mind finding the time to interview and meet up with a selection of interior designers or decorators to help re-fresh or create a new space. Our unique approach to interior decorating allows you to communicate with us easily and conveniently so that you can stay focused on what’s truly important.</p>
			</td>
			</tr>
			</tbody>
			</table>
		</div> */}




		<div className="team-desktop">
		<p className="team-desktop team-padding">Our officers are all UC Davis students from various backgrounds! Each board member is in charge of different aspects of Breaking Barriers. As a team, we aspire to provide the best experience possible for our members and partners.</p>
		<table className="volunteers" style={{"width" : "100%"}}>
			<tbody>
			<tr>
			<td style={{"width" : "50%"}}>
				<h2 className="margin-shift-1 team-headings">Meet Our Volunteers</h2>
				<p className="barriers-our-team-body margin-shift">Our volunteers are a group of creative, talented individuals</p>
					<div class="ul-holder-desktop margin-shift">
						<div class="team-list">
							<ul className="margin-shift">
								<li>
									<i class="fa fa-check"></i>Erica Chiu
								</li>
								<li>
									<i class="fa fa-check"></i> Joan Oclarit
								</li>
								<li>
									<i class="fa fa-check"></i> Celia Murillo
								</li>
								<li>
									<i class="fa fa-check"></i>Raelleah Moore
								</li>
								<li>
									<i class="fa fa-check"></i>Sally Ho
								</li>
								<li>
									<i class="fa fa-check"></i>Meena Yuqob
								</li>
								<li>
									<i class="fa fa-check"></i>Andy Nguyen
								</li>
								<li>
									<i class="fa fa-check"></i>Pooja Dandekar
								</li>
								<li>
									<i class="fa fa-check"></i>Felicity Barron 
								</li>
								<li>
									<i class="fa fa-check"></i>Isabelle Schlegel
								</li>
								<li>
									<i class="fa fa-check"></i>Iqra Amir
								</li>
								<li>
									<i class="fa fa-check"></i>Andrea Lopez
								</li>
								<li>
									<i class="fa fa-check"></i>Diksha Kudlamath
								</li>
							</ul>
						</div>
						<div class="team-list">
							<ul className="margin-shift">
								<li>
									<i class="fa fa-check"></i>Tiffany Lo
								</li>
								<li>
									<i class="fa fa-check"></i>Emily Lam
								</li>
								<li>
									<i class="fa fa-check"></i>Ulysis Gudin Lucas
								</li>
								<li>
									<i class="fa fa-check"></i>Ngoc Le
								</li>
								<li>
									<i class="fa fa-check"></i>Shria Akalamkam
								</li>
								<li>
									<i class="fa fa-check"></i>Jessica Cai
								</li>
								<li>
									<i class="fa fa-check"></i>Tulika Singhal
								</li>
								<li>
									<i class="fa fa-check"></i>Sameeha Salman
								</li>
								<li>
									<i class="fa fa-check"></i>Shaian Mostaghni
								</li>
								<li>
									<i class="fa fa-check"></i>Jagnoor Randhawa
								</li>
								<li>
									<i class="fa fa-check"></i>Jaya Verma
								</li>
								<li>
									<i class="fa fa-check"></i>Meagan Kerklin
								</li>
							</ul>
						</div>
					</div>
			</td>
			<td style={{"width" : "50%"}}> <img className="desktop-image-size1" src="images/volunteerImage_ourTeam.svg"></img></td>
			</tr>
			</tbody>
			</table>
		</div>
		</React.Fragment>
	);
}

export default OurTeam_body2;
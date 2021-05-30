import React, { useEffect } from 'react';
import './footer.css';

const Footer = () =>{
	return(
		<React.Fragment>
			<div className="barriers-footer">
				<div className="footer-content web">
					<div className="footer-column one">
						<a id="title">Breaking Barriers</a>
						<a id="subtitle">Student organisation at<br/><span className="footer-yellow">University of California, Davis</span></a>
					</div>
					<div className="footer-column two">
						<a className="footer-links">Home</a>
						<a className="footer-links">Our Team</a>
						<a className="footer-links">Current Projects</a>
						<a className="footer-links">Contact Us</a>
					</div>
					<div className="footer-column three">
						<a>Connect With Us!</a>
						<div className="footer-socials">
							<img src="images/facebook.svg"/>
							<a>Like our Facebook Page</a>
						</div>
						<div className="footer-socials">
							<img src="images/instagram.svg"/>
							<a>Follow our Instagram</a>
						</div>
					</div>
					<div className="footer-column four">
						<a>Made with <span className="footer-heart">&#9825;</span><br/>
						by <span className="footer-yellow">#include @ Davis</span></a>
					</div>
				</div>
				<div className="footer-content mobile">
					<div className="footer-column one">
						<a id="title">Breaking Barriers</a>
					</div>
					<div className="footer-column two">
						<img id="facebook" src="images/facebook.svg"/>
						<img id="instagram" src="images/instagram.svg"/>
						<a>Made with <span className="footer-heart">&#9825;</span><br/>
						by <span className="footer-yellow">#include @ Davis</span></a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Footer;
import React, { useEffect } from 'react';
import './footer.css';

const Footer = () =>{
	return(
		<React.Fragment>
			<div className="barriers-footer">
				<div className="footer-content footer-web">
					<div className="footer-column footer-one">
						<img id="footer_tree" className="footer_img" src="images/footer_tree.svg"/>
						<a><img id="footer_logo" className="footer_img" src="images/logo.svg"/></a>
					</div>
					<div className="footer-column footer-two">
						<a id="title">Breaking Barriers</a>
						<a id="subtitle">Student organization at<br/><span className="footer-yellow">University of California, Davis</span></a>
					</div>
					<div className="footer-column footer-three">
						<a href="/" className="footer-links">Home</a>
						<a href="/team" className="footer-links">Our Team</a>
						<a href="/currentProjects" className="footer-links">Current Projects</a>
						<a href="/contactUs" className="footer-links">Contact Us</a>
					</div>
					<div className="footer-column footer-four">
						<a className="connecting">Connect With Us!</a>
						<div className="footer-socials">
							<img className="social-logos" src="images/facebook.svg"/>
							<a href="https://www.facebook.com/breakingbarriersdavis">Like our Facebook Page</a>
						</div>
						<div className="footer-socials">
							<img className="social-logos" src="images/instagram.svg"/>
							<a href="https://www.instagram.com/breakingbarriersdavis">Follow our Instagram</a>
						</div>
					</div>
					<div className="footer-column footer-five">
						<a>Made with <span><img className="footer-heart" src="images/footer-heart.svg"/></span><br/>
						by <span className="footer-yellow"><a href="http://www.includedavis.com/">#include @ Davis</a></span></a>
					</div>
					<div className="footer-column footer-six">
						<img id="footer_tree_two" className="footer_img" src="images/footer-tree-dark.svg"/>
					</div>
				</div>
				<div className="footer-content footer-mobile">
					<div className="footer-column footer-one">
						<img id="footer_tree" className="footer_img" src="images/footer_tree.svg"/>
						<a><img id="footer_logo" className="footer_img" src="images/logo.svg"/></a>
					</div>
					<div className="footer-column footer-two">
						<a id="title">Breaking Barriers</a>
						<div className="mobile-footer-socials">
							<a href="https://www.facebook.com/breakingbarriersdavis"><img id="footer-facebook" className="social-logos" src="images/facebook.svg"/></a>
							<a href="https://www.instagram.com/breakingbarriersdavis"><img id="footer-instagram" className="social-logos" src="images/instagram.svg"/></a>
							<div className="include-motto">
								<a>Made with <span><img className="footer-heart" src="images/footer-heart.svg"/></span><br/>
								by <span className="footer-yellow"><a href="http://www.includedavis.com/">#include @ Davis</a></span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Footer;
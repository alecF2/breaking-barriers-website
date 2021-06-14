import './footer.css';

import React, { useEffect } from 'react';

const Footer = () =>{
	return(
		<React.Fragment>
			<div className="barriers-footer">
				<a href="/"><img src="images/BreakingBarriers1.svg" /></a>
				<div className="barriers-links">
					<a href="/"><img src="images/facebook.svg" /></a>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Footer;
import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from "../link";
import PropTypes from 'prop-types';
import Logo from "../../assets/logo.svg";
import Android from "../../assets/AndroidApp.svg";
import IOS from "../../assets/iOSApp.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";
import Instagram from "../../assets/instagram.svg";
import { androidAppLink, iosAppLink } from "../../config/config";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const CampaignFooter = () => {
	return (
		<div className="container">
			<div className="Footer">
				<div className="row">
					<div className="col-md-12">
						<div className="footerCont text-center">
							<Link link="/">
								<img src={Logo} alt="logo" />
							</Link>
							<p>Cashero Financial OÜ (16169563) trading as “Cashero” is a private limited company with its registered address at Keemia 4,<span className="br-block"></span>10616 Tallinn, Estonia. Phone +3727124338.</p>
							<p>Copyright © 2021 Cashero. All rights reserved</p>
						</div>
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default CampaignFooter;
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

export function Footer() {
	return (
		<div className="container">
			<div className="Footer">
				<div className="row">
					<div className="col-md-6">
						<Link link="/">
							<img src={Logo} alt="logo" />
						</Link>
						<p className="HelpText">Need help? We’re always <span className="br-block"></span> here when you need us</p>
						<ul className="list-unstyled AppList">
							<li><a href="/#"><img alt="" src={Android} /></a></li>
							<li><a href="/#"><img alt="" src={IOS} /></a></li>
						</ul>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-4">
								<p className="NavTitle">Features</p>
								<ul className="list-unstyled FooterList">
									<li><Link link="/personal">Savings</Link></li>
									<li><Link link="/currency-accounts">Wallet</Link></li>
									<li><Link link="/exchange-rates">Exchange</Link></li>
									<li><Link link="/receive-payments">Payments</Link></li>
									<li><Link link="/remittance">Transfers</Link></li>
								</ul>
							</div>
							<div className="col-md-4">
								<p className="NavTitle">Company</p>
								<ul className="list-unstyled FooterList">
									<li><Link link="/company">About Us</Link></li>
									<li><Link link="/blog">Blog</Link></li>
								</ul>
							</div>
							<div className="col-md-4">
								<p className="NavTitle">Legal</p>
								<ul className="list-unstyled FooterList">
									<li><a href="/#">Terms</a></li>
									<li><a href="/#">Privacy</a></li>
									<li><a href="/#">Cookies</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="SocialBox">
					<div className="CopyRight">
						<p>&copy;2020 Cashero Limited&reg;</p>
					</div>
					<div className="SocialCont">
						<p>United States - English</p>
						<ul className="SocialIcons list-unstyled">
							<li><a href="/#"><img alt="" src={LinkedIn} /> </a></li>
							<li><a href="https://www.facebook.com/casheroapp" target="_blank" rel="noopener noreferrer"><img alt="" src={Facebook} /> </a></li>
							<li><a href="https://twitter.com/casheroapp" target="_blank" rel="noopener noreferrer"><img alt="" src={Twitter} /> </a></li>
							<li><a href="https://www.youtube.com/channel/UCnFJebay3pAJBu-DpbYWjCQ" target="_blank" rel="noopener noreferrer"><img alt="" src={Youtube} /> </a></li>
						</ul>
					</div>
				</div>
				<p>Romans 828 (UK) Limited trading as "Cashero" is a limited company registered in England and Wales with the registered company number 12783127 and its registered address at 33 St James's Square, London, SW1Y 4JS, United Kingdom. Cashero uses Wyre Payments, Inc. a registered money service business (NMLS ID: 1574869) and Circle UK Trading Limited an E-Money Issuer authorised by the Financial Conduct Authority (license No. 900480). Romans 828 Limited is registered by the Information Commissioner's Officer (License No. ZA820391).</p>
			</div>
		</div>
	);
}
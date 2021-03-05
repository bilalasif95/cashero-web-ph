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
						<p className="HelpText">Need help? We’re always here <span className="br-block"></span> when you need us. Download the <span className="br-block"></span> App and get started.</p>
						<ul className="list-unstyled AppList">
							<li><a href="/#"><img alt="Android" src={Android} /></a></li>
							<li><a href="/#"><img alt="IOS" src={IOS} /></a></li>
						</ul>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-5">
								<p className="NavTitle">Features</p>
								<ul className="list-unstyled FooterList">
									<li><Link link="/high-yield-savings-account">High Yield Savings</Link></li>
									<li><Link link="/multi-currency-savings-account">Multi-Currency Account</Link></li>
									<li><Link link="/online-currency-exchange">Currency Exchange</Link></li>
									<li><Link link="/instant-money-transfer">Instant Payments</Link></li>
									<li><Link link="/transfer-money-abroad">Global Transfers</Link></li>
								</ul>
							</div>
							<div className="col-md-3">
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
						<p>&copy;2021 Cashero Limited&reg;</p>
					</div>
					<div className="SocialCont">
						<p>United States - English</p>
						<ul className="SocialIcons list-unstyled">
							<li><a href="https://www.linkedin.com/company/casheroapp/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src={LinkedIn} /> </a></li>
							<li><a href="https://www.facebook.com/casheroapp" target="_blank" rel="noopener noreferrer"><img alt="Facebook" src={Facebook} /> </a></li>
							<li><a href="https://twitter.com/casheroapp" target="_blank" rel="noopener noreferrer"><img alt="Twitter" src={Twitter} /> </a></li>
							<li><a href="https://www.instagram.com/casheroapp/" target="_blank" rel="noopener noreferrer"><img alt="Instagram" src={Instagram} /> </a></li>
							<li><a href="https://www.youtube.com/channel/UCnFJebay3pAJBu-DpbYWjCQ" target="_blank" rel="noopener noreferrer"><img alt="Youtube" src={Youtube} /> </a></li>
						</ul>
					</div>
				</div>
				<p>Romans 828 (UK) Limited trading as "Cashero" is a limited company registered in England and Wales with the registered company number 12783127 and its registered address at 33 St James's Square, London, SW1Y 4JS, United Kingdom. Cashero uses Circle UK Trading Limited an E-Money Issuer authorised by the Financial Conduct Authority (license No. 900480).</p>
			</div>
		</div>
	);
}
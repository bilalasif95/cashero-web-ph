import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from "../link";
import PropTypes from 'prop-types';
import Logo from "../../assets/logo.svg";
import Android from "../../assets/AndroidApp.svg";
import AndroidBR from "../../assets/AndroidAppBR.svg";
import IOS from "../../assets/iOSApp.svg";
import IOSBR from "../../assets/iOSAppBR.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";
import Instagram from "../../assets/instagram.svg";
import { androidAppLink, iosAppLink } from "../../config/config";
import { withTranslation } from "react-i18next";

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

const Footer = ({ i18n }) => {
	return (
		<div className="container">
			<div className="Footer">
				<div className="row">
					<div className="col-md-6">
						<Link link="/">
							<img src={Logo} alt="logo" />
						</Link>
						<p className="HelpText">{i18n.t("Footer_P1")} <span className="br-block-with-no-display"></span> {i18n.t("Footer_P2")} <span className="br-block-with-no-display"></span> {i18n.t("Footer_P3")}</p>
						<ul className="list-unstyled AppList">
							<li><a href={androidAppLink} target="_blank" rel="noopener noreferrer"><img alt="Android" src={i18n.language === "brazilian" ? AndroidBR : Android} /></a></li>
							<li><a href={iosAppLink} target="_blank" rel="noopener noreferrer"><img alt="IOS" src={i18n.language === "brazilian" ? IOSBR : IOS} /></a></li>
						</ul>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-5">
								<h4 className="NavTitle">{i18n.t("Features")}</h4>
								<ul className="list-unstyled FooterList">
									<li><Link link="/high-yield-savings-account">{i18n.t("High_Yield_Savings")}</Link></li>
									<li><Link link="/multi-currency-savings-account">{i18n.t("Multi_Currency_Account")}</Link></li>
									<li><Link link="/online-currency-exchange">{i18n.t("Currency_Exchange")}</Link></li>
									<li><Link link="/instant-money-transfer">{i18n.t("Instant_Payments")}</Link></li>
									<li><Link link="/transfer-money-abroad">{i18n.t("Global_Transfers")}</Link></li>
								</ul>
							</div>
							<div className="col-md-3">
								<h4 className="NavTitle">{i18n.t("Company")}</h4>
								<ul className="list-unstyled FooterList">
									<li><Link link="/company">{i18n.t("About_Us")}</Link></li>
									<li><Link link="/blog">{i18n.t("Blog")}</Link></li>
								</ul>
							</div>
							<div className="col-md-4">
								<h4 className="NavTitle">{i18n.t("Legal")}</h4>
								<ul className="list-unstyled FooterList">
									<li><Link link="/terms">{i18n.t("Terms")}</Link></li>
									<li><Link link="/privacy-policy">{i18n.t("Privacy")}</Link></li>
									<li><Link link="/sitemap">{i18n.t("Sitemap")}</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="SocialBox">
					<div className="CopyRight">
						<p>Cashero 2021&copy;&reg;</p>
					</div>
					<div className="SocialCont">
						{/* <p>United States - English</p> */}
						<ul className="SocialIcons list-unstyled">
							<li><a href="https://www.linkedin.com/company/casheroapp/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src={LinkedIn} /> </a></li>
							<li><a href="https://www.facebook.com/casheroapp" target="_blank" rel="noopener noreferrer"><img alt="Facebook" src={Facebook} /> </a></li>
							<li><a href="https://twitter.com/casheroapp" target="_blank" rel="noopener noreferrer"><img alt="Twitter" src={Twitter} /> </a></li>
							<li><a href="https://www.instagram.com/casheroapp/" target="_blank" rel="noopener noreferrer"><img alt="Instagram" src={Instagram} /> </a></li>
							<li><a href="https://www.youtube.com/channel/UCnFJebay3pAJBu-DpbYWjCQ" target="_blank" rel="noopener noreferrer"><img alt="Youtube" src={Youtube} /> </a></li>
						</ul>
					</div>
				</div>
				<p className="text-center">{i18n.t("Footnote_P")}</p>
				<p className="text-center">{i18n.t("Footnote")}</p>
			</div>
		</div>
	);
}

export default withTranslation()(Footer);
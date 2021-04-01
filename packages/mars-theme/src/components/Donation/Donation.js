import React, { useState } from "react";
import Clock from "../../assets/clockImg.svg"
import SlideGroup from "../../assets/SlideGroup.png";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";
import donateDollar from "../../assets/donateDollar.svg";
import heart from "../../assets/heart.svg";
import listHome from "../../assets/listHome.svg";
import DonateBox from "../../assets/DonateBox.png";
import { FindCharity } from "../FindCharity/FindCharity";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "./../signupSection/signupSection";
import { StartDonation } from "../StartDonation/StartDonation";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import pricewallet from "../../assets/pricewallet.png";
import heartDollar from "../../assets/heartDollar.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Link from "../link";

export function Donation() {
	const [appModal, setAppModal] = useState(false)
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<>
			<div className="PesonalBanner">
				<div className="container">
					<div className="row">
						<div className="col-md-7">
							<div className="PersonalCont">
								<h1>Make an Impact, <span className="br-block"></span> Watch Your Money <span className="br-block"></span> Go Further </h1>
								<p className="bannerPara">Select a charity, donate, and they’ll receive every penny of your donations.
								</p>
								<TextfieldBanner />
								<ul className="PersonalList list-unstyled">
									<li><img alt="Clock" src={Clock} />Open an account in minutes. Launching in June.</li>
								</ul>
								<p className="draw-banner-text">Get early access to the Cashero app and earn a chance to win $1,000 every 3 days! <span className="br-block"></span> <Link className="giveaway-link1" link="/giveaway"> Terms and conditions</Link> apply. </p>
							</div>
						</div>
						<div className="col-md-5">
							<img alt="Slide Group" className="img-fluid mx-auto d-block sm-mt-30" src={SlideGroup} />
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md -12">
						<ul className="PersonalCompanyList3 list-unstyled">
							<li><img alt="heart Dollar" src={heartDollar} />Become listed as a charity</li>
							<li><img alt="donate Dollar" src={donateDollar} />Receive donations directly at any time</li>
							<li><img alt="heart" src={heart} />100% is donated</li>
							<li><img alt="list Home" src={listHome} />EU licensed & regulated financial institution</li>
						</ul>
					</div>
				</div>
				<StartDonation />
				<FindCharity />
				<div className="getStarted sm-pt-0">
					<div className="row">
						<div className="col-md-12">
							<h3 className="getStartedTitle">
								How it Works. It’s Simple.
							</h3>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 smBox1">
							<Fade triggerOnce direction="left">
								<div className="GetStartedBox1 w-100">
									<img className="img-fluid" alt="Favourite" src={Fav} />
									<h3>Sign up for Cashero.</h3>
								</div>
							</Fade>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
							<div className="GetStartedBox2 w-100">
								<img
									className="img-fluid"
									alt="Donate Box"
									src={DonateBox}
								/>
								<h3>
									Tap Donate and select a charity
								</h3>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
							<Fade triggerOnce direction="right">
								<div className="GetStartedBox3 w-100">
									<img className="img-fluid" alt="price wallet" src={pricewallet} />
									<h3>
										Make donations to make a difference!
									</h3>
								</div>
							</Fade>
						</div>
					</div>
					<div className="row">
						<div className="offset-md-1 col-md-10">
							<div className="MultistepsCont">
								<p>Ready to donate? Head over to the Cashero app, the rest is simple.</p>
								<button onClick={appModalOpen} className="LinkBtn">
									Get Early Access <img className="ArrowBtn" alt="arrow" src={Arrow1} />
								</button>
							</div>
						</div>
					</div>
					{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
				</div>
			</div>
			<PeoplesSection />
			<div className="container">
				<QuestionTabs activeTab={6} />
			</div>
			<SignupSection />
		</>
	);
}
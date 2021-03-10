import React, { useState } from "react";
import Clock from "../../assets/clockImg.svg";
import donateDollar from "../../assets/donateDollar.svg";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";
import heart from "../../assets/heart.svg";
import Draw from "../../assets/draw.svg";
import listImg from "../../assets/list.png";
import StepsWallet from "../../assets/stepsWallet.png"
import heartDollar from "../../assets/heartDollar.svg";
import listHome from "../../assets/listHome.svg";
import freeFund from "../../assets/freeFund.png";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
// import { Companies } from "../Companies/Companies";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "../signupSection/signupSection";
import { BetterPlace } from "../BetterPlace/BetterPlace";
import { HandleDonations } from "../HandleDonations/HandleDonations";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Link from "../link";

export function ListedCharity() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	}
	return (
		<>
			<div className="PesonalBanner">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="PersonalCont">
								<h1>Harness the Power Of Free Fundraising</h1>
								<p className="bannerPara">We spread your story, you receive 100% of the donations, the world benefits.</p>
								<TextfieldBanner />
								<ul className="PersonalList list-unstyled">
									<li><img alt="Clock" src={Clock} />Open an account in minutes. Launching in June.</li>
								</ul>
								<p className="draw-banner-text">Get early access to the Cashero app and earn a chance to win $1,000 every 3 days! <Link className="giveaway-link1" link="/Giveaway"> Terms and conditions</Link> apply. </p>
							</div>
						</div>
						<div className="col-md-6">
							<img alt="free Fund" className="img-fluid mx-auto d-block" src={freeFund} />
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
							{/* <li><img alt="Draw" src={Draw} />Donate your money at any time</li> */}
							<li><img alt="list Home" src={listHome} />EU licensed & regulated financial institution</li>
						</ul>
					</div>
				</div>
				<BetterPlace />
				<HandleDonations />
				<div className="getStarted">
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
									alt="list Image"
									src={listImg}
								/>
								<h3>
									Apply to become a listed charity.
								</h3>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
							<Fade triggerOnce direction="right">
								<div className="GetStartedBox3 w-100">
									<img className="img-fluid" alt="Steps Wallet" src={StepsWallet} />
									<h3>
										Receive donations and make a difference!
									</h3>
								</div>
							</Fade>
						</div>
					</div>
					<div className="row">
						<div className="offset-md-1 col-md-10">
							<div className="MultistepsCont">
								<p>Ready to increase your charity’s donations? Let’s do it.</p>
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
				{/* <Companies /> */}
				<QuestionTabs activeTab={6} />
			</div>
			<SignupSection />
		</>
	);
}
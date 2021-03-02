import React, { useState } from "react";
import Clock from "../../assets/clockImg.svg";
// import listPhone from "../../assets/ListPhone.svg";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";
import Dollarlist from "../../assets/Dollarlist.svg";
import Draw from "../../assets/draw.svg";
import listHome from "../../assets/listHome.svg";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
// import { Companies } from "../Companies/Companies";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "../signupSection/signupSection";
import { Sendpayments } from "../Sendpayments/Sendpayments";
import GlobeDollar from "../../assets/GlobeDollar.svg";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import Casher0map from "../../assets/Casher0map.svg";
import Done from "../../assets/done.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import StepsDollar from "../../assets/StepsDollar.svg";
import Link from "../link";

export function Remittance() {
	const [appModal, setAppModal] = useState(false);
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
								<h1>Transfer Money Abroad, Stress Free with Cashero</h1>
								<p className="bannerPara">Global transfers that stretch your money further</p>
								<TextfieldBanner />
								<ul className="PersonalList list-unstyled">
									<li><img alt="Clock" src={Clock} />Open an account in minutes. Launching in May.</li>
								</ul>
								<p className="draw-banner-text">Get early access to the Cashero app and earn a chance to win $1,000 every 3 days! <span className="br-block"></span> <Link link="/Giveaway"> Terms and conditions </Link> apply. </p>
							</div>
						</div>
						<div className="col-md-5">
							<img alt="Cashero map" className="img-fluid mx-auto d-block" src={Casher0map} />
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md -12">
						<ul className="PersonalCompanyList list-unstyled">
							<li><img alt="Globe Dollar" src={GlobeDollar} />Send money worldwide</li>
							<li><img alt="Dollar list" src={Dollarlist} />No hidden fees. No minimum balance required</li>
							{/* <li><img alt="list Phone" src={listPhone} />Flexibility, no minimum balance required, monthly fees or penalties for withdrawals</li> */}
							<li><img alt="Draw" src={Draw} />Add or withdraw your money at any time</li>
							<li><img alt="list Home" src={listHome} />EU licensed & regulated financial institution</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container">
				<Sendpayments />
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
									<img alt="Favourite" className="img-fluid" src={Fav} />
									<h3>Sign up for Cashero.</h3>
								</div>
							</Fade>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
							<div className="GetStartedBox2 w-100">
								<img
									className="img-fluid"
									alt="Steps Dollar"
									src={StepsDollar}
								/>
								<h3>
									Add funds to your account.
								</h3>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
							<Fade triggerOnce direction="right">
								<div className="GetStartedBox3 w-100">
									<img className="img-fluid" alt="Done" src={Done} />
									<h3>
										Send money directly to another Cashero account or deposit to a bank account.
									</h3>
								</div>
							</Fade>
						</div>
					</div>
					<div className="row">
						<div className="offset-md-1 col-md-10">
							<div className="MultistepsCont">
								<p>Ready to send money hassle-free? Cashero’s global payment solution is here for you and for what matters most.</p>
								<button className="LinkBtn" onClick={appModalOpen}>
									Start Sending   <img alt="Arrow" className="ArrowBtn" src={Arrow1} />
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
				<QuestionTabs activeTab={5} />
			</div>
			<SignupSection />
		</>
	);
}
import React, { useState } from "react";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";
import Clock from "../../assets/clockImg.svg";
import Instant from "../../assets/instant.svg";
import walletDown from "../../assets/walletDown.svg";
import Draw from "../../assets/draw.svg";
import Dollar from "./../../assets/Dollar.png";
import Path from "../../assets/path.png";
import listHome from "../../assets/listHome.svg"
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "../signupSection/signupSection";
import { LocalPayments } from "../LocalPayments/LocalPayments";
import { GetPaid } from "../Getpaid/Getpaid";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import KuWu from "../../assets/KuWu.png";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Link from "../link";

export function ReceivePayments() {
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
								<h1>Instant Money <span className="br-block"></span> Transfer </h1>
								<p className="bannerPara">Send, request and receive payments in a flash. Pay and get paid, we make it easy.</p>
								<TextfieldBanner />
								<ul className="PersonalList list-unstyled">
									<li><img alt="Clock" src={Clock} />Open an account in minutes. Launching in June.</li>
								</ul>
								<p className="draw-banner-text">Get early access to the Cashero app and earn a chance to win $1,000 every 3 days! <span className="br-block"></span> <Link className="giveaway-link1" link="/giveaway"> Terms and conditions</Link> apply. </p>
							</div>
						</div>
						<div className="col-md-5">
							<img alt="KuWu" className="img-fluid mx-auto d-block" src={KuWu} />
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md -12">
						<ul className="PersonalCompanyList list-unstyled">
							<li><img alt="wallet Down" src={walletDown} />Send, request and receive payments instantly</li>
							<li><img alt="Instant" src={Instant} />No monthly fees. No minimum balance required</li>
							<li><img alt="Draw" src={Draw} />Add or withdraw your money at any time</li>
							<li><img alt="list Home" src={listHome} />EU licensed & regulated financial institution</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container">
				<LocalPayments />
				<GetPaid />
				<div className="getStarted mt-0">
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
									alt="Dollar"
									src={Dollar}
								/>
								<h3>
									Add funds to your account.
								</h3>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
							<Fade triggerOnce direction="right">
								<div className="GetStartedBox3 w-100">
									<img className="img-fluid" alt="Path" src={Path} />
									<h3>
										Send, request and receive payments in an instant.
									</h3>
								</div>
							</Fade>
						</div>
					</div>
					<div className="row">
						<div className="offset-md-1 col-md-10">
							<div className="MultistepsCont">
								<p>Ready to make an instant money transfer? Cashero’s got you. </p>
								<button onClick={appModalOpen} className="LinkBtn">
									Get Early Access  <img alt="arrow" className="ArrowBtn" src={Arrow1} />
								</button>
							</div>
						</div>
					</div>
					{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
				</div>
			</div>
			<PeoplesSection />
			<div className="container">
				<QuestionTabs activeTab={4} />
			</div>
			<SignupSection />
		</>
	);
}
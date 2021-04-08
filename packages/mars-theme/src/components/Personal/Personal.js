import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import NumericLabel from 'react-pretty-numbers';
import Clock from "../../assets/clockImg.svg"
import Arrow from "../../assets/arrow.svg";
import listGraph from "../../assets/listGraph.svg";
import HighDollar from "../../assets/HighDollar.svg";
import Draw from "../../assets/draw.svg";
import listHome from "../../assets/listHome.svg";
import { NoEffort } from "../NoEffort/NoEffort";
import { Savings } from "../Savings/Savings";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import WalletCoins from "../../assets/WalletCoins.png";
import ArrowUp from "../../assets/Arrowup.png";
import Arrow1 from "../../assets/arrowLink.svg";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "../signupSection/signupSection";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Link from "../link";

var bigDecimal = require('js-big-decimal');

export function Personal() {
	const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
	const [selectedYear, setSelectedYear] = useState("5");
	const [value, setValue] = useState("5000");
	const [appModal, setAppModal] = useState(false);
	const onChange = (e) => {
		if (e.target.value.length > 6) {
			return
		}
		setValue(e.target.value)
	};
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	const finalBalance = () => {
		const multi = bigDecimal.multiply(value, 0.05)
		const multi2 = bigDecimal.multiply(multi, selectedYear)
		const add = bigDecimal.add(multi2, value)
		const final = limit(add)
		return final
	};
	const limit = (bal) => {
		let temp = bal ? bal.toString() : "0";
		if (temp) {
			temp = temp.split(".")
		}
		else {
			return temp
		}
		let n = temp[1] ? "" + temp[1] : "0";
		let x = n && (n + "00").substring(0, 2);
		return x ? temp[0] + "." + x : "0.00";
	};
	const totalInterest = () => {
		const multi = bigDecimal.multiply(value, 0.05)
		const multi2 = bigDecimal.multiply(multi, selectedYear)
		const final = limit(multi2)
		return final
	};
	const togglegbp = () => {
		setDropdownOpengbp((prevState) => !prevState);
	};
	return (
		<>
			<div className="PesonalBanner InterestBanner">
				<div className="container">
					<div className="row">
						<div className="col-md-7">
							<div className="PersonalCont">
								<h1>High-Yield <span className="br-block-with-no-display"></span> Savings Account</h1>
								<p className="bannerPara">Make your money do the work. Earn up to 5% APY on your hard-earned cash, paid out daily.</p>
								<TextfieldBanner />
								<ul className="PersonalList list-unstyled">
									<li><img src={Clock} alt="Clock" />Launching in June.</li>
								</ul>
								<p className="draw-banner-text">Get early access to the Cashero app and earn a chance to win $1,000 every 3 days! <span className="br-block-with-no-display"></span> <Link className="giveaway-link1" link="/giveaway">Terms and conditions</Link> apply. </p>
							</div>
						</div>
						<div className="col-md-5">
							<div className={`${value.length === 5 ? "InputBox1" : value.length === 6 ? "InputBox2" : "InputBox"}`}>
								<div className="row">
									<div className="col-12">
										<div className="row inputRow">
											<div className="col-4">
												<div>
													<p className="customText">Deposit</p>
													<TextField
														fullWidth
														value={value}
														onChange={(e) => onChange(e)}
														type="number"
														variant="standard"
														className="PersonalBoxField"
													/>
												</div>
											</div>
											<div className="col-2">
												<img className="interest-arrow" src={Arrow} alt="Arrow" />
											</div>
											<div className="col-6">
												<div className="InterestBox mt-0 TotalText interest-box-cont">
													<p>Total Interest</p>
													<h1>$<NumericLabel params={{
														'shortFormat': true,
														'justification': 'C',
														'shortFormatMinValue': 1000000000000
													}}>{totalInterest()}</NumericLabel></h1>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<div className="row">
											<div className="col-6">
												<div className="InterestBox TotalText">
													<p>Interest Rate</p>
													<h1>5% APY</h1>
												</div>
											</div>
											<div className="col-6">
												<div className="InterestBox TotalText">
													<p>Term</p>
													<div className="yearDropdown">
														<Dropdown
															isOpen={dropdownOpengbp}
															toggle={togglegbp}
														>
															<DropdownToggle caret>
																<h1>{selectedYear} {selectedYear === "1" ? "YEAR" : "YEARS"}</h1>
															</DropdownToggle>
															<DropdownMenu>
																<DropdownItem onClick={() => setSelectedYear("1")}>1 YEAR</DropdownItem>
																<DropdownItem onClick={() => setSelectedYear("5")}>5 YEARS</DropdownItem>
																<DropdownItem onClick={() => setSelectedYear("10")}>10 YEARS</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="InputBox mt-4 FinalTextBox">
								<div className="row">
									<div className="col-12">
										<div className="FinalText text-center">
											<p>Final balance is</p>
											<h1>$<NumericLabel params={{
												'shortFormat': true,
												'justification': 'C',
												'shortFormatMinValue': 10000000000000000
											}}>{finalBalance()}</NumericLabel></h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md -12">
						<ul className="PersonalCompanyList list-unstyled">
							<li><img alt="High Dollar" src={HighDollar} />Inflation-beating 5% APY</li>
							<li><img alt="list Graph" src={listGraph} />Interest paid out daily</li>
							<li><img alt="Draw" src={Draw} />Deposit or withdraw your money at any time</li>
							<li><img alt="list Home" src={listHome} />EU licensed & regulated financial institution</li>
						</ul>
					</div>
				</div>
			</div>
			<NoEffort />
			<div className="container">
				<Savings />
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
									src={WalletCoins}
									alt="Wallet Coins"
								/>
								<h3>Add funds into your Account.</h3>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
							<Fade triggerOnce direction="right">
								<div className="GetStartedBox3 w-100">
									<img className="img-fluid" alt="Arrow Up" src={ArrowUp} />
									<h3>
										Earn up to 5% APY. Yep, that simple.
									</h3>
								</div>
							</Fade>
						</div>
					</div>
					<div className="row">
						<div className="offset-md-1 col-md-10">
							<div className="MultistepsCont">
								<p>Ready to earn more? Growing your wealth is easy with Cashero's high-yield savings account.</p>
								<button onClick={appModalOpen} className="LinkBtn" >
									Get Early Access  <img alt="Arrow" className="ArrowBtn" src={Arrow1} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
			<PeoplesSection />
			<div className="container">
				<QuestionTabs activeTab={1} />
			</div>
			<SignupSection />
		</>
	);
}
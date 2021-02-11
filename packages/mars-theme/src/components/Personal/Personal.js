import React, { useState } from "react";
import { styled } from "frontity";
import TextField from "@material-ui/core/TextField";
import NumericLabel from 'react-pretty-numbers';
import Clock from "../../assets/clockImg.svg"
import Arrow from "../../assets/arrow.svg";
import listGraph from "../../assets/listGraph.svg";
import HighDollar from "../../assets/HighDollar.svg";
import ListPhone from "../../assets/ListPhone.svg";
import Draw from "../../assets/draw.svg";
import listHome from "../../assets/listHome.svg";
import { NoEffort } from "../NoEffort/NoEffort";
import { Savings } from "../Savings/Savings";
import { Simple } from "../Simple/Simple";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import WalletCoins from "../../assets/WalletCoins.png";
import ArrowUp from "../../assets/Arrowup.png";
import Arrow1 from "../../assets/arrowLink.svg";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
import { Companies } from "../Companies/Companies";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "../signupSection/signupSection";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Wait2 from "../../assets/wait.svg";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

var bigDecimal = require('js-big-decimal');

export function Personal() {
	// const [searchTerm, setSearchTerm] = useState<any>("");
	// const [searchResults, setSearchResults] = useState<any>(counrtrylist);
	// const [searchResults2, setSearchResults2] = useState<any>([]);
	// const [code, setCode] = useState("+1");
	// const [dropdownOpen, setDropdownOpen] = useState(false);
	// const [phonenoLength, setPhoneNoLength] = useState(10);
	// const toggle = () => {
	// 	setSearchTerm("");
	// 	setDropdownOpen((prevState) => !prevState);
	// };
	const [openSuccessModal, setSuccessModal] = useState(false);
	const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
	const [selectedYear, setSelectedYear] = useState("5");
	// const [Error, setError] = useState<string>("");
	// const [newPhone, setNewPhoneNumber] = useState("");
	const [value, setValue] = useState("5000");
	const [appModal, setAppModal] = useState(false)
	// const handleChange = (e) => {
	// 	setSearchTerm(e.target.value);
	// 	const results = searchResults.filter(
	// 		(country) =>
	// 			country.name
	// 				.toLowerCase()
	// 				.includes(searchTerm.toLocaleLowerCase()) ||
	// 			country.dial_code.includes(searchTerm.toLocaleLowerCase())
	// 	);
	// 	setSearchResults2(results);
	// };
	// const selectCountry = (country) => {
	// 	setCode(country.dial_code);
	// 	setPhoneNoLength(country.phone_length);
	// 	setSearchTerm("");
	// 	setSearchResults2(counrtrylist);
	// };
	// const getStarted = () => {
	// 	let finalPhoneNumb = code + newPhone;
	// 	callApi(EndPoints.preregistration, "post", "", {
	// 		Phone: finalPhoneNumb,
	// 		// CountryCode: updatecode,
	// 	})
	// 		.then((res: any) => {
	// 			if (res.code === 400) {
	// 				// setError(res.message);
	// 			} else {
	// 				setCode("+1")
	// 				setNewPhoneNumber("");
	// 				setSuccessModal(true);
	// 			}
	// 		})
	// 		.catch(() => {
	// 			// setError("Invalid phone number.");
	// 		});
	// };
	// const handleOnChange = (e: any) => {
	// 	setNewPhoneNumber(e.target.value);
	// };
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
	const closeBothModal = () => {
		// setCode("+1")
		// setNewPhoneNumber("");
		setSuccessModal(false)
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
			{
				openSuccessModal && <Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className="modal"
					open={openSuccessModal}
					onClose={() => setSuccessModal(false)}
					closeAfterTransition
				>
					<Paper>
						<IconButton
							aria-label="Close"
							className="closeButton"
							onClick={() => { closeBothModal() }}
						>
							<CloseIcon />
						</IconButton>
						<div className="Waitlist">
							<div className="container">
								<div className="row waitlistRow">
									<div className="col-md-6">
										<div className="waitlistcont">
											<h3
												className=""
												id="transition-modal-title"
											>
												Thank you for joining{" "}
												<span className="br-block"></span>{" "}
												Cashero's waitlist{" "}
											</h3>
											<p>
												Cashero's revolutionary approach
												to making{" "}
												<span className="br-block"></span>{" "}
												your money go further.{" "}
											</p>
										</div>
									</div>
									<div className="col-md-6">
										<img
											className="img-fluid"
											src={Wait2}
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</Paper>
				</Modal>
			}
			<div className="PesonalBanner InterestBanner">
				<div className="container">
					<div className="row">
						<div className="col-md-7">
							<div className="PersonalCont">
								<h1> High-Yield Savings Account: Make Your <span className="br-block"></span> Money Make More Money</h1>
								<p className="bannerPara">Do that thing rich people do, earn money while you <span className="br-block"></span> sleep. Earn up to 5% APY on your money. Inflation <span className="br-block"></span> beating interest paid out daily.</p>
								<TextfieldBanner />
								{/* <div className="numberSelection">
									<div className="selectCountry">
										<Dropdown
											isOpen={dropdownOpen}
											toggle={toggle}
										>
											<DropdownToggle caret>
												<input
													type="text"
													placeholder="Code"
													value={code}
												/>
											</DropdownToggle>
											<DropdownMenu>
												<DropdownItem header>
													<>
														<SearchIcon />
														<input
															type="text"
															placeholder="Country"
															value={searchTerm}
															onChange={handleChange}
														/>
													</>
												</DropdownItem>
												<div className="country-list">
													{searchResults2.length > 0
														? searchResults2.map(
															(item, index) => (
																<DropdownItem
																	key={
																		index +
																		1
																	}
																	onClick={() =>
																		selectCountry(
																			item
																		)
																	}
																	className="country-item"
																>
																	<div className="flag-name">
																		<span>
																			{
																				item.flag
																			}
																		</span>
																		{
																			item.name
																		}
																	</div>
																	<div className="code">
																		{
																			item.dial_code
																		}
																	</div>
																</DropdownItem>
															)
														)
														: searchResults.map(
															(item, index) => (
																<DropdownItem
																	key={
																		index +
																		1
																	}
																	onClick={() =>
																		selectCountry(
																			item
																		)
																	}
																	className="country-item"
																>
																	<div className="flag-name">
																		<span>
																			{
																				item.flag
																			}
																		</span>
																		{
																			item.name
																		}
																	</div>
																	<div className="code">
																		{
																			item.dial_code
																		}
																	</div>
																</DropdownItem>
															)
														)}
												</div>
											</DropdownMenu>
										</Dropdown>
									</div>
									<div className="inputNum">
										<input
											type="number"
											placeholder="Phone number"
											value={newPhone}
											onChange={(e) => handleOnChange(e)}
										/>
									</div>

									<button
										onClick={() => getStarted()}
										className={
											newPhone.length === phonenoLength
												? "btn btn-primary my-2 my-sm-0 Appbtn "
												: "btn btn-primary my-2 my-sm-0 Appbtn disabled"
										}
										type="submit"
									>
										Get Started
									</button>
								</div> */}
								<ul className="PersonalList list-unstyled">
									<li><img src={Clock} alt="" />Open an account in minutes</li>
								</ul>
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
												<img src={Arrow} alt="" />
											</div>
											<div className="col-6">
												<div className="InterestBox mt-0 TotalText">
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
							<li><img alt="" src={HighDollar} />Inflation beating, 5% APY</li>
							<li><img alt="" src={listGraph} />Interest paid out daily</li>
							<li><img alt="" src={ListPhone} />Flexibility, no minimum balance required, monthly fees or penalties for withdrawals</li>
							<li><img alt="" src={Draw} />Add or withdraw your  money at any time</li>
							<li><img alt="" src={listHome} />EU licensed & regulated financial institution</li>
						</ul>
					</div>
				</div>
			</div>
			<NoEffort />
			<div className="container">
				<Savings />
				<Simple />
				<div className="getStarted">
					<div className="row">
						<div className="col-md-12">
							<h3 className="getStartedTitle">
								How It Works. It’s Simple.
							</h3>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 smBox1">
							<Fade triggerOnce direction="left">
								<div className="GetStartedBox1 w-100">
									<img alt="" className="img-fluid" src={Fav} />
									<h3>Sign up for Cashero.</h3>
								</div>
							</Fade>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
							<div className="GetStartedBox2 w-100">
								<img
									className="img-fluid"
									src={WalletCoins}
									alt=""
								/>
								<h3>
									Add funds into your High {" "}
									<span className="br-block"></span>{" "}
										Yield Savings Account.{" "}
								</h3>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
							<Fade triggerOnce direction="right">
								<div className="GetStartedBox3 w-100">
									<img className="img-fluid" alt="" src={ArrowUp} />
									<h3>
										Earn up to 5% APY and redeem whenever you want.
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
									Start Earning   <img alt="" className="ArrowBtn" src={Arrow1} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
			<PeoplesSection />
			<div className="container">
				<Companies />
				<QuestionTabs activeTab={1} />
			</div>
			<SignupSection />
		</>
	);
}

const Paper = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
  padding: 16px 32px 24px;
  width: 100% !important;
  height: 100vh !important;
  .MuiButtonBase-root {
    top: 81px;
    right: 86px;
    position: absolute;
   @media(max-width: 540px){
      top: 0px;
      right: 0px;
    },
  }
`;
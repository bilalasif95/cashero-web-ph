import React, { useState } from "react";
import TextField from "../../common/textFiled";
import Banner from "../../assets/photoshop.gif";
import Check from "../../assets/check-mark.svg";
import { GlobalMoney } from "../GlobalMoney/GlobalMoney";
import { HighInterest } from "../HighInterest/HighInterest";
import { CurrencyConversion } from "../CurrencyConversion/CurrencyConversion";
import { MoneyRequest } from "../MoneyRequest/MoneyRequest";
import { Enhance } from "../Enhance/Enhance";
import { CharitySection } from "../CharitySection/CharitySection";
import { QuestionTabs } from "../Tabs/Tabs";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
import { Companies } from "../Companies/Companies";
import { SignupSection } from "../signupSection/signupSection";
import { GetStarted } from "../GetStarted/GetStarted";
import Clock from "../../assets/clock.svg";
import { MultiCurrency } from "../MultiCurrency/MultiCurrency";
import { Fade } from "react-awesome-reveal";
import { callApi } from "../../config/call-api";
import { EndPoints } from "../../config/config";
import { structuredData } from "../../config/SEO/Homepage/structuredData";
import ThanksModal from "../ThanksModal/ThanksModal";
import Link from "../link";

export function HomePage(props) {
	// const [searchTerm, setSearchTerm] = useState<any>("");
	// const [searchResults, setSearchResults] = useState<any>(counrtrylist);
	// const [searchResults2, setSearchResults2] = useState<any>([]);
	// const [code, setCode] = useState("+1");
	// const [dropdownOpen, setDropdownOpen] = useState(false);
	// const toggle = () => {
	// 	setSearchTerm("");
	// 	setDropdownOpen((prevState) => !prevState)
	// };
	const [email, setEmail] = useState("");
	// const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState(false);
	const [openSuccessModal, setSuccessModal] = useState(false);
	const onSubmit = () => {
		setLoading(true)
		callApi(EndPoints.preregistration, "post", "", {
			Phone: email,
		})
			.then(() => {
				setSuccessModal(true);
				setLoading(false);
				setEmail("");
			})
	};
	const thanksModalClose = () => {
		setSuccessModal(false);
	};
	// const [newPhone, setNewPhoneNumber] = useState("");
	// const [phonenoLength, setPhoneNoLength] = useState(10);
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
	// 	setPhoneNoLength(country.phone_length)
	// 	setSearchTerm("")
	// 	setSearchResults2(counrtrylist)
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
	return (
		<>
			<script className="structured-data-list" type="application/ld+json">
				{structuredData(props.state)}
			</script>
			{openSuccessModal && (
				<ThanksModal
					open={openSuccessModal}
					handleClose={thanksModalClose}
				/>
			)}
			<div className="container">
				<div className="banner">
					<div className="row">
						<div className="col-md-8">
							<div className="bannerCont">
								<Fade triggerOnce direction="up" delay={100}>
									<h1 className="bannerTitle">
										Your Money's Superhero <span className="br-block"></span> is Almost Here
									</h1>
								</Fade>
								<Fade
									triggerOnce
									direction="up"
									delay={500}
								>
								<div className="Banner-list">
									<h2 className="bannerText slide-up">
										<img src={Check} alt="check" />
										Deposit money to earn up to 5% APY.
									</h2>
									<h2 className="bannerText slide-up">
									<img src={Check} alt="check" />
										Exchange currencies, send money abroad, make instant payments.
									</h2>
									<h2 className="bannerText slide-up">
									<img src={Check} alt="check" />
									 No hidden fees, no minimum deposits, no stress.
									</h2>
								</div>
								</Fade>
								<div className="bannerEmail">
									<TextField
										placeholder="Enter Email Address"
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<div className="GetEarlyBtn">
										<button disabled={loading || !email || !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)} onClick={onSubmit} className="btn btn-default">Get Early Access</button>
									</div>
								</div>
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
															onChange={
																handleChange
															}
														/>
													</>
												</DropdownItem>
												<div className="country-list">
													{searchResults2.length > 0
														? searchResults2.map(
															(
																item,
																index
															) => (
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
															(
																item,
																index
															) => (
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
								{/* <label style={{ color: "red", width: "100%", textAlign: "left", paddingTop: "0.5rem" }}>
									{error}
								</label> */}
								<ul className="HomepagelList list-unstyled">
									<li>
										<img src={Clock} alt="Clock" />
										Open an account in minutes. Launching in May.
									</li>
								</ul>
								<p className="draw-text">Get early access to the Cashero app and earn a chance to win $1,000 every 3 days! <span className="br-block"></span> <Link> Terms and conditions </Link> apply. </p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="bannerImg">
								<img className="img-fluid " alt="Banner" src={Banner} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<HighInterest />
			<div className="container">
				<MoneyRequest />
				<GlobalMoney />
				<MultiCurrency />
				<CurrencyConversion />
			</div>
			<Enhance />
			<div className="container">
				<CharitySection />
				<GetStarted />
			</div>
			<PeoplesSection />
			<div className="container">
				<Companies />
				<QuestionTabs activeTab={0} />
			</div>
			<SignupSection />
		</>
	);
}
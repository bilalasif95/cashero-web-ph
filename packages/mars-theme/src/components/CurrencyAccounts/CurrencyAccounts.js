// import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
// import TextField from "@material-ui/core/TextField";
// import { Theme } from "@material-ui/core/styles";
import Clock from "./../../assets/clockImg.svg";
import { styled } from "frontity";
import { TextfieldBanner } from "../../components/TextfieldBanner/TextfieldBanner";
// import Arrow from "../../assets/arrow.svg";
// import listGraph from "../../assets/listGraph.svg";
// import listClock from "../../assets/listClock.svg";
// import Dollarlist from "../../assets/Dollarlist.svg";
// import listGraph from "../../assets/listGraph.svg";
import oneWallet from "./../../assets/onewallet.svg";
import WalletCoins from "./../../assets/WalletCoins.png";
import Draw from "./../../assets/draw.svg";
import ListPhone from "./../../assets/ListPhone.svg";
// import listClock from "../../assets/listClock.svg";
// import Dollarlist from "../../assets/Dollarlist.svg";
// import listHome from "../../assets/listHome.svg";
// import { callApi } from "../../config/call-api";
// import { EndPoints } from "../../config/config/config";
import { SingleAccount } from "../SingleAccount/SingleAccount";
import { Protect } from "../Protect/Protect";
import { Simple } from "..//Simple/Simple";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
import { Companies } from "../Companies/Companies";
// import { GetStarted } from "../../components/GetStarted/GetStarted";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "../signupSection/signupSection";
import { Fade } from "react-awesome-reveal";
import Fav from "./../../assets/favImg.svg";
import CounterIcon from "./../../assets/counterIcon.svg";
// import Country from "../../assets/Country.svg";
import Earning from "../../assets/earning.svg";
import SearchIcon from "@material-ui/icons/Search";
// import Vector from "../../assets/vector.svg";
// import Done from "../../assets/done.svg";
import MovingCoins from "./../../assets/movingCoins.png";
// import counrtrylist from "../../config/config/countrylist";
import Arrow1 from "./../../assets/arrowLink.svg";
import Wait2 from "./../../assets/wait.svg";
// import Chart from "../../assets/Chart.svg";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import currencieslist from "../../config/currenciesList";
// import Firebase from "../../components/Firebase/firebase";

// import { Input } from '@material-ui/core';
// import envelope from "../../assets/envelope.jpg";
// import { RootState } from "../reducers";

var bigDecimal = require('js-big-decimal');

export function CurrencyAccounts() {
	// const [mobileNum, setMobileNumber] = useState<string>();
	// const [country, setCountry] = useState<CountryType>({
	// 	phone: "",
	// 	label: "",
	// 	code: "",
	// });
	const appModalOpen = () => {
		setAppModal(true)
	}

	const appModalClose = () => {
		setAppModal(false)

	}

	const [appModal, setAppModal] = useState(false)

	// const classes = useStyles();
	// const [searchTerm, setSearchTerm] = useState<any>("");
	// const [searchResults, setSearchResults] = useState<any>(counrtrylist);
	// const [searchResults2, setSearchResults2] = useState<any>([]);
	// const [code, setCode] = useState("+1");
	// const [dropdownOpen, setDropdownOpen] = useState(false);
	const [flaggbp, setflaggbp] = useState("🇺🇸");
	const [flagcurrencygbp, setflagcurrencygbp] = useState("US Dollar - USD");
	const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
	// const [phonenoLength, setPhoneNoLength] = useState(10);
	// const toggle = () => {
	// 	setSearchTerm("");
	// 	setDropdownOpen((prevState) => !prevState);
	// };
	const [searchTermgbp, setSearchTermgbp] = useState("");
	const [openSuccessModal, setSuccessModal] = useState(false);
	// const [Error, setError] = useState<string>("");
	// const [newPhone, setNewPhoneNumber] = useState("");
	// const [open, setOpen] = useState(false);
	const [searchResults2gbp, setSearchResults2gbp] = useState([]);
	const [searchResultsgbp, setSearchResultsgbp] = useState(
		currencieslist
	);
	// const [loading, setLoading] = useState(false);
	const [baseCurrencyEURValue, setBaseCurrencyEURValue] = useState("1");
	const [baseCurrencyGBPValue, setBaseCurrencyGBPValue] = useState("1");
	const [baseCurrencyUSDValue, setBaseCurrencyUSDValue] = useState("1");
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
	// 		.catch((error) => {
	// 			// setError("Invalid phone number.");
	// 		});
	// };

	// const handleOnChange = (e: any) => {
	// 	setNewPhoneNumber(e.target.value);
	// };

	// const [mobileNum, setMobileNumber] = useState<string>("");

	// const handleOpen = () => {
	// 	setOpen(true);
	// };

	// const handleClose = () => {
	// 	setOpen(false);
	// };

	const closeBothModal = () => {
		// setCode("+1")
		// setNewPhoneNumber("");
		setSuccessModal(false)
		setAppModal(false)
		// setOpen(false)
	}

	const togglegbp = () => {
		setSearchTermgbp("");
		setDropdownOpengbp((prevState) => !prevState);
	};

	const handleChangegbp = (e) => {
		setSearchTermgbp(e.target.value);
		const results = searchResultsgbp.filter(
			(country) =>
				country.name
					.toLowerCase()
					.includes(searchTermgbp.toLocaleLowerCase()) ||
				country.dial_code.includes(searchTermgbp.toLocaleLowerCase())
		);
		setSearchResults2gbp(results);
	};

	const selectCountrygbp = (country) => {
		setSearchTermgbp("");
		setSearchResults2gbp(currencieslist);
		setflaggbp(country.flag);
		setflagcurrencygbp(country.name)
	};

	useEffect(() => {
		setSearchResultsgbp(currencieslist)
		// setLoading(true)
		// Firebase.firestore()
		// 	.collection("ExchageRates")
		// 	.doc("BR")
		// 	.get()
		// 	.then((doc) => {
		// 		// setBaseCurrency(doc?.data()?.currencyCode);
		// 		setBaseCurrencyEURValue(doc?.data()?.eur);
		// 		setBaseCurrencyGBPValue(doc?.data()?.gbp);
		// 		setBaseCurrencyUSDValue(doc?.data()?.usd);
		// 		// setLoading(false)
		// 	})
			// .catch((error) => { });
	}, [])

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

		// let t = "0";
		return x ? temp[0] + "." + x : "0.00";
	}

	const calculateBRL = (value, label) => {
		if (label === "US Dollar - USD") {
			const multi = bigDecimal.multiply(50.00, value)
			const final = limit(multi)
			return final
		}
		else if (label === "EU Euro - EUR") {
			const multi = bigDecimal.multiply(60.00, value)
			const final = limit(multi)
			return final
		}
		else {
			const multi = bigDecimal.multiply(70.00, value)
			const final = limit(multi)
			return final
		}
	}

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
				// BackdropComponent={Backdrop}
				// BackdropProps={{
				// 	timeout: 500,
				// }}
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
											alt="wait"
											src={Wait2}
										/>
									</div>
								</div>
							</div>
						</div>
					</Paper>
				</Modal>

			}
			{/* MOdal */}

			<div className="PesonalBanner InterestBanner">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-7">
							<div className="PersonalCont">
							 
							<h1>Multi-Currency <span className="br-block"></span> Savings Account.</h1>
								{/* <h1> Go From Zero To Hero. <span className="br-block"></span> Make Your Money Borderless.</h1> */}
								<p className="bannerPara">Keep your money safe from currency fluctuations.</p>
								<TextfieldBanner />
								{/* Phone-Number */}
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
									<li><img alt="Clock" src={Clock} />Open an account in minutes</li>
								</ul>

							</div>
						</div>
						{/* <div className="col-md-5"> */}
						<div className="col-md-5">
							<div className="Graph">

								<img
									className="CounterIcon"
									alt="CounterIcon"
									src={CounterIcon}
								/>
								<div className="GraphCont">
									<img
										className="img-fluid countryFlag mb-3"
										src={Earning}
										alt="Earning"
									/>
									<p className="mt-3">BRL: {flagcurrencygbp === "US Dollar - USD" ? calculateBRL(baseCurrencyUSDValue, "US Dollar - USD") :
										flagcurrencygbp === "EU Euro - EUR" ? calculateBRL(baseCurrencyEURValue, "EU Euro - EUR") : calculateBRL(baseCurrencyGBPValue, "")}</p>
									<div className="CustomCounter">
										<span className="CounterText">
											{flagcurrencygbp === "US Dollar - USD" ? "$" :
												flagcurrencygbp === "EU Euro - EUR" ? "€" : "£"}{flagcurrencygbp === "US Dollar - USD" ? "50.00" :
													flagcurrencygbp === "EU Euro - EUR" ? "60.00" : "70.00"}
										</span>
										<span id="counter"></span>
									</div>
									<Dropdown
										isOpen={dropdownOpengbp}
										toggle={togglegbp}
									>
										<DropdownToggle caret>
											<div className="mr-3"><span className="FlagIcon">{flaggbp} </span></div>
											<span className="FlagCode">{flagcurrencygbp}</span>
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem
												header
											>
												<>
													<SearchIcon />
													<input
														type="text"
														// placeholder="Country"
														value={
															searchTermgbp
														}
														onChange={
															handleChangegbp
														}
													/>
												</>
											</DropdownItem>
											<div className="country-list">
												{searchResults2gbp.length >
													0
													? searchResults2gbp.map(
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
																	selectCountrygbp(
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
																{/* <div className="code">
																					{
																						item.dial_code
																					}
																				</div> */}
															</DropdownItem>
														)
													)
													: searchResultsgbp.map(
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
																	selectCountrygbp(
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
																{/* <div className="code">
																					{
																						item.dial_code
																					}
																				</div> */}
															</DropdownItem>
														)
													)}
											</div>
										</DropdownMenu>
									</Dropdown>
									{/* <img
										className="mx-fluid countryFlag"
										src={Country}
									/> */}
								</div>
							</div>
							{/* </div> */}

							{/* <img className="img-fluid" src={Chart} /> */}

							{/* <div className="InputBox">
								<div className="row">

									<div className="col-12">
										<div className="row inputRow">
											<div className="col-4">
												<div>
													<p className="customText">Deposit</p>
													<TextField
														fullWidth
														// label="Deposit"
														type="tel"
														variant="standard"
														className="PersonalBoxField"
													/>
												</div>
											</div>
											<div className="col-2">
												<img src={Arrow} />
											</div>
											<div className="col-6">
												<div className="InterestBox mt-0 TotalText">
													<p>Total Interest</p>
													<h1>$0.00</h1>
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
													<h1>8% APY</h1>
												</div>
											</div>

											<div className="col-6">
												<div className="InterestBox TotalText">
													<p>Term</p>
													<h1>1 year</h1>
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

											<h1>$</h1>
										</div>
									</div>

								</div>
							</div> */}

						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md -12">
						<ul className="PersonalCompanyList2 list-unstyled">
							<li><img alt="oneWallet" src={oneWallet} />One wallet, multiple currencies</li>
							<li><img alt="ListPhone" src={ListPhone} />Flexibility, no minimum balance required, monthly fees or penalties for withdrawals</li>
							<li><img alt="Draw" src={Draw} />Add or withdraw your money at any time</li>
							<li><img alt="Draw" src={Draw} />EU licensed & regulated financial institution</li>
						</ul>
					</div>

				</div>
			</div>

			<SingleAccount />
			<div className="container">
				<Protect />
				<Simple />
				{/* Money Request */}
				<div className="getStarted">
					<div className="row">
						<div className="col-md-12">
							<h3 className="getStartedTitle">
								How It Works. It’s Simple.
						</h3>
							<div className="row">
								<div className="col-md-4 col-sm-12 col-xs-12 smBox1">
									<Fade triggerOnce direction="left">
										<div className="GetStartedBox1 w-100">
											<img className="img-fluid" alt="Fav" src={Fav} />
											<h3>Sign up for Cashero.</h3>
										</div>
									</Fade>
								</div>

								<div className="col-md-4 col-sm-12 col-xs-12  smBox2">
									{/* <Fade triggerOnce direction="up"> */}
									<div className="GetStartedBox2 w-100">
										<img
											className="img-fluid"
											alt="WalletCoins"
											src={WalletCoins}
										/>
										<h3>
											Add funds or get paid into  {" "}
											<span className="br-block"></span>{" "}
											your Multi-Currency Account.{" "}
										</h3>
									</div>
									{/* </Fade> */}
								</div>

								<div className="col-md-4 col-sm-12 col-xs-12  smBox3">
									<Fade triggerOnce direction="right">
										<div className="GetStartedBox3 w-100">
											<img className="img-fluid" alt="MovingCoins" src={MovingCoins} />
											<h3>
												Hold and switch between USD, GBP or EUR in seconds.
										</h3>
										</div>
									</Fade>
								</div>
							</div>
							<div className="row">
								<div className="offset-md-1 col-md-10">
									<div className="MultistepsCont">
										<p>Ready to protect your currencies in one wallet? Maintain your wealth in Cashero’s multi-currency account.</p>
										<button onClick={appModalOpen} className="LinkBtn">
											Open your Wallet   <img alt="Arrow" className="ArrowBtn" src={Arrow1} />
										</button>
									</div>
								</div>
							</div>
							{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
						</div>
					</div>
				</div>
				{/* Money Request */}
			</div>

			< PeoplesSection />
			<div className="container">
				<Companies />
				<QuestionTabs activeTab={2} />
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

// const useStyles = makeStyles((theme: Theme) => ({
// 	root: {
// 		width: "100%",
// 		height: "100%",
// 		zIndex: 1,
// 		overflow: "hidden",
// 	},

// 	appFrame: {
// 		position: "relative",
// 		display: "flex",
// 		width: "100%",
// 		height: "100%",
// 	},
// 	modal: {
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	paper: {
// 		backgroundColor: theme.palette.background.paper,
// 		// border: "2px solid #000",
// 		boxShadow: theme.shadows[5],
// 		padding: theme.spacing(2, 4, 3),
// 		width: "100% !important",
// 		height: "100vh !important",
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// 	appBar: {
// 		zIndex: theme.zIndex.drawer + 1,
// 		position: "absolute",
// 	},
// 	navIconHide: {
// 		[theme.breakpoints.up("md")]: {
// 			display: "none",
// 		},
// 	},
// 	drawerHeader: { ...theme.mixins.toolbar },
// 	drawerPaper: {
// 		width: 250,
// 		backgroundColor: theme.palette.background.default,
// 		[theme.breakpoints.up("md")]: {
// 			width: drawerWidth,
// 			position: "relative",
// 			height: "100%",
// 		},
// 	},
// 	closeButton: {
// 		position: "absolute",
// 		// right: theme.spacing.unit / 2,
// 		// top: theme.spacing.unit / 2,
// 		right: 0,
// 		color: theme.palette.grey[500],
// 	},
// 	content: {
// 		backgroundColor: theme.palette.background.default,
// 		width: "100%",
// 		height: "100vh",

// 		// [theme.breakpoints.up("sm")]: {
// 		// 	height: "calc(100% - 64px)",
// 		// },
// 	},
// 	container: {
// 		width: "100%",
// 		maxWidth: "1140px",
// 		margin: "0 auto",
// 		background: "#fff",
// 		position: "relative",
// 		padding: "0px 10px",
// 	},
// 	CustomHeader: {
// 		background: "#fff",
// 		color: "#0667EB",
// 		boxShadow: "inherit",
// 	},
// }));
// import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { Link } from "react-router-dom";
import Link from "../link";
// import { Theme } from "@material-ui/core/styles";
// import { useSelector } from "react-redux";
// import Firebase from "../../config/firebase";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../styles/scss/HighInterest.scss";
// import Country from "../../assets/Country.svg";
import Earning from "../../assets/earning.svg";
import Arrow from "../../assets/arrowLink.svg";
import ArrowWhite from "../../assets/arrowLinkWhite.svg";
import CounterIcon from "../../assets/counterIcon.svg";
import { Fade } from "react-awesome-reveal";
import SearchIcon from "@material-ui/icons/Search";
import currencieslist from "../../config/currenciesList";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

var bigDecimal = require('js-big-decimal');

export function HighInterest(props) {
	// const classes = useStyles();
	// const passcode = localStorage.getItem("passcodeInput");
	// const [value, setValue] = useState(0);
	// const [loading, setLoading] = useState(false);
	// const [mobileNum, setMobileNumber] = useState<string>();
	// const [country, setCountry] = useState<CountryType>({
	// 	phone: "",
	// 	label: "",
	// 	code: "",
	// });
	// const [amount, setAmount] = useState("");
	// const [apy, setApy] = useState("");

	// const auth = useSelector((state) => state.authList.auth);

	const [flaggbp, setflaggbp] = useState("🇺🇸");
	const [flagcurrencygbp, setflagcurrencygbp] = useState("US Dollar - USD");
	const [baseCurrencyEURValue, setBaseCurrencyEURValue] = useState("1");
	const [baseCurrencyGBPValue, setBaseCurrencyGBPValue] = useState("1");
	const [baseCurrencyUSDValue, setBaseCurrencyUSDValue] = useState("1");
	const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
	const [searchTermgbp, setSearchTermgbp] = useState("");

	const [searchResultsgbp, setSearchResultsgbp] = useState(currencieslist);
	const [searchResults2gbp, setSearchResults2gbp] = useState([]);

	const togglegbp = () => {
		setSearchTermgbp("");
		setDropdownOpengbp((prevState) => !prevState);
	};

	// const settings = {
	// 	dots: false,
	// 	autoplay: true,
	// 	arrows: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	cssEase: "linear",
	// };

	useEffect(() => {
		setSearchResultsgbp(currencieslist)
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
		// 	.catch((error) => { });
		// // Firebase.firestore()
		// // 	.collection("LiveEarnings")
		// // 	.doc("usdc")
		// // 	.get()
		// // 	.then((doc) => {
		// // 		setAmount(doc?.data()?.amount);
		// // 		setApy(doc?.data()?.apy);
		// // 	})
		// // 	.catch((error) => { });
		// Firebase.auth().onAuthStateChanged((user) => {
		// 	if (user) {
		// 		Firebase.firestore()
		// 			.collection("Users")
		// 			.doc(user.uid)
		// 			.get()
		// 			.then((doc) => {
		// 				if (doc.exists) {
		// 					// localStorage.setItem(
		// 					// 	"passcodeInput",
		// 					// 	doc?.data()?.passCode
		// 					// );
		// 					// localStorage.setItem("passcode", "true");
		// 					setLoading(false);
		// 				} else {
		// 					setLoading(false);
		// 				}
		// 			})
		// 			.catch((error) => {
		// 				setLoading(false);
		// 			});
		// 	} else {
		// 		setLoading(false);
		// 	}
		// });
	}, []);

	// if (loading) {
	// 	return (
	// 		<div className={classes.pageContainer}>
	// 			<div className={classes.centerContainer}>
	// 				<CircularProgress />
	// 			</div>
	// 		</div>
	// 	);
	// }
	// if (passcode && !auth) {
	// 	return <Redirect to="/signin" />;
	// }

	const selectCountrygbp = (country) => {
		setSearchTermgbp("");
		setSearchResults2gbp(currencieslist);
		setflaggbp(country.flag);
		setflagcurrencygbp(country.name)
	};

	// var userId = localStorage.getItem("user");

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
			{/* Saving-Account */}
			<div className="SavingAccount">
				<div className="container">
					<div className="row flex-column-reverse flex-sm-row">
						<div className="col-md-6">
							<div className="Graph">
								<img
									className="CounterIcon"
									src={CounterIcon}
									alt=""
								/>
								<div className="GraphCont">
									<img
										className="mx-fluid countryFlag mb-3"
										src={Earning}
										alt=""
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
									{/* <img
										className="mx-fluid countryFlag"
										src={Country}
									/> */}
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
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="oneAppCont">
								<Fade triggerOnce direction="up">
									<h3 className="HighInterestTitle">
										High Yield
										<span className="br-block"></span>{" "}
										Savings Account
									</h3>
									<p className="HighInterestText">
										Receive inflation beating interest rates of 2%-5% APY. Yes, you read that correctly. Flexibility, no minimum balance required, monthly fees or penalties for withdrawals. Do that thing rich people do, make money while you sleep.


									</p>
									<Link link="/personal"><a className="Link" href="/personal">Learn more about Savings
									{/* {window.innerWidth >= 540 ?  */}
										<img alt="" className="ArrowBtn" src={Arrow} />
										{/* : 
									<img alt="" className="ArrowBtn" src={ArrowWhite} /> */}
										{/* } */}
									</a></Link>
								</Fade>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Saving-Account */}
		</>
	);
}
// const drawerWidth = 240;
// const useStyles = makeStyles((theme) => ({
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
// 		// backgroundColor: theme.palette.background.paper,
// 		// border: "2px solid #000",
// 		// boxShadow: theme.shadows[5],
// 		// padding: theme.spacing(2, 4, 3),
// 		width: "100% !important",
// 		height: "100vh !important",

// 	},
// 	menuButton: {
// 		// marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// 	appBar: {
// 		// zIndex: theme.zIndex.drawer + 1,
// 		position: "absolute",
// 	},
// 	navIconHide: {
// 		// [theme.breakpoints.up("md")]: {
// 		// 	display: "none",
// 		// },
// 	},
// 	drawerHeader: {
// 		// ...theme.mixins.toolbar
// 	},
// 	drawerPaper: {
// 		width: 250,
// 		// backgroundColor: theme.palette.background.default,
// 		// [theme.breakpoints.up("md")]: {
// 		// 	width: drawerWidth,
// 		// 	position: "relative",
// 		// 	height: "100%",
// 		// },
// 	},
// 	closeButton: {
// 		position: "absolute",
// 		// right: theme.spacing.unit / 2,
// 		// top: theme.spacing.unit / 2,
// 		// color: theme.palette.grey[500],
// 		top: "81px",
// 		right: "86px",
// 		"& svg": {
// 			height: "32px",
// 			width: "32px",
// 			"& path": {
// 				fill: "#000",
// 			},
// 		},
// 		// [theme.breakpoints.down('sm')]: {
// 		// 	top: "0px !important",
// 		// 	right: "0px !important",
// 		// 	"& svg": {
// 		// 		height: "32px",
// 		// 		width: "32px",
// 		// 		"& path": {
// 		// 			fill: "#000",
// 		// 		},
// 		// 	},
// 		// },
// 	},
// 	content: {
// 		// backgroundColor: theme.palette.background.default,
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
// 	pageContainer: {
// 		minHeight: "99vh",
// 	},
// 	centerContainer: {
// 		flex: 1,
// 		width: "100%",
// 		height: "100%",
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		flexDirection: "column",
// 	},
// }));
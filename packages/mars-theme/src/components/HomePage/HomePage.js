import React, { useState } from "react";
import TextField from "../../common/textFiled";
import { styled } from "frontity";
// import {
// 	Dropdown,
// 	DropdownToggle,
// 	DropdownMenu,
// 	DropdownItem,
// } from "reactstrap";
// import SearchIcon from "@material-ui/icons/Search";
// import { makeStyles } from "@material-ui/styles";
// import { Theme } from "@material-ui/core/styles";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../styles/scss/homepage.scss";
import Banner from "../../assets/photoshop.gif";
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
// var Fade = require('react-reveal/Fade')
import { Fade } from "react-awesome-reveal";
// import Fade2 from "@material-ui/core/Fade";
// import Fade from '@material-ui/core/Fade';
// import { callApi } from "../../config/call-api";
// import { EndPoints } from "../../config/config/config";
import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Wait2 from "../../assets/wait.svg";
// import counrtrylist from "../../config/config/countrylist";
import { callApi } from "../../config/call-api";
import { EndPoints } from "../../config/config";

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
	// const classes = useStyles();
	const [email, setEmail] = useState("");
	// const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState(false);
	const [openSuccessModal, setSuccessModal] = useState(false);
	const onSubmit = () => {
		setLoading(true)
		// setError("");
		// if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
		//     setError("Email is incorrect.");
		//     setLoading(false);
		// }
		// else {
		callApi(EndPoints.preregistration, "post", "", {
			Phone: email,
		})
			.then(() => {
				setSuccessModal(true);
				setLoading(false);
				setEmail("");
			})
		// }
	}
	// const [Error, setError] = useState<string>("");
	// const [newPhone, setNewPhoneNumber] = useState("");
	// const [phonenoLength, setPhoneNoLength] = useState(10);
	// const [open, setOpen] = useState(false);

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
	// 		.catch((error) => {
	// 			// setError("Invalid phone number.");
	// 		});
	// };

	// const handleOnChange = (e: any) => {
	// 	setNewPhoneNumber(e.target.value);
	// };

	// const handleOpen = () => {
	// 	setOpen(true);
	// };

	// const handleClose = () => {
	// 	setOpen(false);
	// };



	return (
		<>
			<Modal
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
						onClick={() => setSuccessModal(false)}
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
					{/* <div className="Waitlist">
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
												Cashero waitlist{" "}
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
										/>
									</div>
								</div>
							</div>
						</div> */}
				</Paper>

			</Modal>
			<div className="container">
				{/* banner */}
				<div className="banner">
					<div className="row">
						<div className="col-md-8">
							<div className="bannerCont">
								<Fade triggerOnce direction="up" delay={100}>
									<h1 className="bannerTitle">
										Your Money's Superhero
									</h1>
								</Fade>
								<Fade
									triggerOnce
									direction="up"
									delay={500}
								>
									<h2 className="bannerText slide-up">

										Deposit money to earn up to 5% APY. <span className="br-block"></span> Exchange currencies, send money abroad, <span className="br-block"></span> make instant payments. <span className="br-block"></span> No hidden fees, no minimum deposits, no stress.

								</h2>
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
								{/* {error && (
									<>
										{error.includes("Success") ? (
											<div style={{ width: "100%" }}>
												<p style={{ color: "green", textAlign: "center" }}>
													{error}
												</p>
											</div>
										) : (
												<div style={{ width: "100%" }}>
													<p className="emailError" style={{ textAlign: "left" }}>
														{error}
													</p>
												</div>
											)}
									</>
								)} */}

								{/* Phone-Number
								<div className="numberSelection">
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
									{Error}
								</label> */}
								<ul className="HomepagelList list-unstyled">
									<li>
										<img src={Clock} alt="" />
										Open an account in minutes
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							{/* <Fade triggerOnce direction="right"> */}
							<div className="bannerImg">
								<img className="img-fluid " alt="" src={Banner} />
							</div>
							{/* </ Fade> */}
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
			{/* banner */}
		</>
	);
}

// const drawerWidth = 240;
// const useStyles = makeStyles((theme) => ({
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
// 		right: 0,
// 		// color: theme.palette.grey[500],
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
// }));

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
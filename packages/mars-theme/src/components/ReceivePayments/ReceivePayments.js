import React, { useState } from "react";
import { styled } from "frontity";
// import TextField from "@material-ui/core/TextField";
// import CountrySelect from "../../components/CountrySelect/CountrySelect";
import { TextfieldBanner } from "../../components/TextfieldBanner/TextfieldBanner";
import Clock from "../../assets/clockImg.svg"
// import Arrow from "../../assets/arrow.svg"
import Instant from "./../../assets/instant.svg"
// import listGraph from "../../assets/listGraph.svg"
import walletDown from "./../../assets/walletDown.svg";
import listPhone from "./../../assets/ListPhone.svg";
import Draw from "./../../assets/draw.svg";
import Dollar from "././../../assets/Dollar.png";
import Path from "./../../assets/path.png";
import listHome from "../../assets/listHome.svg"
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
import { Companies } from "../Companies/Companies";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "../signupSection/signupSection";
import { LocalPayments } from "../LocalPayments/LocalPayments";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import KuWu from "./../../assets/KuWu.svg";
import Wait2 from "../../assets/wait.svg";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import GetTheAppModal from "../../components/GetTheAppModal/GetTheAppModal";

// import {
// 	Dropdown,
// 	DropdownToggle,
// 	DropdownMenu,
// 	DropdownItem,
// } from "reactstrap";


// import { Input } from '@material-ui/core';
// import envelope from "../../assets/envelope.jpg";
// import { RootState } from "../reducers";

export function ReceivePayments() {
	const appModalOpen = () => {
		setAppModal(true)
	}

	const appModalClose = () => {
		setAppModal(false)

	}

	const [appModal, setAppModal] = useState(false)

	// const classes = useStyles();
	// const [searchTerm, setSearchTerm] = React.useState<any>("");
	// const [searchResults, setSearchResults] = React.useState<any>(counrtrylist);
	// const [searchResults2, setSearchResults2] = React.useState<any>([]);
	// const [code, setCode] = React.useState("+1");
	// const [dropdownOpen, setDropdownOpen] = useState(false);
	// const [phonenoLength, setPhoneNoLength] = React.useState(10);
	// const toggle = () => {
	// 	setSearchTerm("");
	// 	setDropdownOpen((prevState) => !prevState);
	// };

	const [openSuccessModal, setSuccessModal] = React.useState(false);
	// const [Error, setError] = React.useState<string>("");
	// const [newPhone, setNewPhoneNumber] = useState("");
	// const [open, setOpen] = React.useState(false);

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

	// const [mobileNum, setMobileNumber] = React.useState<string>("");

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
							className={classes.closeButton}
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

			<div className="PesonalBanner">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="PersonalCont">
								{/* <h1>Send, Request And Receive Payments In An Instant</h1> */}
								<h1>Instant Money Transfer - Send, Request And Receive Payments In A Flash</h1>
								<p className="bannerPara">Pay and get paid, we make it way less awkward</p>
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
						<div className="col-md-6">
							<img alt="KuWu" className="img-fluid mx-auto d-block" src={KuWu} />
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md -12">
						<ul className="PersonalCompanyList list-unstyled sm-mb-40">
							<li><img alt="walletDown" src={walletDown} />Second, Request,</li>
							<li><img alt="Instant" src={Instant} />Instant payments</li>
							<li><img alt="listPhone" src={listPhone} />Flexibility, no minimum balance required, monthly fees or penalties for withdrawals</li>
							<li><img alt="Draw" src={Draw} />Add or withdraw your money at any time</li>
							<li><img alt="listHome" src={listHome} />EU licensed & regulated financial institution</li>
						</ul>
					</div>

				</div>

			</div>


			<div className="container">
				<LocalPayments />
				{/* <MultiCurrency /> */}

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
											alt="Dollar"
											src={Dollar}
										/>
										<h3>
											Add funds to your account.
									</h3>
									</div>
									{/* </Fade> */}
								</div>

								<div className="col-md-4 col-sm-12 col-xs-12  smBox3">
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
										<p>Ready to remove the awkwardness out of paying for bills or asking for money? Cashero’s got you.</p>
										<button onClick={appModalOpen} className="LinkBtn">
											Start paying & getting Paid  <img alt="arrow" className="ArrowBtn" src={Arrow1} />
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
				<QuestionTabs activeTab={4} />
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
// const drawerWidth = 240;
// interface CountryType {
// 	code: string;
// 	label: string;
// 	phone: string;
// }
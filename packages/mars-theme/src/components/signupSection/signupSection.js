import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import TextField from "../../common/textFiled";
// import {
// 	Dropdown,
// 	DropdownToggle,
// 	DropdownMenu,
// 	DropdownItem,
// } from "reactstrap";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../styles/scss/signup.scss";
// import Fade2 from "@material-ui/core/Fade";
import { callApi } from "../../config/call-api";
import { EndPoints } from "../../config/config";
// import SearchIcon from "@material-ui/icons/Search";
import Modal from "@material-ui/core/Modal";
// import Backdrop from '@material-ui/core/Backdrop'
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Wait2 from "../../assets/wait.svg";
// import counrtrylist from "../../config/config/countrylist";

export function SignupSection(props) {
	const classes = useStyles();
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
	const [email, setEmail] = useState("");
	// const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState(false);
	// const [newPhone, setNewPhoneNumber] = useState("");
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
	return (
		<>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={openSuccessModal}
				onClose={() => setSuccessModal(false)}
				closeAfterTransition
			// BackdropComponent={Backdrop}
			// BackdropProps={{
			// 	timeout: 500,
			// }}
			>
				<div className={classes.paper}>
					<IconButton
						aria-label="Close"
						className={classes.closeButton}
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
											Cashero's revolutionary approach to
											making{" "}
											<span className="br-block"></span>{" "}
											your money go further.{" "}
										</p>
									</div>
								</div>
								<div className="col-md-6">
									<img alt="" className="img-fluid" src={Wait2} />
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
				</div>
			</Modal>
			{/* SignUp */}
			<div className="SignUp">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="SignUpTitle">Join Cashero</h1>
							<h3 className="SignUpText mb-0">
								{/* <span className="br-block"></span>  */}
								Get access to Cashero’s revolutionary approach to making your money go further.
							</h3>
							<div className="SignInEmail">
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
												<p className="emailError">
													{error}
												</p>
											</div>
										)}
								</>
							)} */}
							{/* Phone-Number */}
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
						</div>
					</div>
				</div>
			</div>
			{/* SignUp */}
		</>
	);
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	pageContainer: {
		minHeight: "99vh",
	},

	centerContainer: {
		flex: 1,
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
	},

	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		// backgroundColor: theme.palette.background.paper,
		// border: '2px solid #000',
		// boxShadow: theme.shadows[5],
		// padding: theme.spacing(2, 4, 3),
		width: "100% !important",
		height: "100vh !important",
	},
	menuButton: {
		// marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	appBar: {
		// zIndex: theme.zIndex.drawer + 1,
		position: "absolute",
	},
	navIconHide: {
		// [theme.breakpoints.up("md")]: {
		// 	display: "none",
		// },
	},
	drawerHeader: {
		// ...theme.mixins.toolbar 
	},
	drawerPaper: {
		width: 250,
		// backgroundColor: theme.palette.background.default,
		// [theme.breakpoints.up("md")]: {
		// 	width: drawerWidth,
		// 	position: "relative",
		// 	height: "100%",
		// },
	},
	closeButton: {
		position: "absolute",
		// right: theme.spacing.unit / 2,
		// top: theme.spacing.unit / 2,
		top: " 81px !important",
		right: " 86px !important",
		// color: theme.palette.grey[500],
		"& svg": {
			width: "32px !important",
			height: "32px !important",
		},
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.04) !important",
		},
	},
	content: {
		// backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "100vh",

		// [theme.breakpoints.up("sm")]: {
		// 	height: "calc(100% - 64px)",
		// },
	},
	container: {
		width: "100%",
		maxWidth: "1140px",
		margin: "0 auto",
		background: "#fff",
		position: "relative",
		padding: "0px 10px",
	},
	CustomHeader: {
		background: "#fff",
		color: "#0667EB",
		boxShadow: "inherit",
	},
}));
import React, { useState } from "react";
import { styled } from "frontity";
import Clock from "../../assets/clockImg.svg"
import SlideGroup from "../../assets/SlideGroup.svg";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";
import Draw from "../../assets/draw.svg"
import donateDollar from "../../assets/donateDollar.svg";
import heart from "../../assets/heart.svg";
import listHome from "../../assets/listHome.svg";
import DonateBox from "../../assets/DonateBox.png";
import { FindCharity } from "../FindCharity/FindCharity";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
import { Companies } from "../Companies/Companies";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "./../signupSection/signupSection";
import { StartDonation } from "../StartDonation/StartDonation";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import pricewallet from "../../assets/pricewallet.png";
import heartDollar from "../../assets/heartDollar.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import Wait2 from "../../assets/wait.svg";

export function Donation() {
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
	// const [Error, setError] = useState<string>("");
	// const [newPhone, setNewPhoneNumber] = useState("");
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
	const closeBothModal = () => {
		// setCode("+1")
		// setNewPhoneNumber("");
		setSuccessModal(false)
		setAppModal(false)
	};
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
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
			<div className="PesonalBanner">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="PersonalCont">
								<h1>Make An Impact, <span className="br-block"></span> Watch Your Money <span className="br-block"></span> Go Further </h1>
								<p className="bannerPara">Select a charity, they receive 100% of the donations, and we all benefit
								</p>
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
									<li><img alt="Clock" src={Clock} />Open an account in minutes</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6">
							<img alt="Slide Group" className="img-fluid mx-auto d-block" src={SlideGroup} />
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md -12">
						<ul className="PersonalCompanyList3 list-unstyled">
							<li><img alt="heart Dollar" src={heartDollar} />Discover new charities</li>
							<li><img alt="donate Dollar" src={donateDollar} />Donate directly</li>
							<li><img alt="heart" src={heart} />100% is donated</li>
							<li><img alt="Draw" src={Draw} />Donate your money at any time</li>
							<li><img alt="list Home" src={listHome} />EU licensed & regulated financial institution</li>
						</ul>
					</div>
				</div>
				<StartDonation />
				<FindCharity />
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
									<img className="img-fluid" alt="Favourite" src={Fav} />
									<h3>Sign up for Cashero.</h3>
								</div>
							</Fade>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
							<div className="GetStartedBox2 w-100">
								<img
									className="img-fluid"
									alt="Donate Box"
									src={DonateBox}
								/>
								<h3>
									Tap Giving and select a charity
								</h3>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
							<Fade triggerOnce direction="right">
								<div className="GetStartedBox3 w-100">
									<img className="img-fluid" alt="price wallet" src={pricewallet} />
									<h3>
										Make donations and make a difference!
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
									Donate <img className="ArrowBtn" alt="arrow" src={Arrow1} />
								</button>
							</div>
						</div>
					</div>
					{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
				</div>
			</div>
			<PeoplesSection />
			<div className="container">
				<Companies />
				<QuestionTabs activeTab={6} />
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
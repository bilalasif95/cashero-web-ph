import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { Fade } from "react-awesome-reveal";
import TextField from "../common/textFiled";
import { EndPoints } from "../config/config";
import Clock from "../assets/clock.svg";
import Banner from "../assets/photoshop.gif";
import { callApi } from "../config/call-api";
// import externalCss from "./homepage.css";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Hello = ({ state }) => {
	const [email, setEmail] = useState("");
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

	return (
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
	)
};

export default Hello;

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

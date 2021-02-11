import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Clock from "../../assets/clockImg.svg";
import Currencies from "../../assets/Currencies.svg";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";
import ConImg from "../../assets/ConImg.svg";
import Draw from "../../assets/draw.svg";
import ExArrow from "../../assets/ExArrow.svg";
import ExDollar from "../../assets/ExDollar.svg";
import MovingCoins from "../../assets/movingCoins.png";
import Dollarlist from "../../assets/Dollarlist.svg";
import listHome from "../../assets/listHome.svg";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
import { Companies } from "../Companies/Companies";
import { OnlineSave } from "../OnlineSave/OnlineSave";
import { QuestionTabs } from "../Tabs/Tabs";
import { SignupSection } from "../signupSection/signupSection";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import SearchIcon from "@material-ui/icons/Search";
import currencieslist from "../../config/currenciesList";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import ThanksModal from "../ThanksModal/ThanksModal";
import { callApi } from "../../config/call-api";
import { FirebaseEndPoints } from "../../config/config";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

var bigDecimal = require('js-big-decimal');

export function ExchangeRates() {
	const appModalOpen = () => {
		setAppModal(true);
	};
	const appModalClose = () => {
		setAppModal(false);
	};
	const thanksModalClose = () => {
		setSuccessModal(false);
	};
	const [appModal, setAppModal] = useState(false);
	// const [searchTerm, setSearchTerm] = useState<any>("");
	// const [searchResults, setSearchResults] = useState<any>(countrylist);
	// const [searchResults2, setSearchResults2] = useState<any>([]);
	// const [code, setCode] = useState("+1");
	// const [dropdownOpen, setDropdownOpen] = useState(false);
	// const [phonenoLength, setPhoneNoLength] = useState(10);
	const [searchTermgbp, setSearchTermgbp] = useState("");
	const [searchResultsgbp, setSearchResultsgbp] = useState(
		currencieslist
	);
	const [searchResults2gbp, setSearchResults2gbp] = useState([]);
	const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
	const [searchTermeuro, setSearchTermeuro] = useState("");
	const [searchResultseuro, setSearchResultseuro] = useState(
		currencieslist
	);
	const [searchResults2euro, setSearchResults2euro] = useState([]);
	const [dropdownOpeneuro, setDropdownOpeneuro] = useState(false);
	const [flaggbp, setflaggbp] = useState("🇬🇧");
	const [flagcodegbp, setflagcodegbp] = useState("GB");
	const [flagcurrencygbp, setflagcurrencygbp] = useState("GBP");
	const [flageuro, setflageuro] = useState("🇪🇺");
	const [flagcodeeuro, setflagcodeeuro] = useState("DE");
	const [flagcurrencyeuro, setflagcurrencyeuro] = useState("EUR");
	const [baseCurrency, setBaseCurrency] = useState("£");
	const [baseCurrencyEURValue, setBaseCurrencyEURValue] = useState("");
	const [baseCurrencyGBPValue, setBaseCurrencyGBPValue] = useState("");
	const [baseCurrencyUSDValue, setBaseCurrencyUSDValue] = useState("");
	const [quoteCurrency, setQuoteCurrency] = useState("€");
	const [loading, setLoading] = useState(false);
	const [swap, setSwap] = useState(false);
	const [baseCurrencyValue, setBaseCurrencyValue] = useState("399");
	const [quoteCurrencyValue, setQuoteCurrencyValue] = useState("");
	useEffect(() => {
		setLoading(true)
		setSearchResultseuro(currencieslist)
		setSearchResultsgbp(currencieslist)
		callApi(FirebaseEndPoints.IndividualExchangeRates + `/${flagcodegbp}`, "get", "")
			.then((doc) => {
				setBaseCurrencyEURValue(doc.fields.eur.stringValue);
				setBaseCurrencyGBPValue(doc.fields.gbp.stringValue);
				setBaseCurrencyUSDValue(doc.fields.usd.stringValue);
				const val = flagcodeeuro === "US" ? doc.fields.usd.stringValue :
					flagcodeeuro === "GB" ? doc.fields.gbp.stringValue : doc.fields.eur.stringValue
				setQuoteCurrencyValue(bigDecimal.multiply(baseCurrencyValue, val))
				setLoading(false)
			})
			.catch(() => { });
	}, [])
	// const toggle = () => {
	// 	setSearchTerm("");
	// 	setDropdownOpen((prevState) => !prevState);
	// };
	const togglegbp = () => {
		setSearchTermgbp("");
		setDropdownOpengbp((prevState) => !prevState);
	};
	const toggleeuro = () => {
		setSearchTermeuro("");
		setDropdownOpeneuro((prevState) => !prevState);
	};
	const [openSuccessModal, setSuccessModal] = useState(false);
	// const [Error, setError] = useState<string>("");
	// const [newPhone, setNewPhoneNumber] = useState("");
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
	const handleChangeeuro = (e) => {
		setSearchTermeuro(e.target.value);
		const results = searchResultseuro.filter(
			(country) =>
				country.name
					.toLowerCase()
					.includes(searchTermeuro.toLocaleLowerCase()) ||
				country.dial_code.includes(searchTermeuro.toLocaleLowerCase())
		);
		setSearchResults2euro(results);
	};
	// const selectCountry = (country) => {
	// 	setCode(country.dial_code);
	// 	setPhoneNoLength(country.phone_length);
	// 	setSearchTerm("");
	// 	setSearchResults2(countrylist);
	// };
	const selectCountrygbp = (country) => {
		setBaseCurrencyEURValue("")
		setBaseCurrencyGBPValue("")
		setBaseCurrencyUSDValue("")
		setSearchTermgbp("");
		setQuoteCurrencyValue("");
		setSearchResults2gbp(currencieslist);
		if (swap) {
			setflageuro(country.flag);
			setflagcodeeuro(country.code);
			setflagcurrencyeuro(country.currencyCode);
		}
		else {
			setflaggbp(country.flag);
			setflagcodegbp(country.code);
			setflagcurrencygbp(country.currencyCode);
		}
		setBaseCurrency(country.symbol);
		setLoading(true);
		callApi(FirebaseEndPoints.IndividualExchangeRates + `/${country.code}`, "get", "")
			.then((doc) => {
				setBaseCurrencyEURValue(doc.fields.eur.stringValue);
				setBaseCurrencyGBPValue(doc.fields.gbp.stringValue);
				setBaseCurrencyUSDValue(doc.fields.usd.stringValue);
				if (swap) {
					const val = flagcodegbp === "US" ? doc.fields.usd.stringValue :
						flagcodegbp === "GB" ? doc.fields.gbp.stringValue : doc.fields.eur.stringValue
					setQuoteCurrencyValue(bigDecimal.multiply(baseCurrencyValue, val))
				} else {
					const val = flagcodeeuro === "US" ? doc.fields.usd.stringValue :
						flagcodeeuro === "GB" ? doc.fields.gbp.stringValue : doc.fields.eur.stringValue
					setQuoteCurrencyValue(bigDecimal.multiply(baseCurrencyValue, val))
				}
				setLoading(false)
			})
			.catch(() => { });
	};
	const selectCountryeuro = (country) => {
		setSearchTermeuro("");
		setSearchResults2euro(currencieslist);
		setflageuro(country.flag);
		setflagcodeeuro(country.code);
		setflagcurrencyeuro(country.currencyCode)
		setQuoteCurrency(country.symbol)
		const val = country.code === "US" ? baseCurrencyUSDValue :
			country.code === "GB" ? baseCurrencyGBPValue : baseCurrencyEURValue
		setQuoteCurrencyValue(bigDecimal.multiply(baseCurrencyValue, val))
	};
	// const getStarted = () => {
	// 	let finalPhoneNumb = code + newPhone;
	// 	callApi(EndPoints.getApp, "post", "", {
	// 		Phone: finalPhoneNumb,
	// 		// CountryCode: updatecode,
	// 	})
	// 		.then((res: any) => {
	// 			if (res.code === 400) {
	// 				// setError(res.message);
	// 			} else {
	// 				setCode("+1");
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
	const onBaseCurrencyValueChange = (e) => {
		setBaseCurrencyValue(e.target.value);
		const val = flagcodeeuro === "US" ? baseCurrencyUSDValue :
			flagcodeeuro === "GB" ? baseCurrencyGBPValue : baseCurrencyEURValue
		setQuoteCurrencyValue(bigDecimal.multiply(e.target.value, val))
	};
	const actualLimit = (bal) => {
		let temp = bal ? bal.toString() : "0";
		if (temp) {
			temp = temp.split(".")
		}
		else {
			return temp
		}
		let n = temp[1] ? "" + temp[1] : "0";
		let x = n && (n + "0000").substring(0, 4);
		return x ? temp[0] + "." + x : "0.0000";
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
	const onSwap = () => {
		if (swap) {
			return setSwap(false)
		}
		else {
			setSwap(true)
			setLoading(true)
			callApi(FirebaseEndPoints.IndividualExchangeRates + `/${flagcodeeuro}`, "get", "")
				.then((doc) => {
					setBaseCurrencyEURValue(doc.fields.eur.stringValue);
					setBaseCurrencyGBPValue(doc.fields.gbp.stringValue);
					setBaseCurrencyUSDValue(doc.fields.usd.stringValue);
					const val = flagcodegbp === "US" ? doc.fields.usd.stringValue :
						flagcodegbp === "GB" ? doc.fields.gbp.stringValue : doc.fields.eur.stringValue
					setQuoteCurrencyValue(bigDecimal.multiply(baseCurrencyValue, val))
					setLoading(false)
				})
				.catch(() => { });
		}
	};
	return (
		<>
			<div className="ExchangeBanner">
				<div className="container">
					<div className="row">
						<div className="col-md-7">
							<div className="PersonalCont">
								<h1>
									Online Currency
										<span className="br-block"></span>
									Exchange
								</h1>
								<p className="White">
									Currency conversion with no hidden fees
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
								<ul className="PersonalList list-unstyled">
									<li>
										<img alt="Clock" src={Clock} />
										Open an account in minutes
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-5">
							<div className="Converter">
								{swap ?
									<div className="swapBox">
										<div className="SwapRow">
											<div className="ConverterFlags">
												<div className="numberSelection">
													<div className="selectCountry">
														<Dropdown
															isOpen={
																dropdownOpeneuro
															}
															toggle={toggleeuro}
														>
															<DropdownToggle caret>
																<div className="CountryFlag"><span className="FlagIcon">{flageuro}</span></div>
																<span className="FlagCode">{flagcurrencyeuro}</span>
															</DropdownToggle>
															<DropdownMenu>
																<DropdownItem
																	header
																>
																	<>
																		<SearchIcon />
																		<input
																			type="text"
																			value={
																				searchTermeuro
																			}
																			onChange={
																				handleChangeeuro
																			}
																		/>
																	</>
																</DropdownItem>
																<div className="country-list">
																	{searchResults2euro.length >
																		0
																		? searchResults2euro.map(
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
																				</DropdownItem>
																			)
																		)
																		: searchResultseuro.map(
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
																				</DropdownItem>
																			)
																		)}
																</div>
															</DropdownMenu>
														</Dropdown>
													</div>
												</div>
											</div>
											<div className="ConverterInput">
												<div className="currencySymbol">{quoteCurrency}&nbsp;</div>
												<TextField
													fullWidth
													value={baseCurrencyValue}
													onChange={onBaseCurrencyValueChange}
													type="number"
													variant="standard"
													className="PersonalBoxFieldGet"
												/>
											</div>
										</div>
									</div>
									:
									<div className="ConBox">
										<div className="GbpRow">
											<div className="ConverterFlags">
												<div className="numberSelection">
													<div className="selectCountry">
														<Dropdown
															isOpen={dropdownOpengbp}
															toggle={togglegbp}
														>
															<DropdownToggle caret>
																<div className="CountryFlag"><span className="FlagIcon">{flaggbp} </span></div>
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
																				</DropdownItem>
																			)
																		)}
																</div>
															</DropdownMenu>
														</Dropdown>
													</div>
												</div>
											</div>
											<div className="ConverterInput">
												<div className="currencySymbol">{baseCurrency}&nbsp;</div>
												<TextField
													value={baseCurrencyValue}
													onChange={onBaseCurrencyValueChange}
													fullWidth
													type="number"
													variant="standard"
													className="PersonalBoxFieldGet"
												/>
											</div>
										</div>
									</div>}
								<div className="ExchangeBox">
									{flagcodeeuro === flagcodegbp ?
										"" :
										<div className="exchangeAmount">
											<div className="ExchangeImg">
												<img alt="ConImg" onClick={onSwap} src={ConImg} />
											</div>
											<div className="ExchangeNum">
												{loading ? <p>Fetching Rates...</p> :
													swap ?
														<p>
															{quoteCurrency}1 = {baseCurrency}{(flagcodegbp === "US") ? actualLimit(baseCurrencyUSDValue) :
																(flagcodegbp === "GB") ? actualLimit(baseCurrencyGBPValue) : actualLimit(baseCurrencyEURValue)
															}
														</p>
														:
														<p>
															{baseCurrency}1 = {quoteCurrency}{(flagcodeeuro === "US") ? actualLimit(baseCurrencyUSDValue) :
																(flagcodeeuro === "GB") ? actualLimit(baseCurrencyGBPValue) : actualLimit(baseCurrencyEURValue)
															}
														</p>
												}
											</div>
										</div>}
									{swap ?
										<div className="SwapGbpRow">
											<div className="ConverterFlags">
												<div className="numberSelection">
													<div className="selectCountry">
														<Dropdown
															isOpen={dropdownOpengbp}
															toggle={togglegbp}
														>
															<DropdownToggle caret>
																<div className="CountryFlag"><span className="FlagIcon">{flaggbp} </span></div>
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
																				</DropdownItem>
																			)
																		)}
																</div>
															</DropdownMenu>
														</Dropdown>
													</div>
												</div>
											</div>
											<div className="ConverterInput">
												<div className="currencySymbol">{baseCurrency}&nbsp;</div>
												<TextField
													value={limit(quoteCurrencyValue)}
													onChange={(e) => setQuoteCurrencyValue(e.target.value)}
													fullWidth
													type="number"
													variant="standard"
													className="PersonalBoxFieldGet"
												/>
											</div>
										</div>
										:
										<div className="EuroRow">
											<div className="ConverterFlags">
												<div className="numberSelection">
													<div className="selectCountry">
														<Dropdown
															isOpen={
																dropdownOpeneuro
															}
															toggle={toggleeuro}
														>
															<DropdownToggle caret>
																<div className="CountryFlag"><span className="FlagIcon">{flageuro}</span></div>
																<span className="FlagCode">{flagcurrencyeuro}</span>
															</DropdownToggle>
															<DropdownMenu>
																<DropdownItem
																	header
																>
																	<>
																		<SearchIcon />
																		<input
																			type="text"
																			value={
																				searchTermeuro
																			}
																			onChange={
																				handleChangeeuro
																			}
																		/>
																	</>
																</DropdownItem>
																<div className="country-list">
																	{searchResults2euro.length >
																		0
																		? searchResults2euro.map(
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
																						selectCountryeuro(
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
																				</DropdownItem>
																			)
																		)
																		: searchResultseuro.map(
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
																						selectCountryeuro(
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
																				</DropdownItem>
																			)
																		)}
																</div>
															</DropdownMenu>
														</Dropdown>
													</div>
												</div>
											</div>
											<div className="ConverterInput">
												<div className="currencySymbol">{quoteCurrency}&nbsp;</div>
												<TextField
													fullWidth
													value={limit(quoteCurrencyValue)}
													onChange={(e) => setQuoteCurrencyValue(e.target.value)}
													type="number"
													variant="standard"
													className="PersonalBoxFieldGet"
												/>
											</div>
										</div>}
									<ul className="NofeeList list-unstyled">
										<li>No fee added by Cashero</li>
									</ul>
									<button onClick={appModalOpen} className="btn btn-default ConvertBtn">
										Get Started
									</button>
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
							<li>
								<img src={ExArrow} alt="ExArrow" />
								Exchange in
								an instant
							</li>
							<li>
								<img src={ExDollar} alt="ExDollar" />
								Switch between{" "}
								 USD, GBP, EUR
							</li>
							<li>
								<img src={Dollarlist} alt="Dollarlist" />
								No hidden fees,
							 full
								transparency
							</li>
							<li>
								<img src={Draw} alt="Draw" />
								Add or withdraw your{" "}
								 money at any
								time
							</li>
							<li>
								<img src={listHome} alt="listHome" />
								EU licensed & regulated{" "}
							 financial
								institution
							</li>
						</ul>
					</div>
				</div>
				<OnlineSave />
			</div>
			<div className="container">
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
									<img
										className="img-fluid"
										alt="fav"
										src={Fav}
									/>
									<h3>Sign up for Cashero.</h3>
								</div>
							</Fade>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
							<div className="GetStartedBox2 w-100">
								<img
									className="img-fluid"
									alt="Currencies"
									src={Currencies}
								/>
								<h3>
									Add funds into your account and
									choose to hold your money in USD,
									GPB or EUR.
								</h3>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
							<Fade triggerOnce direction="right">
								<div className="GetStartedBox3 w-100">
									<img className="img-fluid" alt="MovingCoins" src={MovingCoins} />
									<h3>
										Hold and switch between USD, GPB
										or EUR in seconds.
									</h3>
								</div>
							</Fade>
						</div>
					</div>
					<div className="row">
						<div className="offset-md-1 col-md-10">
							<div className="MultistepsCont">
								<p>
									Ready for foreign exchange with no
									surprises? Seamlessly transfer
									between currencies using Cashero.
								</p>
								<button
									onClick={appModalOpen}
									className="LinkBtn"
								>
									Start Converting{" "}
									<img
										className="ArrowBtn"
										alt="arrow"
										src={Arrow1}
									/>
								</button>
							</div>
						</div>
					</div>
					{appModal && (
						<GetTheAppModal
							open={appModal}
							handleClose={appModalClose}
						/>
					)}
					{openSuccessModal && (
						<ThanksModal
							open={openSuccessModal}
							handleClose={thanksModalClose}
						/>
					)}
				</div>
			</div>
			<PeoplesSection />
			<div className="container">
				<Companies />
				<QuestionTabs activeTab={3} />
			</div>
			<SignupSection />
		</>
	);
}
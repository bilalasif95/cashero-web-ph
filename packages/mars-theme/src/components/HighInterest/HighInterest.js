import React, { useState, useEffect, useRef } from "react";
import Link from "../link";
import Earning from "../../assets/earning.svg";
import Arrow from "../../assets/arrowLink.svg";
import ArrowWhite from "../../assets/arrowLinkWhite.svg";
import CounterIcon from "../../assets/counterIcon.svg";
import { Fade } from "react-awesome-reveal";
import SearchIcon from "@material-ui/icons/Search";
import currencieslist from "../../config/currenciesList";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { callApi } from "../../config/call-api";
import { FirebaseEndPoints } from "../../config/config";

var bigDecimal = require('js-big-decimal');

export function HighInterest() {
	const [flaggbp, setflaggbp] = useState("🇺🇸");
	const [flagcurrencygbp, setflagcurrencygbp] = useState("US Dollar - USD");
	const [baseCurrencyEURValue, setBaseCurrencyEURValue] = useState("1");
	const [baseCurrencyGBPValue, setBaseCurrencyGBPValue] = useState("1");
	const [baseCurrencyUSDValue, setBaseCurrencyUSDValue] = useState("1");
	const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
	const [searchTermgbp, setSearchTermgbp] = useState("");
	const ref = useRef(null);
	const [innerWidth, setInnerWidth] = useState(0);
	const [searchResultsgbp, setSearchResultsgbp] = useState(currencieslist);
	const [searchResults2gbp, setSearchResults2gbp] = useState([]);
	const togglegbp = () => {
		setSearchTermgbp("");
		setDropdownOpengbp((prevState) => !prevState);
	};
	useEffect(() => {
		var start = 1000;
		var speed = 0;
		if (ref.current) {
			ref.current.innerHTML = start.toFixed(0);
			start += 1;
		}
		setInterval(() => {
			if (ref.current) {
				ref.current.innerHTML = start.toFixed(0);
				start += 1;
			}
		}, speed);
		setInnerWidth(window.innerWidth)
		setSearchResultsgbp(currencieslist)
		callApi(FirebaseEndPoints.ExchangeRates, "get", "")
			.then((doc) => {
				setBaseCurrencyEURValue(doc.fields.eur.stringValue);
				setBaseCurrencyGBPValue(doc.fields.gbp.stringValue);
				setBaseCurrencyUSDValue(doc.fields.usd.stringValue);
			})
			.catch(() => { });
	}, []);
	const selectCountrygbp = (country) => {
		setSearchTermgbp("");
		setSearchResults2gbp(currencieslist);
		setflaggbp(country.flag);
		setflagcurrencygbp(country.name)
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
	};
	return (
		<div className="SavingAccount">
			<div className="container">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<div className="Graph">
							<img
								className="CounterIcon"
								src={CounterIcon}
								alt="Counter Icon"
							/>
							<div className="GraphCont">
								<img
									className="mx-fluid countryFlag mb-3"
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
									<span ref={ref} id="counter"></span>
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
					<div className="col-md-6">
						<div className="oneAppCont">
							<Fade triggerOnce direction="up">
								<h3 className="HighInterestTitle">High Yield<span className="br-block highInterestHeading"></span>Savings Account</h3>
								<p className="HighInterestText">Receive inflation-beating interest rates of 2%-5% APY. Yes, you read that correctly. Flexibility, no minimum balance required monthly fees or penalties for withdrawals. Do that thing that rich people do, make money while you sleep.</p>
								<Link link="/high-yield-savings-account" className="Link">Learn more about Savings
									{innerWidth >= 540 ?
										<img alt="Arrow" className="ArrowBtn" src={Arrow} />
										:
										<img alt="Arrow White" className="ArrowBtn" src={ArrowWhite} />
									}</Link>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
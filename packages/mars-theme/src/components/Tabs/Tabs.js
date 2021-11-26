import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { styled } from "frontity";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import PropTypes from 'prop-types';
import Link from "../link";
import { withTranslation } from "react-i18next";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`,
	};
}

const QuestionTabs = (props) => {
	const [value, setValue] = useState(props.activeTab);
	const [path, setPath] = useState("");
	const handleChange = (event, newValue) => {
		event.preventDefault();
		setValue(newValue);
	};
	const [expanded, setExpanded] = useState("panel1");
	const accordionhandleChange = (panel) => (
		event,
		newExpanded
	) => {
		setExpanded(newExpanded ? panel : false);
	};
	useEffect(() => {
		setPath(window.location.pathname)
	}, [])
	const { i18n } = props;
	return (
		<div className="Questions">
			<div className="row">
				<div className="col-md-4">
					<h3 className="TabsTitle noBreakHeading">{i18n.t("Frequently_Asked_Questions")}</h3>
					<AppBar position="static" className="custom-Tabs">
						<CustomTabs>
							<Tabs
								value={value}
								onChange={handleChange}
								textColor="primary"
								variant="scrollable"
								scrollButtons="auto"
								aria-label="scrollable auto tabs example"
							>
								<Tab
									className="customTabs"
									label={i18n.t("GENERAL")}
									{...a11yProps(0)}
								/>
								<Tab
									className="customTabs"
									label={i18n.t("Savings")}
									{...a11yProps(1)}
								/>
								<Tab
									className="customTabs"
									label={i18n.t("Multi_Currency")}
									{...a11yProps(2)}
								/>
								<Tab
									className="customTabs"
									label={i18n.t("Exchange")}
									{...a11yProps(3)}
								/>
								<Tab
									className="customTabs"
									label={i18n.t("Payments")}
									{...a11yProps(4)}
								/>
								<Tab
									className="customTabs"
									label={i18n.t("Remittance")}
									{...a11yProps(5)}
								/>
								<Tab
									className="customTabs"
									label={i18n.t("Charity")}
									{...a11yProps(6)}
								/>
							</Tabs>
						</CustomTabs>
					</AppBar>
				</div>
				<div className="col-md-8">
					<TabPanel value={value} index={0}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h2 className="heading">
										{i18n.t("What_is_Cashero")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{path === "/br/multi-currency-savings-account/" ? i18n.t("What_is_Cashero_P_1") : i18n.t("What_is_Cashero_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h2 className="heading">
										{i18n.t("main_features")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											<span className="bold-text">{i18n.t("main_features_B1")} </span> {i18n.t("main_features_P1")}
										</p>
										<p className="FaqText">
											<span className="bold-text">{i18n.t("main_features_B2")} </span> {i18n.t("main_features_P2")}
										</p>
										<p className="FaqText">
											<span className="bold-text">{i18n.t("main_features_B3")} </span> {i18n.t("main_features_P3")}
										</p>
										<p className="FaqText">
											<span className="bold-text">{i18n.t("Instant_Payments")}: </span> {path === "/br/multi-currency-savings-account/" ? i18n.t("main_features_P4_1") : i18n.t("main_features_P4")}
										</p>
										<p className="FaqText">
											<span className="bold-text">{i18n.t("main_features_B5")} </span> {i18n.t("main_features_P5")}
										</p>
										<p className="FaqText">
											<span className="bold-text">{i18n.t("main_features_B6")} </span> {i18n.t("main_features_P6")}
										</p>
										<p className="FaqText">
											<span className="bold-text">{i18n.t("main_features_B7")} </span> {i18n.t("main_features_Users")}  <Link className="giveaway-link" link="/br/giveaway">{i18n.t("main_features_Link")}</Link> {i18n.t("main_features_P7")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h2 className="heading">
										{i18n.t("Launch_Date")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("Launch_Date_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h2 className="heading">
										{i18n.t("Cashero_regulated")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("Cashero_regulated_P1")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h2 className="heading">
										{i18n.t("savings_account")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{path === "/br/multi-currency-savings-account/" ? i18n.t("savings_account_P1_1") : i18n.t("savings_account_P1")}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h2 className="heading">
										{i18n.t("interest_earned")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("interest_earned_P1")}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h2 className="heading">
										{i18n.t("What_is_APY")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("What_is_APY_P1")} </p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h2 className="heading">
										{i18n.t("fees_associated")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("fees_associated_P1")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h2 className="heading">
										{path === "/br/high-yield-savings-account/" ? i18n.t("money_safe") : i18n.t("money_safe_2")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{path === "/br/multi-currency-savings-account/" ? i18n.t("money_safe_P2") : i18n.t("money_safe_P1")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/br/high-yield-savings-account/" &&
								<Accordion expanded={expanded === 'panel6'} onChange={accordionhandleChange('panel6')}>
									<AccordionSummary
										expandIcon={expanded === 'panel6' ? <RemoveCircleOutlineIcon /> : <ControlPointIcon />}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h2 className="heading">{i18n.t("Learn_more_savings")}</h2>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<div className="expandTypo">
												<h2 className="blackhead">{i18n.t("Learn_more_savings_P1")}</h2>
												<p>{i18n.t("Learn_more_savings_P2")}</p>
												<p>{i18n.t("Learn_more_savings_P3")}</p>
												<h3 className="blackhead"><a href="https://www.cashero.com/blog/what-is-a-high-yield-savings-account/" target="_blank" rel="noopener noreferrer">{i18n.t("Learn_more_savings_P4")}</a></h3>
												<p>{i18n.t("Learn_more_savings_P5")}</p>
												<h3 className="blackhead">{i18n.t("Learn_more_savings_P6")}</h3>
												<p>{i18n.t("Learn_more_savings_P7")}</p>
												<p>{i18n.t("Learn_more_savings_P8")} </p>
												<p><b>{i18n.t("Learn_more_savings_P9")}</b></p>
												<div className="inner-div">
													<p>{i18n.t("Learn_more_savings_P10")}</p>
												</div>
												<h2 className="blackhead">{i18n.t("Learn_more_savings_P11")} </h2>
												<p>{i18n.t("Learn_more_savings_P12")}</p>
												<p>{i18n.t("Learn_more_savings_P13")}</p>
												<h2 className="blackhead">{i18n.t("Learn_more_savings_P19")} </h2>
												<p>{i18n.t("Learn_more_savings_P20")}</p>
												<div className="inner-div">
													<h3 className="blackhead">{i18n.t("Learn_more_savings_P21_B1")}</h3>
													<p>{i18n.t("Learn_more_savings_P21_p1")}</p>
													<h3 className="blackhead">{i18n.t("Learn_more_savings_P22_B1")} </h3>
													<p>{i18n.t("Learn_more_savings_P22_P1")}</p>
													<h3 className="blackhead">{i18n.t("Learn_more_savings_P23_B1")} </h3>
													<p>{i18n.t("Learn_more_savings_P23_P1")}</p>
													<h3 className="blackhead">{i18n.t("Learn_more_savings_P24_B1")} </h3>
													<p>{i18n.t("Learn_more_savings_P24_P1")}</p>
													<h3 className="blackhead">{i18n.t("Learn_more_savings_P25_B1")}</h3>
													<p>{i18n.t("Learn_more_savings_P25_P1")}</p>
												</div>
												<h2 className="blackhead">{i18n.t("Learn_more_savings_P26")}</h2>
												<p>{i18n.t("Learn_more_savings_P27")}</p>
												<div className="inner-div">
													<h3 className="blackhead">{i18n.t("Learn_more_savings_P28_B1")}   </h3>
													<p>{i18n.t("Learn_more_savings_P28_P1")}</p>
													<h3 className="blackhead">{i18n.t("Learn_more_savings_P29_B1")}    </h3>
													<p>{i18n.t("Learn_more_savings_P29_P1")}</p>
													<h3 className="blackhead">{i18n.t("Learn_more_savings_P30_B1")}  </h3>
													<p>{i18n.t("Learn_more_savings_P30_P1")}</p>
													<h3 className="blackhead">{i18n.t("Learn_more_savings_P31_B1")}    </h3>
													<p>{i18n.t("Learn_more_savings_P31_P1")}</p>
												</div>
												<p>{i18n.t("Learn_more_savings_P32")}</p>
											</div>
										</Typography>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h2 className="heading">
										{i18n.t("multi_currency")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("multi_currency_P1")}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h2 className="heading">
										{i18n.t("multi_currency_country")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("multi_currency_country_P")} <Link link="/br/countries">{i18n.t("click_here")}</Link> {i18n.t("multi_currency_country_P_1")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h2 className="heading">
										{i18n.t("multi_currency_account")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("multi_currency_account_P")}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h2 className="heading">
										{i18n.t("currency_fluctuations")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("currency_fluctuations_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h2 className="heading">
										{i18n.t("money_safe_2")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{path === "/br/multi-currency-savings-account/" ? i18n.t("money_safe_P2") : i18n.t("money_safe_P1")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/br/multi-currency-savings-account/" &&
								<Accordion
									expanded={expanded === "panel6"}
									onChange={accordionhandleChange("panel6")}
								>
									<AccordionSummary
										expandIcon={
											expanded === "panel6" ? (
												<RemoveCircleOutlineIcon />
											) : (
												<ControlPointIcon />
											)
										}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h2 className="heading">
											{i18n.t("multi_currency_Learn")}
										</h2>
									</AccordionSummary>
									<AccordionDetails>
										<div className="expandTypo">
											<h2 className="blackhead">{i18n.t("multi_currency_Learn_P1")}</h2>
											<p>{i18n.t("multi_currency_Learn_P2")}</p>
											<h2 className="blackhead">{i18n.t("multi_currency_Learn_P3")}</h2>
											<p>{i18n.t("multi_currency_Learn_P4")}</p>
											<p>(1) {i18n.t("multi_currency_Learn_P5")} </p>
											<p>(2) {i18n.t("multi_currency_Learn_P6")} </p>
											<p>(3) {i18n.t("multi_currency_Learn_P7")} </p>
											<p>{i18n.t("multi_currency_Learn_P8")}<a href="https://www.cashero.com/blog/what-is-the-safest-way-to-travel-with-money/" target="_blank" rel="noopener noreferrer">{i18n.t("multi_currency_Learn_P8_1")}</a>{i18n.t("multi_currency_Learn_P8_2")}</p>
											<h2 className="blackhead">{i18n.t("multi_currency_Learn_P9")}</h2>
											<p>{i18n.t("multi_currency_Learn_P10")}</p>
											<h3 className="blackhead">{i18n.t("multi_currency_Learn_P11")}</h3>
											<p>{i18n.t("multi_currency_Learn_P12")} </p>
											<h2 className="blackhead">{i18n.t("multi_currency_Learn_P13")}</h2>
											<p>{i18n.t("multi_currency_Learn_P14")}</p>
											<h3 className="blackhead">{i18n.t("multi_currency_Learn_P15")}</h3>
											<p>{i18n.t("multi_currency_Learn_P16")}</p>
											<h3 className="blackhead">{i18n.t("multi_currency_Learn_P17")}</h3>
											<div className="inner-div">
												<ul>
													<li><p>{i18n.t("multi_currency_Learn_P18")}</p></li>
													<li><p>{i18n.t("multi_currency_Learn_P19")}</p></li>
													<li><p>{i18n.t("multi_currency_Learn_P20")}</p></li>
													<li><p>{i18n.t("multi_currency_Learn_P21")}</p></li>
													<li><p>{i18n.t("multi_currency_Learn_P22")}</p></li>
													<li><p>{i18n.t("multi_currency_Learn_P23")}</p></li>
													<li><p>{i18n.t("multi_currency_Learn_P24")}</p></li>
												</ul>
											</div>
											<h3 className="blackhead">{i18n.t("multi_currency_Learn_P25")}</h3>
											<p>{i18n.t("multi_currency_Learn_P26")}</p>
											<div className="inner-div">
												<p><span className="bold-text">{i18n.t("multi_currency_Learn_P27")} –</span> {i18n.t("multi_currency_Learn_P28")}</p>
												<p><span className="bold-text">{i18n.t("multi_currency_Learn_P29")} –</span> {i18n.t("multi_currency_Learn_P30")}</p>
												<p><span className="bold-text">{i18n.t("multi_currency_Learn_P31")} –</span> {i18n.t("multi_currency_Learn_P32")}</p>
												<p><span className="bold-text">{i18n.t("multi_currency_Learn_P33")} –</span> {i18n.t("multi_currency_Learn_P34")}</p>
												<p><span className="bold-text">{i18n.t("multi_currency_Learn_P35")} –</span> {i18n.t("multi_currency_Learn_P36")}</p>
												<p><span className="bold-text">{i18n.t("multi_currency_Learn_P37")} –</span> {i18n.t("multi_currency_Learn_P38")}</p>
												<p><span className="bold-text">{i18n.t("multi_currency_Learn_P39")} –</span> {i18n.t("multi_currency_Learn_P40")}</p>
												<h3 className="blackhead">{i18n.t("multi_currency_Learn_P41")}</h3>
												<p>{i18n.t("multi_currency_Learn_P42")}</p>
												<div className="inner-div">
													<p><span className="bold-text">{i18n.t("multi_currency_Learn_P43")} –</span> {i18n.t("multi_currency_Learn_P44")}</p>
													<p><span className="bold-text">{i18n.t("multi_currency_Learn_P45")} –</span> {i18n.t("multi_currency_Learn_P46")}</p>
													<p>{i18n.t("multi_currency_Learn_P47")}</p>
													<p>{i18n.t("multi_currency_Learn_P48")}</p>
													<p>{i18n.t("multi_currency_Learn_P49")}</p>
												</div>
												<h2 className="blackhead">{i18n.t("multi_currency_Learn_P50")}</h2>
												<p>{i18n.t("multi_currency_Learn_P51")}</p>
												<div className="inner-div">
													<ul>
														<li><p>{i18n.t("multi_currency_Learn_P52")}</p></li>
														<li><p>{i18n.t("multi_currency_Learn_P53")}</p></li>
														<li><p>{i18n.t("multi_currency_Learn_P54")}</p></li>
														<li><p>{i18n.t("multi_currency_Learn_P55")}</p></li>
													</ul>
												</div>
												<p>{i18n.t("multi_currency_Learn_P56")}</p>
												<h3 className="blackhead">{i18n.t("multi_currency_Learn_P57")}</h3>
												<p>{i18n.t("multi_currency_Learn_P58")}</p>
												<h2 className="blackhead">{i18n.t("multi_currency_Learn_P59")}</h2>
												<p>{i18n.t("multi_currency_Learn_P60")}</p>
												<p>{i18n.t("multi_currency_Learn_P61")}</p>
												<p>{i18n.t("multi_currency_Learn_P62")}</p>
											</div>
										</div>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h2 className="heading">
										{i18n.t("multi_currency_exchange_H4_1")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{path === "/br/multi-currency-savings-account/" ? i18n.t("multi_currency_exchange_H4_1_P_1") : i18n.t("multi_currency_exchange_H4_1_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h2 className="heading">
										{i18n.t("multi_currency_exchange_H4_2")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("multi_currency_exchange_H4_2_P")}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h2 className="heading">
										{i18n.t("multi_currency_exchange_H4_3")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("multi_currency_exchange_H4_3_P")}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h2 className="heading">
										{i18n.t("multi_currency_exchange_H4_4")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("multi_currency_exchange_H4_4_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h2 className="heading">
										{path === "/br/instant-money-transfer/" ? i18n.t("multi_currency_exchange_H4_5_1") : i18n.t("multi_currency_exchange_H4_5")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{path === "/br/instant-money-transfer/" ? i18n.t("multi_currency_exchange_H4_5_P_1") : i18n.t("multi_currency_exchange_H4_5_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/br/online-currency-exchange/" &&
								<Accordion
									expanded={expanded === "panel6"}
									onChange={accordionhandleChange("panel6")}
								>
									<AccordionSummary
										expandIcon={
											expanded === "panel6" ? (
												<RemoveCircleOutlineIcon />
											) : (
												<ControlPointIcon />
											)
										}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h2 className="heading">{i18n.t("Learn_more_about_Online_Currency_Exchanges")}</h2>
									</AccordionSummary>
									<AccordionDetails>
										<div className="expandTypo">
											<h2 className="blackhead">{i18n.t("online_currency_exchange_learn_1")}</h2>
											<p>{i18n.t("online_currency_exchange_learn_2")}</p>
											<p>{i18n.t("online_currency_exchange_learn_3")}</p>
											<h2 className="blackhead">{i18n.t("online_currency_exchange_learn_4")}</h2>
											<p>{i18n.t("online_currency_exchange_learn_5")}</p>
											<h2 className="blackhead">{i18n.t("online_currency_exchange_learn_6")}</h2>
											<p>{i18n.t("online_currency_exchange_learn_7")}</p>
											<h3 className="blackhead">{i18n.t("online_currency_exchange_learn_8")}</h3>
											<p>{i18n.t("online_currency_exchange_learn_9")}</p>
											<h2 className="blackhead">{i18n.t("online_currency_exchange_learn_10")}</h2>
											<p>{i18n.t("online_currency_exchange_learn_11")}</p>
											<p>{i18n.t("online_currency_exchange_learn_12")}</p>
											<div className="inner-div">
												<ol>
													<li><p><b>{i18n.t("online_currency_exchange_learn_13_1")} – </b>{i18n.t("online_currency_exchange_learn_13_2")}</p></li>
													<li><p><b>{i18n.t("online_currency_exchange_learn_14_1")} – </b>{i18n.t("online_currency_exchange_learn_14_2")}</p></li>
													<li><p><b>{i18n.t("online_currency_exchange_learn_15_1")} – </b>{i18n.t("online_currency_exchange_learn_15_2")}</p></li>
												</ol>
											</div>
											<p><b>{i18n.t("Note")}</b>: {i18n.t("Note_1")}<a href="https://www.cashero.com/blog/is-buying-foreign-currency-a-good-investment/" target="_blank" rel="noopener noreferrer">{i18n.t("Note_1_1")}</a>{i18n.t("Note_1_2")}</p>
											<h3 className="blackhead">{i18n.t("online_currency_exchange_learn_16")}</h3>
											<p>{i18n.t("online_currency_exchange_learn_17")}</p>
											<p>{i18n.t("online_currency_exchange_learn_18")}</p>
											<h2 className="blackhead">{i18n.t("online_currency_exchange_learn_19")}</h2>
											<p>{i18n.t("online_currency_exchange_learn_20")}</p>
											<div className="inner-div">
												<ul>
													<li><p>{i18n.t("online_currency_exchange_learn_20_li1")}</p></li>
													<li><p>{i18n.t("online_currency_exchange_learn_20_li2")}</p></li>
													<li><p>{i18n.t("online_currency_exchange_learn_20_li3")}</p></li>
													<li><p>{i18n.t("online_currency_exchange_learn_20_li4")}</p></li>
													<li><p>{i18n.t("online_currency_exchange_learn_20_li5")}</p></li>
													<li><p>{i18n.t("online_currency_exchange_learn_20_li6")}</p></li>
													<li><p>{i18n.t("online_currency_exchange_learn_20_li7")}</p></li>
												</ul>
											</div>
											<p>{i18n.t("online_currency_exchange_learn_21")}</p>
											<h3 className="blackhead">{i18n.t("online_currency_exchange_learn_22")}</h3>
											<p>{i18n.t("online_currency_exchange_learn_23")}</p>
											<p>{i18n.t("online_currency_exchange_learn_24")}</p>
											<h2 className="blackhead">{i18n.t("online_currency_exchange_learn_25")}</h2>
											<p>{i18n.t("online_currency_exchange_learn_26")}</p>
											<div className="inner-div">
												<ul>
													<li><p><b>{i18n.t("Spread")}</b>– {i18n.t("Spread_P")}</p></li>
													<li><p><b>{i18n.t("Leverage")}</b>– {i18n.t("Leverage_P")}</p></li>
													<li><p><b>{i18n.t("Lot")}</b>– {i18n.t("Lot_P")}</p></li>
													<li><p><b>{i18n.t("Pip")}</b>– {i18n.t("Pip_P")}</p></li>
													<li><p><b>{i18n.t("Base_currency")}</b>– {i18n.t("Base_currency_P")}</p></li>
													<li><p><b>{i18n.t("Quote_currency")}</b>– {i18n.t("Quote_currency_P")}</p></li>
												</ul>
											</div>
											<p>{i18n.t("online_currency_exchange_learn_27")}</p>
										</div>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h2 className="heading">
										{i18n.t("online_currency_exchange_panel")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("online_currency_exchange_panel_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h2 className="heading">
										{i18n.t("online_currency_exchange_panel_1")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("online_currency_exchange_panel_1_P")}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h2 className="heading">
										{i18n.t("online_currency_exchange_panel_2")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("online_currency_exchange_panel_2_P")} </p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h2 className="heading">
										{i18n.t("online_currency_exchange_panel_3")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("online_currency_exchange_panel_3_P")} </p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h2 className="heading">
										{i18n.t("money_safe_2")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("money_safe_P3")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/br/instant-money-transfer/" &&
								<Accordion
									expanded={expanded === "panel6"}
									onChange={accordionhandleChange("panel6")}
								>
									<AccordionSummary
										expandIcon={
											expanded === "panel6" ? (
												<RemoveCircleOutlineIcon />
											) : (
												<ControlPointIcon />
											)
										}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h2 className="heading">{i18n.t("Learn_more_about_Instant_Money_Transfers")}</h2>
									</AccordionSummary>
									<AccordionDetails>
										<div className="expandTypo">
											<h2 className="blackhead">{i18n.t("instant_money_transfer_P1")}</h2>
											<p>{i18n.t("instant_money_transfer_P2")}</p>
											<h2 className="blackhead">{i18n.t("instant_money_transfer_P3")}</h2>
											<p>{i18n.t("instant_money_transfer_P4")}</p>
											<h3 className="blackhead">{i18n.t("instant_money_transfer_P5")}</h3>
											<p>{i18n.t("instant_money_transfer_P6")}</p>
											<h4 className="blackhead">1. {i18n.t("instant_money_transfer_P7")}</h4>
											<p>{i18n.t("instant_money_transfer_P8")} </p>
											<h4 className="blackhead">2. {i18n.t("instant_money_transfer_P9")}</h4>
											<p>{i18n.t("instant_money_transfer_P10")}</p>
											<div className="inner-div">
												<p><b>{i18n.t("Cash_transfers")}</b> – {i18n.t("Cash_transfers_P")}</p>
												<p><b>{i18n.t("E_wallet_transfers")}</b> – {i18n.t("E_wallet_transfers_P")} </p>
												<p><b>{i18n.t("Bank_debit_card_transfers")}</b> – {i18n.t("Bank_debit_card_transfers_P")} </p>
												<p><b>{i18n.t("Directly_to_the_recipients_account")}</b> – {i18n.t("Directly_to_the_recipients_account_P")} </p>
											</div>
											<h4 className="blackhead">3. {i18n.t("instant_money_transfer_P11")}</h4>
											<p>{i18n.t("instant_money_transfer_P12")} </p>
											<h4 className="blackhead">4. {i18n.t("instant_money_transfer_P13")}</h4>
											<p>{i18n.t("instant_money_transfer_P14")}</p>
											<p>{i18n.t("instant_money_transfer_P15")}</p>
											<h2 className="blackhead">{i18n.t("instant_money_transfer_P16")}<a href="https://www.cashero.com/blog/how-to-transfer-money-instantly-online/" target="_blank" rel="noopener noreferrer">{i18n.t("instant_money_transfer_P16_1")}</a></h2>
											<p>{i18n.t("instant_money_transfer_P17")}</p>
											<div className="inner-div">
												<p><b>{i18n.t("Register")} </b> – {i18n.t("Register_P")}</p>
												<p><b>{i18n.t("Initiate_the_money_transfer")} </b> – {i18n.t("Initiate_the_money_transfer_P")}</p>
												<p><b>{i18n.t("Provide_the_recipients_information")}</b> – {i18n.t("Provide_the_recipients_information_P")}</p>
												<p><b>{i18n.t("Pay_for_the_transfer")}</b> – {i18n.t("Pay_for_the_transfer_P")}</p>
											</div>
											<p><b>{i18n.t("Note")}</b>:  {i18n.t("instant_money_transfer_Note")}</p>
											<h3 className="blackhead">{i18n.t("instant_money_transfer_P18")}</h3>
											<p>{i18n.t("instant_money_transfer_P19")}</p>
											<h3 className="blackhead">{i18n.t("instant_money_transfer_P20")}</h3>
											<p>{i18n.t("instant_money_transfer_P21")}</p>
											<h3 className="blackhead">{i18n.t("instant_money_transfer_P22")} </h3>
											<p>{i18n.t("instant_money_transfer_P23")} </p>
											<h2 className="blackhead">{i18n.t("instant_money_transfer_P24")} </h2>
											<p>{i18n.t("instant_money_transfer_P25")}</p>
											<div className="inner-div">
												<p><b>{i18n.t("Be_prepared")} – </b> {i18n.t("Be_prepared_P")}</p>
												<p><b>{i18n.t("Check_the_supported_currencies")} – </b> {i18n.t("Check_the_supported_currencies_P")}</p>
												<p><b>{i18n.t("Ensure_the_safety_of_your_transfer")} – </b>  {i18n.t("Ensure_the_safety_of_your_transfer_P")}</p>
												<p><b>{i18n.t("Compare_providers")} –</b> {i18n.t("Compare_providers_P")}</p>
												<p><b>{i18n.t("Check_the_cost_involved")} – </b> {i18n.t("Check_the_cost_involved_P")}</p>
											</div>
											<p>{i18n.t("instant_money_transfer_P26")}</p>
										</div>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={5}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h2 className="heading">
										{i18n.t("instant_money_transfer_panel5")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">{i18n.t("instant_money_transfer_panel5_P")}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h2 className="heading">
										{path === "/br/instant-money-transfer/" ? i18n.t("instant_money_transfer_panel5_2") : i18n.t("instant_money_transfer_panel5_2_1")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{path === "/br/transfer-money-abroad/" ? i18n.t("instant_money_transfer_panel5_2_P_1") : i18n.t("instant_money_transfer_panel5_2_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h2 className="heading">
										{i18n.t("instant_money_transfer_panel5_3")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("instant_money_transfer_panel5_3_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h2 className="heading">
										{i18n.t("instant_money_transfer_panel5_4")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{path === "/br/transfer-money-abroad/" ? i18n.t("instant_money_transfer_panel5_4_P_1") : i18n.t("instant_money_transfer_panel5_4_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h2 className="heading">
										{i18n.t("money_safe_2")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{path === "/br/multi-currency-savings-account/" ? i18n.t("money_safe_P2") : i18n.t("money_safe_P1")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/br/transfer-money-abroad/" &&
								<Accordion
									expanded={expanded === "panel6"}
									onChange={accordionhandleChange("panel6")}
								>
									<AccordionSummary
										expandIcon={
											expanded === "panel6" ? (
												<RemoveCircleOutlineIcon />
											) : (
												<ControlPointIcon />
											)
										}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h2 className="heading">{i18n.t("learn_more_transfer_money_abroad")}</h2>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<div className="expandTypo">
												<h2 className="blackhead">{i18n.t("transfer_money_abroad_P1")}</h2>
												<p>{i18n.t("transfer_money_abroad_P2")}</p>
												<p>{i18n.t("transfer_money_abroad_P3")}</p>
												<p>{i18n.t("transfer_money_abroad_P4")}</p>
												<p>{i18n.t("transfer_money_abroad_P5")}</p>
												<p>{i18n.t("transfer_money_abroad_P6")}</p>
												<h2 className="blackhead">{i18n.t("transfer_money_abroad_P7")}</h2>
												<p>{i18n.t("transfer_money_abroad_P8")}</p>
												<div className="inner-div">
													<p><b>{i18n.t("Banks")} -</b> {i18n.t("Banks_P")} </p>
													<p><b>{i18n.t("FinTech_companies")} – </b> {i18n.t("FinTech_companies_P")} </p>
													<p><b>{i18n.t("Money_transfer_operators")} – </b> {i18n.t("Money_transfer_operators_P")} </p>
												</div>
												<h3 className="blackhead">{i18n.t("transfer_money_abroad_P9")}</h3>
												<p>{i18n.t("transfer_money_abroad_P10")} </p>
												<p>{i18n.t("transfer_money_abroad_P11")}<a href="https://www.cashero.com/blog/what-is-the-safest-way-to-transfer-money-internationally/" target="_blank" rel="noopener noreferrer">{i18n.t("transfer_money_abroad_P11_1")}</a>{i18n.t("transfer_money_abroad_P11_2")} </p>
												<h3 className="blackhead">{i18n.t("transfer_money_abroad_P12")}</h3>
												<p>{i18n.t("transfer_money_abroad_P13")} </p>
												<h2 className="blackhead">{i18n.t("transfer_money_abroad_P14")}</h2>
												<p>{i18n.t("transfer_money_abroad_P15")}</p>
												<h3 className="blackhead">{i18n.t("transfer_money_abroad_P16")}</h3>
												<p>{i18n.t("transfer_money_abroad_P17")}</p>
												<div className="inner-div">
													<p><b>{i18n.t("ID_verification")} –</b> {i18n.t("ID_verification_P")}</p>
													<p><b>{i18n.t("Encryption")} –</b> {i18n.t("Encryption_P")}</p>
													<p><b>{i18n.t("Tracking")} –</b> {i18n.t("Tracking_P")}</p>
													<p><b>{i18n.t("Fraud_prevention")} –</b> {i18n.t("Fraud_prevention_P")}</p>
												</div>
												<h2 className="blackhead">{i18n.t("transfer_money_abroad_P18")}</h2>
												<p>{i18n.t("transfer_money_abroad_P19")}</p>
												<div className="inner-div">
													<ol>
														<li><p><b>{i18n.t("Fees_Heading")} –</b> {i18n.t("Fees_P")}</p></li>
														<li><p><b>{i18n.t("Exchange_rates")} – </b> {i18n.t("Exchange_rates_P")}</p></li>
													</ol>
												</div>
												<p>{i18n.t("transfer_money_abroad_P20")}</p>
												<h2 className="blackhead">{i18n.t("transfer_money_abroad_P21")}</h2>
												<p>{i18n.t("transfer_money_abroad_P22")}</p>
												<div className="inner-div">
													<p><b>{i18n.t("Timing")} – </b> {i18n.t("Timing_P")}</p>
													<p><b>{i18n.t("Access_and_ease")} – </b> {i18n.t("Access_and_ease_P")}</p>
													<p><b>{i18n.t("Laws_and_regulations")} – </b> {i18n.t("Laws_and_regulations_P")}</p>
												</div>
												<p>{i18n.t("transfer_money_abroad_P23")}</p>
											</div>
										</Typography>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={6}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h2 className="heading">
										{i18n.t("transfer_money_abroad_panel6")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("transfer_money_abroad_panel6_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h2 className="heading">
										{i18n.t("transfer_money_abroad_panel6_1")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("transfer_money_abroad_panel6_1_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h2 className="heading">
										{i18n.t("transfer_money_abroad_panel6_2")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("transfer_money_abroad_panel6_2_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h2 className="heading">
										{i18n.t("transfer_money_abroad_panel6_3")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("transfer_money_abroad_panel6_3_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
											<ControlPointIcon />
										)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h2 className="heading">
										{i18n.t("transfer_money_abroad_panel6_4")}
									</h2>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											{i18n.t("transfer_money_abroad_panel6_4_P")}
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					</TabPanel>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(QuestionTabs);

const CustomTabs = styled.div`
.MuiTabs-root {
	display: inherit !important;
	.MuiTabs-scroller {
		-webkit-flex: inherit!important;
		-ms-flex: inherit!important;
		flex: inherit!important;
	}
	.MuiTabs-flexContainer .MuiTab-textColorPrimary.Mui-selected {
		border-left: 4px solid #0667eb!important;
	}
	.MuiAppBar-root span, .MuiTabs-root span, .MuiTabs-flexContainer span {
		background-color: inherit!important;
	}
	.MuiTab-textColorPrimary {
		color: rgba(0, 0, 0, 0.54);
	}
	.MuiTab-root {
		background-color: transparent !important;
		border: none;
		font-size: 16px;
		min-height: 48px;
		padding: 6px 0px 6px 19px!important;
		text-transform: uppercase;
		font-weight: 500;
		border-left: 4px solid transparent !important;
	}
	.MuiTab-wrapper {
		font-size: 16px;
	}
}
`;
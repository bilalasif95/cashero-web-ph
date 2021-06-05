import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { styled } from "frontity";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

const campaignTabs = (props) => {
	
	const [expanded, setExpanded] = useState("panel1");
	const accordionhandleChange = (panel) => (
		event,
		newExpanded
	) => {
		setExpanded(newExpanded ? panel : false);
	};
	
	return (
		<div className="Questions campaignFaq">
			<div className="container">
			<div className="row">
				<div className="col-md-8 offset-md-2 col-sm-12">
					<h3 className="TabsTitle text-center">Frequently Asked Questions</h3>
						<div className="CollapseToggle">
							<PanelHeadTabs>
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
									<h3 className="heading">
										What is Cashero?
									</h3>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
										Cashero is a high-interest savings platform that lets you make instant online transfers and cross-border payments in multiple currencies.
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
									<h3 className="heading">
										What are Cashero's main features?
									</h3>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											<span className="campBold">
												Cashero offers high-yield savings to keep your money above inflation with bank-beating interest rates of 2% - 5% APY.
											</span>
										</p>
										
										<p className="campBold mb-0">
											A Multi-Currency Wallet
										</p>
										<p className="FaqText">
											Users can hold their balance in USD, GBP and EUR to reduce fluctuations. There's no minimum balance or maintenance fees.
										</p>
										<p className="campBold mb-0">Currency Conversion</p>
										<p className="FaqText">
											Instantly switch between currencies USD, EUR and GBP.
										</p>
										<p className="campBold mb-0">Instant Payments</p>
										<p className="FaqText">
											Cashero lets you send, request and receive money instantly around the world.
										</p>
										<p className="campBold mb-0">Business</p>
										<p className="FaqText">
											Businesses can also sen, request and receive money from customers around the world in different curencies.
										</p>
										<p className="campBold mb-0">Fee-free charity donations</p>
										<p className="FaqText">
											Charities can get donations by signing up to Cashero and use thier Cashero link to request donations.
										</p>
										<p className="campBold mb-0">Rewards</p>
										<p className="FaqText">
											What's more, users can earn rewards when you refer your friends and colleagues to Cashero.
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
									<h3 className="heading">
										When will Cashero officially launch?
									</h3>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											September 2021.
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
									<h3 className="heading">
										Cashero regulated?
									</h3>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											Cashero is the process of becoming an EU-regulated financial institution.
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
									<h3 className="heading">
										Is my money safe?
									</h3>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<p className="FaqText">
											Ever heard of multi-party computation (MPC) and hardware isolation? In short, this is a highly secured cryptographic network shared between systems using intel SGX enclaves. That's complex, but these security layers ensure your money is protected.
										</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							</PanelHeadTabs>
						</div>
				</div>
			</div>
			</div>
		</div>
	);
}

export default campaignTabs;
const PanelHeadTabs = styled.div`
	.MuiPaper-root {
		background: transparent !important;
	}
`;

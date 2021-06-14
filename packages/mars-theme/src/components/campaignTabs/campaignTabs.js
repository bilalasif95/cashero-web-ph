import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { styled } from "frontity";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import { withTranslation } from "react-i18next";

const campaignTabs = ({ i18n }) => {
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
						<h3 className="TabsTitle text-center">{i18n.t("Frequently_Asked_Questions")}</h3>
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
											{i18n.t("What_is_Cashero")}
										</h3>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<p className="FaqText">
												{i18n.t("What_is_Cashero_P_1_1")}
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
											{i18n.t("What_are_Cashero_main_features")}
										</h3>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<p className="FaqText">
												<span className="campBold">
													{i18n.t("What_are_Cashero_main_features_P")}
												</span>
											</p>
											<p className="campBold mb-0">
												{i18n.t("What_are_Cashero_main_features_P1")}
											</p>
											<p className="FaqText">
												{i18n.t("What_are_Cashero_main_features_P2")}
											</p>
											<p className="campBold mb-0">{i18n.t("Currency_conversion")}:</p>
											<p className="FaqText">
												{i18n.t("What_are_Cashero_main_features_P3")}
											</p>
											<p className="campBold mb-0">{i18n.t("Instant_Payments")}:</p>
											<p className="FaqText">
												{i18n.t("What_are_Cashero_main_features_P4")}
											</p>
											<p className="campBold mb-0">{i18n.t("main_features_B5")}</p>
											<p className="FaqText">
												{i18n.t("What_are_Cashero_main_features_P5")}
											</p>
											<p className="campBold mb-0">{i18n.t("main_features_B6")}</p>
											<p className="FaqText">
												{i18n.t("What_are_Cashero_main_features_P6")}
											</p>
											<p className="campBold mb-0">{i18n.t("main_features_B7")}</p>
											<p className="FaqText">
												{i18n.t("What_are_Cashero_main_features_P7")}
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
											{i18n.t("Launch_Date")}
										</h3>
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
										<h3 className="heading">
											{i18n.t("Cashero_regulated")}
										</h3>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<p className="FaqText">
												{i18n.t("Cashero_regulated_P1")}
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
											{i18n.t("money_safe_2")}
										</h3>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<p className="FaqText">
												{i18n.t("money_safe_2_1")}
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

export default withTranslation()(campaignTabs);

const PanelHeadTabs = styled.div`
	.MuiPaper-root {
		background: transparent !important;
	}
`;

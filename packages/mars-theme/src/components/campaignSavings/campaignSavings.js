import React from "react";
import savingwork from "../../assets/savingwork.svg";
import savingworkBRandPT from "../../assets/savingworkBRandPT.svg";
import savingworkCOMXARCLES from "../../assets/savingworkCOMXARCLES.svg";
import savingworkFR from "../../assets/savingworkFR.svg";
import savingworkDE from "../../assets/savingworkDE.svg";
import savingworkIT from "../../assets/savingworkIT.svg";
import savingworkID from "../../assets/savingworkID.svg";
import savingworkPH from "../../assets/savingworkPH.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.png";
import { animateScroll as scroll } from "react-scroll";
import { withTranslation } from "react-i18next";

const campaignSavings = ({ i18n, lang, focus }) => {
	return (
		<div className="MultiCurrency sm-mt-40 campaignSavings">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up">
							<h2 className="oneAppTitle compaignHeading">
								{/* {i18n.t("How_High_Yield")} <span className="br-block-with-no-display"></span> {i18n.t("Savings_Work")} */}
								{i18n.t("How_High_Yield_Savings_Work")}
							</h2>
							<p>
								{i18n.t("CampaignSavings_P")}
							</p>
							<button onClick={() => { focus(); scroll.scrollTo('myScrollToElement', { containerId: 'ContainerElementID' }) }} className="LinkBtn compaignLink" >{i18n.t("Join_the_Waitlist")}<img alt="arrow" className="ArrowBtn" height="24px" width="24px" src={Arrow} /> </button>
						</Fade>
					</div>
				</div>
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block"
						height="100%"
						width="550px"
						alt="Bit Circle"
						src={lang === "pt" || lang === "br" ? savingworkBRandPT : lang === "co" || lang === "mx" || lang === "ar" || lang === "cl" || lang === "es" ? savingworkCOMXARCLES : lang === "fr" ? savingworkFR : lang === "de" ? savingworkDE : lang === "it" ? savingworkIT : lang === "id" ? savingworkID : lang === "ph" ? savingworkPH : savingwork} />
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(campaignSavings);
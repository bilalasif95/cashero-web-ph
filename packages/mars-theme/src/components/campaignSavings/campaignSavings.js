import React from "react";
import savingwork from "../../assets/en-US_English_United_States.svg";
import savingworkBRandPT from "../../assets/savingworkBRandPT.png";
import savingworkCOMXARCLES from "../../assets/savingworkCOMXARCLES.png";
import savingworkFR from "../../assets/savingworkFR.png";
import savingworkDE from "../../assets/savingworkDE.png";
import savingworkIT from "../../assets/savingworkIT.png";
import savingworkID from "../../assets/savingworkID.png";
import savingworkPH from "../../assets/savingworkPH.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.png";
import { animateScroll as scroll } from "react-scroll";
import { withTranslation } from "react-i18next";

const campaignSavings = ({ i18n, lang }) => {
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
							<button onClick={() => scroll.scrollToTop()} className="LinkBtn compaignLink" >{i18n.t("Join_the_Waitlist")}<img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
						</Fade>
					</div>
				</div>
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block"
						alt="Bit Circle"
						src={lang === "pt" || lang === "br" ? savingworkBRandPT : lang === "co" || lang === "mx" || lang === "ar" || lang === "cl" || lang === "es" ? savingworkCOMXARCLES : lang === "fr" ? savingworkFR : lang === "de" ? savingworkDE : lang === "it" ? savingworkIT : lang === "id" ? savingworkID : lang === "ph" ? savingworkPH : savingwork} />
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(campaignSavings);
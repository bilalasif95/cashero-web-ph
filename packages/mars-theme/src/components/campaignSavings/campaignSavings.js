import React from "react";
import savingwork from "../../assets/savingwork.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.png";
import { animateScroll as scroll } from "react-scroll";
import { withTranslation } from "react-i18next";

const campaignSavings = ({ i18n }) => {
	return (
		<div className="MultiCurrency sm-mt-40 campaignSavings">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up">
							<h2 className="oneAppTitle">
								{i18n.t("How_High_Yield")} <span className="br-block-with-no-display"></span> {i18n.t("Savings_Work")}
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
						src={savingwork} />
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(campaignSavings);
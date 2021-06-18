import React from "react";
import earncashero from "../../assets/test.jpg";
import earncasheroBRandPT from "../../assets/earncasheroBRandPT.png";
import earncasheroCOMXARCLES from "../../assets/earncasheroCOMXARCLES.png";
import earncasheroFR from "../../assets/earncasheroFR.png";
import earncasheroDE from "../../assets/earncasheroDE.png";
import earncasheroIT from "../../assets/earncasheroIT.png";
import earncasheroID from "../../assets/earncasheroID.png";
import earncasheroPH from "../../assets/earncasheroPH.png";
import Arrow from "../../assets/arrowLink.png";
import { Fade } from "react-awesome-reveal";
import { animateScroll as scroll } from "react-scroll";
import { withTranslation } from "react-i18next";

const CompaignNoEffort = ({ i18n,lang }) => {
	return (
		<div className="Coins sm-mb-30">
			<div className="container">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" alt="coins Up" src={lang === "pt" || lang === "br" ? earncasheroBRandPT : lang === "co" || lang === "mx" || lang === "ar" || lang === "cl" || lang === "es" ? earncasheroCOMXARCLES : lang === "fr" ? earncasheroFR : lang === "de" ? earncasheroDE : lang === "it" ? earncasheroIT : lang === "id" ? earncasheroID : lang === "ph" ? earncasheroPH : earncashero} />
					</div>
					<div className="col-md-6">
						<div className="oneAppCont">
							<Fade triggerOnce direction="up">
								<h2 className="HighInterestTitle compaignHeading">
									{i18n.t("Earn_the_Cashero_Way")}
								</h2>
								<p className="HighInterestText">{i18n.t("CompaignNoEffort_P1")}</p>
								<p className="HighInterestText">{i18n.t("CompaignNoEffort_P2")}</p>
								<button onClick={() => scroll.scrollToTop()} className="LinkBtn compaignLink" >{i18n.t("Join_the_Waitlist")}<img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(CompaignNoEffort);
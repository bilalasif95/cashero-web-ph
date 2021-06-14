import React from "react";
import earncashero from "../../assets/earncashero.png";
import Arrow from "../../assets/arrowLink.png";
import { Fade } from "react-awesome-reveal";
import { animateScroll as scroll } from "react-scroll";
import { withTranslation } from "react-i18next";

const CompaignNoEffort = ({ i18n }) => {
	return (
		<div className="Coins sm-mb-30">
			<div className="container">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" alt="coins Up" src={earncashero} />
					</div>
					<div className="col-md-6">
						<div className="oneAppCont">
							<Fade triggerOnce direction="up">
								<h2 className="HighInterestTitle">
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
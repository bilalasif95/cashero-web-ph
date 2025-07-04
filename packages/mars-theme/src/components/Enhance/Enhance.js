import React from "react";
import Hand from "../../assets/handImg.png";
import { Fade } from "react-awesome-reveal";
import ArrowWhite from "../../assets/arrowLinkWhite.svg";
import { withTranslation } from "react-i18next";

const Enhance = ({ i18n }) => {
	return (
		<div className="Enhance">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="EnhanceCont">
							<Fade triggerOnce direction="up">
								<h3 className="EnhanceTitle">{i18n.t("Business")}</h3>
								<p>
									{i18n.t("Business_P1")} <span className="br-block-with-no-display"></span>{i18n.t("Business_P2")}
								</p>
								<a className="Link" href="/ph/#">
									{i18n.t("Learn_more_about_Business")}  <img alt="Arrow" height="24px" width="24px" className="ArrowBtn" src={ArrowWhite} />
								</a>
							</Fade>
						</div>
					</div>
					<div className="col-md-6">
						<img className="img-fluid PhoneHand" height="100%" width="100%" alt="Hand" src={Hand} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Enhance);
import React from "react";
import WhoImg from "../../assets/WhoImg.png";
import { withTranslation } from "react-i18next";

const WhoSection = ({ i18n }) => {
	return (
		<div className="WhoSection">
			<div className="row align-items-center">
				<div className="col-md-6">
					<img alt="Who Image" className="img-fluid" src={WhoImg} />
				</div>
				<div className="col-md-6 sm-mt-30">
					<div className="WhoSectionCont">
						<h1>{i18n.t("Who_we_are")}</h1>
						<p>{i18n.t("Who_we_are_P1")}</p>
						<p>{i18n.t("Who_we_are_P2")}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(WhoSection);
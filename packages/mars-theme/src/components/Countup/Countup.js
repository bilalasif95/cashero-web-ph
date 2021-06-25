import React from "react";
import { withTranslation } from "react-i18next";

const Countup = ({ i18n }) => {
	return (
		<div className="Countup">
			<div className="row">
				<div className="col-md-3">
					<div className="CountupCont">
						<h2>120</h2>
						<p>{i18n.t("Countries_supported")}</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h2>3</h2>
						<p>{i18n.t("In_app_currencies")}</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h2>5%</h2>
						<p>{i18n.t("APY_up_to")}</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h2>1</h2>
						<p>{i18n.t("Only_1_Cashero")}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Countup);
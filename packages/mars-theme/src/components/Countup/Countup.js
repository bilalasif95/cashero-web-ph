import React from "react";
import { withTranslation } from "react-i18next";

const Countup = ({ i18n }) => {
	return (
		<div className="Countup">
			<div className="row">
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>120</h1>
						<p>{i18n.t("Countries_supported")}</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>3</h1>
						<p>{i18n.t("In_app_currencies")}</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>5%</h1>
						<p>{i18n.t("APY_up_to")}</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>1</h1>
						<p>{i18n.t("Only_1_Cashero")}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Countup);
import React from "react";
import Link from "../link";
import Logo from "../../assets/logo.svg";
import { withTranslation } from "react-i18next";

const CampaignFooter = ({ i18n }) => {
	return (
		<div className="container">
			<div className="Footer">
				<div className="row">
					<div className="col-md-12">
						<div className="footerCont text-center">
							<Link link="/">
								<img src={Logo} alt="logo" />
							</Link>
							<p className="CampaignFooter">{i18n.t("Footnote_P")}</p>
							<p>{i18n.t("Footnote")}</p>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(CampaignFooter);
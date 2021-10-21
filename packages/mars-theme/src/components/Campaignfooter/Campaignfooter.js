import React from "react";
import { connect } from "frontity";
import Link from "../link";
import Logo from "../../assets/logo.svg";
import { withTranslation } from "react-i18next";

const CampaignFooter = ({ state, i18n }) => {
	const data = state.source.get(state.router.link);
	return (
		<div className="container">
			<div className="Footer">
				<div className="row">
					<div className="col-md-12">
						<div className="footerCont text-center">
							<Link link={data.link}>
								<img src={Logo} height="36px" width="191px" alt="logo" />
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

export default connect(withTranslation()(CampaignFooter));
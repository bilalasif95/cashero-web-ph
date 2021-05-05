import React from "react";
import Inbox from "../../assets/inbox.gif";
import { withTranslation } from "react-i18next";

const Thankyou = ({ i18n }) => {
	return (
		<div className="container">
			<div className="Thankyou">
				<div className="row">
					<div className="col-md-12">
						<div className="ThankyouCont">
							<img className="img-fluid mx-auto d-block InboxImg" alt="Inbox" src={Inbox} />
							<h1>{i18n.t("Thank_you")}</h1>
							<h3>{i18n.t("Your_email_has_been_confirmed")}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Thankyou);
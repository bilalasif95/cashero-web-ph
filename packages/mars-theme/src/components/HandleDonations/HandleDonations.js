import React, { useState } from "react";
import heartmap from "../../assets/heartmap.svg"
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Check from "../../assets/check-mark.svg";
import { withTranslation } from "react-i18next";

const HandleDonations = ({ i18n }) => {
	const appModalClose = () => {
		setAppModal(false)
	};
	const [appModal, setAppModal] = useState(false);
	return (
		<>
			<div className="oneApp sm-pb-0">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<div className="oneAppCont sm-mt-0">
							<h2 className="oneAppTitle sm-mt-30">{i18n.t("Cashero_Helps_You")} <span className="br-block-with-no-display"></span>  {i18n.t("Handle_Donations_from")} <span className="br-block-with-no-display"></span>  {i18n.t("Around_The_World")}</h2>
							<p className="sm-center">{i18n.t("Benefit_from_the_following")}</p>
							<ul className="list-unstyled CharityList">
								<li><img src={Check} alt="check" /> {i18n.t("High_yield_savings_account")}</li>
								<p>{i18n.t("High_yield_savings_account_P")}</p>
								<li><img src={Check} alt="check" /> {i18n.t("Multi_currency_accounts")}</li>
								<p>{i18n.t("Multi_currency_accounts_P")}</p>
								<li><img src={Check} alt="check" /> {i18n.t("Currency_conversion")}</li>
								<p>{i18n.t("Currency_conversion_P")}</p>
								<li><img src={Check} alt="check" /> {i18n.t("Send_request_and_receive_payments")}</li>
								<p>{i18n.t("Send_request_and_receive_payments_P")}</p>
								<li><img src={Check} alt="check" /> {i18n.t("Free_global_money_transfers")}</li>
								<p>{i18n.t("Free_global_money_transfers_P")}</p>
							</ul>
						</div>
					</div>
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block sm-center" alt="heart map" src={heartmap} />
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}

export default withTranslation()(HandleDonations);
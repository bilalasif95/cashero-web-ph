import React, { useState } from "react";
import PlaceBR from "../../assets/placeBR.png";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { withTranslation } from "react-i18next";

const StartDonation = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<>
			<div className="MoneyRequest">
				<div className="row align-items-center">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" height="100%" width="422px" alt="Place" src={PlaceBR} />
					</div>
					<div className="col-md-6 sm-mt-30">
						<div className="MoneyRequestCont">
							<h2 className="oneAppTitle"> {i18n.t("Your_Generosity_Makes")} <span className="br-block-with-no-display"></span> {i18n.t("Our_World_a_Better_Place")} </h2>
							<p>{i18n.t("Your_Generosity_Makes_P")}</p>
							<button onClick={appModalOpen} className="LinkBtn">{i18n.t("Get_Early_Access")} <img alt="Arrow" height="24px" width="24px" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}

export default withTranslation()(StartDonation);
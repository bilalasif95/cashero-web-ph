import React, { useState } from "react";
import Donations from "../../assets/Donations.png";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { withTranslation } from "react-i18next";

const FindCharity = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<>
			<div className="oneApp">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<div className="oneAppCont sm-mt-0 sm-mb-0">
							<h1 className="oneAppTitle sm-mt-30">{i18n.t("Choose_from_Our_List")} <span className="br-block-with-no-display"></span> {i18n.t("of_Charities")} </h1>
							<p>{i18n.t("Find_Charity_P")}</p>
							<button onClick={appModalOpen} className="LinkBtn" >{i18n.t("Get_Early_Access")} <img alt="Arrow" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>
					<div className="col-md-6">
						<img alt="Donations" className="img-fluid sm-center mx-auto d-block" src={Donations} />
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}

export default withTranslation()(FindCharity);
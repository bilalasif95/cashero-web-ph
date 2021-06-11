import React, { useState } from "react";
import Place from "../../assets/myPlace.png";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { withTranslation } from "react-i18next";

const BetterPlace = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true);
	};
	const appModalClose = () => {
		setAppModal(false);
	};
	return (
		<>
			<div className="MoneyRequest">
				<div className="row">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" alt="Place" src={Place} />
					</div>
					<div className="col-md-6">
						<div className="MoneyRequestCont">
							<h2 className="oneAppTitle sm-mt-30"> {i18n.t("Raise_More_Money_to")} <span className="br-block-with-no-display"></span> {i18n.t("Make_Our_World_a")} <span className="br-block-with-no-display"></span> {i18n.t("Better_Place")} </h2>
							<p>{i18n.t("Better_Place_P1")}</p>
							<p>{i18n.t("Better_Place_P2")}</p>
							<p>{i18n.t("Better_Place_P3")}</p>
							<button onClick={appModalOpen} className="LinkBtn"> {i18n.t("Get_Early_Access")} <img alt="Arrow" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}

export default withTranslation()(BetterPlace);
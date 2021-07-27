import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import CoinsUp from "../../assets/coinsUp.png";
import Arrow from "../../assets/arrowLink.svg";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

const NoEffort = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="Coins sm-mb-30">
			<div className="container">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" height="100%" width="328px" alt="coins Up" src={CoinsUp} />
					</div>
					<div className="col-md-6">
						<div className="oneAppCont">
							<Fade triggerOnce direction="up">
								<h2 className="HighInterestTitle">
									{i18n.t("Earn_the_Cashero_Way")}
								</h2>
								<p className="HighInterestText">{i18n.t("No_Effort_P1")}</p>
								<p className="HighInterestText">{i18n.t("No_Effort_P2")}</p>
								<p className="HighInterestText">{i18n.t("No_Effort_P3")}</p>
								<button onClick={appModalOpen} className="LinkBtn" >{i18n.t("Get_Early_Access")}<img alt="arrow" height="24px" width="24px" className="ArrowBtn" src={Arrow} /> </button>
							</Fade>
						</div>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(NoEffort);
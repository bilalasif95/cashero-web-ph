import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Globe from "../../assets/globe.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const Securepayments = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MoneyRequest sm-mt-30">
			<div className="row align-items-center">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h2 className="oneAppTitle">
								{i18n.t("Secure_Global_Money_Transfers")}
							</h2>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>{i18n.t("Secure_Global_Money_Transfers_P1")}</p>
							<p>{i18n.t("Secure_Global_Money_Transfers_P2")}</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={700}>
							<button onClick={appModalOpen} className="LinkBtn">
								{i18n.t("Get_Early_Access")} <img alt="arrow" className="ArrowBtn" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block sm-mt-30"
						alt="Globe"
						src={Globe}
					/>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Securepayments);
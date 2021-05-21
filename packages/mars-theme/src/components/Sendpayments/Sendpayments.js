import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import WorldMap from "../../assets/Worldmap.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const Sendpayments = ({ i18n }) => {
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
					<img
						className="img-fluid mx-auto d-block"
						alt="World Map"
						src={WorldMap}
					/>
				</div>
				<div className="col-md-5 sm-mt-30">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h2 className="oneAppTitle">
								{i18n.t("The_Cashero_Way")}
							</h2>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>{i18n.t("The_Cashero_Way_P")}</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={700}>
							<button onClick={appModalOpen} className="LinkBtn">
								{i18n.t("Get_Early_Access")} <img alt="arrow" className="ArrowBtn" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Sendpayments);
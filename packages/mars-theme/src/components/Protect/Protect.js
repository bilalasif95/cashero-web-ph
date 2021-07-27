import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import Lock from "../../assets/lock.svg";
import { withTranslation } from "react-i18next";

const Protect = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MultiCurrency">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h2 className="oneAppTitle noBreakBannerHeading">
								{i18n.t("Use_Cashero_to_Protect")}
							</h2>
						</Fade>
						<Fade triggerOnce direction="up" delay={400}>
							<p>{i18n.t("Protect_P1")}</p>
							<p>{i18n.t("Protect_P2")}</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={1000}>
							<button onClick={appModalOpen} className="LinkBtn" >
								{i18n.t("Get_Early_Access")} <img alt="Arrow" height="24px" width="24px" className="ArrowBtn" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
				<div className="col-md-6 sm-mt-30">
					<img
						className="img-fluid mx-auto d-block"
						height="100%"
						width="277px"
						src={Lock}
						alt="Lock"
					/>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Protect);
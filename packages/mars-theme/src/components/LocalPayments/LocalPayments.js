import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Mobile from "../../assets/CasheroMobile.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const LocalPayments = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MoneyRequest sm-mt-40">
			<div className="row align-items-center">
				<div className="col-md-6 sm-mb-30">
					<img className="img-fluid mx-auto d-block" height="100%" width="479px" alt="Mobile" src={Mobile} />
				</div>
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h2 className="oneAppTitle">
								{i18n.t("Local_and_Global_Instant")}
							</h2>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>
								{i18n.t("Local_Payments_P")}
							</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={700}>
							<button onClick={appModalOpen} className="LinkBtn">
								{i18n.t("Get_Early_Access")} <img className="ArrowBtn" height="24px" width="24px" alt="Arrow" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(LocalPayments);
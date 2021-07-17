import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import Paid from "../../assets/paid.png";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { withTranslation } from "react-i18next";

const GetPaid = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MoneyRequest sm-pt-0 sm-mt-30">
			<div className="row flex-column-reverse flex-sm-row align-items-center">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h3 className="oneAppTitle noBreakGetPaidHeading">
								{i18n.t("Get_Paid_the")}
							</h3>
							<p>
								{i18n.t("Get_Paid_P")}
							</p>
							<button onClick={appModalOpen} className="LinkBtn">
								{i18n.t("Get_Early_Access")} <img className="ArrowBtn" alt="Arrow" height="24px" width="24px" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
				<div className="col-md-6">
					<img className="img-fluid sm-mb-30" height="100%" width="486px" src={Paid} />
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(GetPaid);
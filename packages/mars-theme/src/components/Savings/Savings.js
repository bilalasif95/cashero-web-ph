import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import BitCircle from "../../assets/BitCircle.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const Savings = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MultiCurrency sm-mt-40">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up">
							<h2 className="oneAppTitle">
								{i18n.t("How_Does_Cashero")}
							</h2>
							<p>
								{i18n.t("High_Yield_Savings_Work_P")}
							</p>
							<button onClick={appModalOpen} className="LinkBtn">
								{i18n.t("Get_Early_Access")} <img alt="Arrow" height="24px" width="24px" className="ArrowBtn" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block"
						height="100%" width="444px"
						alt="Bit Circle"
						src={BitCircle} />
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Savings);
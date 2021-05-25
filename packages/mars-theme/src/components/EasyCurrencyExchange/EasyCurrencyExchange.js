import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Exchange from "../../assets/exchange.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const EasyCurrencyExchange = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MoneyRequest">
			<div className="row align-items-center">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h2 className="oneAppTitle">
								{i18n.t("Your_One_Tap_Hub_for")} <span className="br-block-with-no-display"></span> {i18n.t("Easy_Currency_Exchange")}
							</h2>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>{i18n.t("Your_One_Tap_Hub_for_P")} </p>
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
						className="img-fluid mx-auto d-block"
						alt="exchange"
						src={Exchange}
					/>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(EasyCurrencyExchange);
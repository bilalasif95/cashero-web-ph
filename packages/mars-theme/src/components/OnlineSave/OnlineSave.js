import React, { useState } from "react";
import ExchangeCoins from "../../assets/exchangeCoin.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { withTranslation } from "react-i18next";

const OnlineSave = ({ i18n }) => {
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	const [appModal, setAppModal] = useState(false);
	return (
		<div className="CurrencyConversion">
			<div className="row flex-column-reverse flex-sm-row">
				<div className="col-md-6">
					<img className="img-fluid" height="100%" width="490px" alt="Exchange Coins" src={ExchangeCoins} />
				</div>
				<div className="col-md-6 sm-mb-30">
					<div className="CurrencyConversionCont">
						<div>
							<Fade triggerOnce direction="up" delay={0}>
								<h2 className="oneAppTitle noBreakBannerHeading">
									{i18n.t("Transfer_Money_Instantly")}
								</h2>
							</Fade>
							<Fade triggerOnce direction="up" delay={300}>
								<p>{i18n.t("Online_Save_P")}</p>
							</Fade>
							<Fade triggerOnce direction="up" delay={700}>
								<button onClick={appModalOpen} className="LinkBtn">
									{i18n.t("Get_Early_Access")} <img alt="arrow" className="ArrowBtn" height="24px" width="24px" src={Arrow} />
								</button>
							</Fade>
						</div>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(OnlineSave);
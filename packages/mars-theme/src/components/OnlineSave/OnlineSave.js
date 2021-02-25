import React, { useState } from "react";
import ExchangeCoins from "../../assets/exchangeCoin.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";

export function OnlineSave() {
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
					<img className="img-fluid" alt="Exchange Coins" src={ExchangeCoins} />
				</div>
				<div className="col-md-6 sm-mb-30">
					<div className="CurrencyConversionCont">
						<div>
							<Fade triggerOnce direction="up" delay={0}>
								<h1 className="oneAppTitle">
									Transfer Money Online <span className="br-block"></span> And
										Save On Exchange <span className="br-block"></span> Fees.
									</h1>
							</Fade>
							<Fade triggerOnce direction="up" delay={300}>
								<p>You know the currency exchange rate you see on Google? Ya, that’s the one we give you too. Convert currency almost at the speed of light with a small, transparent fee. By using Cashero, you can hold your money in one place, transfer money online and save on exchange fees. We give you the best possible rate, forget about those excessive bank fees.</p>
							</Fade>
							<Fade triggerOnce direction="up" delay={700}>
								<button onClick={appModalOpen} className="LinkBtn">
									Start Exchanging  <img alt="arrow" className="ArrowBtn" src={Arrow} />
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
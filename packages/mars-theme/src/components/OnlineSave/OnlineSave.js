import React, { useState } from "react";
import ExchangeCoins from "../../assets/exchangeCoin.png";
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
									Transfer Money Instantly <span className="br-block"></span> and Save on Exchange <span className="br-block"></span> Fees
								</h1>
							</Fade>
							<Fade triggerOnce direction="up" delay={300}>
								<p>You know those great currency exchange rates you see advertised everywhere? That’s the rate Cashero actually uses to exchange your money.  Most banks use a lower rate.  No bait and switch. Convert currency almost at the speed of light with a small, transparent fee.</p>
							</Fade>
							<Fade triggerOnce direction="up" delay={700}>
								<button onClick={appModalOpen} className="LinkBtn">
									Get Early Access  <img alt="arrow" className="ArrowBtn" src={Arrow} />
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
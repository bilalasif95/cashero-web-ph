import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import Lock from "../../assets/lock.svg";

export function Protect() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MultiCurrency sm-mt-30">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h1 className="oneAppTitle">
							Use Cashero to Protect  <span className="br-block"></span> Your Money from Currency <span className="br-block"></span>  Value Fluctuations
							</h1>
						</Fade>
						<Fade triggerOnce direction="up" delay={400}>
							<p>Deposit your local currency in your Cashero wallet and convert the funds into either USD, GBP, or EUR - you choose. Hold your money in some of the strongest currencies in the world.</p>
							<p>When you’re ready to convert back to your currency, it’s simple! Chances are you’ll come out a winner if your local currency has devalued. Thanks to Cashero, currency drops ain’t got nothin’ on you.</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={1000}>
							<button onClick={appModalOpen} className="LinkBtn" >
							Get Early Access <img alt="Arrow" className="ArrowBtn" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block"
						src={Lock}
						alt="Lock"
					/>
				</div>
			</div>
		</div>
	);
}
import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Globe from "../../assets/globe.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function Securepayments() {
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
							<h1 className="oneAppTitle">
							Secure Global Money Transfers
							</h1>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>Cashero’s global money transfer service gives you a quick and secure way to send money abroad. We make sending money easy-peasy with no hidden fees. </p>
							<p>Your friends and family across the world will thank you, but no need to thank us, that’s what we’re here for.</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={700}>
							<button onClick={appModalOpen} className="LinkBtn">
								Get Early Access <img alt="arrow" className="ArrowBtn" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block"
						alt="Globe"
						src={Globe}
					/>
				</div>
			</div>
		</div>
	);
}
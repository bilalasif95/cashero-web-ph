import React, { useState } from "react";
import GetTheAppModal from "../../components/GetTheAppModal/GetTheAppModal";
import WorldMap from "./../../assets/Worldmap.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function Sendpayments() {
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
					<img
						className="img-fluid mx-auto d-block"
						alt="WorldMap"
						src={WorldMap}
					/>
				</div>
				<div className="col-md-5 sm-mt-30">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h1 className="oneAppTitle">
								The Cashero Promise: Send Money Online to Around the World
							</h1>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>You are the true heroes, working hard to take care of those you love. We’re by your side each step of the way to ensure your hard-earned money goes into the right pockets. Cashero’s fast global money transfer service gives you a quick, easy, and secure way to send money abroad. </p>
							<p>Cashero’s fast global money transfer service gives you a quick, easy, and secure way to send money abroad. We make sending money online instantly easy peasy with no hidden fees. Your people on the other side of the world will thank you, but no need to thank us, that’s why Cashero is here</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={700}>
							<button onClick={appModalOpen} className="LinkBtn">
								Join for Free <img alt="arrow" className="ArrowBtn" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}
import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Exchange from "../../assets/exchange.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function EasyCurrencyExchange() {
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
								Your One Tap Hub for <span className="br-block-with-no-display"></span> Easy Currency Exchange
							</h1>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>By using Cashero, you can hold your money in one place, transfer money instantly and save on exchange fees. We give you the best possible rate so you can say goodbye to those excessive bank fees. </p>
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
						alt="exchange"
						src={Exchange}
					/>
				</div>
			</div>
		</div>
	);
}
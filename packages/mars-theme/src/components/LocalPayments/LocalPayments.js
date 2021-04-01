import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Mobile from "../../assets/CasheroMobile.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function LocalPayments() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MoneyRequest sm-mt-40">
			<div className="row align-items-center">
				<div className="col-md-6 sm-mb-30">
					<img className="img-fluid mx-auto d-block" alt="Mobile" src={Mobile} />
				</div>
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h1 className="oneAppTitle">
								Local and Global Instant <span className="br-block"></span> Payments at the Tip <span className="br-block"></span> of Your Fingers
							</h1>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>
								Whether you’re paying for shoes, a meal, or tickets to that event you've been waiting all year for, Cashero has your back.
							</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={700}>
							<button onClick={appModalOpen} className="LinkBtn">
								Get Early Access <img className="ArrowBtn" alt="Arrow" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}
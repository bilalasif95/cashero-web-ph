import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Mobile from "../../assets/CasheroMobile.svg";
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
					<img className="img-fluid mx-auto d-block" alt="" src={Mobile} />
				</div>
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h1 className="oneAppTitle">
								Local And Global Instant <span className="br-block"></span> Payments Right At The <span className="br-block"></span> Tip Of Your Fingers
							</h1>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>Whether you’re paying your electricity bill, splitting takeout with friends, or you simply lost a bet, Cashero is here for you. Monthly expenses are such a pain, worrying about them each month also doesn’t help. Let us make the whole process easy for you. </p>
							<p>With Cashero, you can send money instantly and set reminders to pay your bills.
							If someone owes you money, well, we also make that simple too. Send a request through Cashero and your friend will be reminded that she owes you for the burrito. Exchanging bank details are not needed.
							Receiving payments is a breeze and your account will be updated automatically. Let Cashero do all the work for you while you carry on eating your burrito.
							</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={700}>
							<button onClick={appModalOpen} className="LinkBtn">
								Join for Free <img className="ArrowBtn" alt="" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}
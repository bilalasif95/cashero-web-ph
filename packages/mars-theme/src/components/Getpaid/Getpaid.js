import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import Paid from "../../assets/paid.png";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";

export function GetPaid() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MoneyRequest sm-pt-0 sm-mt-30">
			<div className="row flex-column-reverse flex-sm-row align-items-center">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h3 className="oneAppTitle">
								Get Paid the
									<span className="br-block"></span>
								Cashero Way-Fast
							</h3>
							<p>
								If someone owes you money, well, we’ve made that simple too. Send them a request through Cashero and a notification will be delivered to their phone. No bank details, no IOU notes, just instant money transfers the way they’re supposed to be - easy.
							</p>
							<button onClick={appModalOpen} className="LinkBtn">
								Get Early Access  <img className="ArrowBtn" alt="Arrow" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
				<div className="col-md-6">
					<img className="img-fluid sm-mb-30" src={Paid} />
				</div>
			</div>
		</div>
	);
}
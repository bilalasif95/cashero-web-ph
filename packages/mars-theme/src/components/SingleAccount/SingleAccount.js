import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import Globe from "../../assets/Globe.svg";

export function SingleAccount() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="Globe">
			<div className="container">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<div className="Globe-pic">
							<img
								className="img-fluid mx-auto d-block"
								alt="Globe"
								src={Globe}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="oneAppCont sm-mt-0">
							<Fade triggerOnce direction="up">
								<h3 className="HighInterestTitle">
									Your Money From <span className="br-block-with-no-display"></span>  Around the World in <span className="br-block-with-no-display"></span> One Account
								</h3>
								<p>We take the headache out of managing money from different countries. Store your money in one place with no minimum balance or maintenance fees added! </p>
								<p>Receive funds internationally, hold balances in USD, GBP, and EUR, and transfer between currencies within seconds. </p>
								<button onClick={appModalOpen} className="LinkBtn">Get Early Access  <img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
							</Fade>
							{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
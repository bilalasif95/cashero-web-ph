import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Fade } from "react-awesome-reveal";
import Arrow from "./../../assets/arrowLink.svg";
import Globe from "./../../assets/Globe.svg";

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
						<div className="oneAppCont">
							<Fade triggerOnce direction="up">
								<h3 className="HighInterestTitle">
									Your Money From <span className="br-block"></span> Around The World In <span className="br-block"></span> One Single Account.{" "}
								</h3>
								<p className="HighInterestText">We take the headache out of managing money from different countries. Have your money in one place with no minimum balance or maintenance fees added! Receive funds internationally, hold balances in USD, GBP, and EUR and seamlessly transfer between currencies within seconds. Freedom, at last!  </p>
								<button onClick={appModalOpen} className="LinkBtn">Join for Free  <img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
							</Fade>
							{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
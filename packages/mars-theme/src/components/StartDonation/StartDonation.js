import React, { useState } from "react";
import Place from "../../assets/place.png";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";

export function StartDonation() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<>
			<div className="MoneyRequest">
				<div className="row align-items-center">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" alt="Place" src={Place} />
					</div>
					<div className="col-md-6 sm-mt-30">
						<div className="MoneyRequestCont">
							<h1 className="oneAppTitle"> Your Generosity Makes <span className="br-block"></span> Our World a Better Place </h1>
							<p>Give to charities around the world with ease. Cashero makes donating simple, with no hidden fees. Rest assured knowing one hundred percent of your donation is going to your chosen charity.</p>
							<button onClick={appModalOpen} className="LinkBtn">Get Early Access  <img alt="Arrow" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}
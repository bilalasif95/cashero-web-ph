import React, { useState } from "react";
import Place from "../../assets/place.svg";
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
						<img className="img-fluid mx-auto d-block" alt="" src={Place} />
					</div>
					<div className="col-md-6">
						<div className="MoneyRequestCont">
							<h1 className="oneAppTitle"> Your Generosity Makes <span className="br-block"></span> Our World A Better Place </h1>
							<p>Give to charities around the world with ease. Cashero makes donating simple, with no hidden fees. Rest assured knowing one hundred percent of your donation is going to support charities across the globe. </p>
							<button onClick={appModalOpen} className="LinkBtn">Start Giving  <img alt="" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}
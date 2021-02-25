import React, { useState } from "react";
import Place from "../../assets/place.svg";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";

export function BetterPlace() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true);
	};
	const appModalClose = () => {
		setAppModal(false);
	};
	return (
		<>
			<div className="MoneyRequest">
				<div className="row">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" alt="Place" src={Place} />
					</div>
					<div className="col-md-6">
						<div className="MoneyRequestCont">
							<h1 className="oneAppTitle">  Raise More Money And <span className="br-block"></span> Make Our World A <span className="br-block"></span> Better Place </h1>
							<p>Thank you for doing what you do. Cashero wants to support you in your effort to make a difference. That’s why when you become a listed charity with us, you can receive donations from people around the world for free.</p>
							<p>We believe in your work and want you to help others. We enable donations through Cashero and we take care of all transfer and exchange fees. There’s no catch! </p>
							<p>All you have to do is apply. If you check all of our boxes your charity will make it to the list. </p>
							<button onClick={appModalOpen} className="LinkBtn"> Get Early Access <img alt="Arrow" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}
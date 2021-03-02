import React, { useState } from "react";
import Donations from "../../assets/Donations.png";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";

export function FindCharity() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<>
			<div className="oneApp">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<div className="oneAppCont sm-mt-0">
							<h1 className="oneAppTitle sm-mt-30">Choose from Our List <span className="br-block"></span> of Charities </h1>
							<p className="sm-center">Cashero has a list of charities that are making a difference in various parts of the world. Discover which cause you’d like to support in the app and donate with a click of a button.</p>
							<button onClick={appModalOpen} className="LinkBtn" >Get Early Access <img alt="Arrow" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>
					<div className="col-md-6">
						<img alt="Donations" className="img-fluid sm-center mx-auto d-block" src={Donations} />
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}
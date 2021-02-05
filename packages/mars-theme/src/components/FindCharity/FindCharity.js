import React, { useState } from "react";
import Donations from "../../assets/Donations.svg";
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
							<h1 className="oneAppTitle sm-mt-30">Choose From Our List <span className="br-block"></span> Of Charities </h1>
							<p className="sm-center">Cashero has a list of charities which are making a difference in various parts of the world. Discover causes you care about in the app and donate with a click of a button.</p>
							<button onClick={appModalOpen} className="LinkBtn" >Find a Charity <img alt="" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>
					<div className="col-md-6">
						<img alt="" className="img-fluid sm-center mx-auto d-block" src={Donations} />
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}
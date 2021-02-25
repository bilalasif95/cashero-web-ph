import React, { useState } from "react";
import heartmap from "../../assets/heartmap.svg"
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";

export function HandleDonations() {
	const appModalClose = () => {
		setAppModal(false)
	};
	const [appModal, setAppModal] = useState(false);
	return (
		<>
			<div className="oneApp sm-pb-0">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<div className="oneAppCont sm-mt-0">
							<h1 className="oneAppTitle">Cashero Helps You <span className="br-block"></span>  Handle Donations from <span className="br-block"></span>  Around The World </h1>
							<p className="sm-center">Benefit from the following:</p>

							<ul className="list-unstyled CharityList">
								<li>✓ High-yield savings account  <span className="br-block"></span> Automatically earn 2%-5% interest annually on donations received. </li>
								<li>✓ Multi-currency accounts</li>
								<p>Receive donations in any currency, hold them in USD, GBP, or EUR. </p>
								<li>✓ Currency conversion <span className="br-block"></span> Convert between USD, GBP, or EUR for free. We absorb the costs.</li>
								<li>✓ Send, request, and receive payments <span className="br-block"></span> Manage your payments all through the Cashero app.</li>
								<li>✓ Free global money transfers <span className="br-block"></span> Send your donations to where it’s needed around the world.</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block sm-center" alt="" src={heartmap} />
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}
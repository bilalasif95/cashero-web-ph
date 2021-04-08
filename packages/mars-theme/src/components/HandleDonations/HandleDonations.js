import React, { useState } from "react";
import heartmap from "../../assets/heartmap.svg"
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Check from "../../assets/check-mark.svg";

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
							<h1 className="oneAppTitle">Cashero Helps You <span className="br-block-with-no-display"></span>  Handle Donations from <span className="br-block-with-no-display"></span>  Around The World</h1>
							<p className="sm-center">Benefit from the following:</p>
							<ul className="list-unstyled CharityList">
								<li><img src={Check} alt="check" /> High-yield savings account.</li>
								<p>Automatically earn 2%-5% interest annually on donations received.</p>
								<li><img src={Check} alt="check" />  Multi-currency accounts.</li>
								<p>Receive donations in any currency, hold them in USD, GBP, or EUR.</p>
								<li><img src={Check} alt="check" /> Currency conversion</li>
								<p>Convert between USD, GBP, or EUR for free. We absorb the costs.</p>
								<li><img src={Check} alt="check" /> Send, request, and receive payments.</li>
								<p>Manage your payments all through the Cashero app.</p>
								<li><img src={Check} alt="check" /> Free global money transfers.</li>
								<p>Send your donations to where it’s needed around the world.</p>
							</ul>
						</div>
					</div>
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block sm-center" alt="heart map" src={heartmap} />
					</div>
				</div>
			</div>
			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
		</>
	);
}
import React from "react";
import WhoImg from "../../assets/WhoImg.svg";

export function WhoSection() {
	return (
		<div className="WhoSection">
			<div className="row align-items-center">
				<div className="col-md-6">
					<img alt="Who Image" className="img-fluid" src={WhoImg} />
				</div>
				<div className="col-md-6 sm-mt-30">
					<div className="WhoSectionCont">
						<h1>Who we are</h1>
						<p>Cashero is an all-in-one platform for multi-currency high-yield savings, instant, fee-free internal and cross-border payments.</p>
						<p>The Hero your money has been waiting for, Cashero is designed to help you make and save money. </p>
					</div>
				</div>
			</div>
		</div>
	);
}
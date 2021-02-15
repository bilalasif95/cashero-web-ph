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
						<p>Cashero uses blockchain technology to provide a secure platform for high yield savings, multi-curency wallets and instant, fee-free internal and cross border payments.</p>
						<p>We're designed to help you make money, and save money. The Hero your money has been waiting for.
						I recommend Cashero to everyone. I can see that I’m earning money every minute
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import BitCircle from "../../assets/BitCircle.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.png";
const campaignSavings = () => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MultiCurrency sm-mt-40">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up">
							<h2 className="oneAppTitle">
								How High-Yield <span className="br-block-with-no-display"></span> Savings Work
							</h2>
							<p>
								By managing an intelligent portfolio for you, Cashero offers the best high-yield interest rates on your money (between 2 - 5%). You can earn money while you sleep, making Cashero a smart financial decision. Optimize your finances and watch your money grow.
							</p>
							<button onClick={appModalOpen} className="LinkBtn compaignLink" >Join the Waitlist<img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block"
						alt="Bit Circle"
						src={BitCircle} />
				</div>
			</div>
		</div>
	);
}

export default campaignSavings;
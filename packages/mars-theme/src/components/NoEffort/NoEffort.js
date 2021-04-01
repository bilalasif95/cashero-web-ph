import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import CoinsUp from "../../assets/coinsUp.png";
import Arrow from "../../assets/arrowLink.svg";
import { Fade } from "react-awesome-reveal";

export function NoEffort() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="Coins sm-mb-30">
			<div className="container">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" alt="coins Up" src={CoinsUp} />
					</div>
					<div className="col-md-6">
						<div className="oneAppCont">
							<Fade triggerOnce direction="up">
								<h3 className="HighInterestTitle">
									Earn the Cashero Way
								</h3>
								<p className="HighInterestText">You want to earn interest on your money, right? We understand. You've come to the right place.</p>
								<p className="HighInterestText">If your money is sitting in a bank account, chances are you’re losing money. High yield savings account interest rates should beat inflation and make you money. Unfortunately, most don’t.</p>
								<p className="HighInterestText">Introducing a first-of-its-kind approach to high yield savings. Cashero, the superhero your hard-earned money has been waiting for. </p>
								<button onClick={appModalOpen} className="LinkBtn" >Get Early Access<img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
							</Fade>
						</div>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}
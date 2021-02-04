import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import coinsUp from "../../assets/coinsUp.svg";
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
						<img className="img-fluid" alt="coinsUp" src={coinsUp} />
					</div>
					<div className="col-md-6">
						<div className="oneAppCont">
							<Fade triggerOnce direction="up">
								<h3 className="HighInterestTitle">
									What Cashero <span className="br-block"></span> Can Guarantee
									</h3>
								<p className="HighInterestText">You want to earn interest on your money, right? Passive income, dinero, moolah, Cashero. We understand. You've come to the right place. You worked hard for your money, so hard for it honey, you worked for your money so it better treat you right.
									</p>
								<p className="HighInterestText">If your money is sitting in a bank account, chances are you’re losing money daily. The best high yield savings account interest rates should beat inflation and earn you money. Most banks and online savings accounts do neither.
									Introducing a first-of-its-kind approach to high yield savings, the Cashero savings account. The superhero your hard earned money has been waiting for.</p>
								<button onClick={appModalOpen} className="LinkBtn" >Join for Free <img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
							</Fade>
						</div>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}
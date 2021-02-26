import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import WorldMap from "../../assets/Worldmap.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function Sendpayments() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MoneyRequest">
			<div className="row align-items-center">
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block"
						alt="World Map"
						src={WorldMap}
					/>
				</div>
				<div className="col-md-5 sm-mt-30">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h1 className="oneAppTitle">
							The Cashero Way: Quickly Send Money Around the World Online 
							</h1>
						</Fade>
						<Fade triggerOnce direction="up" delay={300}>
							<p>Not all heroes wear capes, some go to work every day to take care of their loved ones. We know this. We’re by your side each step of the way ensuring your hard-earned money arrives safely and quickly.</p>
						</Fade>
						<Fade triggerOnce direction="up" delay={700}>
							<button onClick={appModalOpen} className="LinkBtn">
							Get Early Access <img alt="arrow" className="ArrowBtn" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
			</div>
		</div>
	);
}
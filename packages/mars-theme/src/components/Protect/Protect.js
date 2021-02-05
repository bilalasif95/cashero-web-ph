import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import Lock from "../../assets/lock.svg";

export function Protect() {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="MultiCurrency sm-mt-30">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h1 className="oneAppTitle">
								Use Cashero To Protect <span className="br-block"></span> Your Money From <span className="br-block"></span> Currency Ups-and-Downs
							</h1>
						</Fade>
						<Fade triggerOnce direction="up" delay={400}>
							<p>Add your local currency in your Cashero wallet and convert the funds into either USD, GBP or EUR, you choose. Hold your money in some of the strongest currencies on the block. </p>
							<p>When you’re ready to convert back to your currency, it’s simple! And guess what? Chances are you’ll come out a winner on the other side thanks to Cashero. Currency drops ain’t got nothin’ on you. </p>
						</Fade>
						<Fade triggerOnce direction="up" delay={1000}>
							<button onClick={appModalOpen} className="LinkBtn" >
								Add Money <img alt="" className="ArrowBtn" src={Arrow} />
							</button>
						</Fade>
						{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
					</div>
				</div>
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block"
						src={Lock}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
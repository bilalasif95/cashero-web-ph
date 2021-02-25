import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import BitCircle from "../../assets/BitCircle.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function Savings() {
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
							<h1 className="oneAppTitle">
								How Does Cashero’s <span className="br-block"></span> High Yield Savings Work?
							</h1>
							<p>
								We use blockchain technology to get you the best savings account interest rates between 2%-5% annually in our intelligent portfolio. Let us optimise your finances and take the work out of making money.
							</p>
							<button onClick={appModalOpen} className="LinkBtn">
								Save More <img alt="Arrow" className="ArrowBtn" src={Arrow} />
							</button>
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
import React from "react";
import savingwork from "../../assets/savingwork.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.png";
import { animateScroll as scroll } from "react-scroll";

const campaignSavings = () => {
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
								By managing an intelligent portfolio for you, Cashero offers the best high-yield interest rates on your money (between 2 - 5% annually). You can earn money while you sleep, making Cashero a smart financial decision. Optimize your finances and watch your money grow.
							</p>
							<button onClick={() => scroll.scrollToTop()} className="LinkBtn compaignLink" >Join the Waitlist<img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
						</Fade>
					</div>
				</div>
				<div className="col-md-6">
					<img
						className="img-fluid mx-auto d-block"
						alt="Bit Circle"
						src={savingwork} />
				</div>
			</div>
		</div>
	);
}

export default campaignSavings;
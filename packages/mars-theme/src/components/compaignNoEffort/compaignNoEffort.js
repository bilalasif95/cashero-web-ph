import React from "react";
import earncashero from "../../assets/earncashero.png";
import Arrow from "../../assets/arrowLink.png";
import { Fade } from "react-awesome-reveal";
import { animateScroll as scroll } from "react-scroll";

const CompaignNoEffort = () => {
	return (
		<div className="Coins sm-mb-30">
			<div className="container">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" alt="coins Up" src={earncashero} />
					</div>
					<div className="col-md-6">
						<div className="oneAppCont">
							<Fade triggerOnce direction="up">
								<h2 className="HighInterestTitle">
									Earn the Cashero Way
								</h2>
								<p className="HighInterestText">Saving can often seem like an uphill struggle, we know. With most traditional accounts you're likely to lose money.</p>
								<p className="HighInterestText">Cashero is different. We offer a high-yield savings account with bank beating interest rates so you can keep your money above inflation. When your hard earned money needs a Cashero.</p>
								<button onClick={() => scroll.scrollToTop()} className="LinkBtn compaignLink" >Join the Waitlist<img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CompaignNoEffort;
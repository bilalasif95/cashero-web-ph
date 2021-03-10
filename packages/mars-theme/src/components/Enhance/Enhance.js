import React from "react";
import Hand from "../../assets/handImg.png";
import { Fade } from "react-awesome-reveal";
import ArrowWhite from "../../assets/arrowLinkWhite.svg";

export function Enhance() {
	return (
		<div className="Enhance">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="EnhanceCont">
							<Fade triggerOnce direction="up">
								<h3 className="EnhanceTitle">Business</h3>
								<p>
									Make profit on your profit with our high yield savings. <span className="br-block"></span> Send, request, and receive money from customers worldwide.
								</p>
								<a className="Link" href="/#">
									Learn more about Business  <img alt="Arrow" className="ArrowBtn" src={ArrowWhite} />
								</a>
							</Fade>
						</div>
					</div>
					<div className="col-md-5">
						<img className="img-fluid PhoneHand" alt="Hand" src={Hand} />
					</div>
				</div>
			</div>
		</div>
	);
}
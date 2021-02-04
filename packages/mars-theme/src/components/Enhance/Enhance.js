import React from "react";
import Hand from "../../assets/handImg.svg";
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
									Make money while you make money with our high yield savings. <span className="br-block"></span>  Send, request and receive money from customers worldwide. <span className="br-block"></span>  Your first $50K in payments is absolutely free, there's only 1% <span className="br-block"></span> fee after that.
								</p>
								<a className="Link" href="/#">
									Learn more about Business Payments  <img alt="" className="ArrowBtn" src={ArrowWhite} />
								</a>
							</Fade>
						</div>
					</div>
					<div className="col-md-5">
						<img className="img-fluid PhoneHand" alt="" src={Hand} />
					</div>
				</div>
			</div>
		</div>
	);
}
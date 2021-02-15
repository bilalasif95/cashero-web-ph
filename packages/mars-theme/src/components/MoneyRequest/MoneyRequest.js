import React from "react";
import Link from "../link";
import SendMoney from "../../assets/SendMoney.svg";
import Send from "../../assets/send.svg";
import Request from "../../assets/request.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function MoneyRequest() {
	return (
		<div className="MoneyRequest sm-mt-30">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h1 className="oneAppTitle">
								Instant Money
									<span className="br-block"></span>
								 Transfer
							</h1>
							<p>Cashero makes your payments simple. Tap a button and start sending, requesting and receiving payments worldwide. It’s fast, secure, convenient, and simple.</p>
							<Link link="/receive-payments" className="Link">
								Learn more about Payments <img className="ArrowBtn" alt="Arrow" src={Arrow} />
							</Link>
						</Fade>
					</div>
				</div>
				<div className="col-md-6">
					<div className="sr-money">
						<div className="circle-cont">
							<div className="blue-circle" />
						</div>
						<div className="box-container">
							<div className="inner">
								<div className="box">
									<div className="box1">
										<Slide triggerOnce={true}
											direction="right"
											delay={0}
											duration={2000}
										>
											<img
												className="img-fluid mx-auto d-block"
												src={Request}
												alt="Request"
											/>
										</Slide>
									</div>
								</div>
								<div className="box">
									<div className="box2">
										<Slide triggerOnce={true}
											direction="left"
											delay={0}
											duration={2500}
										>
											<img
												className="img-fluid mx-auto d-block"
												src={Send}
												alt="Send"
											/>
										</Slide>
									</div>
								</div>
							</div>
						</div>
						<img
							className="img-fluid mx-auto d-block send-money"
							src={SendMoney}
							alt="Send Money"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
import React from "react";
import Link from "../link";
import InstantMoneyTransfer from "../../assets/InstantMoneyTransfer.png";
import Send from "../../assets/send.svg";
import Request from "../../assets/request.svg";
import { Fade, Slide } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const MoneyRequest = ({ i18n }) => {
	return (
		<div className="MoneyRequest transfer-money sm-mt-30">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h2 className="oneAppTitle">
								{i18n.t("Instant_Money")}
								<span className="br-block"></span>
								{i18n.t("Transfer")}
							</h2>
							<p>{i18n.t("Money_Request_P")}</p>
							<Link link="/instant-money-transfer" className="Link">
								{i18n.t("Learn_more_about_Payments")} <img className="ArrowBtn" alt="Arrow" src={Arrow} />
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
							className="img-fluid mx-auto money-transfer sm-mt-30"
							src={InstantMoneyTransfer}
							alt="Instant Money Transfer"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(MoneyRequest);
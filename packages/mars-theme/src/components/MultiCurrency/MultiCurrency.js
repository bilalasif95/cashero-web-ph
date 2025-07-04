import React from "react";
import Link from "../link";
import Flags from "../../assets/Flags.png";
import usdflag from "../../assets/usdflag.png";
import gbpflag from "../../assets/gbpflag.png";
import eurflag from "../../assets/eurflag.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const MultiCurrency = ({ i18n }) => {
	return (
		<div className="MultiCurrency">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up">
							<h2 className="oneAppTitle">
								{i18n.t("Multi_Currency")}
								<span className="br-block"></span>
								{i18n.t("Savings_Account")}
							</h2>
							<p>{i18n.t("Multi_Currency_Savings_Account_MainP")} </p>
							<Link link="/ph/multi-currency-savings-account" className="Link sm-mb-30">
								{i18n.t("Learn_more_about_Accounts")}<img className="ArrowBtn" height="24px" width="24px" alt="Arrow" src={Arrow} />
							</Link>
						</Fade>
					</div>
				</div>
				<div className="col-md-6">
					<div className="flags">
						<div className="flags-containerBox">
							<div className="inner">
								<div className="flagBar">
									<Fade triggerOnce direction="right" duration={2000} delay={100}>
										<img
											className="d-block"
											height="100%"
											width="100%"
											src={usdflag}
											alt="american flag"
										/>
									</Fade>
								</div>
								<div className="flagBar">
									<Fade triggerOnce direction="left" duration={2000} delay={300}>
										<img
											className="d-block"
											height="100%"
											width="100%"
											src={gbpflag}
											alt="uk flag"
										/>
									</Fade>
								</div>
								<div className="flagBar">
									<Fade triggerOnce direction="right" duration={2000} delay={100}>
										<img
											className="d-block"
											height="100%"
											width="100%"
											src={eurflag}
											alt="europe flag"
										/>
									</Fade>
								</div>
							</div>
						</div>
					</div>
					<img
						className="img-fluid mx-auto main-flags"
						height="100%"
						width="100%"
						src={Flags}
						alt="Flags"
					/>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(MultiCurrency);
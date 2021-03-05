import React from "react";
import Link from "../link";
import Flags from "../../assets/Flags.svg";
import usdflag from "../../assets/usdflag.png";
import gbpflag from "../../assets/gbpflag.png";
import eurflag from "../../assets/eurflag.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function MultiCurrency() {
	return (
		<div className="MultiCurrency">
			<div className="row">
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up">
							<h1 className="oneAppTitle">
								Multi-Currency
								<span className="br-block"></span>
								Savings Account
							</h1>
							<p>Multiple currencies, one wallet. Convert your local currency into USD, GBP, or EUR to reduce currency fluctuation risk. </p>
							<Link link="/multi-currency-savings-account" className="Link">
								Learn more about Accounts<img className="ArrowBtn" alt="Arrow" src={Arrow} />
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
											src={usdflag}
											alt="american flag"
										/>
									</Fade>
								</div>
								<div className="flagBar">
									<Fade triggerOnce direction="left" duration={2000} delay={300}>
										<img
											className="d-block"
											src={gbpflag}
											alt="uk flag"
										/>
									</Fade>
								</div>
								<div className="flagBar">
									<Fade triggerOnce direction="right" duration={2000} delay={100}>
										<img
											className="d-block"
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
						src={Flags}
						alt="Flags"
					/>
				</div>
			</div>
		</div>
	);
}
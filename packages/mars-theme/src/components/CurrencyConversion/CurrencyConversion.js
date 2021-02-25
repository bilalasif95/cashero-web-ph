import React from "react";
import Link from "../link";
import currExchange from "../../assets/exchange.svg";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function CurrencyConversion() {
	return (
		<div className="CurrencyConversion">
			<div className="row flex-column-reverse flex-sm-row">
				<div className="col-md-6">
					<div className="curr-exchange">
						<div className="circle-container">
							<Zoom triggerOnce>
								<div className="bluecircle1" />
							</Zoom>
						</div>
						<img
							className="charity-mob"
							alt=""
							src={currExchange}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="CurrencyConversionCont">
						<div>
							<Fade triggerOnce direction="up">
								<h1 className="oneAppTitle">
									Online Currency
										<span className="br-block"></span>
										Exchange
								</h1>
								<p>
								Instantly exchange between USD, EUR, and GBP at rates so good that you’ll never exchange currency with a bank again. Beat that.
								</p>
								<Link link="/exchange-rates" className="Link sm-mb-30">
									Learn more about Exchange <img className="ArrowBtn" alt="" src={Arrow} />
								</Link>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}
import React from "react";
import Link from "../link";
import currExchange from "../../assets/exchange.svg";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const CurrencyConversion = ({ i18n }) => {
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
							height="100%"
							width="100%"
							alt="currency exchange"
							src={currExchange}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="CurrencyConversionCont">
						<div>
							<Fade triggerOnce direction="up">
								<h2 className="oneAppTitle noBreakOnlineCurrencyHeading">{i18n.t("Online_Currency_Exchange")}</h2>
								<p>{i18n.t("Online_Currency_Exchange_P")}</p>
								<Link link="/ph/online-currency-exchange" className="Link sm-mb-30">
									{i18n.t("Learn_more_about_Exchange")} <img className="ArrowBtn" height="24px" width="24px" alt="Arrow" src={Arrow} />
								</Link>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}

export default withTranslation()(CurrencyConversion);
import React from "react";
import Link from "../link";
import Locations from "../../assets/Locations.png";
import CMap from "../../assets/CMap.png";
import CasheroC from "../../assets/CasheroC.png";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const GlobalMoney = ({ i18n }) => {
	return (
		<div className="MoneyRequest sm-pt-0 sm-mt-30">
			<div className="row flex-column-reverse flex-sm-row">
				<div className="col-md-6">
					<div className="map-pic">
						<Zoom
							triggerOnce
							delay={300}
							duration={3000}
							className="animate-img"
						>
							<img
								className="img-fluid mx-auto d-block"
								alt="Locations"
								src={Locations}
							/>
						</Zoom>
						<img
							className="img-fluid mx-auto d-block c-map"
							alt="CMap"
							src={CMap}
						/>
						<img
							className="img-fluid mx-auto d-block cashero-c"
							alt="Cashero"
							src={CasheroC}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h3 className="oneAppTitle">
								{i18n.t("Transfer_Money")}
								<span className="br-block"></span>
								{i18n.t("Abroad")}
							</h3>
							<p>
								{i18n.t("Transfer_Money_Abroad_P")}
							</p>
							<Link link="/transfer-money-abroad" className="Link">
								{i18n.t("Learn_more_about_Transfers")}  <img className="ArrowBtn" alt="Arrow" src={Arrow} />
							</Link>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(GlobalMoney);
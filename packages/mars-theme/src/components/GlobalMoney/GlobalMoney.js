import React from "react";
import Link from "../link";
import Locations from "../../assets/Locations.png";
import CMap from "../../assets/CMap.png";
import CasheroC from "../../assets/CasheroC.png";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function GlobalMoney() {
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
								Transfer Money
									<span className="br-block"></span>
								Abroad
							</h3>
							<p>
								Send money back home. Stretch your hard-earned money even further with low exchange fees. Cashero helps you send money internationally with no hassle.
							</p>
							<Link link="/remittance" className="Link">
								Learn more about Transfers  <img className="ArrowBtn" alt="Arrow" src={Arrow} />
							</Link>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
}
import React from "react";
import Charity from "../../assets/myPlace.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.png";
import { animateScroll as scroll } from "react-scroll";
import { withTranslation } from "react-i18next";

const CharitySectionBR = ({ i18n }) => {
	return (
		<div className="Charity sm-pb-0">
			<div className="row flex-column-reverse flex-sm-row">
				<div className="col-md-6">
					<div className="charity">
						<img
							className="sm-center img-fluid mx-auto d-block"
							height="100%"
							width="430px"
							alt="Charity"
							src={Charity}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="CharityCont">
						<Fade triggerOnce direction="up">
							<h2 className="oneAppTitle">{i18n.t("Fee_Free_Donations")}</h2>
							<p>{i18n.t("Fee_Free_Donations_P")}</p>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(CharitySectionBR);
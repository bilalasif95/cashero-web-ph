import React from "react";
import Map from "../../assets/map.png";
import { withTranslation } from "react-i18next";

const PeoplesSection = ({ i18n }) => {
	return (
		<div className="peoples">
			<div className="PeoplesCont">
				<div className="container">
					<h3 className="PeoplesTitle mb-0">{i18n.t("Cashero_Works_Across_the_Globe")}</h3>
					<div className="row">
						<div className="col-md-10 offset-md-1">
							<div className="people-map">
								<img alt="map" className="img-fluid" height="100%" width="100%" src={Map} />
							</div>
						</div>
						<div className="col-md-2" />
					</div>
				</div>
			</div >
		</div >
	);
}

export default withTranslation()(PeoplesSection);
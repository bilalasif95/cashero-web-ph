import React from "react";
import Map from "../../assets/map.png";

export function PeoplesSection() {
	return (
		<div className="peoples">
			<div className="PeoplesCont">
				<div className="container">
					<h3 className="PeoplesTitle">Cashero Works Across the Globe</h3>
					<div className="row">
						<div className="col-md-2" />
						<div className="col-md-8">
							<div className="people-map">
								<img alt="map" className="img-fluid" src={Map} />
							</div>
						</div>
						<div className="col-md-2" />
					</div>
				</div>
			</div >
		</div >
	);
}
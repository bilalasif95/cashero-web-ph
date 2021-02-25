import React from "react";
import { Contact } from "../Contact/Contact";

export function ContactUs() {
	return (
		<div className="ContactUsBanner">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="ContactUsCont">
							<h1> Want to Get a Hold Of Us?  </h1>
							<p className="mb-0">Sign into the Cashero App on your mobile and simply send us <span className="br-block"></span> a message via our in-app chat support.</p>
						</div>
					</div>
				</div>
			</div>
			<Contact />
		</div>
	);
}
import React from "react";
import Chat from "./../../assets/Chat.svg";

export function Contact() {
	return (
		<div className="ContactSection">
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<div className="row">
							<div className="col-md-6 d-flex">
							</div>
							<div className="col-md-12 d-flex">
								<div className="ContactBox w-100">
									<img className="img-fluid" alt="" src={Chat} />
									<h1>In-App Chat</h1>
									<p>Monday—Sunday: &nbsp; 24 hours</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
import React from "react";
import Inbox from "../../assets/inbox.gif";

export function Thankyou() {
	return (
		<div className="container">
			<div className="Thankyou">
				<div className="row">
					<div className="col-md-12">
						<div className="ThankyouCont">
							<img className="img-fluid mx-auto d-block InboxImg" alt="Inbox" src={Inbox} />
							<h1>Thank you!</h1>
							<h3>Your email has been confirmed.</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
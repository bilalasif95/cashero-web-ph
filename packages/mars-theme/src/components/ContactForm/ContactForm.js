import React from "react";
import { Contact } from "../Contact/Contact";

export function ContactForm() {
	return (
		<div className="ContactFormBox">
			<div className="container">
				<div className="ContactForm">
					<h1> Contact Us  </h1>
					<div className="inputfieldbox">
						<input type="text" className="form-control" placeholder="Name" />
						<input type="text" className="form-control" placeholder="Email" />
					</div>
					<textarea className="form-control mt-4" placeholder="Message" rows="9" cols="50"></textarea>
					<button className="btn btn-default formbtn">Send Message</button>
				</div>
			</div>
		</div>
	);
}
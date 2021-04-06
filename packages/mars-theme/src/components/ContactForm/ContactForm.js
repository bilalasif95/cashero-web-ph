import React, { useState } from "react";
import { callApi } from "../../config/call-api";
import { EndPoints } from "../../config/config";

export function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");
	const onNameChange = (e) => {
		setName(e.target.value)
	}
	const onEmailChange = (e) => {
		setEmail(e.target.value)
	}
	const onMessageChange = (e) => {
		setMessage(e.target.value)
	}
	const sendMessage = () => {
		setLoading(true);
		setError("");
		setSuccess("");
		if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
			setLoading(false);
			setError("Invalid Email.")
		}
		else {
			callApi(EndPoints.contactUs, "post", "", {
				name: name,
				email: email,
				message: message,
			})
				.then((res) => {
					setSuccess(res.message);
					setTimeout(() => {
						setLoading(false);
						setName("");
						setEmail("");
						setError("");
						setSuccess("");
						setMessage("");
					}, 1500)
				})
				.catch((err) => {
					setLoading(false);
					setError(err.message);
				});
		}
	}
	return (
		<div className="ContactFormBox">
			<div className="container">
				<div className="ContactForm">
					<h1>Contact Us</h1>
					<div className="inputfieldbox">
						<input type="text" value={name} onChange={(e) => onNameChange(e)} className="form-control" placeholder="Name" />
						<input type="text" value={email} onChange={(e) => onEmailChange(e)} className="form-control" placeholder="Email" />
					</div>
					<textarea value={message} onChange={(e) => onMessageChange(e)} className="form-control mt-4" placeholder="Message" rows="9" cols="50"></textarea>
					{error && <label className="contactUsFormError">{error}</label>}
					{success && <label className="contactUsFormSuccess">{success}</label>}
					<button onClick={() => sendMessage()} disabled={loading || !name || !email || !message} className={(loading || !name || !email || !message) ? "btn btn-default formbtn disabled" : "btn btn-default formbtn"}>Send Message</button>
				</div>
			</div>
		</div>
	);
}
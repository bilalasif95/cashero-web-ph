import React, { useState, useRef } from "react";
import { callApi } from "../../config/call-api";
import { EndPoints, recaptchaSiteKep } from "../../config/config";
import ReCAPTCHA from "react-google-recaptcha";
import { withTranslation } from "react-i18next";

const ContactForm = ({ i18n }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");
	const [value, setValue] = useState("");
	const recaptcha = useRef(null);
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
					if (res.code === 1000) {
						setSuccess("We appreciate you contacting us. We will get back in touch with you soon! Have a great day!");
						setTimeout(() => {
							setLoading(false);
							setName("");
							setEmail("");
							setError("");
							setSuccess("");
							setMessage("");
							recaptcha.current.reset();
							// setValue("");
						}, 3000)
					} else {
						setError("Something went wrong.");
					}
				})
				.catch(() => {
					setLoading(false);
					setError("Something went wrong.");
				});
		}
	}
	const onCaptchaHandler = (value) => {
		setValue(value);
	};
	return (
		<div className="ContactFormBox">
			<div className="container">
				<div className="ContactForm">
					<h2>{i18n.t("Contact_Us_form")}</h2>
					<div className="inputfieldbox">
						<input type="text" value={name} onChange={(e) => onNameChange(e)} className="form-control" placeholder={i18n.t("Enter_Name")} />
						<input type="text" value={email} onChange={(e) => onEmailChange(e)} className="form-control" placeholder={i18n.t("Enter_Email")} />
					</div>
					<textarea value={message} onChange={(e) => onMessageChange(e)} className="form-control mt-4" placeholder={i18n.t("Enter_Message")} rows="9" cols="50"></textarea>
					{error && <label className="contactUsFormError">{error}</label>}
					{success && <label className="contactUsFormSuccess">{success}</label>}
					<div className="captcha-cont">
						<ReCAPTCHA
							ref={recaptcha}
							className="g-recaptcha"
							data-theme="light"
							sitekey={recaptchaSiteKep}
							onChange={onCaptchaHandler}
							height="140px"
							width="100%"
						/>
					</div>
					<button onClick={() => sendMessage()} disabled={loading || !name || !email || !message || !value} className={(loading || !name || !email || !message || !value) ? "btn btn-default formbtn disabled" : "btn btn-default formbtn"}>{i18n.t("Send_Message")}</button>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(ContactForm);
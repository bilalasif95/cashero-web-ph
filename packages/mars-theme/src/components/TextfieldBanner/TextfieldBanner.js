import React, { useState } from "react";
import TextField from "../../common/textFiled";
import { callApi } from "../../config/call-api";
import { EndPoints } from "../../config/config";
import ThanksModal from "../ThanksModal/ThanksModal";

export function TextfieldBanner() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [openSuccessModal, setSuccessModal] = useState(false);
	const onSubmit = () => {
		setLoading(true)
		callApi(EndPoints.preregistration, "post", "", {
			Phone: email,
		})
			.then(() => {
				setSuccessModal(true);
				setLoading(false);
				setEmail("");
			})
	};
	const thanksModalClose = () => {
		setSuccessModal(false);
	};
	return (
		<div>
			<div className="personalEmail">
				<TextField
					placeholder="Enter Email Address"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<div className="GetEarlyBtn">
					<button disabled={loading || !email || !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)} onClick={onSubmit} className="btn btn-default">Get Early Access</button>
				</div>
			</div>
			{openSuccessModal && (
				<ThanksModal
					open={openSuccessModal}
					handleClose={thanksModalClose}
				/>
			)}
		</div>
	);
}
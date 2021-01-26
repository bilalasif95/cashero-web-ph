import React, { useState } from "react";
import TextField from "../../common/textFiled";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { callApi } from "../../config/call-api";
import { EndPoints } from "../../config/config";
import ThanksModal from "../ThanksModal/ThanksModal";

export function TextfieldBanner(props) {
	const [email, setEmail] = useState("");
	// const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState(false);
	const [openSuccessModal, setSuccessModal] = useState(false);
	const onSubmit = () => {
		setLoading(true)
		// setError("");
		// if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
		//     setError("Email is incorrect.");
		//     setLoading(false);
		// }
		// else {
		callApi(EndPoints.preregistration, "post", "", {
			Phone: email,
		})
			.then(() => {
				setSuccessModal(true);
				setLoading(false);
				setEmail("");
			})
		// }
	}

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
			{/* {error && (
				<>
					{error.includes("Success") ? (
						<div style={{ width: "100%" }}>
							<p style={{ color: "green", textAlign: "center" }}>
								{error}
							</p>
						</div>
					) : (
							<div style={{ width: "100%" }}>
								<p className="emailError" style={{ textAlign: "left" }}>
									{error}
								</p>
							</div>
						)}
				</>
			)} */}
			{openSuccessModal && (
				<ThanksModal
					open={openSuccessModal}
					handleClose={thanksModalClose}
				/>
			)}
		</div>
	);
}
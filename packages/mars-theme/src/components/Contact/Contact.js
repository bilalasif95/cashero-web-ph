import React from "react";
import Chat from "../../assets/Chat.svg";
import { withTranslation } from "react-i18next";

const Contact = ({ i18n }) => {
	return (
		<div className="ContactSection">
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<div className="row">
							<div className="col-md-12 d-flex">
								<div className="ContactBox w-100">
									<img className="img-fluid" height="100px" width="100px" alt="Chat" src={Chat} />
									<h2>{i18n.t("In_App_Chat")}</h2>
									<p>{i18n.t("Monday_Sunday")} &nbsp; {i18n.t("hours")}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Contact);
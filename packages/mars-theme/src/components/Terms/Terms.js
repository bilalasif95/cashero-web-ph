import React from "react";
import Link from "../link";
import { websiteLink } from "../../config/config";
import { withTranslation } from "react-i18next";

const Terms = ({ i18n }) => {
	return (
		<div className="container">
			<div className="conditions-cont">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="terms_titles">
							<h1>{i18n.t("TERMS_AND_CONDITIONS")}</h1>
							<div className="custom-border"></div>
							<p>{i18n.t("TERMS_P1")} <a href={websiteLink} target="_blank" rel="noopener noreferrer">www.cashero.com</a> {i18n.t("TERMS_P1_B")}</p>
							<p>{i18n.t("TERMS_P2")}</p>
							<p>{i18n.t("TERMS_P3")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("DESCRIPTION")}</h3>
							<p>{i18n.t("TERMS_DESCRIPTION")}</p>
							<p>{i18n.t("TERMS_DESCRIPTION_P1")}</p>
							<p>{i18n.t("TERMS_DESCRIPTION_P2")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("INTELLECTUAL")}</h3>
							<p>{i18n.t("INTELLECTUAL_P1")}</p>
							<p>{i18n.t("INTELLECTUAL_P2")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("USER_REPRESENTATIONS")}</h3>
							<p>{i18n.t("REPRESENTATIONS_P1")} </p>
							<p>1) {i18n.t("REPRESENTATIONS_P2")} </p>
							<p>2) {i18n.t("REPRESENTATIONS_P3")}</p>
							<p>3) {i18n.t("REPRESENTATIONS_P4")} </p>
							<p>4) {i18n.t("REPRESENTATIONS_P5")}</p>
							<p>5) {i18n.t("REPRESENTATIONS_P6")} </p>
							<p>6) {i18n.t("REPRESENTATIONS_P7")} </p>
							<p>7) {i18n.t("REPRESENTATIONS_P8")} </p>
							<p>8) {i18n.t("REPRESENTATIONS_P9")} </p>
							<p>9) {i18n.t("REPRESENTATIONS_P10")}</p>
							<br />
							<p>{i18n.t("REPRESENTATIONS_P11")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("USER_CONTENT")}</h3>
							<p>{i18n.t("TERMS_USER_CONTENT_P1")}</p>
							<p>{i18n.t("TERMS_USER_CONTENT_P2")}</p>
							<p>{i18n.t("TERMS_USER_CONTENT_P3")}</p>
							<p>{i18n.t("TERMS_USER_CONTENT_P4")}</p>
							<p>{i18n.t("TERMS_USER_CONTENT_P5")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("PROHIBITED")}</h3>
							<p>{i18n.t("TERMS_PROHIBITED_P1")}</p>
							<p>{i18n.t("PROHIBITED_T2")}</p>
							<p>1) {i18n.t("PROHIBITED_P1")}</p>
							<p>2) {i18n.t("PROHIBITED_P2")}</p>
							<p>3) {i18n.t("TERMS_PROHIBITED_P2")}</p>
							<p>4) {i18n.t("TERMS_PROHIBITED_P3")}</p>
							<p>5) {i18n.t("PROHIBITED_P5")}</p>
							<p>6) {i18n.t("PROHIBITED_P6")}</p>
							<p>7) {i18n.t("PROHIBITED_P5")}</p>
							<p>8) {i18n.t("TERMS_PROHIBITED_P4")} </p>
							<p>9) {i18n.t("PROHIBITED_P9")}</p>
							<p>10) {i18n.t("PROHIBITED_P10")}</p>
							<p>11) {i18n.t("PROHIBITED_P11")}</p>
							<p>12) {i18n.t("PROHIBITED_P12")}</p>
							<p>13) {i18n.t("PROHIBITED_P13")}</p>
							<p>14) {i18n.t("PROHIBITED_P14")}</p>
							<p>15) {i18n.t("PROHIBITED_P15")}</p>
							<p>16) {i18n.t("TERMS_PROHIBITED_P5")}</p>
							<p>17) {i18n.t("TERMS_PROHIBITED_P6")}</p>
							<p>18) {i18n.t("TERMS_PROHIBITED_P7")}</p>
							<p>19) {i18n.t("TERMS_PROHIBITED_P8")}</p>
							<p>20) {i18n.t("TERMS_PROHIBITED_P9")}</p>
							<p>21) {i18n.t("TERMS_PROHIBITED_P10")}</p>
							<p>22) {i18n.t("TERMS_PROHIBITED_P11")}</p>
							<p>23) {i18n.t("TERMS_PROHIBITED_P12")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("CONTRIBUTION")}</h3>
							<p>{i18n.t("TERMS_CONTRIBUTION_P1")}</p>
							<p>{i18n.t("TERMS_CONTRIBUTION_P2")}</p>
							<p>{i18n.t("TERMS_CONTRIBUTION_P3")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("THIRD_PARTY")}</h3>
							<p>{i18n.t("THIRD_PARTY_P1")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("Site_Management")}</h3>
							<p>{i18n.t("APP_MANAGEMENT_P1")}</p>
							<p>1) {i18n.t("APP_MANAGEMENT_P2")}</p>
							<p>2) {i18n.t("APP_MANAGEMENT_P3")}</p>
							<p>3) {i18n.t("APP_MANAGEMENT_P4")}</p>
							<p>4) {i18n.t("APP_MANAGEMENT_P5")}</p>
							<p>5) {i18n.t("TERMS_SITE_MANAGEMENT_P1")}</p>
						</div>
						<div className="terms_titles">
							<h3 className="text-uppercase">{i18n.t("PRIVACY_POLICY")}</h3>
							<p>{i18n.t("PRIVACY_POLICY_SHORT")} <Link link="/app-privacy-policy">{i18n.t("PRIVACY_POLICY")}</Link>.</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("TERMINATION")}</h3>
							<p>{i18n.t("TERMS_TERMINATION_P1")} </p>
						</div>
						<div className="terms_titles">
							<h3><h3>{i18n.t("MODIFICATIONS")}</h3></h3>
							<p>{i18n.t("MODIFICATIONS_P1")} </p>
							<p>{i18n.t("MODIFICATIONS_P2")} </p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("FORCE_MAJEURE")}</h3>
							<p>{i18n.t("FORCE_MAJEURE_P1")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("INDEMNIFICATION")}</h3>
							<p>{i18n.t("INDEMNIFICATION_P1")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("DISPUTES")}</h3>
							<p>{i18n.t("TERMS_DISPUTES_P1")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("CORRECTIONS")}</h3>
							<p>{i18n.t("TERMS_CORRECTIONS_P1")}</p>
						</div>
						<div className="terms_titles">
							<h3>{i18n.t("DISCLAIMER")}</h3>
							<p>{i18n.t("DISCLAIMER_P1")} </p>
						</div>
						<div className="terms_titles">
							<h3 className="text-uppercase">{i18n.t("Contact_Us")}</h3>
							<p>{i18n.t("TERMS_CONTACT_US")}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(Terms);
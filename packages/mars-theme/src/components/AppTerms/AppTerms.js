import React from "react";
import Link from "../link";
import { Head } from "frontity";
import { withTranslation } from "react-i18next";

const AppTerms = ({ i18n }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/app-terms/" />
      </Head>
      <div className="container">
        <div className="conditions-cont">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="terms_titles">
                <h1>{i18n.t("TERMS_AND_CONDITIONS")}</h1>
                <div className="custom-border"></div>
                <p>{i18n.t("TERMS_AND_CONDITIONS_P1")}</p>
                <p>{i18n.t("TERMS_AND_CONDITIONS_P2")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("ELIGIBILITY")}</h3>
                <p>{i18n.t("ELIGIBILITY_P1")}</p>
                <p>{i18n.t("ELIGIBILITY_P2")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("DESCRIPTION")} </h3>
                <p>{i18n.t("DESCRIPTION_P1")}</p>
                <p>{i18n.t("DESCRIPTION_P2")}</p>
                <p>{i18n.t("DESCRIPTION_P3")}</p>
                <p>{i18n.t("DESCRIPTION_P4")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("CONSENT")}</h3>
                <p>{i18n.t("CONSENT_P1")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("INTELLECTUAL")}</h3>
                <p>{i18n.t("INTELLECTUAL_P1")}</p>
                <p>{i18n.t("INTELLECTUAL_P2")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("REPRESENTATIONS")}</h3>
                <p>{i18n.t("REPRESENTATIONS_P1")}</p>
                <p>1) {i18n.t("REPRESENTATIONS_P2")}</p>
                <p>2) {i18n.t("REPRESENTATIONS_P3")}</p>
                <p>3) {i18n.t("REPRESENTATIONS_P4")}</p>
                <p>4) {i18n.t("REPRESENTATIONS_P5")}</p>
                <p>5) {i18n.t("REPRESENTATIONS_P6")}</p>
                <p>6) {i18n.t("REPRESENTATIONS_P7")}</p>
                <p>7) {i18n.t("REPRESENTATIONS_P8")}</p>
                <p>8) {i18n.t("REPRESENTATIONS_P9")}</p>
                <p>9) {i18n.t("REPRESENTATIONS_P10")}</p>
                <br />
                <p>{i18n.t("REPRESENTATIONS_P11")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("USER REGISTRATION")}</h3>
                <p>{i18n.t("USER_REGISTRATION_P1")}</p>
                <p>{i18n.t("USER_REGISTRATION_P2")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("USER_CONTENT")}</h3>
                <p>{i18n.t("USER_CONTENT_P1")}</p>
                <p>{i18n.t("USER_CONTENT_P2")}</p>
                <p>{i18n.t("USER_CONTENT_P3")}</p>
                <p>{i18n.t("USER_CONTENT_P4")}</p>
                <p>{i18n.t("USER_CONTENT_P5")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("PROHIBITED")}</h3>
                <p>{i18n.t("PROHIBITED_T1")}</p>
                <p>{i18n.t("PROHIBITED_T2")}</p>
                <p>1) {i18n.t("PROHIBITED_P1")}</p>
                <p>2) {i18n.t("PROHIBITED_P2")}</p>
                <p>3) {i18n.t("PROHIBITED_P3")}</p>
                <p>4) {i18n.t("PROHIBITED_P4")}</p>
                <p>5) {i18n.t("PROHIBITED_P5")}</p>
                <p>6) {i18n.t("PROHIBITED_P6")}</p>
                <p>7) {i18n.t("PROHIBITED_P7")}</p>
                <p>8) {i18n.t("PROHIBITED_P8")}</p>
                <p>9) {i18n.t("PROHIBITED_P9")}</p>
                <p>10)	{i18n.t("PROHIBITED_P10")}</p>
                <p>11)	{i18n.t("PROHIBITED_P11")}</p>
                <p>12)	{i18n.t("PROHIBITED_P12")}</p>
                <p>13)	{i18n.t("PROHIBITED_P13")}</p>
                <p>14)	{i18n.t("PROHIBITED_P14")}</p>
                <p>15)	{i18n.t("PROHIBITED_P15")}</p>
                <p>16)	{i18n.t("PROHIBITED_P16")}</p>
                <p>17)	{i18n.t("PROHIBITED_P17")}</p>
                <p>18)	{i18n.t("PROHIBITED_P18")}</p>
                <p>19)	{i18n.t("PROHIBITED_P19")}</p>
                <p>20)	{i18n.t("PROHIBITED_P20")}</p>
                <p>21)	{i18n.t("PROHIBITED_P21")}</p>
                <p>22)	{i18n.t("PROHIBITED_P22")}</p>
                <p>23)	{i18n.t("PROHIBITED_P23")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("ADVICE")}</h3>
                <p>{i18n.t("ADVICE_P1")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("CONTRIBUTION")}</h3>
                <p>{i18n.t("CONTRIBUTION_P1")}</p>
                <p>{i18n.t("CONTRIBUTION_P2")}</p>
                <p>{i18n.t("CONTRIBUTION_P3")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("THIRD_PARTY")}</h3>
                <p>{i18n.t("THIRD_PARTY_P1")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("APP_MANAGEMENT")}</h3>
                <p> {i18n.t("APP_MANAGEMENT_P1")}</p>
                <p>1) {i18n.t("APP_MANAGEMENT_P2")}	</p>
                <p>2) {i18n.t("APP_MANAGEMENT_P3")}	</p>
                <p>3) {i18n.t("APP_MANAGEMENT_P4")}	</p>
                <p>4) {i18n.t("APP_MANAGEMENT_P5")}	</p>
                <p>5) {i18n.t("APP_MANAGEMENT_P6")}	</p>
              </div>
              <div className="terms_titles">
                <h3 className="text-uppercase">{i18n.t("PRIVACY_POLICY")}</h3>
                <p>{i18n.t("PRIVACY_POLICY_SHORT")} <Link link="/app-privacy-policy">{i18n.t("PRIVACY_POLICY")}</Link>.</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("TERMINATION")}</h3>
                <p>{i18n.t("TERMINATION_P1")}</p>
                <p>{i18n.t("TERMINATION_P2")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("MODIFICATIONS")}</h3>
                <p>{i18n.t("MODIFICATIONS_P1")}</p>
                <p>{i18n.t("MODIFICATIONS_P2")}</p>
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
                <h3>{i18n.t("ASSUMPTION")} </h3>
                <p>{i18n.t("ASSUMPTION_P1")} <b> {i18n.t("ASSUMPTION_P1_B")} </b> </p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("DISPUTES")}</h3>
                <p>{i18n.t("DISPUTES_P1")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("CORRECTIONS")}</h3>
                <p>{i18n.t("CORRECTIONS_P1")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("DISCLAIMER")}</h3>
                <p>{i18n.t("DISCLAIMER_P1")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("GOLDEN_TICKET")}</h3>
                <ul className="condition-list">
                  <li>{i18n.t("GOLDEN_TICKET_li1")}</li>
                  <li>{i18n.t("GOLDEN_TICKET_li2")}</li>
                  <li>{i18n.t("GOLDEN_TICKET_li3")}</li>
                  <li>{i18n.t("GOLDEN_TICKET_li4")}</li>
                  <li>{i18n.t("GOLDEN_TICKET_li5")}</li>
                  <li>{i18n.t("GOLDEN_TICKET_li6")}</li>
                  <li>{i18n.t("GOLDEN_TICKET_li7")}</li>
                  <li>{i18n.t("GOLDEN_TICKET_li8")}</li>
                  <li><a href="https://www.gamblingcommission.gov.uk/for-the-public/Safer-gambling/Consumer-guides/Running-prize-competitions-and-free-draws.aspx" target="_blank" rel="noopener noreferrer">https://www.gamblingcommission.gov.uk/for-the-public/Safer-gambling/Consumer-guides/Running-prize-competitions-and-free-draws.aspx</a></li>
                </ul>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Contact_Us")}</h3>
                <p>{i18n.t("CONTACT_US_P1")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(AppTerms)

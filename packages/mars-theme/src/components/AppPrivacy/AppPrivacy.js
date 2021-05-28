import React from "react";
import { Head } from "frontity";
import { withTranslation } from "react-i18next";

const AppPrivacy = ({ i18n }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.cashero.com/app-privacy-policy/"
        />
      </Head>
      <div className="container">
        <div className="conditions-cont">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="terms_titles">
                <h1>{i18n.t("PRIVACY_POLICY")}</h1>
                <div className="custom-border"></div>
                <h3>{i18n.t("GENERAL")}</h3>
                <p>{i18n.t("GENERAL_P1")}</p>
                <p>{i18n.t("GENERAL_P2")}</p>
                <ul className="condition-list">
                  <li>{i18n.t("GENERAL_li1")}</li>
                  <li>{i18n.t("GENERAL_li2")}</li>
                  <li>{i18n.t("GENERAL_li3")}</li>
                  <li>{i18n.t("GENERAL_li4")}</li>
                  <li>{i18n.t("GENERAL_li5")}</li>
                  <li>{i18n.t("GENERAL_li6")}</li>
                  <li>{i18n.t("GENERAL_li7")}</li>
                </ul>
                <p>{i18n.t("GENERAL_P3")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("COLLECTION_AND_USE_OF_PERSONAL_INFORMATION")}</h3>
                <h3>{i18n.t("PERSONAL_INFORMATION_WE_COLLECT")}</h3>
                <p>{i18n.t("GENERAL_P4")}</p>
                <ul className="condition-list">
                  <li>{i18n.t("PERSONAL_li1")}</li>
                  <li>{i18n.t("PERSONAL_li2")}</li>
                  <li>{i18n.t("PERSONAL_li3")}</li>
                  <li>{i18n.t("PERSONAL_li4")}</li>
                  <li>{i18n.t("PERSONAL_li5")}</li>
                  <li>{i18n.t("PERSONAL_li6")}</li>
                  <li>{i18n.t("PERSONAL_li7_APP")}</li>
                </ul>
                <p>{i18n.t("GENERAL_P5")}</p>
                <ul className="condition-list">
                  <li>{i18n.t("INFORMATION_li1_APP")}</li>
                  <li>{i18n.t("APP_INFORMATION_li2")}</li>
                  <li>{i18n.t("INFORMATION_li3")}</li>
                  <li>{i18n.t("INFORMATION_li4")}</li>
                </ul>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("USE_OF_COOKIES_AND_SIMILAR_TECHNOLOGY")}</h3>
                <p>{i18n.t("COOKIES_P1_APP")}</p>
                <p>{i18n.t("COOKIES_P2")}</p>
                <p>{i18n.t("COOKIES_P3")}</p>
                <p>{i18n.t("COOKIES_P4")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("HOW_WE_USE_YOUR_PERSONAL_INFORMATION")}</h3>
                <p>{i18n.t("GENERAL_P6")}</p>
                <ul className="condition-list">
                  <li>{i18n.t("PERSONAL_INFORMATION_li1")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P6")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P7")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P8")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P9")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P10")}</li>
                  <li>{i18n.t("PERSONAL_INFORMATION_li6")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P12")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P13")}</li>
                  <li>{i18n.t("PERSONAL_INFORMATION_li9")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P15")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P16")}</li>
                  <li>{i18n.t("PERSONAL_INFORMATION_li12")}</li>
                </ul>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("PRIVACY_POLICY_P18")}</h3>
                <p>{i18n.t("PRIVACY_POLICY_P19")} </p>
                <h3>{i18n.t("PRIVACY_POLICY_P20")}</h3>
                <ul className="condition-list">
                  <li>{i18n.t("DISCLOSING_li1")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P22")} </li>
                  <li>{i18n.t("DESCRIPTION_P4")} </li>
                </ul>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("LEGAL_AUTHORITIES")}</h3>
                <p>{i18n.t("LEGAL_AUTHORITIES_P1")}</p>
                <ul className="condition-list">
                  <li>{i18n.t("LEGAL_AUTHORITIES_li1")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P26")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P27")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P28")}</li>
                </ul>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("PRIVACY_POLICY_P29")}</h3>
                <p>{i18n.t("PRIVACY_POLICY_P30")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("PRIVACY_POLICY_P31")}</h3>
                <p>{i18n.t("PRIVACY_POLICY_P32")}</p>
                <ul className="condition-list">
                  <li>{i18n.t("CIRCUMSTANCES_li1")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P34")}</li>
                  <li>{i18n.t("PRIVACY_POLICY_P35")}</li>
                </ul>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("EXTERNAL_WEBSITES")}</h3>
                <p>{i18n.t("EXTERNAL_WEBSITES_P1_APP")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("RIGHTS_REGARDING")}</h3>
                <p>{i18n.t("RIGHTS_REGARDING_P1")}</p>
                <p>{i18n.t("RIGHTS_REGARDING_P2")}</p>
                <ul className="condition-list">
                  <li>{i18n.t("RIGHTS_REGARDING_li1")}</li>
                  <li>{i18n.t("RIGHTS_REGARDING_li2")}</li>
                  <li>{i18n.t("RIGHTS_REGARDING_li3")}</li>
                  <li>{i18n.t("RIGHTS_REGARDING_li4")}</li>
                  <li>{i18n.t("RIGHTS_REGARDING_li5")}</li>
                  <li>{i18n.t("RIGHTS_REGARDING_li6")}</li>
                </ul>
                <p>{i18n.t("RIGHTS_REGARDING_P3")}</p>
                <p>{i18n.t("RIGHTS_REGARDING_P4")}</p>
                <p>{i18n.t("RIGHTS_REGARDING_P5")}</p>
                <p>{i18n.t("RIGHTS_REGARDING_P6")}</p>
                <p>{i18n.t("RIGHTS_REGARDING_P7")}</p>
                <p>{i18n.t("RIGHTS_REGARDING_P8_APP")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("PRIVACY_SECURITY")}</h3>
                <p>{i18n.t("PRIVACY_SECURITY_P1")}</p>
                <p>{i18n.t("PRIVACY_SECURITY_P2")}</p>
                <p>{i18n.t("PRIVACY_SECURITY_P3")}</p>
                <p>{i18n.t("PRIVACY_SECURITY_P4")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("RETENTION")}</h3>
                <p>{i18n.t("RETENTION_P1")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("RETENTION_UPDATES")}</h3>
                <p>{i18n.t("RETENTION_UPDATES_PRIVACY")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(AppPrivacy)

import React from "react";
import Link from "../link";
import { Head } from "frontity";
import { withTranslation } from "react-i18next";

const Countries = ({ i18n }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/countries/" />
        {i18n.language === "brazilian" ?
          <>
            <link rel="alternate" hreflang="pt-BR" href="https://www.cashero.com/countries/" />
            <html lang="pt-BR" />
          </>
          :
          <>
            <link rel="alternate" hreflang="en-US" href="https://www.cashero.com/countries/" />
            <html lang="en" />
          </>
        }
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/countries/" />
      </Head>
      <div className="container">
        <div className="conditions-cont">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="terms_titles">
                <h1>{i18n.t("Countries")}</h1>
                <div className="custom-border"></div>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Where_we_operate")}</h3>
                <p>{i18n.t("Where_we_operate_P")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Personal_Freelancer")} </h3>
                <p>{i18n.t("Personal_Freelancer_P")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Business")}</h3>
                <p>{i18n.t("Business_Heading_P")}</p>
              </div>
              <div className="terms_titles">
                <p>{i18n.t("Countries_Last_P")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(Countries)

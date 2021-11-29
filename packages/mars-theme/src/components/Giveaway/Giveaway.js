import React from "react";
import { Head } from "frontity";
import { withTranslation } from "react-i18next";

const Giveaway = ({ i18n }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/ph/giveaway/" />
        <link rel="alternate" hreflang="tl-PH" href="https://www.cashero.com/ph/giveaway/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/ph/giveaway/" />
      </Head>
      <div className="container">
        <div className="conditions-cont">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="terms_titles">
                <h1>{i18n.t("Giveaway_h1")}</h1>
                <div className="custom-border"></div>
                <p>{i18n.t("Giveaway_h1_P1")} <a href="https://www.gamblingcommission.gov.uk/for-the-public/Safer-gambling/Consumer-guides/Running-prize-competitions-and-free-draws.aspx" target="_blank" rel="noopener noreferrer">{i18n.t("Giveaway_h1_P2")}</a>. {i18n.t("Giveaway_h1_P3")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Giveaway_h3_1")}</h3>
                <p>{i18n.t("Giveaway_h3_1_P")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Giveaway_h3_2")}</h3>
                <p>{i18n.t("Giveaway_h3_2_P")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Giveaway_h3_3")}</h3>
                <p>{i18n.t("Giveaway_h3_3_P1")}</p>
                <p>{i18n.t("Giveaway_h3_3_P2")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Giveaway_h3_4")}</h3>
                <p>{i18n.t("Giveaway_h3_4_P")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Giveaway_h3_5")}</h3>
                <p>{i18n.t("Giveaway_h3_5_P")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Giveaway_h3_6")}</h3>
                <p>{i18n.t("Giveaway_h3_6_P")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Giveaway_h3_7")}</h3>
                <p>{i18n.t("Giveaway_h3_7_P")}</p>
              </div>
              <div className="terms_titles">
                <h3>{i18n.t("Giveaway_h3_8")}</h3>
                <p>{i18n.t("Giveaway_h3_8_P")}</p>
                <ul className="condition-list">
                  <li>{i18n.t("Giveaway_li1")}</li>
                  <li>{i18n.t("GOLDEN_TICKET_li5")}</li>
                  <li>{i18n.t("GOLDEN_TICKET_li6")}</li>
                  <li>{i18n.t("Giveaway_li4")}</li>
                  <li>{i18n.t("Giveaway_li5_1")} <a href="https://www.gamblingcommission.gov.uk/for-the-public/Safer-gambling/Consumer-guides/Running-prize-competitions-and-free-draws.aspx" target="_blank" rel="noopener noreferrer">{i18n.t("Giveaway_li5_2")}</a> {i18n.t("Giveaway_li5_3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(Giveaway);

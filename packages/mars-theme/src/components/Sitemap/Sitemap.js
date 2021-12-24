import React from "react";
import Link from "../link";
import { Head } from "frontity";
import { withTranslation } from "react-i18next";

const Sitemap = ({ i18n }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/ph/sitemap/" />
        <link rel="alternate" hreflang="tl-PH" href="https://www.cashero.com/ph/sitemap/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/ph/sitemap/" />
      </Head>
      <div className="container">
        <div className="banner pt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="bannerCont">
                <h1 className="sitemap-h2">{i18n.t("Sitemap")}</h1>
                <h6 className="sitemap-head">{i18n.t("Personal")}</h6>
                <ul className="sitemap-list">
                  <li><Link link="/ph/high-yield-savings-account">{i18n.t("High_Yield_Savings_Account")}</Link></li>
                  <li><Link link="/ph/multi-currency-savings-account">{i18n.t("Multi_Currency_Savings_Account")}</Link></li>
                  <li><Link link="/ph/online-currency-exchange">{i18n.t("Online_Currency_Exchange")}</Link></li>
                  <li><Link link="/ph/instant-money-transfer">{i18n.t("Instant_Money_Transfer")}</Link></li>
                  <li><Link link="/ph/transfer-money-abroad">{i18n.t("Transfer_Money_Abroad")}</Link></li>
                </ul>
                <h6 className="sitemap-head">{i18n.t("Business")}</h6>
                <ul className="sitemap-list">
                  <li><Link link="/ph/high-yield-savings-account">{i18n.t("High_Yield_Savings_Account")}</Link></li>
                  <li><Link link="/ph/multi-currency-savings-account">{i18n.t("Multi_Currency_Savings_Account")}</Link></li>
                  <li><Link link="/ph/online-currency-exchange">{i18n.t("Online_Currency_Exchange")}</Link></li>
                  <li><Link link="/ph/instant-money-transfer">{i18n.t("Instant_Money_Transfer")}</Link></li>
                  <li><Link link="/ph/transfer-money-abroad">{i18n.t("Transfer_Money_Abroad")}</Link></li>
                </ul>
                <h6 className="sitemap-head">{i18n.t("Donations")}</h6>
                <ul className="sitemap-list">
                  <li><Link link="/ph/donation">{i18n.t("Donate")}</Link></li>
                  <li><Link link="/ph/become-listed-charity">{i18n.t("Become_a_Listed_Charity")}</Link></li>
                </ul>
                <h6 className="sitemap-head"><Link link="/ph/company">{i18n.t("Company")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/ph/contact-us">{i18n.t("Help")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/ph/terms">{i18n.t("Terms")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/ph/giveaway">{i18n.t("Giveaway")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/ph/privacy-policy">{i18n.t("Privacy")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/ph/blog">{i18n.t("Blog")}</Link></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(Sitemap);

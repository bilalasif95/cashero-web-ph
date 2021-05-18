import React from "react";
import Link from "../link";
import { Head } from "frontity";
import { withTranslation } from "react-i18next";

const Sitemap = ({ i18n }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/sitemap/" />
      </Head>
      <div className="container">
        <div className="banner">
          <div className="row">
            <div className="col-md-12">
              <div className="bannerCont">
                <h2 className="sitemap-h2">{i18n.t("Sitemap")}</h2>
                <h6 className="sitemap-head">{i18n.t("Personal")}</h6>
                <ul className="sitemap-list">
                  <li><Link link="/high-yield-savings-account">{i18n.t("High_Yield_Savings_Account_Menu")}</Link></li>
                  <li><Link link="/multi-currency-savings-account">{i18n.t("Multi_Currency_Savings_Account")}</Link></li>
                  <li><Link link="/online-currency-exchange">{i18n.t("Online_Currency_Exchange")}</Link></li>
                  <li><Link link="/instant-money-transfer">{i18n.t("Instant_Money_Transfer")}</Link></li>
                  <li><Link link="/transfer-money-abroad">{i18n.t("Transfer_Money_Abroad")}</Link></li>
                </ul>
                <h6 className="sitemap-head">{i18n.t("Business")}</h6>
                <ul className="sitemap-list">
                  <li><Link link="/high-yield-savings-account">{i18n.t("High_Yield_Savings_Account_Menu")}</Link></li>
                  <li><Link link="/multi-currency-savings-account">{i18n.t("Multi_Currency_Savings_Account")}</Link></li>
                  <li><Link link="/online-currency-exchange">{i18n.t("Online_Currency_Exchange")}</Link></li>
                  <li><Link link="/instant-money-transfer">{i18n.t("Instant_Money_Transfer")}</Link></li>
                  <li><Link link="/transfer-money-abroad">{i18n.t("Transfer_Money_Abroad")}</Link></li>
                </ul>
                <h6 className="sitemap-head">{i18n.t("Donations")}</h6>
                <ul className="sitemap-list">
                  <li><Link link="/donation">{i18n.t("Donate")}</Link></li>
                  <li><Link link="/become-listed-charity">{i18n.t("Become_a_Listed_Charity")}</Link></li>
                </ul>
                <h6 className="sitemap-head"><Link link="/company">{i18n.t("Company")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/contact-us">{i18n.t("Help")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/terms">{i18n.t("Terms")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/giveaway">{i18n.t("Giveaway")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/privacy-policy">{i18n.t("Privacy")}</Link></h6>
                <h6 className="sitemap-head"><Link link="/blog">{i18n.t("Blog")}</Link></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(Sitemap);

import React from "react";
import { Head, connect } from "frontity";
import TextfieldBanner from "../TextfieldBanner/TextfieldBanner";
import CasheroIntro from "../../assets/cashero-intro.gif";
import Check from "../../assets/check-mark.svg";
import GlobalMoney from "../GlobalMoney/GlobalMoney";
import HighInterest from "../HighInterest/HighInterest";
import CurrencyConversion from "../CurrencyConversion/CurrencyConversion";
import MoneyRequest from "../MoneyRequest/MoneyRequest";
import Enhance from "../Enhance/Enhance";
import CharitySection from "../CharitySection/CharitySection";
import QuestionTabs from "../Tabs/Tabs";
import PeoplesSection from "../PeoplesSection/PeoplesSection";
import SignupSection from "../signupSection/signupSection";
import GetStarted from "../GetStarted/GetStarted";
import Clock from "../../assets/clock.svg";
import MultiCurrency from "../MultiCurrency/MultiCurrency";
import { Fade } from "react-awesome-reveal";
import Link from "../link";
import { structuredData } from "../../config/SEO/Homepage/structuredData";
import { withTranslation } from "react-i18next";
import { websiteLink } from "../../config/config";

const HomePage = ({ state, i18n }) => {
  return (
    <>
      <Head>
        {i18n.language === "brazilian" ?
          <>
            <link rel="alternate" hreflang="pt-BR" href={websiteLink} />
            <html lang="pt-BR" />
          </>
          :
          <>
            <link rel="alternate" hreflang="en-US" href={websiteLink} />
            <html lang="en" />
          </>
        }
        <link rel="alternate" hreflang="x-default" href={websiteLink} />
        <script className="structured-data-list" type="application/ld+json">
          {structuredData(state)}
        </script>
      </Head>
      <div className="container">
        <div className="banner">
          <div className="row">
            <div className="col-md-8">
              <div className="bannerCont">
                <Fade triggerOnce direction="up" delay={100}>
                  <h1 className="bannerTitle">
                    {i18n.t("Your_Moneys_Superhero")} <span className="br-block-with-no-display"></span> {i18n.t("is_Almost_Here")}
                  </h1>
                </Fade>
                <Fade triggerOnce direction="up" delay={500}>
                  <div className="Banner-list">
                    <h2 className="bannerText slide-up">
                      <img src={Check} alt="check" />
                      {i18n.t("Your_Moneys_Superhero_H2_1")}
                    </h2>
                    <h2 className="bannerText slide-up">
                      <img src={Check} alt="check" />
                      {i18n.t("Your_Moneys_Superhero_H2_2")}
                    </h2>
                    <h2 className="bannerText slide-up">
                      <img src={Check} alt="check" />
                      {i18n.t("Your_Moneys_Superhero_H2_3")}
                    </h2>
                  </div>
                </Fade>
                <TextfieldBanner />
                <ul className="HomepagelList list-unstyled">
                  <li>
                    <img src={Clock} alt="Clock" />
                    {i18n.t("Open_an_account_in_minutes")}
                  </li>
                </ul>
                <p className="draw-text">
                  {i18n.t("Open_an_account_in_minutes_P")} <span className="br-block-with-no-display"></span>
                  <Link className="giveaway-link" link="/giveaway">{i18n.t("TERMS_AND_CONDITIONS")}</Link> {i18n.t("apply")}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bannerImg">
                <img className="img-fluid" height="100%" width="100%" alt="Banner" src={CasheroIntro} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HighInterest />
      <div className="container">
        <MoneyRequest />
        <GlobalMoney />
        <MultiCurrency />
        <CurrencyConversion />
      </div>
      <Enhance />
      <div className="container">
        <CharitySection />
        <GetStarted />
      </div>
      <PeoplesSection />
      <div className="container">
        <QuestionTabs activeTab={0} />
      </div>
      <SignupSection />
    </>
  );
}

export default connect(withTranslation()(HomePage));
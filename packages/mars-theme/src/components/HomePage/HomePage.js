import React from "react";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";
import Banner from "../../assets/photoshop.gif";
import Check from "../../assets/check-mark.svg";
import GlobalMoney from "../GlobalMoney/GlobalMoney";
import HighInterest from "../HighInterest/HighInterest";
import CurrencyConversion from "../CurrencyConversion/CurrencyConversion";
import MoneyRequest from "../MoneyRequest/MoneyRequest";
import Enhance from "../Enhance/Enhance";
import CharitySection from "../CharitySection/CharitySection";
import QuestionTabs from "../Tabs/Tabs";
import PeoplesSection from "../PeoplesSection/PeoplesSection";
import { SignupSection } from "../signupSection/signupSection";
import GetStarted from "../GetStarted/GetStarted";
import Clock from "../../assets/clock.svg";
import MultiCurrency from "../MultiCurrency/MultiCurrency";
import { Fade } from "react-awesome-reveal";
import Link from "../link";
import { withTranslation } from "react-i18next";

const HomePage = ({ i18n }) => {
  return (
    <>
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
                <img className="img-fluid " alt="Banner" src={Banner} />
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

export default withTranslation()(HomePage);
import React from "react";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner"
import Banner from "../../assets/photoshop.gif";
import Check from "../../assets/check-mark.svg";
import { GlobalMoney } from "../GlobalMoney/GlobalMoney";
import { HighInterest } from "../HighInterest/HighInterest";
import { CurrencyConversion } from "../CurrencyConversion/CurrencyConversion";
import { MoneyRequest } from "../MoneyRequest/MoneyRequest";
import { Enhance } from "../Enhance/Enhance";
import { CharitySection } from "../CharitySection/CharitySection";
import { QuestionTabs } from "../Tabs/Tabs";
import { PeoplesSection } from "../PeoplesSection/PeoplesSection";
// import { Companies } from "../Companies/Companies";
import { SignupSection } from "../signupSection/signupSection";
import { GetStarted } from "../GetStarted/GetStarted";
import Clock from "../../assets/clock.svg";
import { MultiCurrency } from "../MultiCurrency/MultiCurrency";
import { Fade } from "react-awesome-reveal";
import { structuredData } from "../../config/SEO/Homepage/structuredData";
import Link from "../link";

export function HomePage(props) {
  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(props.state)}
      </script>
      <div className="container">
        <div className="banner">
          <div className="row">
            <div className="col-md-8">
              <div className="bannerCont">
                <Fade triggerOnce direction="up" delay={100}>
                  <h1 className="bannerTitle">
                    Your Money's Superhero <span className="br-block"></span> is
                    Almost Here
                  </h1>
                </Fade>
                <Fade triggerOnce direction="up" delay={500}>
                  <div className="Banner-list">
                    <h2 className="bannerText slide-up">
                      <img src={Check} alt="check" />
                      Deposit money to earn up to 5% APY.
                    </h2>
                    <h2 className="bannerText slide-up">
                      <img src={Check} alt="check" />
                      Exchange currencies, send money abroad, make instant
                      payments.
                    </h2>
                    <h2 className="bannerText slide-up">
                      <img src={Check} alt="check" />
                      No hidden fees, no minimum deposits, no stress.
                    </h2>
                  </div>
                </Fade>
                <TextfieldBanner />
                <ul className="HomepagelList list-unstyled">
                  <li>
                    <img src={Clock} alt="Clock" />
                    Open an account in minutes. Launching in May.
                  </li>
                </ul>
                <p className="draw-text">
                  Get early access to the Cashero app and earn a chance to win
                  $1,000 every 3 days! <span className="br-block"></span>
                  <Link link="/Giveaway"> Terms and conditions </Link> apply.
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
        {/* <Companies /> */}
        <QuestionTabs activeTab={0} />
      </div>
      <SignupSection />
    </>
  );
}

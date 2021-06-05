import React, { useState } from "react";
import Check from "../../assets/check-mark2.png";
import Forbes from "../../assets/seen-img1.png";
import Fast from "../../assets/seen-img2.png";
import Inc from "../../assets/seen-img3.png";
import listGraph from "../../assets/listGraph.svg";
import HighDollar from "../../assets/HighDollar.svg";
import Draw from "../../assets/draw.svg";
import listHome from "../../assets/listHome.svg";
import CompaignNoEffort from "../compaignNoEffort/compaignNoEffort";
import Savings from "../campaignSavings/campaignSavings";
import CampaignTabs from "../campaignTabs/campaignTabs";
import CampaignSignup from "../campaignSignup/campaignSignup";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Head } from "frontity";
import Link from "../link";
import { withTranslation } from "react-i18next";

const Personal = ({ i18n }) => {
  const [appModal, setAppModal] = useState(false);
  const appModalClose = () => {
    setAppModal(false)
  };
  return (
    <>
      <Head>
        <title>{i18n.t("High_Yield_Savings_Account_Menu_1")}</title>
        <meta name="description" content="Put your money to work with the Cashero High Yield Savings Account. Beat the rate of inflation with an average APY of 5% on your deposits. Our savings accounts..." />
        <link
          rel="canonical"
          href="https://www.cashero.com/high-yield-savings-account/"
        />
        <link rel="alternate" hreflang="en-US" href="https://www.cashero.com/high-yield-savings-account/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/high-yield-savings-account/" />
      </Head>
      <div className="PesonalBanner InterestBanner compaign-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="PersonalCont">
                <p className="text-uppercase bannerPara font-medium">Do your savings need a lifeline&nbsp;? <span className="br-block"></span> cashero is on the way&nbsp;!</p>
                <h1>{i18n.t("High_Yield")} <span className="br-block-with-no-display"></span> {i18n.t("Savings_Account")}</h1>
                <div className="Banner-list compaignList">
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                    Deposit money to earn up to 5% APY.
                    </h2>
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                     Exchange currencies, send money abroad, & make instant payments.
                    </h2>
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                     No hidden fees, no minimum balance, and no stress:)
                    </h2>
                </div>
                <p className="bannerPara font-medium">With Cashero, we protect your value for money and <span className="br-block"></span> maximize your savings. Get higher returns than traditional <span className="br-block"></span> income, so your money works for you</p>
                <p className="text-uppercase bannerPara font-medium seen-text">As seen in:</p>
                <div className="seenList">
                  <img src={Forbes} />
                  <img src={Fast} />
                  <img src={Inc} />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="compaignForm">
                <h2 className="text-center">Cashero is on the way!</h2>
                <p className="text-center">We are launching multinationally. <span className="br-block"></span> Be the first to earn with Cashero in [country name]. <span className="br-block"></span> Join the waitlist, today. </p>
                <form className="compaignFormCont">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group mb-0">
                    <input type="number" className="form-control" placeholder="Phone Number" />
                  </div>
                  <button className="btn btn-default Compaignbtn">Join the Waitlist</button>
                  <Link>Terms & Conditions</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inflation-sec">
        <div className="container">
          <div className="row">
            <div className="col-md -12">
              <div className="inflation">
                <div className="inflation-cont text-center">
                  <img src={HighDollar} />
                  <p>inflation-beating <span className="br-block"></span> 5% APY</p>
                </div>
                <div className="inflation-cont text-center">
                  <img src={Draw} />
                  <p>Interest paid out <span className="br-block"></span> daily</p>
                </div>
                <div className="inflation-cont text-center">
                  <img src={listGraph} />
                  <p>Deposit or withdraw your <span className="br-block"></span> money at any time</p>
                </div>
                <div className="inflation-cont text-center">
                  <img src={listHome} />
                  <p>Eu licensed & regulated <span className="br-block"></span> financial institution </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompaignNoEffort />
      <div className="container">
        <Savings />
      </div>
      {appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
      <CampaignTabs />
      <CampaignSignup />
    </>
  );
}

export default withTranslation()(Personal);

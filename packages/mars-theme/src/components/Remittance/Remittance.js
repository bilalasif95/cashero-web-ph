import React, { useState } from "react";
import { Head, connect } from "frontity";
import Clock from "../../assets/clockImg.svg";
import TextfieldBanner from "../TextfieldBanner/TextfieldBanner";
import Dollarlist from "../../assets/Dollarlist.svg";
import Draw from "../../assets/draw.svg";
import listHome from "../../assets/listHome.svg";
import PeoplesSection from "../PeoplesSection/PeoplesSection";
import QuestionTabs from "../Tabs/Tabs";
import SignupSection from "../signupSection/signupSection";
import Sendpayments from "../Sendpayments/Sendpayments";
import GlobeDollar from "../../assets/GlobeDollar.svg";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import Casher0map from "../../assets/Casher0map.svg";
import done from "../../assets/done.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import StepsDollar from "../../assets/StepsDollar.svg";
import Link from "../link";
import { structuredData, faqStructuredData, organizationStructuredData } from "../../config/SEO/TransferMoneyAbroad/structuredData";
import Securepayments from "../Securepayments/Securepayments";
import { withTranslation } from "react-i18next";

const Remittance = ({ state, i18n }) => {
  const [appModal, setAppModal] = useState(false);
  const appModalOpen = () => {
    setAppModal(true)
  };
  const appModalClose = () => {
    setAppModal(false)
  };
  return (
    <>
      <Head>
        <title>{i18n.t("Transfer_Money_Remittance_1")}</title>
        <meta name="description" content={i18n.t("Transfer_Money_Abroad_Meta_Description")} />
        <link
          rel="canonical"
          href="https://www.cashero.com/ph/transfer-money-abroad/"
        />
        <link rel="alternate" hreflang="tl-PH" href="https://www.cashero.com/ph/transfer-money-abroad/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/ph/transfer-money-abroad/" />
        <script className="structured-data-list" type="application/ld+json">
          {structuredData(state)}
        </script>
        <script className="structured-data-list" type="application/ld+json">
          {faqStructuredData()}
        </script>
        <script className="structured-data-list" type="application/ld+json">
          {organizationStructuredData()}
        </script>
      </Head>
      <div className="PesonalBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="PersonalCont">
                <h1>{i18n.t("Transfer_Money_Remittance")}</h1>
                <p className="bannerPara">{i18n.t("Remittance_P")}</p>
                <TextfieldBanner />
                <ul className="PersonalList list-unstyled">
                  <li><img alt="Clock" src={Clock} />{i18n.t("Open_an_account_in_minutes1")}</li>
                </ul>
                <p className="draw-banner-text noBreakBannerHeading">{i18n.t("Open_an_account_in_minutes_P")} <Link className="giveaway-link1" link="/ph/giveaway">{i18n.t("TERMS_AND_CONDITIONS")}</Link> {i18n.t("apply")} </p>
              </div>
            </div>
            <div className="col-md-5">
              <img alt="Cashero map" className="mx-auto d-block w-100" height="100%" width="100%" src={Casher0map} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md -12">
            <ul className="PersonalCompanyList list-unstyled">
              <li><img alt="Globe Dollar" src={GlobeDollar} />{i18n.t("Remittance_li1")}</li>
              <li><img alt="Dollar list" src={Dollarlist} />{i18n.t("Remittance_li2")}</li>
              <li><img alt="Draw" src={Draw} />{i18n.t("Multi_Currency_Savings_Account_li3")}</li>
              <li><img alt="list Home" src={listHome} />{i18n.t("Multi_Currency_Savings_Account_li4")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <Sendpayments />
        <Securepayments />
        <div className="getStarted">
          <div className="row">
            <div className="col-md-12">
              <h3 className="getStartedTitle">{i18n.t("Multi_Currency_Savings_Account_h3")}</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 smBox1">
              <Fade triggerOnce direction="left">
                <div className="GetStartedBox1 w-100">
                  <img alt="Favourite" height="100%" width="100%" className="img-fluid" src={Fav} />
                  <h3>{i18n.t("Multi_Currency_Savings_Account_Work1")}</h3>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
              <div className="GetStartedBox2 w-100">
                <img
                  className="img-fluid"
                  height="152px"
                  width="152px"
                  alt="Steps Dollar"
                  src={StepsDollar}
                />
                <h3>{i18n.t("Add_funds_to_your_account")}</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
              <Fade triggerOnce direction="right">
                <div className="GetStartedBox3 w-100">
                  <img className="img-fluid" height="100%" width="84px" alt="Done" src={done} />
                  <h3>
                    {i18n.t("Remittance_Work")}
                  </h3>
                </div>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-1 col-md-10">
              <div className="MultistepsCont">
                <p>{i18n.t("Remittance_Work_P")}</p>
                <button className="LinkBtn" onClick={appModalOpen}>
                  {i18n.t("Get_Early_Access")} <img alt="Arrow" height="24px" width="24px" className="ArrowBtn" src={Arrow1} />
                </button>
              </div>
            </div>
          </div>
          {appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
        </div>
      </div>
      <PeoplesSection />
      <div className="container">
        <QuestionTabs activeTab={5} />
      </div>
      <SignupSection />
    </>
  );
}

export default connect(withTranslation()(Remittance));

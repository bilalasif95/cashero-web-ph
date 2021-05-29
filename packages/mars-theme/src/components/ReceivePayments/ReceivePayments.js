import React, { useState } from "react";
import TextfieldBanner from "../TextfieldBanner/TextfieldBanner";
import Clock from "../../assets/clockImg.svg";
import Instant from "../../assets/instant.svg";
import walletDown from "../../assets/walletDown.svg";
import Draw from "../../assets/draw.svg";
import Dollar from "./../../assets/Dollar.png";
import Path from "../../assets/path.png";
import listHome from "../../assets/listHome.svg"
import PeoplesSection from "../PeoplesSection/PeoplesSection";
import QuestionTabs from "../Tabs/Tabs";
import SignupSection from "../signupSection/signupSection";
import LocalPayments from "../LocalPayments/LocalPayments";
import GetPaid from "../Getpaid/Getpaid";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import KuWu from "../../assets/KuWu.png";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Head } from "frontity";
import Link from "../link";
import { withTranslation } from "react-i18next";

const ReceivePayments = ({ i18n }) => {
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
      <title>{i18n.t("Instant_Money_Transfer_MainHeading_1")}</title>
      <meta name="description" content="Cashero allows you to make instant money transfers to other Cashero Accounts all over the world. We offer an all-in-one platform for multi-currency high-yield savings, currency exchange and instant cross-border payments. We're your money's superhero." />
        <link
          rel="canonical"
          href="https://www.cashero.com/instant-money-transfer/"
        />
      </Head>
      <div className="PesonalBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="PersonalCont">
                <h1>{i18n.t("Instant_Money_Transfer_MainHeading")}</h1>
                <p className="bannerPara">{i18n.t("Receive_Payments_Main_P")}</p>
                <TextfieldBanner />
                <ul className="PersonalList list-unstyled">
                  <li><img alt="Clock" src={Clock} />{i18n.t("Open_an_account_in_minutes")}</li>
                </ul>
                <p className="draw-banner-text">{i18n.t("Open_an_account_in_minutes_P")} <span className="br-block-with-no-display"></span> <Link className="giveaway-link1" link="/giveaway"> {i18n.t("TERMS_AND_CONDITIONS")}</Link> {i18n.t("apply")} </p>
              </div>
            </div>
            <div className="col-md-5">
              <img alt="KuWu" className="img-fluid mx-auto d-block" src={KuWu} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md -12">
            <ul className="PersonalCompanyList list-unstyled">
              <li><img alt="wallet Down" src={walletDown} />{i18n.t("Receive_Payments_li1")}</li>
              <li><img alt="Instant" src={Instant} />{i18n.t("Multi_Currency_Savings_Account_li2")}</li>
              <li><img alt="Draw" src={Draw} />{i18n.t("Multi_Currency_Savings_Account_li3")}</li>
              <li><img alt="list Home" src={listHome} />{i18n.t("Multi_Currency_Savings_Account_li4")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <LocalPayments />
        <GetPaid />
        <div className="getStarted mt-0">
          <div className="row">
            <div className="col-md-12">
              <h3 className="getStartedTitle">
                {i18n.t("Multi_Currency_Savings_Account_h3")}
              </h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 smBox1">
              <Fade triggerOnce direction="left">
                <div className="GetStartedBox1 w-100">
                  <img className="img-fluid" alt="Favourite" src={Fav} />
                  <h3>{i18n.t("Multi_Currency_Savings_Account_Work1")}</h3>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
              <div className="GetStartedBox2 w-100">
                <img
                  className="img-fluid"
                  alt="Dollar"
                  src={Dollar}
                />
                <h3>
                  {i18n.t("Add_funds_to_your_account")}
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
              <Fade triggerOnce direction="right">
                <div className="GetStartedBox3 w-100">
                  <img className="img-fluid" alt="Path" src={Path} />
                  <h3>
                    {i18n.t("Send_request_and_receive_payments_in_an_instant")}
                  </h3>
                </div>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-1 col-md-10">
              <div className="MultistepsCont">
                <p>{i18n.t("Send_request_and_receive_payments_in_an_instant_P")}</p>
                <button onClick={appModalOpen} className="LinkBtn">
                  {i18n.t("Get_Early_Access")} <img alt="arrow" className="ArrowBtn" src={Arrow1} />
                </button>
              </div>
            </div>
          </div>
          {appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
        </div>
      </div>
      <PeoplesSection />
      <div className="container">
        <QuestionTabs activeTab={4} />
      </div>
      <SignupSection />
    </>
  );
}

export default withTranslation()(ReceivePayments);

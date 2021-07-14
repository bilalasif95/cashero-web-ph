import React, { useState, useEffect } from "react";
import Clock from "../../assets/clockImg.svg";
import donateDollar from "../../assets/donateDollar.svg";
import TextfieldBanner from "../TextfieldBanner/TextfieldBanner";
import heart from "../../assets/heart.svg";
import listImg from "../../assets/list.png";
import StepsWallet from "../../assets/stepsWallet.png";
import heartDollar from "../../assets/heartDollar.svg";
import listHome from "../../assets/listHome.svg";
import freeFund from "../../assets/freeFund.png";
import freeFundBR from "../../assets/freeFundBR.png";
import PeoplesSection from "../PeoplesSection/PeoplesSection";
import QuestionTabs from "../Tabs/Tabs";
import SignupSection from "../signupSection/signupSection";
import BetterPlace from "../BetterPlace/BetterPlace";
import HandleDonations from "../HandleDonations/HandleDonations";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Head } from "frontity";
import Link from "../link";
import { withTranslation } from "react-i18next";

const ListedCharity = ({ i18n }) => {
  const [appModal, setAppModal] = useState(false);
  const [storage, setStorage] = useState("")
  useEffect(() => {
    setStorage(localStorage.getItem("lang"))
  }, [i18n.language])
  const appModalOpen = () => {
    setAppModal(true)
  };
  const appModalClose = () => {
    setAppModal(false)
  };
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.cashero.com/become-listed-charity/"
        />
        {i18n.language === "brazilian" ?
          <link rel="alternate" hreflang="pt-BR" href="https://www.cashero.com/become-listed-charity/" />
          :
          <link rel="alternate" hreflang="en-US" href="https://www.cashero.com/become-listed-charity/" />
        }
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/become-listed-charity/" />
      </Head>
      <div className="PesonalBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="PersonalCont">
                <h1>{i18n.t("Harness_the_Power_of_Free_Fundraising")}</h1>
                <p className="bannerPara">{i18n.t("Harness_the_Power_of_Free_Fundraising_P")}</p>
                <TextfieldBanner />
                <ul className="PersonalList list-unstyled">
                  <li><img alt="Clock" src={Clock} />{i18n.t("Open_an_account_in_minutes")}</li>
                </ul>
                <p className="draw-banner-text">{i18n.t("Open_an_account_in_minutes_P")} <Link className="giveaway-link1" link="/giveaway">{i18n.t("TERMS_AND_CONDITIONS")}</Link> {i18n.t("apply")} </p>
              </div>
            </div>
            <div className="col-md-6">
              <img alt="free Fund" className="img-fluid mx-auto d-block" height="100%" width="579px" src={storage === "brazilian" ? freeFundBR : freeFund} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md -12">
            <ul className="PersonalCompanyList3 list-unstyled">
              <li><img alt="heart Dollar" src={heartDollar} />{i18n.t("Donation_li1")}</li>
              <li><img alt="donate Dollar" src={donateDollar} />{i18n.t("Donation_li2")}</li>
              <li><img alt="heart" src={heart} />{i18n.t("Donation_li3")}</li>
              <li><img alt="list Home" src={listHome} />{i18n.t("Multi_Currency_Savings_Account_li4")}</li>
            </ul>
          </div>
        </div>
        <BetterPlace />
        <HandleDonations />
        <div className="getStarted">
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
                  <img className="img-fluid" height="100%" width="100%" alt="Favourite" src={Fav} />
                  <h3>{i18n.t("Multi_Currency_Savings_Account_Work1")}</h3>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
              <div className="GetStartedBox2 w-100">
                <img className="img-fluid" alt="list Image" height="152px" width="152px" src={listImg} />
                <h3>{i18n.t("Apply_to_become_a_listed_charity")}</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
              <Fade triggerOnce direction="right">
                <div className="GetStartedBox3 w-100">
                  <img className="img-fluid" height="152px" width="152px" alt="Steps Wallet" src={StepsWallet} />
                  <h3>{i18n.t("Receive_donations_and_make_a_difference")}</h3>
                </div>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-1 col-md-10">
              <div className="MultistepsCont">
                <p>{i18n.t("Listed_Charity_Work_P")}</p>
                <button onClick={appModalOpen} className="LinkBtn">
                  {i18n.t("Get_Early_Access")} <img className="ArrowBtn" height="24px" width="24px" alt="arrow" src={Arrow1} />
                </button>
              </div>
            </div>
          </div>
          {appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
        </div>
      </div>
      <PeoplesSection />
      <div className="container">
        <QuestionTabs activeTab={6} />
      </div>
      <SignupSection />
    </>
  );
}

export default withTranslation()(ListedCharity);

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import NumericLabel from "react-pretty-numbers";
import Clock from "../../assets/clockImg.svg";
import Arrow from "../../assets/arrow.svg";
import listGraph from "../../assets/listGraph.svg";
import HighDollar from "../../assets/HighDollar.svg";
import Draw from "../../assets/draw.svg";
import listHome from "../../assets/listHome.svg";
import NoEffort from "../NoEffort/NoEffort";
import Savings from "../Savings/Savings";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import WalletCoins from "../../assets/WalletCoins.png";
import ArrowUp from "../../assets/Arrowup.png";
import Arrow1 from "../../assets/arrowLink.svg";
import PeoplesSection from "../PeoplesSection/PeoplesSection";
import TextfieldBanner from "../TextfieldBanner/TextfieldBanner";
import QuestionTabs from "../Tabs/Tabs";
import SignupSection from "../signupSection/signupSection";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Head, connect } from "frontity";
import Link from "../link";
import { structuredData, faqStructuredData, organizationStructuredData } from "../../config/SEO/HighYieldpage/structuredData";
import { withTranslation } from "react-i18next";

var bigDecimal = require("js-big-decimal");

const Personal = ({ state, i18n }) => {
  const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
  const [selectedYear, setSelectedYear] = useState("5");
  const [value, setValue] = useState("5000");
  const [appModal, setAppModal] = useState(false);
  const onChange = (e) => {
    if (e.target.value.length > 6) {
      return
    }
    setValue(e.target.value)
  };
  const appModalOpen = () => {
    setAppModal(true)
  };
  const appModalClose = () => {
    setAppModal(false)
  };
  const finalBalance = () => {
    const multi = bigDecimal.multiply(value, 0.05)
    const multi2 = bigDecimal.multiply(multi, selectedYear)
    const add = bigDecimal.add(multi2, value)
    const final = limit(add)
    return final
  };
  const limit = (bal) => {
    let temp = bal ? bal.toString() : "0";
    if (temp) {
      temp = temp.split(".")
    }
    else {
      return temp
    }
    let n = temp[1] ? "" + temp[1] : "0";
    let x = n && (n + "00").substring(0, 2);
    return x ? temp[0] + "." + x : "0.00";
  };
  const totalInterest = () => {
    const multi = bigDecimal.multiply(value, 0.05)
    const multi2 = bigDecimal.multiply(multi, selectedYear)
    const final = limit(multi2)
    return final
  };
  const togglegbp = () => {
    setDropdownOpengbp((prevState) => !prevState);
  };
  return (
    <>
      <Head>
        <title>{i18n.t("High_Yield_Savings_Account_Menu_1")}</title>
        <meta name="description" content={i18n.t("High_Yield_Savings_Account_Meta_Description")} />
        <link
          rel="canonical"
          href="https://www.cashero.com/high-yield-savings-account/"
        />
        {i18n.language === "brazilian" ?
          <link rel="alternate" hreflang="pt-BR" href="https://www.cashero.com/high-yield-savings-account/" />
          :
          <link rel="alternate" hreflang="en-US" href="https://www.cashero.com/high-yield-savings-account/" />
        }
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/high-yield-savings-account/" />
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
      <div className="PesonalBanner InterestBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="PersonalCont">
                <h1 className="noBreakHeading">{i18n.t("High_Yield_Savings_Account")}</h1>
                <p className="bannerPara">{i18n.t("Personal_Main_P")}</p>
                <TextfieldBanner />
                <ul className="PersonalList list-unstyled">
                  <li><img src={Clock} alt="Clock" />{i18n.t("Open_an_account_in_minutes")}</li>
                </ul>
                <p className="draw-banner-text noBreakBannerHeading">{i18n.t("Open_an_account_in_minutes_P")} <Link className="giveaway-link1" link="/giveaway">{i18n.t("TERMS_AND_CONDITIONS")}</Link> {i18n.t("apply")} </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className={`${value.length === 5 ? "InputBox1" : value.length === 6 ? "InputBox2" : "InputBox"}`}>
                <div className="row">
                  <div className="col-12">
                    <div className="row inputRow">
                      <div className="col-4">
                        <div>
                          <p className="customText">{i18n.t("Deposit")}</p>
                          <TextField
                            fullWidth
                            value={value}
                            onChange={(e) => onChange(e)}
                            type="number"
                            variant="standard"
                            className="PersonalBoxField"
                          />
                        </div>
                      </div>
                      <div className="col-2">
                        <img className="interest-arrow" height="24px" width="24px" src={Arrow} alt="Arrow" />
                      </div>
                      <div className="col-6">
                        <div className="InterestBox mt-0 TotalText interest-box-cont">
                          <p>{i18n.t("Total_Interest")}</p>
                          <p className="value">$<NumericLabel params={{
                            'shortFormat': true,
                            'justification': 'C',
                            'shortFormatMinValue': 1000000000000
                          }}>{totalInterest()}</NumericLabel></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <div className="InterestBox TotalText">
                          <p>{i18n.t("Interest_Rate")}</p>
                          <p className="value">{i18n.t("Percent_APY")}</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="InterestBox TotalText">
                          <p>{i18n.t("Term")}</p>
                          <div className="yearDropdown">
                            <Dropdown
                              isOpen={dropdownOpengbp}
                              toggle={togglegbp}
                            >
                              <DropdownToggle caret>
                                <p className="value">{selectedYear} {selectedYear === "1" ? <>{i18n.t("YEAR")}</> : <>{i18n.t("YEARS")}</>}</p>
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem onClick={() => setSelectedYear("1")}>1 {i18n.t("YEAR")}</DropdownItem>
                                <DropdownItem onClick={() => setSelectedYear("5")}>5 {i18n.t("YEARS")}</DropdownItem>
                                <DropdownItem onClick={() => setSelectedYear("10")}>10 {i18n.t("YEARS")}</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="InputBox mt-4 FinalTextBox">
                <div className="row">
                  <div className="col-12">
                    <div className="FinalText text-center">
                      <p>{i18n.t("Final_balance_is")}</p>
                      <p className="value">$<NumericLabel params={{
                        'shortFormat': true,
                        'justification': 'C',
                        'shortFormatMinValue': 10000000000000000
                      }}>{finalBalance()}</NumericLabel></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md -12">
            <ul className="PersonalCompanyList list-unstyled">
              <li><img alt="High Dollar" src={HighDollar} />{i18n.t("PersonalPage_li1")}</li>
              <li><img alt="list Graph" src={listGraph} />{i18n.t("PersonalPage_li2")}</li>
              <li><img alt="Draw" src={Draw} />{i18n.t("PersonalPage_li3")}</li>
              <li><img alt="list Home" src={listHome} />{i18n.t("Multi_Currency_Savings_Account_li4")}</li>
            </ul>
          </div>
        </div>
      </div>
      <NoEffort />
      <div className="container">
        <Savings />
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
                  <img alt="Favourite" height="100%" width="100%" className="img-fluid" src={Fav} />
                  <h3>{i18n.t("Multi_Currency_Savings_Account_Work1")}</h3>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
              <div className="GetStartedBox2 w-100">
                <img
                  className="img-fluid"
                  src={WalletCoins}
                  height="152px" width="152px" 
                  alt="Wallet Coins"
                />
                <h3>{i18n.t("Add_funds_into_your_Account")}</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
              <Fade triggerOnce direction="right">
                <div className="GetStartedBox3 w-100">
                  <img className="img-fluid" height="152px" width="152px" alt="Arrow Up" src={ArrowUp} />
                  <h3>
                    {i18n.t("Earn_up_to_5_APY")}
                  </h3>
                </div>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-1 col-md-10">
              <div className="MultistepsCont">
                <p>{i18n.t("Personal_LastP")}</p>
                <button onClick={appModalOpen} className="LinkBtn" >
                  {i18n.t("Get_Early_Access")} <img alt="Arrow" height="24px" width="24px" className="ArrowBtn" src={Arrow1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
      <PeoplesSection />
      <div className="container">
        <QuestionTabs activeTab={1} />
      </div>
      <SignupSection />
    </>
  );
}

export default connect(withTranslation()(Personal));

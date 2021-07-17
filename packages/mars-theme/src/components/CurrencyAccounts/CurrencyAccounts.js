import React, { useState, useEffect, useRef } from "react";
import Clock from "../../assets/clockImg.svg";
import TextfieldBanner from "../TextfieldBanner/TextfieldBanner";
import oneWallet from "../../assets/onewallet.svg";
import WalletCoins from "../../assets/WalletCoins.png";
import Draw from "../../assets/draw.svg";
import ListPhone from "../../assets/ListPhone.svg";
import { callApi } from "../../config/call-api";
import { FirebaseEndPoints } from "../../config/config";
import SingleAccount from "../SingleAccount/SingleAccount";
import Protect from "../Protect/Protect";
import PeoplesSection from "../PeoplesSection/PeoplesSection";
import QuestionTabs from "../Tabs/Tabs";
import SignupSection from "../signupSection/signupSection";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import CounterIcon from "../../assets/counterIcon.svg";
import SearchIcon from "@material-ui/icons/Search";
import MovingCoins from "../../assets/movingCoins.png";
import Arrow1 from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import currencieslist from "../../config/currenciesList";
import currencieslistBR from "../../config/currenciesListBR";
import { Head, connect } from "frontity";
import Link from "../link";
import { structuredData, faqStructuredData, organizationStructuredData } from "../../config/SEO/MultiCurrencySavingsAccount/structuredData";
import { withTranslation } from "react-i18next";

var bigDecimal = require("js-big-decimal");

const CurrencyAccounts = ({ state, i18n }) => {
  const appModalOpen = () => {
    setAppModal(true)
  };
  const appModalClose = () => {
    setAppModal(false)
  };
  const [appModal, setAppModal] = useState(false);
  const ref = useRef(null);
  const [flaggbp, setflaggbp] = useState("🇺🇸");
  const [flagcurrencygbp, setflagcurrencygbp] = useState(i18n.language === "brazilian" ? "Dollar Americano - USD" : "US Dollar - USD");
  const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
  const [searchTermgbp, setSearchTermgbp] = useState("");
  const [searchResults2gbp, setSearchResults2gbp] = useState([]);
  const [searchResultsgbp, setSearchResultsgbp] = useState(i18n.language === "brazilian" ? currencieslistBR : currencieslist);
  const [baseCurrencyEURValue, setBaseCurrencyEURValue] = useState("1");
  const [baseCurrencyGBPValue, setBaseCurrencyGBPValue] = useState("1");
  const [baseCurrencyUSDValue, setBaseCurrencyUSDValue] = useState("1");
  const togglegbp = () => {
    setSearchTermgbp("");
    setDropdownOpengbp((prevState) => !prevState);
  };
  const handleChangegbp = (e) => {
    setSearchTermgbp(e.target.value);
    const results = searchResultsgbp.filter(
      (country) =>
        country.name
          .toLowerCase()
          .includes(searchTermgbp.toLocaleLowerCase()) ||
        country.dial_code.includes(searchTermgbp.toLocaleLowerCase())
    );
    setSearchResults2gbp(results);
  };
  const selectCountrygbp = (country) => {
    setSearchTermgbp("");
    setSearchResults2gbp(i18n.language === "brazilian" ? currencieslistBR : currencieslist);
    setflaggbp(country.flag);
    setflagcurrencygbp(country.name)
  };
  useEffect(() => {
    if (i18n.language === "brazilian") {
      setSearchResultsgbp(currencieslistBR)
      setSearchResults2gbp([])
      setflagcurrencygbp("Dollar Americano - USD")
      setflaggbp("🇺🇸")
    }
    else {
      setSearchResultsgbp(currencieslist)
      setSearchResults2gbp([])
      setflagcurrencygbp("US Dollar - USD")
      setflaggbp("🇺🇸")
    }
  }, [i18n.language])
  useEffect(() => {
    var start = 1000;
    var speed = 0;
    if (ref.current) {
      ref.current.innerHTML = start.toFixed(0);
      start += 1;
    }
    setInterval(() => {
      if (ref.current) {
        ref.current.innerHTML = start.toFixed(0);
        start += 1;
      }
    }, speed);
    setSearchResultsgbp(i18n.language === "brazilian" ? currencieslistBR : currencieslist)
    callApi(FirebaseEndPoints.ExchangeRates, "get", "")
      .then((doc) => {
        setBaseCurrencyEURValue(doc.fields.eur.stringValue)
        setBaseCurrencyGBPValue(doc.fields.gbp.stringValue)
        setBaseCurrencyUSDValue(doc.fields.usd.stringValue)
      })
      .catch(() => { });
  }, [])
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
  const calculateBRL = (value, label) => {
    if (label === "Dollar Americano - USD" || label === "US Dollar - USD") {
      const multi = bigDecimal.multiply(50.00, value)
      const final = limit(multi)
      return final
    }
    else if (label === "EU Euro - EUR") {
      const multi = bigDecimal.multiply(60.00, value)
      const final = limit(multi)
      return final
    }
    else {
      const multi = bigDecimal.multiply(70.00, value)
      const final = limit(multi)
      return final
    }
  };
  return (
    <>
      <Head>
        <title>{i18n.t("Multi_Currency_Savings_Account_1")}</title>
        <meta name="description" content={i18n.t("Multi_Currency_Savings_Account_Meta_Description")} />
        <link
          rel="canonical"
          href="https://www.cashero.com/multi-currency-savings-account/"
        />
        {i18n.language === "brazilian" ?
          <>
            <link rel="alternate" hreflang="pt-BR" href="https://www.cashero.com/multi-currency-savings-account/" />
            <html lang="pt-BR" />
          </>
          :
          <>
            <link rel="alternate" hreflang="en-US" href="https://www.cashero.com/multi-currency-savings-account/" />
            <html lang="en" />
          </>
        }
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/multi-currency-savings-account/" />
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
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="PersonalCont">
                <h1>{i18n.t("Multi_Currency")} <span className="br-block-with-no-display"></span> {i18n.t("Savings_Account")}</h1>
                <p className="bannerPara">{i18n.t("Multi_Currency_Savings_Account_P")}</p>
                <TextfieldBanner />
                <ul className="PersonalList list-unstyled">
                  <li><img alt="Clock" src={Clock} />{i18n.t("Open_an_account_in_minutes")}</li>
                </ul>
                <p className="draw-banner-text noBreakBannerHeading">{i18n.t("Open_an_account_in_minutes_P")} <Link className="giveaway-link1" link="/giveaway">{i18n.t("TERMS_AND_CONDITIONS")}</Link> {i18n.t("apply")} </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="Graph">
                <img
                  className="CounterIcon"
                  alt="Counter Icon"
                  src={CounterIcon}
                />
                <div className="GraphCont">
                  <div className="earningText">
                    <p className="HighInterestText">{i18n.t("Earning_5_APY")}</p>
                  </div>
                  <p className="mt-3">BRL: {flagcurrencygbp === "US Dollar - USD" ? calculateBRL(baseCurrencyUSDValue, "US Dollar - USD") :
                    flagcurrencygbp === "EU Euro - EUR" ? calculateBRL(baseCurrencyEURValue, "EU Euro - EUR") : flagcurrencygbp === "Dollar Americano - USD" ? calculateBRL(baseCurrencyUSDValue, "Dollar Americano - USD") : calculateBRL(baseCurrencyGBPValue, "")}</p>
                  <div className="CustomCounter">
                    <span className="CounterText">
                      {flagcurrencygbp === "US Dollar - USD" || flagcurrencygbp === "Dollar Americano - USD" ? "$" :
                        flagcurrencygbp === "EU Euro - EUR" ? "€" : "£"}{flagcurrencygbp === "US Dollar - USD" || flagcurrencygbp === "Dollar Americano - USD" ? "50.00" :
                          flagcurrencygbp === "EU Euro - EUR" ? "60.00" : "70.00"}
                    </span>
                    <span ref={ref} id="counter"></span>
                  </div>
                  <Dropdown isOpen={dropdownOpengbp} toggle={togglegbp}>
                    <DropdownToggle caret>
                      <div className="mr-3"><span className="FlagIcon">{flaggbp} </span></div>
                      <span className="FlagCode">{flagcurrencygbp}</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>
                        <>
                          <SearchIcon />
                          <input
                            type="text"
                            value={searchTermgbp}
                            onChange={handleChangegbp}
                          />
                        </>
                      </DropdownItem>
                      <div className="country-list">
                        {searchResults2gbp.length > 0
                          ? searchResults2gbp.map((item, index) => (
                            <DropdownItem
                              key={index + 1}
                              onClick={() => selectCountrygbp(item)}
                              className="country-item"
                            >
                              <div className="flag-name">
                                <span>{item.flag}</span>
                                {item.name}
                              </div>
                            </DropdownItem>
                          ))
                          : searchResultsgbp.map((item, index) => (
                            <DropdownItem
                              key={index + 1}
                              onClick={() => selectCountrygbp(item)}
                              className="country-item"
                            >
                              <div className="flag-name">
                                <span>{item.flag}</span>
                                {item.name}
                              </div>
                            </DropdownItem>
                          ))}
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md -12">
            <ul className="PersonalCompanyList2 list-unstyled">
              <li><img alt="one Wallet" src={oneWallet} />{i18n.t("Multi_Currency_Savings_Account_li1")}</li>
              <li><img alt="List Phone" src={ListPhone} />{i18n.t("Multi_Currency_Savings_Account_li2")}</li>
              <li><img alt="Draw" src={Draw} />{i18n.t("Multi_Currency_Savings_Account_li3")}</li>
              <li><img alt="Draw" src={Draw} />{i18n.t("Multi_Currency_Savings_Account_li4")}</li>
            </ul>
          </div>
        </div>
      </div>
      <SingleAccount />
      <div className="container">
        <Protect />
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
                <img
                  className="img-fluid"
                  height="152px" width="152px"
                  alt="Wallet Coins"
                  src={WalletCoins}
                />
                <h3>{i18n.t("Multi_Currency_Savings_Account_Work2")}</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
              <Fade triggerOnce direction="right">
                <div className="GetStartedBox3 w-100">
                  <img className="img-fluid" height="152px" width="152px" alt="Moving Coins" src={MovingCoins} />
                  <h3>
                    {i18n.t("Multi_Currency_Savings_Account_Work3")}
                  </h3>
                </div>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-1 col-md-10">
              <div className="MultistepsCont">
                <p>{i18n.t("Multi_Currency_Savings_Account_Work_P")}</p>
                <button onClick={appModalOpen} className="LinkBtn">
                  {i18n.t("Get_Early_Access")} <img alt="Arrow" className="ArrowBtn" height="24px" width="24px" src={Arrow1} />
                </button>
              </div>
            </div>
          </div>
          {appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
        </div>
      </div>
      <PeoplesSection />
      <div className="container">
        <QuestionTabs activeTab={2} />
      </div>
      <SignupSection />
    </>
  );
}

export default connect(withTranslation()(CurrencyAccounts));

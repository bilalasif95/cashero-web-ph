import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Clock from "../../assets/clockImg.svg";
import Currencies from "../../assets/Currencies.svg";
import TextfieldBanner from "../TextfieldBanner/TextfieldBanner";
import ConImg from "../../assets/ConImg.svg";
import Draw from "../../assets/draw.svg";
import ExArrow from "../../assets/ExArrow.svg";
import ExDollar from "../../assets/ExDollar.svg";
import MovingCoins from "../../assets/movingCoins.png";
import listHome from "../../assets/listHome.svg";
import PeoplesSection from "../PeoplesSection/PeoplesSection";
import OnlineSave from "../OnlineSave/OnlineSave";
import QuestionTabs from "../Tabs/Tabs";
import SignupSection from "../signupSection/signupSection";
import EasyCurrencyExchange from "../EasyCurrencyExchange/EasyCurrencyExchange";
import { Fade } from "react-awesome-reveal";
import Fav from "../../assets/favImg.svg";
import Arrow1 from "../../assets/arrowLink.svg";
import SearchIcon from "@material-ui/icons/Search";
import currencieslistPH from "../../config/currencieslistPH";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { callApi } from "../../config/call-api";
import { FirebaseEndPoints } from "../../config/config";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Head, connect } from "frontity";
import Link from "../link";
import { structuredData, faqStructuredData, organizationStructuredData } from "../../config/SEO/OnlineCurrencyExchange/structuredData";
import { withTranslation } from "react-i18next";

var bigDecimal = require("js-big-decimal");

const ExchangeRates = ({ state, i18n }) => {
  const appModalOpen = () => {
    setAppModal(true);
  };
  const appModalClose = () => {
    setAppModal(false);
  };
  const [appModal, setAppModal] = useState(false);
  const [searchTermgbp, setSearchTermgbp] = useState("");
  const [searchResultsgbp, setSearchResultsgbp] = useState(currencieslistPH);
  const [searchResults2gbp, setSearchResults2gbp] = useState([]);
  const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
  const [searchTermeuro, setSearchTermeuro] = useState("");
  const [searchResultseuro, setSearchResultseuro] = useState(currencieslistPH);
  const [searchResults2euro, setSearchResults2euro] = useState([]);
  const [dropdownOpeneuro, setDropdownOpeneuro] = useState(false);
  const [flaggbp, setflaggbp] = useState("🇬🇧");
  const [flagcodegbp, setflagcodegbp] = useState("GB");
  const [flagcurrencygbp, setflagcurrencygbp] = useState("GBP");
  const [flageuro, setflageuro] = useState("🇪🇺");
  const [flagcodeeuro, setflagcodeeuro] = useState("DE");
  const [flagcurrencyeuro, setflagcurrencyeuro] = useState("EUR");
  const [baseCurrency, setBaseCurrency] = useState("£");
  const [baseCurrencyEURValue, setBaseCurrencyEURValue] = useState("");
  const [baseCurrencyGBPValue, setBaseCurrencyGBPValue] = useState("");
  const [baseCurrencyUSDValue, setBaseCurrencyUSDValue] = useState("");
  const [quoteCurrency, setQuoteCurrency] = useState("€");
  const [loading, setLoading] = useState(false);
  const [swap, setSwap] = useState(false);
  const [baseCurrencyValue, setBaseCurrencyValue] = useState("399");
  const [quoteCurrencyValue, setQuoteCurrencyValue] = useState("0.00");
  useEffect(() => {
    setLoading(true);
    setSearchResultseuro(currencieslistPH);
    setSearchResultsgbp(currencieslistPH);
    callApi(
      FirebaseEndPoints.IndividualExchangeRates + `/${flagcodegbp}`,
      "get",
      ""
    )
      .then((doc) => {
        setBaseCurrencyEURValue(doc.fields.eur.stringValue);
        setBaseCurrencyGBPValue(doc.fields.gbp.stringValue);
        setBaseCurrencyUSDValue(doc.fields.usd.stringValue);
        const val =
          flagcodeeuro === "US"
            ? doc.fields.usd.stringValue
            : flagcodeeuro === "GB"
              ? doc.fields.gbp.stringValue
              : doc.fields.eur.stringValue;
        setQuoteCurrencyValue(bigDecimal.round(bigDecimal.multiply(baseCurrencyValue, val), 2));
        setLoading(false);
      })
      .catch(() => { });
  }, []);
  const togglegbp = () => {
    setSearchTermgbp("");
    setDropdownOpengbp((prevState) => !prevState);
  };
  const toggleeuro = () => {
    setSearchTermeuro("");
    setDropdownOpeneuro((prevState) => !prevState);
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
  const handleChangeeuro = (e) => {
    setSearchTermeuro(e.target.value);
    const results = searchResultseuro.filter(
      (country) =>
        country.name
          .toLowerCase()
          .includes(searchTermeuro.toLocaleLowerCase()) ||
        country.dial_code.includes(searchTermeuro.toLocaleLowerCase())
    );
    setSearchResults2euro(results);
  };
  const selectCountrygbp = (country) => {
    setBaseCurrencyEURValue("");
    setBaseCurrencyGBPValue("");
    setBaseCurrencyUSDValue("");
    setSearchTermgbp("");
    setSearchResults2gbp(currencieslistPH);
    if (swap) {
      setflageuro(country.flag);
      setflagcodeeuro(country.code);
      setflagcurrencyeuro(country.currencyCode);
    } else {
      setflaggbp(country.flag);
      setflagcodegbp(country.code);
      setflagcurrencygbp(country.currencyCode);
    }
    setBaseCurrency(country.symbol);
    setLoading(true);
    callApi(
      FirebaseEndPoints.IndividualExchangeRates + `/${country.code}`,
      "get",
      ""
    )
      .then((doc) => {
        setBaseCurrencyEURValue(doc.fields.eur.stringValue);
        setBaseCurrencyGBPValue(doc.fields.gbp.stringValue);
        setBaseCurrencyUSDValue(doc.fields.usd.stringValue);
        if (swap) {
          const val =
            flagcodegbp === "US"
              ? doc.fields.usd.stringValue
              : flagcodegbp === "GB"
                ? doc.fields.gbp.stringValue
                : doc.fields.eur.stringValue;
          setQuoteCurrencyValue(bigDecimal.round(bigDecimal.multiply(baseCurrencyValue, val), 2));
        } else {
          const val =
            flagcodeeuro === "US"
              ? doc.fields.usd.stringValue
              : flagcodeeuro === "GB"
                ? doc.fields.gbp.stringValue
                : doc.fields.eur.stringValue;
          setQuoteCurrencyValue(bigDecimal.round(bigDecimal.multiply(baseCurrencyValue, val), 2));
        }
        setLoading(false);
      })
      .catch(() => { });
  };
  const selectCountryeuro = (country) => {
    setSearchTermeuro("");
    setSearchResults2euro(currencieslistPH);
    setflageuro(country.flag);
    setflagcodeeuro(country.code);
    setflagcurrencyeuro(country.currencyCode);
    setQuoteCurrency(country.symbol);
    const val =
      country.code === "US"
        ? baseCurrencyUSDValue
        : country.code === "GB"
          ? baseCurrencyGBPValue
          : baseCurrencyEURValue;
    setQuoteCurrencyValue(bigDecimal.round(bigDecimal.multiply(baseCurrencyValue, val), 2));
  };
  const onBaseCurrencyValueChange = (e) => {
    let isDecimal = /^[-+]?[0-9]+\.[0-9]+$/.test(e.target.value);
    if (isDecimal) {
      let noDigitAfterDecimal = countDecimals(e.target.value);
      if (noDigitAfterDecimal > 2) {
        e.preventDefault();
      } else {
        if (e.keyCode === 8) {
          setBaseCurrencyValue(e.target.value);
        }
        else {
          setBaseCurrencyValue(e.target.value);
        }
      }
    }
    else {
      if (e.keyCode === 8) {
        setBaseCurrencyValue(e.target.value);
      }
      else {
        setBaseCurrencyValue(e.target.value);
      }
    }
    if (swap) {
      const val =
        flagcodegbp === "US"
          ? baseCurrencyUSDValue
          : flagcodegbp === "GB"
            ? baseCurrencyGBPValue
            : baseCurrencyEURValue;
      setQuoteCurrencyValue(bigDecimal.round(bigDecimal.multiply(e.target.value, val), 2));
    }
    else {
      const val =
        flagcodeeuro === "US"
          ? baseCurrencyUSDValue
          : flagcodeeuro === "GB"
            ? baseCurrencyGBPValue
            : baseCurrencyEURValue
      setQuoteCurrencyValue(bigDecimal.round(bigDecimal.multiply(e.target.value, val), 2));
    }
  };
  var countDecimals = function (value) {
    let text = value.toString();
    if (text.indexOf("e-") > -1) {
      let [base, trail] = text.split("e-");
      let deg = parseInt(trail, 10);
      return deg;
    }
    if (Math.floor(value) !== value) {
      return value.toString().split(".")[1].length || 0;
    }
    return 0;
  };
  const onQuoteCurrencyValueChange = (e) => {
    let isDecimal = /^[-+]?[0-9]+\.[0-9]+$/.test(e.target.value);
    if (isDecimal) {
      let noDigitAfterDecimal = countDecimals(e.target.value);
      if (noDigitAfterDecimal > 2) {
        e.preventDefault();
      } else {
        if (e.keyCode === 8) {
          setQuoteCurrencyValue(e.target.value);
        }
        else {
          setQuoteCurrencyValue(e.target.value);
        }
      }
    }
    else {
      if (e.keyCode === 8) {
        setQuoteCurrencyValue(e.target.value);
      }
      else {
        setQuoteCurrencyValue(e.target.value);
      }
    }
    if (swap) {
      const val =
        flagcodegbp === "US"
          ? baseCurrencyUSDValue
          : flagcodegbp === "GB"
            ? baseCurrencyGBPValue
            : baseCurrencyEURValue;
      setBaseCurrencyValue(bigDecimal.round(bigDecimal.multiply(e.target.value, val), 2));
    }
    else {
      const val =
        flagcodeeuro === "US"
          ? baseCurrencyUSDValue
          : flagcodeeuro === "GB"
            ? baseCurrencyGBPValue
            : baseCurrencyEURValue
      setBaseCurrencyValue(bigDecimal.round(bigDecimal.multiply(e.target.value, val), 2));
    }
  }
  const actualLimit = (bal) => {
    let temp = bal ? bal.toString() : "0";
    if (temp) {
      temp = temp.split(".");
    } else {
      return temp;
    }
    let n = temp[1] ? "" + temp[1] : "0";
    let x = n && (n + "0000").substring(0, 4);
    return x ? temp[0] + "." + x : "0.0000";
  };
  const onSwap = () => {
    if (swap) {
      setSwap(false);
      setLoading(true);
      callApi(
        FirebaseEndPoints.IndividualExchangeRates + `/${flagcodegbp}`,
        "get",
        ""
      )
        .then((doc) => {
          setBaseCurrencyEURValue(doc.fields.eur.stringValue);
          setBaseCurrencyGBPValue(doc.fields.gbp.stringValue);
          setBaseCurrencyUSDValue(doc.fields.usd.stringValue);
          const val =
            flagcodeeuro === "US"
              ? doc.fields.usd.stringValue
              : flagcodeeuro === "GB"
                ? doc.fields.gbp.stringValue
                : doc.fields.eur.stringValue;
          setQuoteCurrencyValue(bigDecimal.round(bigDecimal.multiply(baseCurrencyValue, val), 2));
          setLoading(false);
        })
        .catch(() => { });
    } else {
      setSwap(true);
      setLoading(true);
      callApi(
        FirebaseEndPoints.IndividualExchangeRates + `/${flagcodeeuro}`,
        "get",
        ""
      )
        .then((doc) => {
          setBaseCurrencyEURValue(doc.fields.eur.stringValue);
          setBaseCurrencyGBPValue(doc.fields.gbp.stringValue);
          setBaseCurrencyUSDValue(doc.fields.usd.stringValue);
          const val =
            flagcodegbp === "US"
              ? doc.fields.usd.stringValue
              : flagcodegbp === "GB"
                ? doc.fields.gbp.stringValue
                : doc.fields.eur.stringValue;
          setQuoteCurrencyValue(bigDecimal.round(bigDecimal.multiply(baseCurrencyValue, val), 2));
          setLoading(false);
        })
        .catch(() => { });
    }
  };
  return (
    <>
      <Head>
        <title>{i18n.t("Online_Currency_Exchange_1")}</title>
        <meta name="description" content={i18n.t("Online_Currency_Exchange_Meta_Description")} />
        <link
          rel="canonical"
          href="https://www.cashero.com/ph/online-currency-exchange/"
        />
        <link rel="alternate" hreflang="tl-PH" href="https://www.cashero.com/ph/online-currency-exchange/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/ph/online-currency-exchange/" />
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
      <div className="ExchangeBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="PersonalCont">
                <h1 className="noBreakBannerHeading">{i18n.t("Online_Currency_Exchange")}</h1>
                <p className="White">{i18n.t("Online_Currency_Exchange_Rates_P")}</p>
                <TextfieldBanner />
                <ul className="PersonalList list-unstyled">
                  <li>
                    <img alt="Clock" src={Clock} />
                    {i18n.t("Open_an_account_in_minutes")}
                  </li>
                </ul>
                <p className="draw-banner-text noBreakBannerHeading">{i18n.t("Open_an_account_in_minutes_P")} <Link className="giveaway-link1" link="/ph/giveaway">{i18n.t("TERMS_AND_CONDITIONS")}</Link> {i18n.t("apply")} </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="Converter">
                {swap ? (
                  <div className="swapBox">
                    <div className="SwapRow">
                      <div className="ConverterFlags">
                        <div className="numberSelection">
                          <div className="selectCountry">
                            <Dropdown
                              isOpen={dropdownOpeneuro}
                              toggle={toggleeuro}
                            >
                              <DropdownToggle caret>
                                <div className="CountryFlag">
                                  <span className="FlagIcon">{flageuro}</span>
                                </div>
                                <span className="FlagCode">
                                  {flagcurrencyeuro}
                                </span>
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem header>
                                  <>
                                    <SearchIcon />
                                    <input
                                      type="text"
                                      value={searchTermeuro}
                                      onChange={handleChangeeuro}
                                    />
                                  </>
                                </DropdownItem>
                                <div className="country-list">
                                  {searchResults2euro.length > 0
                                    ? searchResults2euro.map((item, index) => (
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
                                    : searchResultseuro.map((item, index) => (
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
                      <div className="ConverterInput">
                        <div className="currencySymbol">
                          {quoteCurrency}&nbsp;
                        </div>
                        <TextField
                          fullWidth
                          value={quoteCurrencyValue}
                          onChange={onQuoteCurrencyValueChange}
                          type="number"
                          variant="standard"
                          className="PersonalBoxFieldGet"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="ConBox">
                    <div className="GbpRow">
                      <div className="ConverterFlags">
                        <div className="numberSelection">
                          <div className="selectCountry">
                            <Dropdown
                              isOpen={dropdownOpengbp}
                              toggle={togglegbp}
                            >
                              <DropdownToggle caret>
                                <div className="CountryFlag">
                                  <span className="FlagIcon">{flaggbp} </span>
                                </div>
                                <span className="FlagCode">
                                  {flagcurrencygbp}
                                </span>
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
                      <div className="ConverterInput">
                        <div className="currencySymbol">
                          {baseCurrency}&nbsp;
                        </div>
                        <TextField
                          value={baseCurrencyValue}
                          onChange={onBaseCurrencyValueChange}
                          fullWidth
                          type="number"
                          variant="standard"
                          className="PersonalBoxFieldGet"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="ExchangeBox">
                  {flagcodeeuro === flagcodegbp ? (
                    ""
                  ) : (
                    <div className="exchangeAmount">
                      <div className="ExchangeImg">
                        <img alt="Coin Image" height="47px" width="47px" onClick={onSwap} src={ConImg} />
                      </div>
                      <div className="ExchangeNum">
                        {loading ? (
                          <p>{i18n.t("Fetching_Rates")}</p>
                        ) : swap ? (
                          <p>
                            {quoteCurrency}1 = {baseCurrency}
                            {flagcodegbp === "US"
                              ? actualLimit(baseCurrencyUSDValue)
                              : flagcodegbp === "GB"
                                ? actualLimit(baseCurrencyGBPValue)
                                : actualLimit(baseCurrencyEURValue)}
                          </p>
                        ) : (
                          <p>
                            {baseCurrency}1 = {quoteCurrency}
                            {flagcodeeuro === "US"
                              ? actualLimit(baseCurrencyUSDValue)
                              : flagcodeeuro === "GB"
                                ? actualLimit(baseCurrencyGBPValue)
                                : actualLimit(baseCurrencyEURValue)}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  {swap ? (
                    <div className="SwapGbpRow">
                      <div className="ConverterFlags">
                        <div className="numberSelection">
                          <div className="selectCountry">
                            <Dropdown
                              isOpen={dropdownOpengbp}
                              toggle={togglegbp}
                            >
                              <DropdownToggle caret>
                                <div className="CountryFlag">
                                  <span className="FlagIcon">{flaggbp} </span>
                                </div>
                                <span className="FlagCode">
                                  {flagcurrencygbp}
                                </span>
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
                      <div className="ConverterInput">
                        <div className="currencySymbol">
                          {baseCurrency}&nbsp;
                        </div>
                        <TextField
                          value={baseCurrencyValue}
                          onChange={onBaseCurrencyValueChange}
                          fullWidth
                          type="number"
                          variant="standard"
                          className="PersonalBoxFieldGet"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="EuroRow">
                      <div className="ConverterFlags">
                        <div className="numberSelection">
                          <div className="selectCountry">
                            <Dropdown
                              isOpen={dropdownOpeneuro}
                              toggle={toggleeuro}
                            >
                              <DropdownToggle caret>
                                <div className="CountryFlag">
                                  <span className="FlagIcon">{flageuro}</span>
                                </div>
                                <span className="FlagCode">
                                  {flagcurrencyeuro}
                                </span>
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem header>
                                  <>
                                    <SearchIcon />
                                    <input
                                      type="text"
                                      value={searchTermeuro}
                                      onChange={handleChangeeuro}
                                    />
                                  </>
                                </DropdownItem>
                                <div className="country-list">
                                  {searchResults2euro.length > 0
                                    ? searchResults2euro.map((item, index) => (
                                      <DropdownItem
                                        key={index + 1}
                                        onClick={() =>
                                          selectCountryeuro(item)
                                        }
                                        className="country-item"
                                      >
                                        <div className="flag-name">
                                          <span>{item.flag}</span>
                                          {item.name}
                                        </div>
                                      </DropdownItem>
                                    ))
                                    : searchResultseuro.map((item, index) => (
                                      <DropdownItem
                                        key={index + 1}
                                        onClick={() =>
                                          selectCountryeuro(item)
                                        }
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
                      <div className="ConverterInput">
                        <div className="currencySymbol">
                          {quoteCurrency}&nbsp;
                        </div>
                        <TextField
                          fullWidth
                          value={quoteCurrencyValue}
                          onChange={onQuoteCurrencyValueChange}
                          type="number"
                          variant="standard"
                          className="PersonalBoxFieldGet"
                        />
                      </div>
                    </div>
                  )}
                  <ul className="NofeeList list-unstyled">
                    <li>{i18n.t("No_fee_added_by_Cashero")}</li>
                  </ul>
                  <button
                    onClick={appModalOpen}
                    className="btn btn-default ConvertBtn"
                  >
                    {i18n.t("Get_Started")}
                  </button>
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
              <li>
                <img src={ExArrow} height="24px" width="24px" alt="Exchange Arrow" />
                {i18n.t("Exchange_Rates_li1")}
              </li>
              <li>
                <img src={ExDollar} alt="Exchange Dollar" />
                {i18n.t("Exchange_Rates_li2")}
              </li>
              <li>
                <img src={Draw} alt="Draw" />
                {i18n.t("Exchange_Rates_li3")}
              </li>
              <li>
                <img src={listHome} alt="list Home" />
                {i18n.t("Multi_Currency_Savings_Account_li4")}
              </li>
            </ul>
          </div>
        </div>
        <OnlineSave />
        <EasyCurrencyExchange />
      </div>
      <div className="container">
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
                  <img className="img-fluid" height="100%" width="100%" alt="Favourite" src={Fav} />
                  <h3>{i18n.t("Multi_Currency_Savings_Account_Work1")}</h3>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
              <div className="GetStartedBox2 w-100">
                <img className="img-fluid" height="100%" width="121px" alt="Currencies" src={Currencies} />
                <h3>
                  {i18n.t("Exchange_Rates_Work2")}
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
              <Fade triggerOnce direction="right">
                <div className="GetStartedBox3 w-100">
                  <img
                    className="img-fluid"
                    height="152px" width="152px"
                    alt="Moving Coins"
                    src={MovingCoins}
                  />
                  <h3>{i18n.t("Exchange_Rates_Work3")} </h3>
                </div>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-1 col-md-10">
              <div className="MultistepsCont">
                <p>
                  {i18n.t("Exchange_Rates_Work_P")}
                </p>
                <button onClick={appModalOpen} className="LinkBtn">
                  {i18n.t("Get_Early_Access")}
                  <img className="ArrowBtn" height="24px" width="24px" alt="arrow" src={Arrow1} />
                </button>
              </div>
            </div>
          </div>
          {appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
        </div>
      </div>
      <PeoplesSection />
      <div className="container">
        <QuestionTabs activeTab={3} />
      </div>
      <SignupSection />
    </>
  );
}

export default connect(withTranslation()(ExchangeRates));
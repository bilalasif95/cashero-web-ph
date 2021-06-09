import React, { useEffect, useState } from "react";
import Check from "../../assets/check-mark2.png";
import listGraph from "../../assets/listGraph.svg";
import HighDollar from "../../assets/HighDollar.svg";
import Draw from "../../assets/draw.svg";
import listHome from "../../assets/listHome.svg";
import { callApi } from "../../config/call-api";
import { EndPoints, counrtrylist, recaptchaSiteKep, ipAPI } from "../../config/config";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import CompaignNoEffort from "../compaignNoEffort/compaignNoEffort";
import Savings from "../campaignSavings/campaignSavings";
import CampaignTabs from "../campaignTabs/campaignTabs";
import SearchIcon from "@material-ui/icons/Search";
import CampaignSignup from "../campaignSignup/campaignSignup";
import ThanksModal from "../ThanksModal/ThanksModal";
import { Head } from "frontity";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "../link";
import { withTranslation } from "react-i18next";

const Personal = ({ i18n }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [code, setCode] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(counrtrylist);
  const [searchResults2, setSearchResults2] = useState([]);
  const [newPhone, setNewPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenoLength, setPhoneNoLength] = useState(0);
  const [openSuccessModal, setSuccessModal] = useState(false);
  const [error, setError] = useState("");
  const toggle = () => {
    setSearchTerm("");
    setDropdownOpen((prevState) => !prevState);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const results = searchResults.filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        country.dial_code.includes(searchTerm.toLocaleLowerCase())
    );
    setSearchResults2(results);
  };
  const onCaptchaHandler = (value) => {
    setValue(value);
  };
  const selectCountry = (country) => {
    setCode(country.dial_code);
    setPhoneNoLength(country.phone_length);
    setSearchTerm("");
    setSearchResults2(counrtrylist);
  };
  const thanksModalClose = () => {
    setSuccessModal(false);
  };
  useEffect(() => {
    callApi(ipAPI, "get")
      .then((res) => {
        if (res.success) {
          setCode(res.country_phone);
          const countryCode = counrtrylist.filter(({ code }) => code === res.country_code)
          setPhoneNoLength(countryCode[0].phone_length)
        }
        else {
          setCode("+1");
          setPhoneNoLength(10);
        }
      }).catch(() => {
        setCode("+1");
        setPhoneNoLength(10);
      })
  }, [])
  const handleOnChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  const getStarted = () => {
    setLoading(true);
    setError("");
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setLoading(false);
      setError("Invalid Email.")
    }
    else {
      callApi(EndPoints.contactUs, "post", "", {
        name: name,
        email: email,
        message: newPhone,
      }, i18n.language)
        .then((res) => {
          setLoading(false);
          setSuccessModal(true);
          setName("");
          setEmail("");
          setError("");
          setNewPhoneNumber("");
          setValue("");
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }
  };
  return (
    <>
      <Head>
        <link rel="alternate" hreflang="en-US" href="https://www.cashero.com/en/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/en/" />
        <meta name="robots" content="noodp, noydir, noindex, nofollow, archive" />
      </Head>
      <div className="PesonalBanner InterestBanner compaign-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="PersonalCont">
                <p className="text-uppercase bannerPara font-medium">Do your savings need a lifeline? <span className="br-block"></span> cashero is on the way!</p>
                <h1>{i18n.t("High_Yield")} <span className="br-block-with-no-display"></span> {i18n.t("Savings_Account")}</h1>
                <div className="Banner-list compaignList">
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                    Get up to 5% APY saving
                    </h2>
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                    Deposit in [local], earn in USD
                  </h2>
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                     Exchange currencies, send money abroad & make instant payments
                  </h2>
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                     No hidden fees, no minimum balance, no stress :)
                  </h2>
                </div>
                <p className="bannerPara font-medium">With Cashero, we protect your value for money and <span className="br-block"></span> maximize your savings. Get higher returns and make your <span className="br-block"></span> money works for you.</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="compaignForm">
                <h2 className="text-center">Cashero is on the way!</h2>
                <p className="text-center">We are launching multinationally. <span className="br-block"></span> Be the first to earn with Cashero in [country name]. <span className="br-block"></span> Join the waitlist, today. </p>
                <form className="compaignFormCont">
                  <div className="form-group">
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" />
                  </div>
                  <div className="compaign-select form-group mb-0 mt-0 p-0">
                    <div className="numberSelection m-0">
                      <div className="selectCountry">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                          <DropdownToggle caret className="border-bottom-0">
                            <input type="text" placeholder={i18n.t("Code")} readOnly value={code} />
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>
                              <>
                                <SearchIcon />
                                <input
                                  type="text"
                                  placeholder={i18n.t("Country")}
                                  value={searchTerm}
                                  onChange={handleChange}
                                />
                              </>
                            </DropdownItem>
                            <div className="country-list">
                              {searchResults2.length > 0
                                ? searchResults2.map((item, index) => (
                                  <DropdownItem
                                    key={index + 1}
                                    onClick={() => selectCountry(item)}
                                    className="country-item"
                                  >
                                    <div className="flag-name">
                                      <span>{item.flag}</span>
                                      {item.name}
                                    </div>
                                    <div className="code">{item.dial_code}</div>
                                  </DropdownItem>
                                ))
                                : searchResults.map((item, index) => (
                                  <DropdownItem
                                    key={index + 1}
                                    onClick={() => selectCountry(item)}
                                    className="country-item"
                                  >
                                    <div className="flag-name">
                                      <span>{item.flag}</span>
                                      {item.name}
                                    </div>
                                    <div className="code">{item.dial_code}</div>
                                  </DropdownItem>
                                ))}
                            </div>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                      <div className="inputNum width80">
                        <input
                          className="form-control"
                          type="number"
                          placeholder={i18n.t("Phone_number")}
                          value={newPhone}
                          onChange={(e) => handleOnChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="captcha-cont">
                    <ReCAPTCHA
                      className="g-recaptcha"
                      data-theme="light"
                      sitekey={recaptchaSiteKep}
                      onChange={onCaptchaHandler}
                      height="140px"
                      width="100%"
                    />
                  </div>
                  {error && <label className="contactUsFormError">{error}</label>}
                  <button onClick={() => getStarted()} disabled={!name || !value || loading || !newPhone.length || (newPhone.length !== phonenoLength)}
                    className={
                      !name || !value || loading || !newPhone.length || (newPhone.length !== phonenoLength)
                        ? "btn btn-default Compaignbtn disabled"
                        : "btn btn-default Compaignbtn"
                    }>Join the Waitlist</button>
                  <a href="https://www.cashero.com/terms/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
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
                  <img src={listGraph} />
                  <p>Deposit in [local] <span className="br-block"></span> earn in USD</p>
                </div>
                <div className="inflation-cont text-center">
                  <img src={Draw} />
                  <p>Interest paid out <span className="br-block"></span> daily</p>
                </div>
                <div className="inflation-cont text-center">
                  <img src={listHome} />
                  <p>Deposit or withdraw your <span className="br-block"></span> money at any time</p>
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
      {openSuccessModal && (
        <ThanksModal open={openSuccessModal} handleClose={thanksModalClose} />
      )}
      <CampaignTabs />
      <CampaignSignup />
    </>
  );
}

export default withTranslation()(Personal);

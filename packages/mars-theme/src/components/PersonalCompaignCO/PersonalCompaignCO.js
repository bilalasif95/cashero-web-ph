import React, { useEffect, useState } from "react";
import Check from "../../assets/check-mark2.png";
import { parse as parseQs } from "qs";
import depositUSD from "../../assets/depositUSD.svg";
import inflation from "../../assets/inflation.svg";
import interestpaid from "../../assets/interestpaid.svg";
import depositmoneytime from "../../assets/depositmoneytime.svg";
import { callApi } from "../../config/call-api";
import { EndPoints, counrtrylist, recaptchaSiteKep, ipAPI } from "../../config/config";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import CompaignNoEffort from "../compaignNoEffort/compaignNoEffort";
import Savings from "../campaignSavings/campaignSavings";
import CampaignTabs from "../campaignTabs/campaignTabs";
import SearchIcon from "@material-ui/icons/Search";
import CampaignSignup from "../campaignSignup/campaignSignup";
import CompaignThanksModal from "../CompaignThanksModal/CompaignThanksModal";
import { Head } from "frontity";
import ReCAPTCHA from "react-google-recaptcha";
import { withTranslation } from "react-i18next";

const PersonalCompaignCO = ({ i18n }) => {
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
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmContent, setUtmContent] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [utmTerm, setUtmTerm] = useState("");
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
    i18n.changeLanguage("malay")
    const qs = parseQs(window.location.search.substr(1));
    setUtmCampaign(qs.utm_campaign)
    setUtmContent(qs.utm_content)
    setUtmMedium(qs.utm_medium)
    setUtmSource(qs.utm_source)
    setUtmTerm(qs.utm_term)
    setSearchResults(counrtrylist);
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
      callApi(EndPoints.joinWaitlist, "post", "", {
        Name: name,
        Email: email,
        Phone: newPhone,
        CountryCode: code,
        UtmCampaign: utmCampaign,
        UtmContent: utmContent,
        UtmMedium: utmMedium,
        UtmSource: utmSource,
        UtmTerm: utmTerm
      }, i18n.language)
        .then(() => {
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
        <link rel="alternate" hreflang="es-CO" href="https://www.cashero.com/co/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/co/" />
        <meta name="robots" content="noodp, noydir, noindex, nofollow, archive" />
      </Head>
      <div className="PesonalCompaignBanner compaign-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="PersonalCont">
                <p className="text-uppercase bannerPara font-medium">{i18n.t("Compaign_1")}<span className="br-block"></span>{i18n.t("Compaign_2")}</p>
                <h1>{i18n.t("High_Yield")} <span className="br-block-with-no-display"></span> {i18n.t("Savings_Account")}</h1>
                <div className="Banner-list compaignList">
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                    {i18n.t("Compaign_Img_1")}
                  </h2>
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                    {i18n.t("Compaign_Img_2_1")}
                  </h2>
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                    {i18n.t("Compaign_Img_3")}
                  </h2>
                  <h2 className="bannerText">
                    <img src={Check} alt="check" />
                    {i18n.t("Compaign_Img_4")}
                  </h2>
                </div>
                <p className="bannerPara font-medium">{i18n.t("Compaign_P")}</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="compaignForm">
                <h2 className="text-center">{i18n.t("Compaign_2")}</h2>
                <p className="text-center">{i18n.t("Compaign_Launch_1")}<span className="br-block"></span>{i18n.t("Compaign_Launch_2")} Columbia.<span className="br-block"></span>{i18n.t("Compaign_Launch_3")}</p>
                <div className="compaignFormCont">
                  <div className="form-group">
                    <input type="text" className="form-control" autoFocus={true} value={name} onChange={e => setName(e.target.value)} placeholder={i18n.t("Enter_Name")} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder={i18n.t("Enter_Email")} />
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
                      hl="es"
                      width="100%"
                    />
                  </div>
                  {error && <label className="contactUsFormError">{error}</label>}
                  <button onClick={() => getStarted()} disabled={!email || !name || !value || loading || !newPhone.length || (newPhone.length !== phonenoLength)}
                    className={
                      !email || !name || !value || loading || !newPhone.length || (newPhone.length !== phonenoLength)
                        ? "btn btn-default Compaignbtn disabled"
                        : "btn btn-default Compaignbtn"
                    }>{i18n.t("Join_the_Waitlist")}</button>
                  <a href="https://www.cashero.com/terms/" target="_blank" rel="noopener noreferrer">{i18n.t("Terms_And_Conditions")}</a>
                </div>
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
                  <img src={inflation} />
                  <p>{i18n.t("PersonalPage_li1")}</p>
                </div>
                <div className="inflation-cont text-center">
                  <img src={depositUSD} />
                  <p>{i18n.t("Compaign_Img_2_1")}</p>
                </div>
                <div className="inflation-cont text-center">
                  <img src={interestpaid} />
                  <p>{i18n.t("PersonalPage_li2")}</p>
                </div>
                <div className="inflation-cont text-center">
                  <img src={depositmoneytime} />
                  <p>{i18n.t("PersonalPage_li3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompaignNoEffort lang="co" />
      <div className="container">
        <Savings />
      </div>
      {openSuccessModal && <CompaignThanksModal open={openSuccessModal} handleClose={thanksModalClose} lang="co" />}
      <CampaignTabs />
      <CampaignSignup />
    </>
  );
}

export default withTranslation()(PersonalCompaignCO);

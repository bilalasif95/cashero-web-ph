import React, { useState, useEffect } from "react";
import { parse as parseQs } from "qs";
import { styled } from "frontity";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { callApi } from "../../config/call-api";
import { EndPoints, counrtrylist, androidAppLink, iosAppLink, recaptchaSiteKep, ipAPI } from "../../config/config";
import ThanksModal from "../ThanksModal/ThanksModal";
import Link from "../link";
import Android from "../../assets/AndroidApp.svg";
import AndroidBR from "../../assets/AndroidAppBR.svg";
import IOS from "../../assets/iOSApp.svg";
import IOSBR from "../../assets/iOSAppBR.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { withTranslation } from "react-i18next";

const GetTheAppModal = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [code, setCode] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(counrtrylist);
  const [searchResults2, setSearchResults2] = useState([]);
  const [phonenoLength, setPhoneNoLength] = useState(0);
  const [newPhone, setNewPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmContent, setUtmContent] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [utmTerm, setUtmTerm] = useState("");
  const [innerWidth, setInnerWidth] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openSuccessModal, setSuccessModal] = useState(false);
  useEffect(() => {
    setSearchResults(counrtrylist);
    setInnerWidth(window.innerWidth)
  }, []);
  const thanksModalClose = () => {
    setSuccessModal(false);
    props.handleClose();
  };
  const toggle = () => {
    setSearchTerm("");
    setDropdownOpen((prevState) => !prevState);
  };
  const selectCountry = (country) => {
    setCode(country.dial_code);
    setPhoneNoLength(country.phone_length);
    setSearchTerm("");
    setSearchResults2(counrtrylist);
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
  const handleOnChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  const { open, handleClose, i18n } = props;
  const getStarted = () => {
    setLoading(true);
    callApi(EndPoints.preregistration, "post", "", {
      Phone: newPhone,
      CountryCode: code,
      UtmCampaign: utmCampaign,
      UtmContent: utmContent,
      UtmMedium: utmMedium,
      UtmSource: utmSource,
      UtmTerm: utmTerm
    }, i18n.language)
      .then((res) => {
        setLoading(false);
        if (res.code === 400) {
          setError(res.message);
        } else {
          setNewPhoneNumber("");
          setValue("");
          setSuccessModal(true);
        }
      })
      .catch(() => {
        setLoading(false);
        setError("Invalid phone number.");
      });
  };
  useEffect(() => {
    const qs = parseQs(window.location.search.substr(1));
    setUtmCampaign(qs.utm_campaign)
    setUtmContent(qs.utm_content)
    setUtmMedium(qs.utm_medium)
    setUtmSource(qs.utm_source)
    setUtmTerm(qs.utm_term)
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
  const onCaptchaHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="GetAppModal">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Paper>
          <IconButton
            aria-label="Close"
            className="closeButton"
            onClick={() => handleClose()}
          >
            <CloseIcon />
          </IconButton>
          {innerWidth <= 540 ?
            <div className="mobileJoinApp">
              <div>
                <h2 className="ModalTitle" id="transition-modal-title">
                  {i18n.t("Join_Cashero_in")} <span className="br-block highInterestHeading"></span>{i18n.t("seconds")}
                </h2>
                <ul className="list-unstyled MobileAppList">
                  <li><a href={androidAppLink} target="_blank" rel="noopener noreferrer"><img alt="Android" src={i18n.language === "brazilian" ? AndroidBR : Android} /></a></li>
                  <li><a href={iosAppLink} target="_blank" rel="noopener noreferrer"><img alt="IOS" src={i18n.language === "brazilian" ? IOSBR : IOS} /></a></li>
                </ul>
              </div>
            </div> :
            <div className="joinApp">
              <div className="inner-content">
                <h2 className="ModalTitle" id="transition-modal-title">
                  {i18n.t("Your_moneys_superhero_awaits")}
                </h2>
                <p id="transition-modal-description">
                  {/* Enter your phone number to join our waitlist. */}
                  {i18n.t("We_will_send_you_a_message_with_a_link_to_download_the_app")}
                </p>
                <p id="transition-modal-description">
                  {i18n.t("You_will_also_earn_a_chance_to_win_1000_every_3_days")} <span onClick={() => handleClose()}><Link className="giveaway-link2" link="/giveaway">{i18n.t("TERMS_AND_CONDITIONS")}</Link></span> {i18n.t("apply")}
                </p>
                <div className="ModalPhone">
                  <div className="numberSelection">
                    <div className="selectCountry">
                      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
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
                    <div className="inputNum">
                      <input
                        type="number"
                        placeholder={i18n.t("Phone_number")}
                        value={newPhone}
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                    <button
                      onClick={() => getStarted()}
                      disabled={loading || !newPhone.length || (newPhone.length !== phonenoLength) || !value}
                      className={
                        loading || !newPhone.length || (newPhone.length !== phonenoLength) || !value
                          ? "btn btn-primary my-2 my-sm-0 Appbtn d-none d-sm-none d-md-block disabled"
                          : "btn btn-primary my-2 my-sm-0 Appbtn d-none d-sm-none d-md-block"
                      }
                      type="submit"
                    >
                      {i18n.t("Get_Early_Access")}
                    </button>
                    {error &&
                      <label className="phoneNumberError">
                        {error}
                      </label>
                    }
                  </div>
                  <button
                    onClick={() => getStarted()}
                    disabled={loading || !newPhone.length || (newPhone.length !== phonenoLength) || !value}
                    className={
                      loading || !newPhone.length || (newPhone.length !== phonenoLength) || !value
                        ? "btn btn-primary my-2 my-sm-0 Appbtn d-md-none d-sm-block JoinCasheroBtn disabled"
                        : "btn btn-primary my-2 my-sm-0 Appbtn d-md-none d-sm-block JoinCasheroBtn"
                    }
                    type="submit"
                  >
                    {i18n.t("Get_Early_Access")}
                  </button>
                  {error &&
                    <label className="phoneNumberError">
                      {error}
                    </label>
                  }
                  <div className="captcha-cont">
                    <ReCAPTCHA
                      className="g-recaptcha"
                      data-theme="light"
                      sitekey={recaptchaSiteKep}
                      onChange={onCaptchaHandler}
                      height="140px"
                      width="100%"
                      hl={i18n.language === "brazilian" ? "pt-BR" : "en"}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
        </Paper>
      </Modal>
      {openSuccessModal && (
        <ThanksModal open={openSuccessModal} handleClose={thanksModalClose} />
      )}
    </div>
  );
}

export default withTranslation()(GetTheAppModal);

const Paper = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
  padding: 16px 32px 24px;
  width: 100% !important;
  height: 100vh !important;
  @media(max-width: 540px){
    display: flex;
    justify-content: center;
  },
  .MuiButtonBase-root {
    top: 81px;
    right: 86px;
    position: absolute;
   @media(max-width: 540px){
      top: 0px;
      right: 0px;
    },
  }
`;

import React, { useEffect, useState } from "react";
import { parse as parseQs } from "qs";
import { callApi } from "../../config/call-api";
import { EndPoints, counrtrylist, recaptchaSiteKep, ipAPI } from "../../config/config";
import ThanksModal from "../ThanksModal/ThanksModal";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import SearchIcon from "@material-ui/icons/Search";
import ReCAPTCHA from "react-google-recaptcha";
import { withTranslation } from "react-i18next";

const TextfieldBanner = ({ i18n }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openSuccessModal, setSuccessModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(counrtrylist);
  const [searchResults2, setSearchResults2] = useState([]);
  const [code, setCode] = useState("");
  const [value, setValue] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmContent, setUtmContent] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [utmTerm, setUtmTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [phonenoLength, setPhoneNoLength] = useState(0);
  const toggle = () => {
    setSearchTerm("");
    setDropdownOpen((prevState) => !prevState);
  };
  const [newPhone, setNewPhoneNumber] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const results = searchResults.filter(
      (country) =>
        country.name_ph.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        country.dial_code.includes(searchTerm.toLocaleLowerCase())
    );
    setSearchResults2(results);
  };
  const selectCountry = (country) => {
    setCode(country.dial_code);
    // setPhoneNoLength(country.phone_length);
    setSearchTerm("");
    setSearchResults2(counrtrylist);
  };
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
    })
      .then((res) => {
        setLoading(false);
        if (res.code === 1000) {
          setNewPhoneNumber("");
          // setValue("");
          setSuccessModal(true);
        } else {
          setError("May nangyaring mali.");
        }
      })
      .catch(() => {
        setLoading(false);
        setError("May nangyaring mali.");
      });
  };
  const handleOnChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  const thanksModalClose = () => {
    setSuccessModal(false);
  };
  useEffect(() => {
    setSearchResults(counrtrylist);
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
          // const countryCode = counrtrylist.filter(({ code }) => code === res.country_code)
          // setPhoneNoLength(countryCode[0].phone_length)
        }
        else {
          setCode("+63");
          // setPhoneNoLength(10);
        }
      }).catch(() => {
        setCode("+63");
        // setPhoneNoLength(10);
      })
  }, [])
  const onCaptchaHandler = (value) => {
    setValue(value);
  };
  return (
    <div>
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
                        {item.name_ph}
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
                        {item.name_ph}
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
          disabled={loading || !newPhone.length || (!/^[0-9]{7,15}$/.test(newPhone)) || !value}
          className={
            loading || !newPhone.length || (!/^[0-9]{7,15}$/.test(newPhone)) || !value
              ? "btn btn-primary my-2 my-sm-0 Appbtn disabled"
              : "btn btn-primary my-2 my-sm-0 Appbtn"
          }
          type="submit"
        >
          {i18n.t("Get_Early_Access")}
        </button>
      </div>
      <div className="captcha-cont">
        <ReCAPTCHA
          className="g-recaptcha"
          data-theme="light"
          sitekey={recaptchaSiteKep}
          onChange={onCaptchaHandler}
          height="140px"
          width="100%"
          hl="fil"
        />
      </div>
      {error &&
        <label className="phoneNumberModalError">
          {error}
        </label>
      }
      {openSuccessModal && (
        <ThanksModal open={openSuccessModal} handleClose={thanksModalClose} />
      )}
    </div>
  );
}

export default withTranslation()(TextfieldBanner);
import React, { useEffect, useState } from "react";
// import TextField from "../../common/textFiled";
import { callApi } from "../../config/call-api";
import { EndPoints, counrtrylist } from "../../config/config";
import ThanksModal from "../ThanksModal/ThanksModal";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import SearchIcon from "@material-ui/icons/Search";

export function TextfieldBanner() {
  // const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openSuccessModal, setSuccessModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(counrtrylist);
  const [searchResults2, setSearchResults2] = useState([]);
  const [code, setCode] = useState("+1");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [phonenoLength, setPhoneNoLength] = useState(10);
  const toggle = () => {
    setSearchTerm("");
    setDropdownOpen((prevState) => !prevState);
  };
  const [newPhone, setNewPhoneNumber] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const results = searchResults.filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        country.dial_code.includes(searchTerm.toLocaleLowerCase())
    );
    setSearchResults2(results);
  };
  const selectCountry = (country) => {
    setCode(country.dial_code);
    setPhoneNoLength(country.phone_length);
    setSearchTerm("");
    setSearchResults2(counrtrylist);
  };
  const getStarted = () => {
    setLoading(true);
    let finalPhoneNumb = code + newPhone;
    callApi(EndPoints.preregistration, "post", "", {
      Phone: finalPhoneNumb,
    })
      .then((res) => {
        setLoading(false);
        if (res.code === 400) {
          setError(res.message);
        } else {
          setNewPhoneNumber("");
          setSuccessModal(true);
        }
      })
      .catch(() => {
        setLoading(false);
        setError("Invalid phone number.");
      });
  };
  const handleOnChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  // const onSubmit = () => {
  //   setLoading(true);
  //   callApi(EndPoints.preregistration, "post", "", {
  //     Phone: email,
  //   }).then(() => {
  //     setSuccessModal(true);
  //     setLoading(false);
  //     setEmail("");
  //   });
  // };
  const thanksModalClose = () => {
    setSuccessModal(false);
  };
  useEffect(() => {
    callApi("https://ipwhois.app/json/", "get")
      .then((res) => {
        if (res.success) {
          setCode(res.country_phone);
        }
        else {
          setCode("+1");
        }
      }).catch(() => {
        setCode("+1");
      })
  }, [])
  return (
    <div>
      {/* <div className="personalEmail">
				<TextField
					placeholder="Enter Email Address"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<div className="GetEarlyBtn">
					<button disabled={loading || !email || !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)} onClick={onSubmit} className="btn btn-default">Get Early Access</button>
				</div>
			</div> */}
      <div className="numberSelection">
        <div className="selectCountry">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              <input type="text" placeholder="Code" readOnly value={code} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <>
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Country"
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
            placeholder="Phone number"
            value={newPhone}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <button
          onClick={() => getStarted()}
          disabled={loading || !newPhone.length || (newPhone.length !== phonenoLength)}
          className={
            newPhone.length === phonenoLength
              ? "btn btn-primary my-2 my-sm-0 Appbtn "
              : "btn btn-primary my-2 my-sm-0 Appbtn disabled"
          }
          type="submit"
        >
          Get Early Access
        </button>
      </div>
      <label style={{ color: "red", width: "100%", textAlign: "left", paddingTop: "0.5rem" }}>
        {error}
      </label>
      {openSuccessModal && (
        <ThanksModal open={openSuccessModal} handleClose={thanksModalClose} />
      )}
    </div>
  );
}

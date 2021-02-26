import React, { useState } from "react";
import { styled } from "frontity";
import TextField from "../../common/textFiled";
import { callApi } from "../../config/call-api";
import { EndPoints, counrtrylist } from "../../config/config";
import ThanksModal from "../ThanksModal/ThanksModal";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import SearchIcon from "@material-ui/icons/Search";

export function SignupSection() {
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
  const [openSuccessModal, setSuccessModal] = useState(false);
  const [email, setEmail] = useState("");
  // const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setSuccessModal(false);
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
    let finalPhoneNumb = code + newPhone;
    callApi(EndPoints.preregistration, "post", "", {
      Phone: finalPhoneNumb,
      // CountryCode: updatecode,
    })
      .then((res) => {
        if (res.code === 400) {
          // setError(res.message);
        } else {
          setCode("+1");
          setNewPhoneNumber("");
          setSuccessModal(true);
        }
      })
      .catch(() => {
        // setError("Invalid phone number.");
      });
  };
  const handleOnChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  const onSubmit = () => {
    setLoading(true);
    callApi(EndPoints.preregistration, "post", "", {
      Phone: email,
    }).then(() => {
      setSuccessModal(true);
      setLoading(false);
      setEmail("");
    });
  };
  return (
    <>
      {openSuccessModal && (
        <ThanksModal open={openSuccessModal} handleClose={handleClose} />
      )}
      <div className="SignUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="SignUpTitle">Join Cashero</h1>
              <h3 className="SignUpText mb-0">
                Ready to make your money go further? Join Cashero and get early
                access.
              </h3>
              {/* <div className="SignInEmail">
								<TextField
									placeholder="Enter Email Address"
									autocomplete="off"
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
                      <input type="text" placeholder="Code" value={code} />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Paper = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
  padding: 16px 32px 24px;
  width: 100% !important;
  height: 100vh !important;
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

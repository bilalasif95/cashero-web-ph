import React, { useState, useEffect } from "react";
import { styled } from "frontity";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { callApi } from "../../config/call-api";
import { EndPoints, counrtrylist } from "../../config/config";
import ThanksModal from "../ThanksModal/ThanksModal";
// import Link from "../link";

export default function GetTheAppModal(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [code, setCode] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(counrtrylist);
  const [searchResults2, setSearchResults2] = useState([]);
  const [phonenoLength, setPhoneNoLength] = useState(0);
  const [newPhone, setNewPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSuccessModal, setSuccessModal] = useState(false);
  useEffect(() => {
    setSearchResults(counrtrylist);
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
  const getStarted = () => {
    setLoading(true);
    callApi(EndPoints.preregistration, "post", "", {
      Phone: newPhone,
      countryCode: code,
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
  useEffect(() => {
    callApi("https://ipwhois.app/json/", "get")
      .then((res) => {
        if (res.success) {
          setCode(res.country_phone);
          const countryCode = counrtrylist.filter(({ dial_code }) => dial_code === res.country_phone)
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
  const { open, handleClose } = props;
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
          <div className="joinApp">
            <div className="inner-content">
              <h2 className="ModalTitle" id="transition-modal-title">
                Your money’s superhero <span className="br-block-with-no-display"></span>is almost here.
              </h2>
              <p id="transition-modal-description">
                Enter your phone number to join our waitlist.
                {/* We’ll send you a message with a link to download the app. */}
              </p>
              {/* <p id="transition-modal-description">
                You’ll also earn a chance to win $1,000 every 3 days! <span onClick={() => handleClose()}><Link className="giveaway-link2" link="/giveaway">Terms and
                conditions</Link></span> apply.
              </p> */}
              <div className="ModalPhone">
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
                        ? "btn btn-primary my-2 my-sm-0 Appbtn d-none d-sm-none d-md-block"
                        : "btn btn-primary my-2 my-sm-0 Appbtn disabled d-none d-sm-none d-md-block"
                    }
                    type="submit"
                  >
                    Get Early Access
                  </button>
                  {error &&
                    <label className="phoneNumberError">
                      {error}
                    </label>
                  }
                </div>
                <button
                  onClick={() => getStarted()}
                  disabled={loading || !newPhone.length || (newPhone.length !== phonenoLength)}
                  className={
                    newPhone.length === phonenoLength
                      ? "btn btn-primary my-2 my-sm-0 Appbtn d-md-none d-sm-block JoinCasheroBtn"
                      : "btn btn-primary my-2 my-sm-0 Appbtn disabled d-md-none d-sm-block JoinCasheroBtn"
                  }
                  type="submit"
                >
                  Get Early Access
                </button>
                {error &&
                  <label className="phoneNumberError">
                    {error}
                  </label>
                }
              </div>
            </div>
          </div>
        </Paper>
      </Modal>
      {openSuccessModal && (
        <ThanksModal open={openSuccessModal} handleClose={thanksModalClose} />
      )}
    </div>
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

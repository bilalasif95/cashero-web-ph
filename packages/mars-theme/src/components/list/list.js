import React, { useEffect, useState } from "react";
import { connect } from "frontity";
// import { connect, styled, decode } from "frontity";
// import Item from "./list-item";
// import Pagination from "./pagination";
import Link from "../link";
import Logo from "../../assets/logo.svg";
import Close from "../../assets/clear.svg";
import close from "../../assets/close.svg";
import DropdownGraph from "../../assets/DropdownGraph.svg";
import DropdownArrow from "../../assets/DropdownArrow.svg";
import CharityImg from "../../assets/charityImg.svg";
import ThanksModal from "../ThanksModal/ThanksModal";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import Android from "../../assets/AndroidApp.svg";
import IOS from "../../assets/iOSApp.svg";
import { androidAppLink, iosAppLink, ipAPI } from "../../config/config";
import { withTranslation } from "react-i18next";
import { callApi } from "../../config/call-api";

const List = ({ i18n }) => {
  const [toggleBotton, setToggleBotton] = useState(false);
  const [personalToggleBotton, setPersonalToggleBotton] = useState(false);
  const [businessToggleBotton, setBusinessToggleBotton] = useState(false);
  const [donationsToggleBotton, setDonationsToggleBotton] = useState(false);
  const [languageToggleBotton, setLanguageToggleBotton] = useState(false);
  const [open, setOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  const [openSuccessModal, setSuccessModal] = useState(false);
  const [openDiv, setOpenDiv] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [Language, setLanguage] = useState(i18n.language);
  const onToggleButtonClicked = () => {
    if (toggleBotton) {
      return setToggleBotton(false);
    }
    setToggleBotton(true);
  };
  const onPersonalToggleButtonClicked = () => {
    if (personalToggleBotton) {
      return setPersonalToggleBotton(false);
    }
    setPersonalToggleBotton(true);
    setBusinessToggleBotton(false);
    setDonationsToggleBotton(false);
    setLanguageToggleBotton(false);
  };
  const onBusinessToggleButtonClicked = () => {
    if (businessToggleBotton) {
      return setBusinessToggleBotton(false);
    }
    setBusinessToggleBotton(true);
    setPersonalToggleBotton(false);
    setDonationsToggleBotton(false);
    setLanguageToggleBotton(false);
  };
  const onDonationsToggleButtonClicked = () => {
    if (donationsToggleBotton) {
      return setDonationsToggleBotton(false);
    }
    setDonationsToggleBotton(true);
    setBusinessToggleBotton(false);
    setPersonalToggleBotton(false);
    setLanguageToggleBotton(false);
  };
  const onLanguageToggleButtonClicked = () => {
    if (languageToggleBotton) {
      return setLanguageToggleBotton(false);
    }
    setLanguageToggleBotton(true);
    setDonationsToggleBotton(false);
    setBusinessToggleBotton(false);
    setPersonalToggleBotton(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSuccessModal(false);
  };
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    callApi(ipAPI, "get")
      .then((res) => {
        if (res.success) {
          if (res.country_code === "BR") {
            setLanguage("brazilian")
            i18n.changeLanguage("brazilian")
          }
          else {
            setLanguage("english")
            i18n.changeLanguage("english")
          }
        }
        else {
          setLanguage("english")
          i18n.changeLanguage("english")
        }
      }).catch(() => {
        setLanguage("english")
        i18n.changeLanguage("english")
      })
    setInnerWidth(window.innerWidth)
    window.addEventListener("scroll", handleScroll)
  }, []);
  const setLanguageLocal = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <div className={`${scrolled ? "active header" : "header"}`} id="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light customNav">
            <Link link="/" className="navbar-brand">
              <img className="Logo" alt="Logo" src={Logo} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={onToggleButtonClicked}
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {toggleBotton ? (
                <div>
                  <img src={Close} alt="Close" />
                </div>
              ) : (
                <>
                  <span className="navbar-toggler-icon"></span>
                  <div
                    data-testid="mobile-menu-icon"
                    className="StyledMenuIcon"
                  ></div>
                </>
              )}
            </button>
            <div
              className={toggleBotton ? "collapse navbar-collapse toggleButtonShow" : "collapse navbar-collapse"}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown" onClick={innerWidth < 992 ? onPersonalToggleButtonClicked : null}>
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {i18n.t("Personal")}
                  </a>
                  <div
                    className={personalToggleBotton ? "dropdown-menu toggleButtonShow" : "dropdown-menu"}
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="HeaderListCont">
                          <p className="ListTitle">
                            <img
                              alt="Dropdown Graph"
                              src={DropdownGraph}
                            />
                            {i18n.t("Wealth")}
                          </p>
                          <ul className="HeaderList list-unstyled">
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/high-yield-savings-account">
                                {i18n.t("High_Yield_Savings_Account_Menu")}
                              </Link>
                            </li>
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/multi-currency-savings-account">
                                {i18n.t("Multi_Currency_Savings_Account")}
                              </Link>
                            </li>
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/online-currency-exchange">
                                {i18n.t("Online_Currency_Exchange")}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="HeaderListCont">
                          <p className="ListTitle">
                            <img
                              src={DropdownArrow}
                              alt="Dropdown Arrow"
                            />
                            {i18n.t("Payments")}
                          </p>
                          <ul className="HeaderList list-unstyled">
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/instant-money-transfer">
                                {i18n.t("Instant_Money_Transfer")}
                              </Link>
                            </li>
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/transfer-money-abroad">
                                {i18n.t("Transfer_Money_Abroad")}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown" onClick={innerWidth < 992 ? onBusinessToggleButtonClicked : null}>
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {i18n.t("Business")}
                  </a>
                  <div
                    className={businessToggleBotton ? "dropdown-menu toggleButtonShow BusinessDropdown" : "dropdown-menu BusinessDropdown"}
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="HeaderListCont">
                          <p className="ListTitle">
                            <img
                              src={DropdownGraph}
                              alt="Dropdown Graph"
                            />
                            {i18n.t("Wealth")}
                          </p>
                          <ul className="HeaderList list-unstyled">
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/high-yield-savings-account">
                                {i18n.t("High_Yield_Savings_Account_Menu")}
                              </Link>
                            </li>
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/multi-currency-savings-account">
                                {i18n.t("Multi_Currency_Savings_Account")}
                              </Link>
                            </li>
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/online-currency-exchange">
                                {i18n.t("Online_Currency_Exchange")}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="HeaderListCont">
                          <p className="ListTitle">
                            <img
                              src={DropdownArrow}
                              alt="Dropdown Arrow"
                            />
                            {i18n.t("Payments")}
                          </p>
                          <ul className="HeaderList list-unstyled">
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/instant-money-transfer">
                                {i18n.t("Instant_Money_Transfer")}
                              </Link>
                            </li>
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/transfer-money-abroad">
                                {i18n.t("Transfer_Money_Abroad")}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown" onClick={innerWidth < 992 ? onDonationsToggleButtonClicked : null}>
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {i18n.t("Donations")}
                  </a>
                  <div
                    className={donationsToggleBotton ? "dropdown-menu toggleButtonShow CharityDropdown" : "dropdown-menu CharityDropdown"}
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="HeaderListCont">
                          <p className="ListTitle CharityTitle">
                            <img
                              src={CharityImg}
                              alt="Charity"
                            />
                            {i18n.t("Charities")}
                          </p>
                          <ul className="HeaderList list-unstyled">
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/donation">
                                {i18n.t("Donate")}
                              </Link>
                            </li>
                            <li onClick={() => setToggleBotton(false)}>
                              <Link link="/become-listed-charity">
                                {i18n.t("Become_a_Listed_Charity")}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item" onClick={() => setToggleBotton(false)}>
                  <Link link="/company" className="nav-link">
                    {i18n.t("Company")}
                  </Link>
                </li>
                <li className="nav-item" onClick={() => setToggleBotton(false)}>
                  <Link link="/contact-us" className="nav-link">
                    {i18n.t("Help")}
                  </Link>
                </li>
                <li className="nav-item dropdown languageDropdown" onClick={innerWidth < 992 ? onLanguageToggleButtonClicked : null}>
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {Language === "english" ? "Eng" : "Pt"}
                  </a>
                  <div
                    className={languageToggleBotton ? "dropdown-menu toggleButtonShow" : "dropdown-menu"}
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="HeaderListCont">
                          <ul className="HeaderList list-unstyled">
                            <li onClick={() => { setLanguageLocal("english"); setToggleBotton(false) }}>
                              English
                            </li>
                            <li onClick={() => { setLanguageLocal("brazilian"); setToggleBotton(false) }}>
                              Portuguese (Brazil)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <button
                className="btn btn-primary my-sm-0 Appbtn GetAppBtn"
                onClick={handleOpen}
              >
                {i18n.t("Get_Early_Access")}
              </button>
            </div>
          </nav>
        </div>
      </div>
      {openSuccessModal && (
        <ThanksModal
          open={openSuccessModal}
          handleClose={handleClose}
        />
      )}
      {open && (
        <GetTheAppModal
          open={open}
          handleClose={handleClose}
        />
      )}
      {openDiv ? (
        <div className="MobileGetAppBtn">
          <ul className="list-unstyled MobileAppList">
            <li><a href={androidAppLink} target="_blank" rel="noopener noreferrer"><img alt="Android" src={Android} /></a></li>
            <li><a href={iosAppLink} target="_blank" rel="noopener noreferrer"><img alt="IOS" src={IOS} /></a></li>
          </ul>
          {/* <button
            className="btn btn-primary my-2 my-sm-0 Appbtn GetAppBtn"
            onClick={handleOpen}
          >
            Get Early Access
					</button> */}
          <img
            className="GetAppClose"
            alt="close"
            src={close}
            onClick={() => setOpenDiv(false)}
          />
        </div>
      ) : (
        ""
      )}
    </>
    // <Container>
    //   {/* If the list is a taxonomy, we render a title. */}
    //   {data.isTaxonomy && (
    //     <Header>
    //       {data.taxonomy}:
    //       <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
    //     </Header>
    //   )}

    //   {/* If the list is for a specific author, we render a title. */}
    //   {data.isAuthor && (
    //     <Header>
    //       Author: <b>{decode(state.source.author[data.id].name)}</b>
    //     </Header>
    //   )}

    //   {/* Iterate over the items of the list. */}
    //   {data.items.map(({ type, id }) => {
    //     const item = state.source[type][id];
    //     // Render one Item component for each one.
    //     return <Item key={item.id} item={item} />;
    //   })}
    //   <Pagination />
    // </Container>
  );
};

export default connect(withTranslation()(List));

// const Container = styled.section`
//   width: 800px;
//   margin: 0;
//   padding: 24px;
//   list-style: none;
// `;

// const Content = styled.div`
//   background-color: #fff;
//   width: 100%;
//   height: 100vh;
// `;

// const Header = styled.h3`
//   font-weight: 300;
//   text-transform: capitalize;
//   color: rgba(12, 17, 43, 0.9);
// `;

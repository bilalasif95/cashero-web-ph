import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
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
import Wait2 from "../../assets/wait.svg";
import TextField from "../../common/textFiled";
import { callApi } from "../../config/call-api";
import { EndPoints } from "../../config/config";

const List = ({ state }) => {
  // const data = state.source.get(state.router.link);
  const [toggleBotton, setToggleBotton] = useState(false);
  const [personalToggleBotton, setPersonalToggleBotton] = useState(false);
  const [businessToggleBotton, setBusinessToggleBotton] = useState(false);
  const [donationsToggleBotton, setDonationsToggleBotton] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [openSuccessModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDiv, setOpenDiv] = useState(true);
  const [scrolled, setScrolled] = useState(false);
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
  };
  const onBusinessToggleButtonClicked = () => {
    if (businessToggleBotton) {
      return setBusinessToggleBotton(false);
    }
    setBusinessToggleBotton(true);
    setPersonalToggleBotton(false);
    setDonationsToggleBotton(false);
  };
  const onDonationsToggleButtonClicked = () => {
    if (donationsToggleBotton) {
      return setDonationsToggleBotton(false);
    }
    setDonationsToggleBotton(true);
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
  const closeBothModal = () => {
    setSuccessModal(false);
    setOpen(false);
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
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, []);
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
                  <img src={Close} alt="" />
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
                <li className="nav-item dropdown" onClick={onPersonalToggleButtonClicked}>
                  <a
                    className="nav-link dropdown-toggle"
                    // href="/personal"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Personal
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
                              alt=""
                              src={DropdownGraph}
                            />
														Wealth
													</p>
                          <ul className="HeaderList list-unstyled">
                            <li>
                              <Link link="/personal">
                                High Yield
                                Savings
                                Account
                              </Link>
                            </li>
                            <li>
                              <Link link="/currency-accounts">
                                Multi-Currency
                                Savings
                                Account
                              </Link>
                            </li>
                            <li>
                              <Link link="/exchange-rates">
                                Online
                                Currency
                                Exchange
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
                              alt=""
                            />
														Payments
													</p>
                          <ul className="HeaderList list-unstyled">
                            <li>
                              <Link link="/receive-payments">
                                Instant
                                Money
                                Transfer
                              </Link>
                            </li>
                            <li>
                              <Link link="/remittance">
                                Transfer
                                Money Abroad
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown" onClick={onBusinessToggleButtonClicked}>
                  <a
                    className="nav-link dropdown-toggle"
                    // href="/business"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Business
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
                              alt=""
                            />
														Wealth
													</p>
                          <ul className="HeaderList list-unstyled">
                            <li>
                              <Link link="/personal">
                                High Yield Savings Account
                              </Link>
                            </li>
                            <li>
                              <Link link="/currency-accounts">
                                Multi-Currency Savings Account
                              </Link>
                            </li>
                            <li>
                              <Link link="/exchange-rates">
                                Online Currency Exchange
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
                              alt=""
                            />
														Payments
													</p>
                          <ul className="HeaderList list-unstyled">
                            <li>
                              <Link link="/receive-payments">
                                Instant Money Transfer
                              </Link>
                            </li>
                            <li>
                              <Link link="/remittance">
                                Transfer Money Abroad
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown" onClick={onDonationsToggleButtonClicked}>
                  <a
                    className="nav-link dropdown-toggle"
                    // href="/#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Donations
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
                              alt=""
                            />
														Charities
													</p>
                          <ul className="HeaderList list-unstyled">
                            <li>
                              <Link link="/donation">
                                Donate
                              </Link>
                            </li>
                            <li>
                              <Link link="/listed-charity">
                                Become a
                                Listed
                                Charity
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link link="/company" className="nav-link">
                    Company
                  </Link>
                </li>
                <li className="nav-item">
                  <Link link="/contact-Us" className="nav-link">
                    Help
                  </Link>
                </li>
              </ul>
              <button
                className="btn btn-primary my-sm-0 Appbtn GetAppBtn"
                onClick={handleOpen}
              >
                Get The App
							</button>
            </div>
          </nav>
        </div>
      </div>
      {openSuccessModal && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={openSuccessModal}
          onClose={handleClose}
          closeAfterTransition
        >
          <Paper>
            <IconButton
              aria-label="Close"
              className="closeButton"
              onClick={() => {
                closeBothModal();
              }}
            >
              <CloseIcon />
            </IconButton>
            <div className="Waitlist">
              <div className="container">
                <div className="row waitlistRow">
                  <div className="col-md-6">
                    <div className="waitlistcont">
                      <h3
                        className=""
                        id="transition-modal-title"
                      >
                        Thank you for joining{" "}
                        <span className="br-block"></span>{" "}
												Cashero's waitlist{" "}
                      </h3>
                      <p>
                        Cashero's revolutionary approach
												to making{" "}
                        <span className="br-block"></span>{" "}
												your money go further.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      className="img-fluid"
                      alt=""
                      src={Wait2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </Modal>
      )}
      {open &&
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
                  <h2
                    className="ModalTitle"
                    id="transition-modal-title"
                  >
                    Your Hero awaits.{" "}
                    <span className="br-block"></span> Start
									saving, earning and sending in seconds.
								</h2>
                  <p id="transition-modal-description">
                    Enter your number below and we’ll send you a
                    message to download the Cashero app.
								</p>
                  <div className="ModalPhone">
                    <div className="GetAppEmail">
                      <TextField
                        placeholder="Enter Email Address"
                        type="email"
                        autoComplete='off'
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                      />
                      <div className="GetEarlyBtn">
                        <button
                          disabled={
                            loading ||
                            !email ||
                            !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(
                              email
                            )
                          }
                          onClick={onSubmit}
                          className="btn btn-default"
                        >
                          Get Early Access
											</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          </Modal>
        </div>
      }
      {openDiv ? (
        <div className="MobileGetAppBtn">
          <button
            className="btn btn-primary my-2 my-sm-0 Appbtn GetAppBtn"
            onClick={handleOpen}
          >
            Get Early Access
					</button>
          <img
            className="GetAppClose"
            alt=""
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
    //       {data.taxonomy}:{" "}
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

export default connect(List);

// const Container = styled.section`
//   width: 800px;
//   margin: 0;
//   padding: 24px;
//   list-style: none;
// `;

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

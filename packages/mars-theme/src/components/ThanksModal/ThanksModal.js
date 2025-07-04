import React from 'react';
import Modal from "@material-ui/core/Modal";
import { styled } from "frontity";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Wait2 from "../../assets/wait.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Link from "../link";
import Gmail from "../../assets/gmail.png";
import { websiteLink } from "../../config/config";
import { FacebookShareButton, EmailShareButton, TwitterShareButton } from "react-share";
import { withTranslation } from "react-i18next";

const ThanksModal = (props) => {
    const { open, handleClose, i18n } = props
    return (
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
                    onClick={() => { handleClose(); }}
                >
                    <CloseIcon />
                </IconButton>
                <div className="Waitlist">
                    <div className="container">
                        <div className="row waitlistRow">
                            <div className="col-md-6">
                                <div className="waitlistcont">
                                    <h1 id="transition-modal-title">{i18n.t("Thank_you_for_joining")} <span className="br-block-with-no-display"></span> Cashero!</h1>
                                    <p>{i18n.t("We_have_sent_you_an_SMS_with_a_link_to_download_the_app")}</p>
                                    {/* <p>We’ll keep you posted so be sure to look out for an SMS from us very soon.</p> */}
                                </div>
                                <div className="win-cont">
                                    <h3 id="transition-modal-title">{i18n.t("Want_to_win_1000")}</h3>
                                    <p>{i18n.t("Want_to_win_1000_P")}</p>
                                    <span onClick={() => handleClose()}><Link className="giveaway-link2" link="/ph/giveaway">{i18n.t("TERMS_AND_CONDITIONS")}</Link></span>
                                    <ul className="Thankyou-modal-list list-unstyled">
                                        <li>{i18n.t("Click_AND_Share")}</li>
                                        <li><FacebookShareButton quote="Join me on Cashero and start earning up to 5% APY. Download the app today and make your money work for you: https://play.google.com/store/apps/details?id=com.rns.casheroapp https://apps.apple.com/us/app/cashero/id1547603420" url={websiteLink + "/ph/"}><img alt="Facebook" src={Facebook} /> </FacebookShareButton></li>
                                        <li><TwitterShareButton title="Join me on Cashero and start earning up to 5% APY. Download the app today and make your money work for you: https://play.google.com/store/apps/details?id=com.rns.casheroapp https://apps.apple.com/us/app/cashero/id1547603420" url={websiteLink + "/ph/"}><img alt="Twitter" src={Twitter} /> </TwitterShareButton></li>
                                        <li><EmailShareButton separator=" " subject="Join Cashero" body="Join me on Cashero and start earning up to 5% APY. Download the app today and make your money work for you: https://play.google.com/store/apps/details?id=com.rns.casheroapp https://apps.apple.com/us/app/cashero/id1547603420" url={websiteLink + "/ph/"}><img alt="gmail" src={Gmail} /> </EmailShareButton></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img
                                    className="img-fluid"
                                    alt="wait"
                                    src={Wait2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </Modal>
    )
}

export default withTranslation()(ThanksModal);

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
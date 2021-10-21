import React from 'react';
import Modal from "@material-ui/core/Modal";
import { styled } from "frontity";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Wait2 from "../../assets/wait.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Gmail from "../../assets/gmail.png";
import { FacebookShareButton, EmailShareButton, TwitterShareButton } from "react-share";
import { withTranslation } from "react-i18next";
import { websiteLink } from "../../config/config";

const CompaignThanksModal = (props) => {
    const { open, handleClose, i18n, lang } = props
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
                                    {/* <h3 id="transition-modal-title">{i18n.t("Thank_you")}</h3> */}
                                    <h1 id="transition-modal-title">{i18n.t("Thank_you_for_joining_Cashero_waitlist")}</h1>
                                    <p>{i18n.t("Cashero_waitlist_P")}</p>
                                </div>
                                <div className="win-cont">
                                    <ul className="Thankyou-modal-list list-unstyled">
                                        <li>{i18n.t("Click_AND_Share")}</li>
                                        <li><FacebookShareButton quote={`${i18n.t("Cashero_waitlist_Quote")}${`${websiteLink}/${lang}/`}`} url={websiteLink}><img alt="Facebook" src={Facebook} /> </FacebookShareButton></li>
                                        <li><TwitterShareButton title={i18n.t("Cashero_waitlist_Quote")} url={`${`${websiteLink}/${lang}/`}`}><img alt="Twitter" src={Twitter} /> </TwitterShareButton></li>
                                        <li><EmailShareButton separator=" " subject="Join the Waitlist" body={i18n.t("Cashero_waitlist_Quote")} url={`${`${websiteLink}/${lang}/`}`}><img alt="gmail" src={Gmail} /> </EmailShareButton></li>
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

export default withTranslation()(CompaignThanksModal);

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
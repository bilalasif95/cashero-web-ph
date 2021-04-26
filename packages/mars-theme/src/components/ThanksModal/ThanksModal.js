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

export default function ThanksModal(props) {
    const { open, handleClose } = props
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
                                    <h3 id="transition-modal-title">Thank you for joining <span className="br-block-with-no-display"></span> Cashero!</h3>
                                    <p>We’ve sent you an SMS with a link to download the app.</p>
                                    {/* <p>We’ll keep you posted so be sure to look out for an SMS from us very soon.</p> */}
                                </div>
                                <div className="win-cont">
                                    <h3 id="transition-modal-title">Want to win $1,000?</h3>
                                    <p>Download the app, refer your friends to Cashero, and earn Golden Tickets. The more Golden Tickets you have, the higher your odds of winning $1000! If your friend wins, you get $100 as a referral bonus.</p>
                                    <span onClick={() => handleClose()}><Link className="giveaway-link2" link="/giveaway">Terms and conditions</Link></span>
                                    <ul className="Thankyou-modal-list list-unstyled">
                                        <li>Click & Share:</li>
                                        <li><FacebookShareButton quote="Join me on Cashero and start earning up to 5% APY. Download the app today and make your money work for you: https://play.google.com/store/apps/details?id=com.rns.casheroapp https://apps.apple.com/us/app/cashero/id1547603420" url={websiteLink}><img alt="Facebook" src={Facebook} /> </FacebookShareButton></li>
                                        <li><TwitterShareButton title="Join me on Cashero and start earning up to 5% APY. Download the app today and make your money work for you: https://play.google.com/store/apps/details?id=com.rns.casheroapp https://apps.apple.com/us/app/cashero/id1547603420" url={websiteLink}><img alt="Twitter" src={Twitter} /> </TwitterShareButton></li>
                                        <li><EmailShareButton separator=" " subject="Join Cashero" body="Join me on Cashero and start earning up to 5% APY. Download the app today and make your money work for you: https://play.google.com/store/apps/details?id=com.rns.casheroapp https://apps.apple.com/us/app/cashero/id1547603420" url={websiteLink}><img alt="gmail" src={Gmail} /> </EmailShareButton></li>
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
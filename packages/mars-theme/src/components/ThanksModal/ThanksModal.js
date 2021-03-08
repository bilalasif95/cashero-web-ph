import React from 'react';
import Modal from "@material-ui/core/Modal";
import { styled } from "frontity";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Wait2 from "../../assets/wait.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg"; 
// import Gmail from "../../assets/gmail.svg"; 

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
                                    <h3 id="transition-modal-title">Thank you for joining <span className="br-block"></span> Cashero!</h3>
                                    <p>We’ve sent you an SMS with a link to download the app.</p>
                                </div>

                                <div className="win-cont">
                                    <h3 id="transition-modal-title">Want to win $1,000?</h3>
                                    <p>We’re giving away $1,000 every 3 days. Download the app, refer your friends to Cashero and earn golden tickets. The more golden tickets you have, the higher your odds of winning!</p>

                                    <ul className="Thankyou-modal-list list-unstyled">
                                        <li><a href="https://www.facebook.com/casheroapp" target="_blank" rel="noopener noreferrer"><img alt="Facebook" src={Facebook} /> </a></li>
                                        <li><a href="https://twitter.com/casheroapp" target="_blank" rel="noopener noreferrer"><img alt="Twitter" src={Twitter} /> </a></li>
                                        <li><a href="mailto:info@cashero.com" target="_blank" rel="noopener noreferrer"><img alt="gmail" src="https://i.imgur.com/4EWrUMB.png" /> </a></li>
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
                            <p className="join-text">Join Cashero to earn 5% interest on your money</p>
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
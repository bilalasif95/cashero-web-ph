import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { withTranslation } from "react-i18next";

const campaignSignup = ({ i18n, focus }) => {
  return (
    <div className="SignUp compaign-signup">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="SignUpTitle campTabtitle">{i18n.t("CampaignSignup_1")}</h2>
            <h3 className="SignUpText mb-0">
              {i18n.t("CampaignSignup_2")}<span className="br-block"></span>{i18n.t("CampaignSignup_3")}<span className="br-block"></span>{i18n.t("CampaignSignup_4")}
            </h3>
            <button onClick={() => { focus(); scroll.scrollTo('myScrollToElement', { containerId: 'ContainerElementID' }) }} className="btn btn-default Compaignbtn Waitlistbtn">{i18n.t("Join_the_Waitlist")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(campaignSignup);
import React from "react";
import TextfieldBanner from "../TextfieldBanner/TextfieldBanner";
import { withTranslation } from "react-i18next";

const SignupSection = ({ i18n }) => {
  return (
    <div className="SignUp">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="SignUpTitle">{i18n.t("Join_Cashero")}</h2>
            <h3 className="SignUpText mb-0">
              {i18n.t("Join_Cashero_P")}
            </h3>
            <TextfieldBanner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(SignupSection);
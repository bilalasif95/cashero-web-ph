import React from "react";
import SignupSection from "../signupSection/signupSection";
import Countup from "../Countup/Countup";
import WhoSection from "../WhoSection/WhoSection";
import CasheroImg from "../../assets/CasheroImg.png";
import CasheroImgBR from "../../assets/CasheroImgBR.jpg";
import YearsImg from "../../assets/YearsImg.png";
import YearsImgBR from "../../assets/YearsImgBR.png";
import { Head } from "frontity";
import { withTranslation } from "react-i18next";

const Company = ({ i18n }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/company/" />
        {i18n.language === "brazilian" ?
          <link rel="alternate" hreflang="pt-BR" href="https://www.cashero.com/company/" />
          :
          <link rel="alternate" hreflang="en-US" href="https://www.cashero.com/company/" />
        }
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/company/" />
      </Head>
      <div className="CompanyBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-fluid d-block CasheroImg w-100"
                alt="Cashero Image"
                src={i18n.language === "brazilian" ? CasheroImgBR : CasheroImg}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Countup />
        <WhoSection />
        <div className="YearsSec">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-fluid mx-auto d-block"
                alt="Years Image"
                src={i18n.language === "brazilian" ? YearsImgBR : YearsImg}
              />
            </div>
          </div>
        </div>
      </div>
      <SignupSection />
    </>
  );
}

export default withTranslation()(Company);
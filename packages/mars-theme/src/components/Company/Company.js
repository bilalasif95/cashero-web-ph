import React from "react";
import SignupSection from "../signupSection/signupSection";
import Countup from "../Countup/Countup";
import WhoSection from "../WhoSection/WhoSection";
import CasheroImgBR from "../../assets/CasheroImgBR.jpg";
import YearsImgBR from "../../assets/YearsImgBR.png";
import { Head } from "frontity";

const Company = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/company/" />
        <link rel="alternate" hreflang="pt-BR" href="https://www.cashero.com/company/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/company/" />
      </Head>
      <div className="CompanyBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-fluid d-block CasheroImg w-100"
                height="100%"
                width="100%"
                alt="Cashero Image"
                src={CasheroImgBR}
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
                height="100%"
                width="1150px"
                alt="Years Image"
                src={YearsImgBR}
              />
            </div>
          </div>
        </div>
      </div>
      <SignupSection />
    </>
  );
}

export default Company;
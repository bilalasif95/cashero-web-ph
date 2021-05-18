import React from "react";
import SignupSection from "../signupSection/signupSection";
import Countup from "../Countup/Countup";
import WhoSection from "../WhoSection/WhoSection";
import CasheroImg from "../../assets/CasheroImg.png";
import YearsImg from "../../assets/YearsImg.png";
import { Head } from "frontity";

export function Company() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/company/" />
      </Head>
      <div className="CompanyBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-fluid d-block CasheroImg w-100"
                alt="Cashero Image"
                src={CasheroImg}
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
                src={YearsImg}
              />
            </div>
          </div>
        </div>
      </div>
      <SignupSection />
    </>
  );
}

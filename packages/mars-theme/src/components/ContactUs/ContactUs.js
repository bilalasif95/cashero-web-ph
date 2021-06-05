import React from "react";
import { Head } from "frontity";
import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import SignupSection from "../signupSection/signupSection";
import { withTranslation } from "react-i18next";

const ContactUs = ({ i18n }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/contact-us/" />
        <link rel="alternate" hreflang="en-US" href="https://www.cashero.com/contact-us/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/contact-us/" />
      </Head>
      <div className="ContactUsBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ContactUsCont">
                <h1>{i18n.t("Want_to_Get_a_Hold_of_Us")}</h1>
                <p className="mb-0">{i18n.t("Want_to_Get_a_Hold_of_Us_P1")} <span className="br-block-with-no-display"></span> {i18n.t("Want_to_Get_a_Hold_of_Us_P2")}</p>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <ContactForm />
        <SignupSection />
      </div>
    </>
  );
}

export default withTranslation()(ContactUs);

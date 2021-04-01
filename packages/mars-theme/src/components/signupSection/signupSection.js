import React from "react";
import { TextfieldBanner } from "../TextfieldBanner/TextfieldBanner";

export function SignupSection() {
  return (
    <div className="SignUp">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="SignUpTitle">Join Cashero</h1>
            <h3 className="SignUpText mb-0">
              Ready to make your money go further? Join Cashero and get early
              access.
            </h3>
            <TextfieldBanner />
          </div>
        </div>
      </div>
    </div>
  );
}
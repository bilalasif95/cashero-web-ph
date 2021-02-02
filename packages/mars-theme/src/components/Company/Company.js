// import { makeStyles } from "@material-ui/styles";
import React from "react";
import { SignupSection } from "../signupSection/signupSection";
import { Countup } from "../Countup/Countup";
import { WhoSection } from "../WhoSection/WhoSection";
// import { SignUp } from "../../components/SignUp/SignUp";
// import { OpeningCashero } from "../../components/OpeningCashero/OpeningCashero";
import CasheroImg from "./../../assets/CasheroImg.svg";
// import Signup from "assets/Signup.svg";
import YearsImg from "./../../assets/YearsImg.svg";


export function Company() {
	// const [mobileNum, setMobileNumber] = useState<string>();
	// const [country, setCountry] = React.useState<CountryType>({
	// 	phone: "",
	// 	label: "",
	// 	code: "",
	// });
	// const classes = useStyles();

	return (

		<>

			<div className="CompanyBanner">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<img className="img-fluid mx-auto d-block CasheroImg" alt="CasheroImg" src={CasheroImg} />
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
							<img className="img-fluid mx-auto d-block" alt="YearsImg" src={YearsImg} />
						</div>
					</div>
				</div>
				{/* <OpeningCashero /> */}
				{/* <div className="CasheroSignup">
					<div className="row flex-column-reverse flex-sm-row">
						<div className="col-md-6">
							<img className="img-fluid mx-auto d-block" src={Signup} />
						</div>

						<div className="col-md-6">
							<div className="CasheroSignupCont">
								<h1>2021</h1>
								<p>This year, we officially launched our app in the US, and it is only the beginning of our journey.</p>
							</div>
						</div>



					</div>
				</div> */}
				{/* <SignUp /> */}

			</div>

			<SignupSection />


		</>

	);
}

// const useStyles = makeStyles({


// });
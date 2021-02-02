// import { makeStyles } from "@material-ui/styles";
import React from "react";
// import {
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";



export function ContactUs(props) {
	// const classes = useStyles();
	// const passcode = localStorage.getItem("passcodeInput");
	// const [value, setValue] = React.useState(0);
	// const [loading, setLoading] = React.useState(true);
	// const [mobileNum, setMobileNumber] = useState<string>();
	// const [country, setCountry] = React.useState<CountryType>({
	// 	phone: "",
	// 	label: "",
	// 	code: "",
	// });
	// const [amount, setAmount] = useState("");
	// const [apy, setApy] = useState("");

	// const auth = useSelector((state) => state.authList.auth);

	// const settings = {
	// 	dots: false,
	// 	autoplay: true,
	// 	arrows: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	cssEase: 'linear',
	// };

	// if (passcode && !auth) {
	// 	return <Redirect to="/signin" />;
	// }

	// var userId = localStorage.getItem("user");

	return (

		<>


			{/* ContactUS */}
			<div className="ContactUsBanner">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="ContactUsCont">
								<h1> Want To Get A Hold Of Us?  </h1>
								<p className="mb-0">Sign into the Cashero App on your mobile and simply send us <span className="br-block"></span> a message via our in-app chat support.</p>
							</div>
						</div>
					</div>
				</div>

				<Contact />
			</div>
			{/*  ContactUS */}

		</>
	);
}

// const useStyles = makeStyles({
// 	pageContainer: {
// 		minHeight: "99vh",
// 	},
// 	centerContainer: {
// 		flex: 1,
// 		width: "100%",
// 		height: "100%",
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		flexDirection: "column",
// 	},


// });

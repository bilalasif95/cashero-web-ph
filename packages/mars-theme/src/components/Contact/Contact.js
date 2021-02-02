// import { makeStyles } from "@material-ui/styles";
import React from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Phone from "assets/Phone.svg";
import Chat from "./../../assets/Chat.svg";




export function Contact(props) {
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

		// Firebase.firestore()
		// 	.collection("LiveEarnings")
		// 	.doc("usdc")
		// 	.get()
		// 	.then((doc) => {
		// 		setAmount(doc?.data()?.amount);
		// 		setApy(doc?.data()?.apy);
		// 	})
		// 	.catch((error) => { });
	// if (passcode && !auth) {
	// 	return <Redirect to="/signin" />;
	// }

	// var userId = localStorage.getItem("user");

	return (

		<>


			{/* Currency Conversion */}
			<div className="ContactSection">
				<div className="container">
					<div className="row">
						<div className="col-md-6 offset-md-3">

							<div className="row">

								<div className="col-md-6 d-flex">
									{/* <div className="ContactBox w-100 InAppChat">
										<img className="img-fluid" src={Phone} />
										<h1>Contact us</h1>
										<p>Block your Revolut Card in the app anytime,
										or call our automated phone-line +442033228352.
										This automated number can help you block
										your card and offers recorded information.
										This number does not make
										outgoing calls.</p>
									</div> */}
								</div>

								<div className="col-md-12 d-flex">
									<div className="ContactBox w-100">
										<img className="img-fluid" alt="" src={Chat} />
										<h1>In-App Chat</h1>
										<p>Monday—Sunday: &nbsp; 24 hours</p>
										{/* <p>Premium and Metal plan users: Priority service</p> */}
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			{/* Currency Conversion */}

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

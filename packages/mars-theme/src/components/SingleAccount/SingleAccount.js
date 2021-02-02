// import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Firebase from "../../components/Firebase/firebase";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./SingleAccount.scss";
// import Country from "../../assets/Country.svg";
// import Earning from "../../assets/earning.svg";
import { Fade } from "react-awesome-reveal";
// import { Zoom } from "react-awesome-reveal";
import Arrow from "./../../assets/arrowLink.svg";
// import ArrowWhite from "../../assets/arrowLinkWhite.svg";
import Globe from "./../../assets/Globe.svg";
// import Lines from "../../assets/Lines.svg";
// import Icon1 from "../../assets/icon1.svg";
// import Icon2 from "../../assets/icon2.svg";
// import Icon3 from "../../assets/icon3.svg";
// import Icon4 from "../../assets/icon4.svg";
// import Icon5 from "../../assets/icon5.svg";
// import Icon6 from "../../assets/icon6.svg";
// import CounterIcon from "../../assets/counterIcon.svg";

export function SingleAccount(props) {
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
	const [appModal, setAppModal] = useState(false)
	// const auth = useSelector((state) => state.authList.auth);


	const appModalOpen = () => {
		setAppModal(true)
	}

	const appModalClose = () => {
		setAppModal(false)
	}

	// const settings = {
	// 	dots: false,
	// 	autoplay: true,
	// 	arrows: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	cssEase: "linear",
	// };

	// React.useEffect(() => {
		// Firebase.firestore()
		// 	.collection("LiveEarnings")
		// 	.doc("usdc")
		// 	.get()
		// 	.then((doc) => {
		// 		setAmount(doc?.data()?.amount);
		// 		setApy(doc?.data()?.apy);
		// 	})
		// 	.catch((error) => { });
	// 	Firebase.auth().onAuthStateChanged((user) => {
	// 		if (user) {
	// 			Firebase.firestore()
	// 				.collection("Users")
	// 				.doc(user.uid)
	// 				.get()
	// 				.then((doc) => {
	// 					if (doc.exists) {
	// 						// localStorage.setItem(
	// 						// 	"passcodeInput",
	// 						// 	doc?.data()?.passCode
	// 						// );
	// 						// localStorage.setItem("passcode", "true");
	// 						setLoading(false);
	// 					} else {
	// 						setLoading(false);
	// 					}
	// 				})
	// 				.catch((error) => {
	// 					setLoading(false);
	// 				});
	// 		} else {
	// 			setLoading(false);
	// 		}
	// 	});
	// });
	// if (loading) {
	// 	return (
	// 		<div className={classes.pageContainer}>
	// 			<div className={classes.centerContainer}>
	// 				<CircularProgress />
	// 			</div>
	// 		</div>
	// 	);
	// }
	// if (passcode && !auth) {
	// 	return <Redirect to="/signin" />;
	// }

	// var userId = localStorage.getItem("user");

	return (
		<>
			{/* Saving-Account */}
			<div className="Globe">
				<div className="container">
					<div className="row flex-column-reverse flex-sm-row">
						<div className="col-md-6">
							<div className="Globe-pic">
								{/* <Zoom
									triggerOnce
									delay={300}
									duration={3000}
									className="animate-img"
								>

								</Zoom> */}
								<img
									className="img-fluid mx-auto d-block"
									alt="Globe"
									src={Globe}
								/>

								{/* <img
									className="img-fluid mx-auto d-block cashero-c"
									src={Lines}
								/> */}
							</div>
						</div>
						<div className="col-md-6">
							<div className="oneAppCont">
								<Fade triggerOnce direction="up">
									<h3 className="HighInterestTitle">
										Your Money From <span className="br-block"></span> Around The World In <span className="br-block"></span> One Single Account.{" "}
										{/* <span className="br-block"></span>{" "}
										Savings Account */}
									</h3>
									<p className="HighInterestText">We take the headache out of managing money from different countries. Have your money in one place with no minimum balance or maintenance fees added! Receive funds internationally, hold balances in USD, GBP, and EUR and seamlessly transfer between currencies within seconds. Freedom, at last!  </p>
									{/* <p className="HighInterestText"></p> */}
									<button onClick={appModalOpen} className="LinkBtn">Join for Free  <img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
								</Fade>
								{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Saving-Account */}
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

// interface CountryType {
// 	code: string;
// 	label: string;
// 	phone: string;
// }

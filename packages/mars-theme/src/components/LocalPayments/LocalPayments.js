import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import {
	// withRouter,
	Redirect,
} from "react-router-dom";
// import { useSelector } from "react-redux";
// import Firebase from "../../components/Firebase/firebase";
import GetTheAppModal from "../../components/GetTheAppModal/GetTheAppModal";
import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./LocalPayments.scss";
// import SendMoney from "../../assets/SendMoney.svg";
// import Send from "../../assets/send.svg";
// import Request from "../../assets/request.svg";
import Mobile from "./../../assets/CasheroMobile.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
// import Fade from '@material-ui/core/Fade';

export function LocalPayments(props) {
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

	const appModalOpen = () => {
		setAppModal(true)
	}

	const appModalClose = () => {
		setAppModal(false)
	}


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
			{/* Money Request */}
			<div className="MoneyRequest">
				<div className="row align-items-center">

					<div className="col-md-6 sm-mb-30">
						<img className="img-fluid mx-auto d-block" alt="" src={Mobile} />
						{/* <div className="sr-money">
							<div className="circle-cont">
								<div className="blue-circle" />
							</div>
							<div className="box-container">
								<div className="inner">
									<div className="box">
										<div className="box1">
											<Slide triggerOnce={true}
												direction="right"
												delay={0}
												duration={2000}
											>
												<img
													className="img-fluid mx-auto d-block"
													src={Request}
												/>
											</Slide>
										</div>
									</div>
									<div className="box">
										<div className="box2">
											<Slide triggerOnce={true}
												direction="left"
												delay={0}
												duration={2500}
											>
												<img
													className="img-fluid mx-auto d-block"
													src={Send}
												/>
											</Slide>
										</div>
									</div>
								</div> */}
					</div>
					<div className="col-md-6">
						<div className="MoneyRequestCont">
							<Fade triggerOnce direction="up" delay={100}>
								<h1 className="oneAppTitle">
									Local And Global Instant <span className="br-block"></span> Payments Right At The <span className="br-block"></span> Tip Of Your Fingers
							</h1>
							</Fade>
							<Fade triggerOnce direction="up" delay={300}>
								<p>Whether you’re paying your electricity bill, splitting takeout with friends, or you simply lost a bet, Cashero is here for you. Monthly expenses are such a pain, worrying about them each month also doesn’t help. Let us make the whole process easy for you. </p>
									
									<p>With Cashero, you can send money instantly and set reminders to pay your bills.
								If someone owes you money, well, we also make that simple too. Send a request through Cashero and your friend will be reminded that she owes you for the burrito. Exchanging bank details are not needed.
								Receiving payments is a breeze and your account will be updated automatically. Let Cashero do all the work for you while you carry on eating your burrito.
								</p>
								
							</Fade>
							{/* <p>
								<Fade triggerOnce direction="up" delay={300}>
								Cashero makes your payments simple.
								</Fade>
								<span className="br-block"></span>
								<Fade triggerOnce direction="up" delay={500}>
								Tap a button and start sending, requesting and receiving payments worldwide.
								</Fade>
								<span className="br-block"></span>
								<Fade triggerOnce direction="up" delay={700}>
								It’s fast, secure, convenient, and simple.
								</Fade>
							</p> */}
							<Fade triggerOnce direction="up" delay={700}>
								<button onClick={appModalOpen} className="LinkBtn">
									Join for Free <img className="ArrowBtn" alt="" src={Arrow} />
								</button>
							</Fade>
							{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
						</div>
					</div>
				</div>
			</div>
			{/* Money Request */}
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


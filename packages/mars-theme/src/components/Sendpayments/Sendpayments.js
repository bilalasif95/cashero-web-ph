import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Firebase from "../../components/Firebase/firebase";
import GetTheAppModal from "../../components/GetTheAppModal/GetTheAppModal";
import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Sendpayments.scss";
// import SendMoney from "../../assets/SendMoney.svg";
// import Send from "../../assets/send.svg";
import WorldMap from "./../../assets/Worldmap.svg";
// import Request from "../../assets/request.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
// import Fade from '@material-ui/core/Fade';

export function Sendpayments(props) {
	// const classes = useStyles();
	// const passcode = localStorage.getItem("passcodeInput");
	// const [value, setValue] = React.useState(0);
	// const [loading, setLoading] = React.useState(true);
	// const [mobileNum, setMobileNumber] = useState<string>();
	const [appModal, setAppModal] = useState(false)
	// const [country, setCountry] = React.useState<CountryType>({
	// 	phone: "",
	// 	label: "",
	// 	code: "",
	// });
	// const [amount, setAmount] = useState("");
	// const [apy, setApy] = useState("");

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
			{/* Money Request */}
			<div className="MoneyRequest">
				<div className="row align-items-center">

					<div className="col-md-6">
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
								</div>
							</div> */}
						<img
							className="img-fluid mx-auto d-block"
							alt="WorldMap"
							src={WorldMap}
						/>
					</div>
					<div className="col-md-5 sm-mt-30">
						<div className="MoneyRequestCont">
						<Fade triggerOnce direction="up" delay={100}>
							<h1 className="oneAppTitle">
								The Cashero Promise: Send Money Online to Around the World
							</h1>
							</Fade>
							<Fade triggerOnce direction="up" delay={300}>
								<p>You are the true heroes, working hard to take care of those you love. We’re by your side each step of the way to ensure your hard-earned money goes into the right pockets. Cashero’s fast global money transfer service gives you a quick, easy, and secure way to send money abroad. </p>
								<p>Cashero’s fast global money transfer service gives you a quick, easy, and secure way to send money abroad. We make sending money online instantly easy peasy with no hidden fees. Your people on the other side of the world will thank you, but no need to thank us, that’s why Cashero is here</p>
								{/* <p>Your people on the other side of the world will thank you, but no need to thank us, that’s why Cashero is here</p> */}
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
									Join for Free <img alt="arrow" className="ArrowBtn" src={Arrow} />
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

// interface CountryType {
// 	code: string;
// 	label: string;
// 	phone: string;
// }

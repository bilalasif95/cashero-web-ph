// import { makeStyles } from "@material-ui/styles";
import React from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { Link } from "react-router-dom";
import Link from "../link";
// import { useSelector } from "react-redux";
// import Firebase from "../../config/firebase";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../styles/scss/MoneyRequest.scss";
import SendMoney from "../../assets/SendMoney.svg";
import Send from "../../assets/send.svg";
import Request from "../../assets/request.svg";
import { Fade, Slide } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
// import Fade from '@material-ui/core/Fade';

export function MoneyRequest(props) {
	// const classes = useStyles();
	// const passcode = localStorage.getItem("passcodeInput");
	// const [value, setValue] = useState(0);
	// const [loading, setLoading] = useState(false);
	// const [mobileNum, setMobileNumber] = useState<string>();
	// const [country, setCountry] = useState<CountryType>({
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
	// 	cssEase: "linear",
	// };

	// useEffect(() => {
	// 	// Firebase.firestore()
	// 	// 	.collection("LiveEarnings")
	// 	// 	.doc("usdc")
	// 	// 	.get()
	// 	// 	.then((doc) => {
	// 	// 		setAmount(doc?.data()?.amount);
	// 	// 		setApy(doc?.data()?.apy);
	// 	// 	})
	// 	// 	.catch((error) => { });
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
			<div className="MoneyRequest sm-mt-30">
				<div className="row">
					<div className="col-md-6">
						<div className="MoneyRequestCont">
							{/* <Fade triggerOnce direction="up" delay={100}> */}
								<h1 className="oneAppTitle">
									Instant Money
									<span className="br-block"></span>
								 Transfer
							</h1>
							{/* </Fade> */}
							<p>
								{/* <Fade triggerOnce direction="up" delay={300}> */}
									Cashero makes your payments simple. Tap a button and start sending, requesting and receiving payments worldwide. It’s fast, secure, convenient, and simple.
								{/* </Fade> */}
							</p>
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
								<Link link="/receive-payments"><a className="Link" href="/receive-payments">

									Learn more about Payments <img className="ArrowBtn" alt="" src={Arrow} />
								</a>
								</Link>
							</Fade>

						</div>
					</div>
					<div className="col-md-6">
						<div className="sr-money">
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
													alt=""
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
													alt=""
												/>
											</Slide>
										</div>
									</div>
								</div>
							</div>
							<img
								className="img-fluid mx-auto d-block send-money"
								src={SendMoney}
								alt=""
							/>
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
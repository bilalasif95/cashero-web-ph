// import { makeStyles } from "@material-ui/styles";
import React from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Firebase from "../../config/firebase";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../styles/scss/GetStarted.scss";
import Fav from "../../assets/favImg.svg";
import Vector from "../../assets/vector.svg";
import Done from "../../assets/done.svg";
import { Fade } from "react-awesome-reveal";
// import { Zoom } from "react-awesome-reveal";
// import Arrow1 from "../../assets/arrowLink.svg";
// import GetTheAppModal from "../../components/GetTheAppModal/GetTheAppModal";

export function GetStarted(props) {
	// const appModalOpen = () => {
	// 	setAppModal(true)
	// }

	// const appModalClose = () => {
	// 	setAppModal(false)

	// }

	// const [appModal, setAppModal] = useState(false)
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
			<div className="getStarted">
				<div className="row">
					<div className="col-md-12">
						<h3 className="getStartedTitle">
							Get started in minutes
						</h3>
						<div className="row">
							<div className="col-md-4 col-sm-12 col-xs-12 smBox1">
								<Fade triggerOnce direction="left">
									<div className="GetStartedBox1 w-100">
										<img className="img-fluid" alt="fav" src={Fav} />
										<h3>Download the Cashero app</h3>
									</div>
								</Fade>
							</div>

							<div className="col-md-4 col-sm-12 col-xs-12  smBox2">
								{/* <Fade triggerOnce direction="up"> */}
								<div className="GetStartedBox2 w-100">
									<img
										className="img-fluid"
										alt="Vector"
										src={Vector}
									/>
									<h3>
										Sign up and verify your identity
									</h3>
								</div>
								{/* </Fade> */}
							</div>

							<div className="col-md-4 col-sm-12 col-xs-12  smBox3">
								<Fade triggerOnce direction="right">
									<div className="GetStartedBox3 w-100">
										<img className="img-fluid" alt="Done" src={Done} />
										<h3>
											Add or receive funds and start benefiting
										</h3>
									</div>
								</Fade>
							</div>
						</div>
						<div className="row">
							<div className="offset-md-1 col-md-10">
								{/* <div className="MultistepsCont">
									<p>Ready to protect your currencies in one wallet? Maintain your wealth in Cashero’s multi-currency account.</p>
									<button onClick={appModalOpen} className="LinkBtn">
										Open your wallet  <img className="ArrowBtn" src={Arrow1} />
									</button>
								</div> */}
							</div>
						</div>

						{/* {appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />} */}
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
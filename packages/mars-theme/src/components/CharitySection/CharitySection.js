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
// import "../../styles/scss/CharitySection.scss";
import Charity from "../../assets/Charity.svg";
import { Fade } from "react-awesome-reveal";
// import { Zoom } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function CharitySection(props) {
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
			{/* Charity */}
			<div className="Charity sm-pb-0">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<div className="charity">
							{/* <div className="circle-container">
								<Zoom triggerOnce>
									<div className="bluecircle" />
								</Zoom>
							</div> */}
							<img
								className="sm-center img-fluid"
								alt=""
								src={Charity}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="CharityCont">
							<Fade triggerOnce direction="up">
								<h1 className="oneAppTitle">
									{" "}
									Charity and
									 Donations
								</h1>
								<p>
									Sign up to Cashero and continue to make a difference by receiving donations.
									Receive donations directly in the app or by creating a donation request link. You receive 100% of the funds and your donations earn interest.

								</p>
								<Link link="/donation"><a className="Link" href="/donation">Learn more about Charity<img className="ArrowBtn" alt="" src={Arrow} /> </a></Link>
							</Fade>
						</div>
					</div>
				</div>
			</div>
			{/* Charity */}
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
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
// import "../../styles/scss/GlobalMoney.scss";
import Locations from "../../assets/Locations.png";
import CMap from "../../assets/CMap.png";
import CasheroC from "../../assets/CasheroC.png";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function GlobalMoney(props) {
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
			<div className="MoneyRequest sm-pt-0">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<div className="map-pic">
							<Zoom
								triggerOnce
								delay={300}
								duration={3000}
								className="animate-img"
							>
								<img
									className="img-fluid mx-auto d-block"
									alt=""
									src={Locations}
								/>

							</Zoom>
							<img
								className="img-fluid mx-auto d-block c-map"
								alt=""
								src={CMap}
							/>

							<img
								className="img-fluid mx-auto d-block cashero-c"
								alt=""
								src={CasheroC}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="MoneyRequestCont">
							<Fade triggerOnce direction="up">
								<h3 className="oneAppTitle">
									Transfer Money
									<span className="br-block"></span>
									Abroad
								</h3>
							
							<p>
								{/* <Fade triggerOnce direction="up" delay={300}> */}
									Send money to back home. Stretch your hard earned money even further with low exchange fees. Cashero helps you send money globally with no hassle.
								{/* </Fade> */}
							</p>
							{/* <p>
							<Fade triggerOnce direction="up" delay={300}>
								Send money to grandma back home. 
								</Fade>
								<span className="br-block"></span> 
								<Fade triggerOnce direction="up" delay={500}>
								Stretch your hard earned money even further with low exchange fees.
								</Fade>
								<span className="br-block"></span>
								<Fade triggerOnce direction="up" delay={700}>
								Cashero helps you send money globally with no hassle.
								</Fade>
								</p> */}
							
								<Link link="/remittance"><a className="Link" href="/remittance">

									Learn more about Transfers  <img className="ArrowBtn" alt="" src={Arrow} />
								</a>
								</Link>
							</Fade>
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
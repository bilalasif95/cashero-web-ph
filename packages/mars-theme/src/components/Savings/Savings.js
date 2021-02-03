import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import firebase from "../../config/firebase";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal"
import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../styles/scss/Savings.scss";
// import Flags from "../../assets/Flags.svg";
// import usdflag from "../../assets/usdflag.png";
import BitCircle from "../../assets/BitCircle.svg";
// import eurflag from "../../assets/eurflag.png";
// import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function Savings(props) {
	const classes = useStyles();
	// const passcode = localStorage.getItem("passcodeInput");
	// const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(false);
	// const [mobileNum, setMobileNumber] = useState<string>();
	const [appModal, setAppModal] = useState(false)
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

	const appModalOpen = () => {
		setAppModal(true)
	}

	const appModalClose = () => {
		setAppModal(false)
	}



	// useEffect(() => {
	// 	// firebase.firestore()
	// 	// 	.collection("LiveEarnings")
	// 	// 	.doc("usdc")
	// 	// 	.get()
	// 	// 	.then((doc) => {
	// 	// 		setAmount(doc?.data()?.amount);
	// 	// 		setApy(doc?.data()?.apy);
	// 	// 	})
	// 	// 	.catch((error) => { });
	// 	firebase.auth().onAuthStateChanged((user) => {
	// 		if (user) {
	// 			firebase.firestore()
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
	if (loading) {
		return (
			<div className={classes.pageContainer}>
				<div className={classes.centerContainer}>
					<CircularProgress />
				</div>
			</div>
		);
	}
	// if (passcode && !auth) {
	// 	return <Redirect to="/signin" />;
	// }

	// var userId = localStorage.getItem("user");

	return (
		<>
			{/* Money Request */}
			<div className="MultiCurrency sm-mt-40">
				<div className="row">
					<div className="col-md-6">
						<div className="MoneyRequestCont">
							{/* <Fade triggerOnce direction="up" delay={100}> */}
								<h1 className="oneAppTitle">

									How Does Cashero’s <span className="br-block"></span> High Yield Savings Work?


							</h1>
							{/* </Fade> */}
							<p>
								{/* <Fade triggerOnce direction="up" delay={400}> */}
									We use blockchain technology to get you the best savings account interest rates between 2%-5% annually in our intelligent portfolio. Let us optimise your finances and take the work out of making money.
								{/* </Fade> */}
							</p>
							{/* <p>
								<Fade triggerOnce direction="up" delay={400}>
									Multiple currencies, one wallet.
								</Fade>
								<span className="br-block"></span>
								<Fade triggerOnce direction="up" delay={600}>
									Convert your local currency into USD, GBP or
									EUR. Hold one, hold all.
								</Fade>
								<span className="br-block"></span>
								<Fade triggerOnce direction="up" delay={800}>
									Reduce currency fluctuation risk because you
									worked hard for your money.
								</Fade>
							</p> */}
							{/* <Fade triggerOnce direction="up" delay={1000}> */}
								<button onClick={appModalOpen} className="LinkBtn">
									Save More <img alt="" className="ArrowBtn" src={Arrow} />
								</button>
							{/* </Fade> */}
							{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
						</div>
					</div>

					<div className="col-md-6">

						<img
							className="img-fluid mx-auto d-block"
							alt=""
							src={BitCircle} />
					</div>
				</div>
			</div>
			{/* Money Request */}
		</>
	);
}

const useStyles = makeStyles({
	pageContainer: {
		minHeight: "99vh",
	},
	centerContainer: {
		flex: 1,
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
});
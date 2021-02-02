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
// import "./Protect.scss";
// import Flags from "../../assets/Flags.svg";
// import usdflag from "../../assets/usdflag.png";
// import gbpflag from "../../assets/gbpflag.png";
// import eurflag from "../../assets/eurflag.png";
import { Fade } from "react-awesome-reveal";
import Arrow from "./../../assets/arrowLink.svg";
import Lock from "./../../assets/lock.svg";

export function Protect(props) {
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
	const [appModal, setAppModal] = useState(false)
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
			<div className="MultiCurrency sm-mt-30">
				<div className="row">
					<div className="col-md-6">
						<div className="MoneyRequestCont">

							<Fade triggerOnce direction="up" delay={100}>
								<h1 className="oneAppTitle">
									Use Cashero To Protect <span className="br-block"></span> Your Money From <span className="br-block"></span> Currency Ups-and-Downs
								</h1>
							</Fade>

							<Fade triggerOnce direction="up" delay={400}>
								<p>Add your local currency in your Cashero wallet and convert the funds into either USD, GBP or EUR, you choose. Hold your money in some of the strongest currencies on the block. </p>
								<p>When you’re ready to convert back to your currency, it’s simple! And guess what? Chances are you’ll come out a winner on the other side thanks to Cashero. Currency drops ain’t got nothin’ on you. </p>
							</Fade>
							
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

							<Fade triggerOnce direction="up" delay={1000}>
								<button onClick={appModalOpen} className="LinkBtn" >
									Add Money <img alt="" className="ArrowBtn" src={Arrow} />
								</button>
							</Fade>
							
							{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
							
						</div>
					</div>

					<div className="col-md-6">
						<img
							className="img-fluid mx-auto d-block"
							src={Lock}
							alt=""
						/>
						{/* <div id="slide"></div>
						<div id="bounce"></div> */}
						{/* <div className="flags">
						<div className="flags-containerBox">
							<div className="inner">
								<div className="flagBar">
									<Fade triggerOnce direction="right" duration={2000} delay={100}>
										<img
											className="d-block"
											src={usdflag}
										/>
									</Fade>
								</div>
								<div className="flagBar">
									<Fade triggerOnce direction="left" duration={2000} delay={300}>
										<img
											className="d-block"
											src={gbpflag}
										/>
									</Fade>
								</div>
								<div className="flagBar">
									<Fade triggerOnce direction="right" duration={2000} delay={100}>
										<img
											className="d-block"
											src={eurflag}
										/>
									</Fade>
								</div>
							</div>
						</div>
					</div> */}
						{/* <img
						className="img-fluid mx-auto main-flags"
						src={Flags}
					/> */}
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

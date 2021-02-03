import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Firebase from "../../config/firebase";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";

import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../styles/scss/NoEffort.scss";
// import Country from "../../assets/Country.svg";
import coinsUp from "../../assets/coinsUp.svg";
import Arrow from "../../assets/arrowLink.svg";
// import ArrowWhite from "../../assets/arrowLinkWhite.svg";
// import CounterIcon from "../../assets/counterIcon.svg";
import { Fade } from "react-awesome-reveal";

export function NoEffort(props) {
	const classes = useStyles();
	// const passcode = localStorage.getItem("passcodeInput");
	// const [value, setValue] = React.useState(0);
	const [loading, setLoading] = React.useState(false);
	// const [mobileNum, setMobileNumber] = useState<string>();
	const [appModal, setAppModal] = useState(false)
	// const [country, setCountry] = React.useState<CountryType>({
	// 	phone: "",
	// 	label: "",
	// 	code: "",
	// });
	// const [amount, setAmount] = useState("");
	// const [apy, setApy] = useState("");
	// const [open, setOpen] = React.useState(false);

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

	// const handleOpen = () => {
	// 	setOpen(true);
	// };


	const appModalOpen = () => {
		setAppModal(true)
	}

	const appModalClose = () => {
		setAppModal(false)
	}


	// React.useEffect(() => {
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
			{/* Saving-Account */}
			<div className="Coins sm-mb-30">
				<div className="container">
					<div className="row flex-column-reverse flex-sm-row">
						<div className="col-md-6">
					            <img className="img-fluid" alt="coinsUp" src={coinsUp} />
						</div>
						<div className="col-md-6">
							<div className="oneAppCont">
								<Fade triggerOnce direction="up">
									<h3 className="HighInterestTitle">
									What Cashero <span className="br-block"></span> Can Guarantee
										{/* <span className="br-block"></span>{" "}
										Savings Account */}
									</h3>
									<p className="HighInterestText">You want to earn interest on your money, right? Passive income, dinero, moolah, Cashero. We understand. You've come to the right place. You worked hard for your money, so hard for it honey, you worked for your money so it better treat you right.
									
									</p>
									<p className="HighInterestText">If your money is sitting in a bank account, chances are you’re losing money daily. The best high yield savings account interest rates should beat inflation and earn you money. Most banks and online savings accounts do neither.
									Introducing a first-of-its-kind approach to high yield savings, the Cashero savings account. The superhero your hard earned money has been waiting for.</p>
									{/* <p className="HighInterestText">If your money is sitting in a bank account, chances are you’re losing money daily. The best high yield savings account interest rates should beat inflation and earn you money. Most banks and online savings accounts do neither. </p>
									<p className="HighInterestText">Introducing a first-of-its-kind approach to high yield savings, the Cashero savings account. The superhero your hard earned money has been waiting for. </p> */}
									<button onClick={appModalOpen} className="LinkBtn" >Join for Free <img alt="arrow" className="ArrowBtn" src={Arrow} /> </button>
								</Fade>
							</div>
							{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
						</div>
					</div>
				</div>

			</div>
			{/* Saving-Account */}
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

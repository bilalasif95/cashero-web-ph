// import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { styled } from "frontity";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Firebase from "../../components/Firebase/firebase";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./BetterPlace.scss";
import Place from "../../assets/place.svg";
// import Charity from "../../assets/Charity.svg";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../../components/GetTheAppModal/GetTheAppModal";

export function BetterPlace(props) {
	const appModalOpen = () => {
		setAppModal(true)
	}

	const appModalClose = () => {
		setAppModal(false)

	}
	const [appModal, setAppModal] = useState(false)
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

	// const auth = useSelector((state) => state.authList.auth);

	// const settings = {
	// 	dots: false,
	// 	autoplay: true,
	// 	arrows: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	cssEase: 'linear',
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
				<div className="row">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" alt="" src={Place} />
					</div>

					<div className="col-md-6">
						<div className="MoneyRequestCont">
							<h1 className="oneAppTitle">  Raise More Money And <span className="br-block"></span> Make Our World A <span className="br-block"></span> Better Place </h1>
							<p>Thank you for doing what you do. Cashero wants to support you in your effort to make a difference. That’s why when you become a listed charity with us, you can receive donations from people around the world.
							We believe in your work and want you to help others. We enable donations through Cashero and we take care of all transfer and exchange fees. There’s no catch!
							All you have to do is fill out an application, we’ll review it and if you check all our boxes your charity will make it to the list. </p>
							<button onClick={appModalOpen} className="LinkBtn"> Apply <img alt="" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>
				</div>
			</div>

			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
			{/* Money Request */}

		</>
	);
}

const Paper = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
  padding: 16px 32px 24px;
  width: 100% !important;
  height: 100vh !important;
  .MuiButtonBase-root {
    top: 81px;
    right: 86px;
    position: absolute;
   @media(max-width: 540px){
      top: 0px;
      right: 0px;
    },
  }
`;


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
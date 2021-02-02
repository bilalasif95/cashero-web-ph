// import { makeStyles } from "@material-ui/styles";
import React,{useState} from "react";
// import {
// 	withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Firebase from "../../components/Firebase/firebase";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./StartDonation.scss";
// import Charity from "../../assets/Charity.svg";
import Place from "./../../assets/place.svg";
import Arrow from "./../../assets/arrowLink.svg";
import GetTheAppModal from "../../components/GetTheAppModal/GetTheAppModal";

export function StartDonation(props) {
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
				<div className="row align-items-center">
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block" alt="" src={Place} />
					</div>

					<div className="col-md-6">
						<div className="MoneyRequestCont">
							<h1 className="oneAppTitle"> Your Generosity Makes <span className="br-block"></span> Our World A Better Place </h1>
							<p>Give to charities around the world with ease. Cashero makes donating simple, with no hidden fees. Rest assured knowing one hundred percent of your donation is going to support charities across the globe. </p>
							<button onClick={appModalOpen} className="LinkBtn">Start Giving  <img alt="" className="ArrowBtn" src={Arrow} /> </button>
						</div>
					</div>

				</div>
			</div>

			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
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
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Firebase from "../../components/Firebase/firebase";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import heartmap from "./../../assets/heartmap.svg"
// import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../../components/GetTheAppModal/GetTheAppModal";


export function HandleDonations(props) {
	// const appModalOpen = () => {
	// 	setAppModal(true)
	// }

	const appModalClose = () => {
		setAppModal(false)

	}
	const [appModal, setAppModal] = useState(false)
	const classes = useStyles();
	// const passcode = localStorage.getItem("passcodeInput");
	// const [value, setValue] = React.useState(0);
	const [loading, setLoading] = React.useState(true);
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



			{/*One App  */}
			<div className="oneApp sm-pb-0">
				<div className="row flex-column-reverse flex-sm-row">

					<div className="col-md-6">
						<div className="oneAppCont sm-mt-0">
							<h1 className="oneAppTitle">Cashero Helps You <span className="br-block"></span>  Handle Donations From <span className="br-block"></span>  Around The World </h1>
							<p className="sm-center">Benefit from the following:</p>

							<ul className="list-unstyled CharityList">
								<li>✓ High interest savings account <span className="br-block"></span> Automatically earn 3-5% interest annually on donations received. </li>
								<li>✓ Multi-currency accounts</li>
								<p>Receive donations in any currency, hold them in USD, GBP or EUR. </p>
								<li>✓ Currency conversion <span className="br-block"></span> Convert between USD, GBP or EUR for free. We absorb the costs.</li>
								<li>✓ Send, request, and receive payments <span className="br-block"></span> Manage your finances and payments all through the Cashero app.</li>
								<li>✓ Free global money transfers <span className="br-block"></span> Send your donations to where they need to be around the world.</li>
							</ul>
							{/* <button onClick={appModalOpen} className="LinkBtn" >Find a charity <img className="ArrowBtn" src={Arrow} /> </button> */}
						</div>
					</div>
					<div className="col-md-6">
						<img className="img-fluid mx-auto d-block sm-center" alt="" src={heartmap} />
					</div>
				</div>
			</div>

			{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}




			{/*One App  */}

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
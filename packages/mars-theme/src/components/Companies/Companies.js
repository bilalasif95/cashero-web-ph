import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import firebase from "../../config/firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import listImg1 from "../../assets/listImg1.svg";
import listImg2 from "../../assets/listImg2.svg";
import listImg3 from "../../assets/listImg3.svg";
import listImg4 from "../../assets/listImg4.svg";
import listImg5 from "../../assets/listImg5.svg";
import listImg6 from "../../assets/listImg6.svg";
// import "../../styles/scss/Companies.scss";

export function Companies(props) {
	const classes = useStyles();
	// const passcode = localStorage.getItem("passcodeInput");
	// const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(false);
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
	// 	cssEase: 'linear',
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

			{/* Companies */}
			<div className="Companies">
				<div className="row">
					<div className="col-md-12">
						<div className="CompaniesList">
							<div className="CompaniesListBox">
								<div className="CompaniesListCont">
									<a href="/#"><img src={listImg1} alt="" /></a>
								</div>
							</div>

							<div className="CompaniesListBox">
								<div className="CompaniesListCont">
									<a href="/#"><img src={listImg2} alt="" /></a>
								</div>
							</div>

							<div className="CompaniesListBox">
								<div className="CompaniesListCont">
									<a href="/#"><img src={listImg3} alt="" /></a>
								</div>
							</div>

							<div className="CompaniesListBox">
								<div className="CompaniesListCont">
									<a href="/#"><img src={listImg4} alt="" /></a>
								</div>
							</div>

							<div className="CompaniesListBox">
								<div className="CompaniesListCont">
									<a href="/#"><img src={listImg5} alt="" /></a>
								</div>
							</div>

							<div className="CompaniesListBox">
								<div className="CompaniesListCont">
									<a href="/#"><img src={listImg6} alt="" /></a>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>

			{/* Companies */}
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

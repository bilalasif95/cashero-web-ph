// import { makeStyles } from "@material-ui/styles";
import React from "react";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Firebase from "../../components/Firebase/firebase";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



export function Countup(props) {
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
			{/* Currency Conversion */}
			<div className="Countup">
				<div className="row">

					<div className="col-md-3">
						<div className="CountupCont">
							<h1>12M+</h1>
							<p>Personal customers</p>
						</div>
					</div>

					<div className="col-md-3">
						<div className="CountupCont">
							<h1>500K</h1>
							<p>Business customers</p>
						</div>
					</div>

					<div className="col-md-3">
						<div className="CountupCont">
							<h1>140</h1>
							<p>Countries supported</p>
						</div>
					</div>

					<div className="col-md-3">
						<div className="CountupCont">
							<h1>3+</h1>
							<p>In-app currencies</p>
						</div>
					</div>

				</div>
			</div>
			{/* Currency Conversion */}

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

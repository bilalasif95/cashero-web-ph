import React, { useState } from "react";
import ExchangeCoins from "./../../assets/exchangeCoin.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";

export function OnlineSave(props) {
	const appModalOpen = () => {
		setAppModal(true)
	}

	const appModalClose = () => {
		setAppModal(false)

	}

	const [appModal, setAppModal] = useState(false)
	// const classes = useStyles();

	// const [eur, setEur] = useState("");

	// const [usd, setUsd] = useState("");

	// React.useEffect(() => {

	// 	Firebase.firestore()
	// 		.collection("ExchageRates")
	// 		.doc("DE")
	// 		.get()
	// 		.then((doc: any) => {
	// 			if (!doc.exists) {
	// 			} else {
	// 				setUsd(doc.data().usd);
	// 				setEur(doc.data().eur)
	// 			}

	// 		})
	// 		.catch(err => {
	// 		});;


	// });

	return (
		<>
			{/* Currency Conversion */}
			<div className="CurrencyConversion">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<img className="img-fluid" alt="ExchangeCoins" src={ExchangeCoins} />
						{/* <div className="curr-exchange">
							<div className="circle-container">
								<Zoom triggerOnce>
									<div className="bluecircle1" />
								</Zoom>
							</div>
							<img
								className="img-fluid charity-mob"
								src={currExchange}
							/>
						</div> */}
					</div>
					<div className="col-md-6 sm-mb-30">
						<div className="CurrencyConversionCont">
							<div>
								<Fade triggerOnce direction="up" delay={0}>
									<h1 className="oneAppTitle">
										Transfer Money Online <span className="br-block"></span> And

										Save On Exchange <span className="br-block"></span> Fees.
									</h1>
								</Fade>

								<Fade triggerOnce direction="up" delay={300}>
									<p>You know the currency exchange rate you see on Google? Ya, that’s the one we give you too. Convert currency almost at the speed of light with a small, transparent fee. By using Cashero, you can hold your money in one place, transfer money online and save on exchange fees. We give you the best possible rate, forget about those excessive bank fees.</p>
								</Fade>
								{/* <a className="Link" href="">
									Learn more currency conversion
								</a> */}
								{/* </Fade> */}
								<Fade triggerOnce direction="up" delay={700}>
									<button onClick={appModalOpen} className="LinkBtn">

										Start Exchanging  <img alt="arrow" className="ArrowBtn" src={Arrow} />
									</button>
								</Fade>
							</div>
							{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
						</div>
					</div>
				</div>
			</div>
			{/* Currency Conversion */}
		</>
	);
}

// const drawerWidth = 240;
// const useStyles = makeStyles((theme: Theme) => ({
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
// 	root: {
// 		width: "100%",
// 		height: "100%",
// 		zIndex: 1,
// 		overflow: "hidden",
// 	},

// 	appFrame: {
// 		position: "relative",
// 		display: "flex",
// 		width: "100%",
// 		height: "100%",
// 	},
// 	modal: {
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	paper: {
// 		backgroundColor: theme.palette.background.paper,
// 		// border: "2px solid #000",
// 		boxShadow: theme.shadows[5],
// 		padding: theme.spacing(2, 4, 3),
// 		width: "100%",
// 		height: "100vh",
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// 	appBar: {
// 		zIndex: theme.zIndex.drawer + 1,
// 		position: "absolute",
// 	},
// 	navIconHide: {
// 		[theme.breakpoints.up("md")]: {
// 			display: "none",
// 		},
// 	},
// 	drawerHeader: { ...theme.mixins.toolbar },
// 	drawerPaper: {
// 		width: 250,
// 		backgroundColor: theme.palette.background.default,
// 		[theme.breakpoints.up("md")]: {
// 			width: drawerWidth,
// 			position: "relative",
// 			height: "100%",
// 		},
// 	},
// 	closeButton: {
// 		position: "absolute",
// 		// right: theme.spacing.unit / 2,
// 		// top: theme.spacing.unit / 2,
// 		right: 0,
// 		color: theme.palette.grey[500],
// 	},
// 	content: {
// 		backgroundColor: theme.palette.background.default,
// 		width: "100%",
// 		height: "100vh",

// 		// [theme.breakpoints.up("sm")]: {
// 		// 	height: "calc(100% - 64px)",
// 		// },
// 	},
// 	container: {
// 		width: "100%",
// 		maxWidth: "1140px",
// 		margin: "0 auto",
// 		background: "#fff",
// 		position: "relative",
// 		padding: "0px 10px",
// 	},
// 	CustomHeader: {
// 		background: "#fff",
// 		color: "#0667EB",
// 		boxShadow: "inherit",
// 	},

// }));



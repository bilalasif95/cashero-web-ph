// import { makeStyles } from "@material-ui/styles";
import React from "react";
// import { Link } from "react-router-dom";
import Link from "../link";
// import Firebase from "../../components/Firebase/firebase";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../styles/scss/CurencyConversion.scss";
import currExchange from "../../assets/exchange.svg";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function CurrencyConversion(props) {
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
						<div className="curr-exchange">
							<div className="circle-container">
								<Zoom triggerOnce>
									<div className="bluecircle1" />
								</Zoom>
							</div>
							<img
								className="charity-mob"
								alt=""
								src={currExchange}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="CurrencyConversionCont">
							<div>
								<Fade triggerOnce direction="up">
									<h1 className="oneAppTitle">
										Online Currency
										<span className="br-block"></span>
										Exchange
									</h1>
								

								<p>
									
										Instantly exchange between USD, EUR, and GBP. Cashero gives you free currency conversions at transparent bank-beating exchange rates. Beat that.
									
								</p>
								{/* <p>
									<Fade triggerOnce direction="up" delay={100}>
										Instantly exchange between USD, EUR, and
										GBP.
									</Fade>
									<span className="br-block"></span>
									<Fade triggerOnce direction="up" delay={300}>
										Cashero gives you free currency
										conversions at transparent bank-beating
										exchange rates. Beat that.
									</Fade>
								</p> */}
								{/* <a className="Link" href="">
									Learn more currency conversion
								</a> */}
								{/* </Fade> */}
								
									<Link link="/exchange-rates"><a className="Link sm-mb-30" href="/exchange-rates">

										Learn more about Exchange <img className="ArrowBtn" alt="" src={Arrow} />
									</a>
									</Link>
								</Fade>
							</div>
						</div>
					</div>
				</div>
			</div >
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



// import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// import {
// 	// withRouter,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import firebase from "../../config/firebase";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Map_dot from "../../assets/Map_dot.svg";
import Peoples from "../../assets/Peoples.svg";
import Renee from "../../assets/renee.svg";
import Henri from "../../assets/henri.svg";
import Ali from "../../assets/ali.svg";
import Gen from "../../assets/gen.svg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import CardImg from "../../assets/CardImg.svg";
import Star from "../../assets/star.svg";
// import "../../styles/scss/PeoplesSection.scss";
import People from "../../assets/People.svg";

export function PeoplesSection(props) {
	// const classes = useStyles();
	// const passcode = localStorage.getItem("passcodeInput");
	// const [value, setValue] = useState(0);
	// const [loading, setLoading] = useState(false);
	// const [mobileNum, setMobileNumber] = useState<string>();
	// const [country, setCountry] = useState<CountryType>({
	// 	phone: "",
	// 	label: "",
	// 	code: "",
	// });
	// const [amount, setAmount] = useState("");
	// const [apy, setApy] = useState("");

	const [loadercondtion, setloadercondtion] = useState(1);

	// const auth = useSelector((state) => state.authList.auth);

	const settings = {
		dots: false,
		autoplay: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: "linear",
	};

	useEffect(() => {
		setInterval(() => {
			setloadercondtion(Math.floor(Math.random() * (5 - 1) + 1))
		}, 5000)
	}, [])
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



			{/* Peoples */}
			<div className="peoples sm-mb-30">
				<div className="PeoplesCont">
					<div className="container">
						<h3 className="PeoplesTitle">Our Customers Say We're Great</h3>
						<div className="row">
							<div className="col-md-5">
								{/* Slider */}
								<Slider {...settings}>
									<div className="CarouselOuter">
										<div className="CrouselCard">
											<ul className="list-unstyled cardList">
												<li><img src={CardImg} alt="" /> <span>Miyah Silva</span> </li>
											</ul>
											<h3 className="comment">I recommend Cashero to everyone. I can see that I’m earning money every minute!</h3>

											<div className="Rating">
												<ul className="list-unstyled RatingList">
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
												</ul>
												<span>2 days ago</span>
											</div>
										</div>
									</div>


									<div className="CarouselOuter">
										<div className="CrouselCard">
											<ul className="list-unstyled cardList">
												<li><img src={Henri} alt="" /> <span>Henrique Cassam</span> </li>
											</ul>
											<h3 className="comment">Sending money to friends has never been easier with Cashero</h3>

											<div className="Rating">
												<ul className="list-unstyled RatingList">
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
												</ul>
												<span>3 days ago</span>
											</div>
										</div>
									</div>

									<div className="CarouselOuter">
										<div className="CrouselCard">
											<ul className="list-unstyled cardList">
												<li><img src={Ali} alt="" /> <span>Ali Samji</span> </li>
											</ul>
											<h3 className="comment">Cashero has saved me a fortune from currency devaluation. And I’m even making money on top of it.</h3>

											<div className="Rating">
												<ul className="list-unstyled RatingList">
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
												</ul>
												<span>5 days ago</span>
											</div>
										</div>
									</div>

									<div className="CarouselOuter">
										<div className="CrouselCard">
											<ul className="list-unstyled cardList">
												<li><img src={Renee} alt="" /> <span>Renee McEwan </span> </li>
											</ul>
											<h3 className="comment">As a business owner, making and receiving money is simple. I’m very impressed with Cashero.</h3>

											<div className="Rating">
												<ul className="list-unstyled RatingList">
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
												</ul>
												<span>10 days ago</span>
											</div>
										</div>
									</div>

									<div className="CarouselOuter">
										<div className="CrouselCard">
											<ul className="list-unstyled cardList">
												<li><img src={Gen} alt="" /> <span>Gen Paes</span> </li>
											</ul>
											<h3 className="comment">Exchanging between currencies is a breeze, it’s about time.</h3>

											<div className="Rating">
												<ul className="list-unstyled RatingList">
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
													<li className="list-inline-item"><img alt="" src={Star} /></li>
												</ul>
												<span>15 days ago</span>
											</div>
										</div>
									</div>


								</Slider>
								{/* Slider */}

								<div className="ReviewText">
									<p>Rated 4.9 out of 5 based on <span className="br-block"></span> <u>16,632</u> on <span className="TrustText"><img src={Star} alt="" />  Trustpilot</span></p>
								</div>
							</div>
							<div className="col-md-7">
								<div className="people-map">
									<div className="loads-container dN">
										<div className="in-container">
											<div className="loader loader1">
												<span></span>
												<span></span>
											</div>
											<div className="loader loader2">
												<span></span>
												<span></span>
											</div>
											<div className="loader loader3">
												<span></span>
												<span></span>
											</div>
											<div className="loader loader4">
												<span></span>
												<span></span>
											</div>
											<div className="loader loader5">
												<span></span>
												<span></span>
											</div>
										</div>
									</div>
									<img alt="" className="img-fluid dB" src={People} />
									<img alt="" className="img-fluid dN" src={Map_dot} />
									<img
										className="img-fluid peoples-container dN"
										src={Peoples}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div >
			</div >

			{/* Peoples */}
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
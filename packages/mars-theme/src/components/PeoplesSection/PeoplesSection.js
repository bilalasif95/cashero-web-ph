import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Map_dot from "../../assets/Map_dot.svg";
import Peoples from "../../assets/Peoples.svg";
import Renee from "../../assets/renee.jpg";
import Henri from "../../assets/henri.jpg";
import Ali from "../../assets/ali.svg";
import Gen from "../../assets/gen.svg";
import CardImg from "../../assets/CardImg.jpg";
import Star from "../../assets/star.svg";
import People from "../../assets/People.png";

export function PeoplesSection() {
	const [loadercondtion, setloadercondtion] = useState(1);
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
	return (
		<div className="peoples">
			<div className="PeoplesCont">
				<div className="container">
					<h3 className="PeoplesTitle mb-0">Too good to be true?</h3>
					<h4 className="customerDetailtext">Here’s what our users have to say about us</h4>
					<div className="row">
						<div className="col-md-5">
							<Slider {...settings}>
								<div className="CarouselOuter">
									<div className="CrouselCard">
										<ul className="list-unstyled cardList">
											<li><img src={CardImg} alt="Card Image" /> <span>Miyah Chan</span> </li>
										</ul>
										<h3 className="comment">I recommend Cashero to everyone. I can see that I’m earning money every minute!</h3>
										<div className="Rating">
											<ul className="list-unstyled RatingList">
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
											</ul>
											<span>2 days ago</span>
										</div>
									</div>
								</div>
								<div className="CarouselOuter">
									<div className="CrouselCard">
										<ul className="list-unstyled cardList">
											<li><img src={Henri} alt="Henrique Cassam" /> <span>Henrique Cassam</span> </li>
										</ul>
										<h3 className="comment">Sending money to friends has never been easier with Cashero.</h3>
										<div className="Rating">
											<ul className="list-unstyled RatingList">
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
											</ul>
											<span>3 days ago</span>
										</div>
									</div>
								</div>
								<div className="CarouselOuter">
									<div className="CrouselCard">
										<ul className="list-unstyled cardList">
											<li><img src={Ali} alt="Ali Samji" /> <span>Ali Samji</span> </li>
										</ul>
										<h3 className="comment">Cashero has saved me a fortune from currency devaluation. And I’m even making money on top of it.</h3>
										<div className="Rating">
											<ul className="list-unstyled RatingList">
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
											</ul>
											<span>5 days ago</span>
										</div>
									</div>
								</div>
								<div className="CarouselOuter">
									<div className="CrouselCard">
										<ul className="list-unstyled cardList">
											<li><img src={Renee} alt="Renee McEwan" /> <span>Renee McEwan </span> </li>
										</ul>
										<h3 className="comment">As a business owner, making and receiving money is simple. I’m very impressed with Cashero.</h3>
										<div className="Rating">
											<ul className="list-unstyled RatingList">
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
											</ul>
											<span>10 days ago</span>
										</div>
									</div>
								</div>
								<div className="CarouselOuter">
									<div className="CrouselCard">
										<ul className="list-unstyled cardList">
											<li><img src={Gen} alt="Gen Paes" /> <span>Gen Paes</span> </li>
										</ul>
										<h3 className="comment">Exchanging between currencies is a breeze, it’s about time.</h3>
										<div className="Rating">
											<ul className="list-unstyled RatingList">
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
												<li className="list-inline-item"><img alt="Star" src={Star} /></li>
											</ul>
											<span>15 days ago</span>
										</div>
									</div>
								</div>
							</Slider>
							<div className="ReviewText">
								<p>Rated 4.9 out of 5 based on <span className="br-block"></span> <span className="underline">16,632</span> on <span className="TrustText"><img src={Star} alt="Star" />  Trustpilot</span></p>
							</div>
						</div>
						<div className="col-md-7">
							<div className="people-map">
								<div className="loads-container dN">
									<div className="in-container">
										<div className={`${loadercondtion === 1 ? 'loader' : ""} loader1`} >
											<span></span>
											<span></span>
										</div>
										<div className={`${loadercondtion === 2 ? 'loader' : ""} loader2`}>
											<span></span>
											<span></span>
										</div>
										<div className={`${loadercondtion === 3 ? 'loader' : ""} loader3`}>
											<span></span>
											<span></span>
										</div>
										<div className={`${loadercondtion === 4 ? 'loader' : ""} loader4`}>
											<span></span>
											<span></span>
										</div>
										<div className={`${loadercondtion === 5 ? 'loader' : ""} loader5`}>
											<span></span>
											<span></span>
										</div>
									</div>
								</div>
								<img alt="People" className="img-fluid dB" src={People} />
								<img alt="Map dot" className="img-fluid dN" src={Map_dot} />
								<img
									className="img-fluid peoples-container dN"
									src={Peoples}
									alt="Peoples"
								/>
							</div>
						</div>
					</div>
				</div>
			</div >
		</div >
	);
}
import React from "react";
import Fav from "../../assets/favImg.svg";
import Vector from "../../assets/vector.svg";
import Done from "../../assets/done.svg";
import { Fade } from "react-awesome-reveal";

export function GetStarted() {
	return (
		<div className="getStarted">
			<div className="row">
				<div className="col-md-12">
					<h3 className="getStartedTitle">
						Get Started in Minutes
					</h3>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 smBox1">
					<Fade triggerOnce direction="left">
						<div className="GetStartedBox1 w-100">
							<img className="img-fluid" alt="Favourite" src={Fav} />
							<h3>Download the Cashero app</h3>
						</div>
					</Fade>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
					<div className="GetStartedBox2 w-100">
						<img
							className="img-fluid"
							alt="Vector"
							src={Vector}
						/>
						<h3>
							Sign up and verify your identity
						</h3>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
					<Fade triggerOnce direction="right">
						<div className="GetStartedBox3 w-100">
							<img className="img-fluid" alt="Done" src={Done} />
							<h3>
								Add or receive funds and start benefiting
							</h3>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
}
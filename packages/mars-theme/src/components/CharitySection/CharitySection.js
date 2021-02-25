import React from "react";
import Link from "../link";
import Charity from "../../assets/Charity.svg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";

export function CharitySection() {
	return (
		<div className="Charity sm-pb-0">
			<div className="row flex-column-reverse flex-sm-row">
				<div className="col-md-6">
					<div className="charity">
						<img
							className="sm-center img-fluid"
							alt=""
							src={Charity}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="CharityCont">
						<Fade triggerOnce direction="up">
							<h1 className="oneAppTitle">
								{" "}
								Fee-Free Donations
								</h1>
							<p>
							Heroes deserve special treatment. When you receive donations in-app or via a donation request link, you receive 100% of the funds and your donations earn interest.
								</p>
							<Link link="/donation" className="Link">Learn more about Charity<img className="ArrowBtn" alt="" src={Arrow} /></Link>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
}
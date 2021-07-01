import React, { useState, useEffect } from "react";
import Link from "../link";
import Charity from "../../assets/Charity.jpg";
import CharityBR from "../../assets/CharityBR.jpg";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import { withTranslation } from "react-i18next";

const CharitySection = ({ i18n }) => {
	const [storage, setStorage] = useState("")
	useEffect(() => {
		setStorage(localStorage.getItem("lang"))
	}, [i18n.language])
	return (
		<div className="Charity sm-pb-0">
			<div className="row flex-column-reverse flex-sm-row">
				<div className="col-md-6">
					<div className="charity">
						<img
							className="sm-center img-fluid"
							alt="Charity"
							src={storage === "brazilian" ? CharityBR : Charity}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="CharityCont">
						<Fade triggerOnce direction="up">
							<h2 className="oneAppTitle">{i18n.t("Fee_Free_Donations")}</h2>
							<p>{i18n.t("Fee_Free_Donations_P")}</p>
							<Link link="/donation" className="Link">{i18n.t("Learn_more_about_Charity")}<img className="ArrowBtn" alt="arrow" src={Arrow} /></Link>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(CharitySection);
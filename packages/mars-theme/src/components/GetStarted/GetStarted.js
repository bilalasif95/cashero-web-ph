import React, { useState, useEffect } from "react";
import Fav from "../../assets/favImg.svg";
import Vector from "../../assets/vector.svg";
import Done from "../../assets/done.svg";
import DoneBR from "../../assets/doneBR.svg";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

const GetStarted = ({ i18n }) => {
	const [storage, setStorage] = useState("")
	useEffect(() => {
		setStorage(localStorage.getItem("lang"))
	}, [i18n.language])
	return (
		<div className="getStarted">
			<div className="row">
				<div className="col-md-12">
					<h3 className="getStartedTitle">
						{i18n.t("Get_Started_in_Minutes")}
					</h3>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 smBox1">
					<Fade triggerOnce direction="left">
						<div className="GetStartedBox1 w-100">
							<img className="img-fluid" height="100%" width="100%" alt="Favourite" src={Fav} />
							<h3>{i18n.t("Download_the_Cashero_app")}</h3>
						</div>
					</Fade>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox2">
					<div className="GetStartedBox2 w-100">
						<img
							className="img-fluid"
							height="100%"
							width="100%"
							alt="Vector"
							src={Vector}
						/>
						<h3>
							{i18n.t("Sign_up_and_verify_your_identity")}
						</h3>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  smBox3">
					<Fade triggerOnce direction="right">
						<div className="GetStartedBox3 w-100">
							<img className="img-fluid" alt="Done" height="100%" width="100%" src={storage === "brazilian" ? DoneBR : Done} />
							<h3>
								{i18n.t("Add_or_receive_funds_and_start_benefiting")}
							</h3>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(GetStarted);
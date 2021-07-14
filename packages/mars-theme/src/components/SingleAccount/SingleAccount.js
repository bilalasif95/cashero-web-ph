import React, { useState } from "react";
import GetTheAppModal from "../GetTheAppModal/GetTheAppModal";
import { Fade } from "react-awesome-reveal";
import Arrow from "../../assets/arrowLink.svg";
import Globe from "../../assets/Globe.svg";
import { withTranslation } from "react-i18next";

const SingleAccount = ({ i18n }) => {
	const [appModal, setAppModal] = useState(false);
	const appModalOpen = () => {
		setAppModal(true)
	};
	const appModalClose = () => {
		setAppModal(false)
	};
	return (
		<div className="Globe">
			<div className="container">
				<div className="row flex-column-reverse flex-sm-row">
					<div className="col-md-6">
						<div className="Globe-pic">
							<img
								className="img-fluid mx-auto d-block"
								height="100%"
								width="425px"
								alt="Globe"
								src={Globe}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="oneAppCont sm-mt-0">
							<Fade triggerOnce direction="up">
								<h3 className="HighInterestTitle">
									{i18n.t("Your_Money_From")} <span className="br-block-with-no-display"></span>  {i18n.t("Around_the_World_in")} <span className="br-block-with-no-display"></span> {i18n.t("One_Account")}
								</h3>
								<p>{i18n.t("Your_Money_From_P1")} </p>
								<p>{i18n.t("Your_Money_From_P2")} </p>
								<button onClick={appModalOpen} className="LinkBtn">{i18n.t("Get_Early_Access")} <img alt="arrow" height="24px" width="24px" className="ArrowBtn" src={Arrow} /> </button>
							</Fade>
							{appModal && <GetTheAppModal open={appModal} handleClose={appModalClose} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withTranslation()(SingleAccount);
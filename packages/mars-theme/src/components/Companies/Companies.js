import React from "react";
import listImg1 from "../../assets/listImg1.svg";
import listImg2 from "../../assets/listImg2.svg";
import listImg3 from "../../assets/listImg3.svg";
import listImg4 from "../../assets/listImg4.svg";
import listImg5 from "../../assets/listImg5.svg";
import listImg6 from "../../assets/listImg6.svg";

export function Companies() {
	return (
		<div className="Companies">
			<div className="row">
				<div className="col-md-12">
					<div className="CompaniesList">
						<div className="CompaniesListBox">
							<div className="CompaniesListCont">
								<a href="/#"><img src={listImg1} alt="list Image 1" /></a>
							</div>
						</div>
						<div className="CompaniesListBox">
							<div className="CompaniesListCont">
								<a href="/#"><img src={listImg2} alt="list Image 2" /></a>
							</div>
						</div>
						<div className="CompaniesListBox">
							<div className="CompaniesListCont">
								<a href="/#"><img src={listImg3} alt="list Image 3" /></a>
							</div>
						</div>
						<div className="CompaniesListBox">
							<div className="CompaniesListCont">
								<a href="/#"><img src={listImg4} alt="list Image 4" /></a>
							</div>
						</div>
						<div className="CompaniesListBox">
							<div className="CompaniesListCont">
								<a href="/#"><img src={listImg5} alt="list Image 5" /></a>
							</div>
						</div>
						<div className="CompaniesListBox">
							<div className="CompaniesListCont">
								<a href="/#"><img src={listImg6} alt="list Image 6" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
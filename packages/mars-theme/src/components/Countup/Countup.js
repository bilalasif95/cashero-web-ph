import React from "react";

export function Countup() {
	return (
		<div className="Countup">
			<div className="row">
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>120</h1>
						<p>Countries supported</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>3</h1>
						<p>In-app currencies</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>5%</h1>
						<p>APY (up to)</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>1</h1>
						<p>Only 1 Cashero</p>
					</div>
				</div>
			</div>
		</div>
	);
}
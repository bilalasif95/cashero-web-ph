import React from "react";

export function Countup() {
	return (
		<div className="Countup">
			<div className="row">
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>12M+</h1>
						<p>Personal customers</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>500K</h1>
						<p>Business customers</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>140</h1>
						<p>Countries supported</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="CountupCont">
						<h1>3+</h1>
						<p>In-app currencies</p>
					</div>
				</div>
			</div>
		</div>
	);
}
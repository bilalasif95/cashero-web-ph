import React from "react";
import Link from "../link";

export function Sitemap() {
	return (
		<div className="container">
			<div className="banner">
				<div className="row">
					<div className="col-md-12">
						<div className="bannerCont">
							<h2 className="sitemap-h2">Sitemap</h2>
							<h6 className="sitemap-head">Home</h6>
							<ul className="sitemap-list">
								<li><Link link="/">Landing Page</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
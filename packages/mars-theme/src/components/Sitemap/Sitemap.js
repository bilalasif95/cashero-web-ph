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
							<h6 className="sitemap-head">Personal</h6>
							<ul className="sitemap-list">
								<li><Link link="/high-yield-savings-account">High Yield Savings Account</Link></li>
								<li><Link link="/multi-currency-savings-account">Multi-Currency Savings Account</Link></li>
								<li><Link link="/online-currency-exchange">Online Currency Exchange</Link></li>
								<li><Link link="/instant-money-transfer">Instant Money Transfer</Link></li>
								<li><Link link="/transfer-money-abroad">Transfer Money Abroad</Link></li>
							</ul>
							<h6 className="sitemap-head">Business</h6>
							<ul className="sitemap-list">
								<li><Link link="/high-yield-savings-account">High Yield Savings Account</Link></li>
								<li><Link link="/multi-currency-savings-account">Multi-Currency Savings Account</Link></li>
								<li><Link link="/online-currency-exchange">Online Currency Exchange</Link></li>
								<li><Link link="/instant-money-transfer">Instant Money Transfer</Link></li>
								<li><Link link="/transfer-money-abroad">Transfer Money Abroad</Link></li>
							</ul>
							<h6 className="sitemap-head">Donations</h6>
							<ul className="sitemap-list">
								<li><Link link="/donation">Donate</Link></li>
								<li><Link link="/become-listed-charity">Become a Listed Charity</Link></li>
							</ul>
							<h6 className="sitemap-head"><Link link="/company">Company</Link></h6>
							<h6 className="sitemap-head"><Link link="/contact-us">Help</Link></h6>
							<h6 className="sitemap-head"><Link link="/giveaway">Terms</Link></h6>
							<h6 className="sitemap-head"><Link link="/blog">Blog</Link></h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
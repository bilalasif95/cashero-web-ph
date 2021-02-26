import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import PropTypes from 'prop-types';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`,
	};
}

export function QuestionTabs(props) {
	const [value, setValue] = useState(props.activeTab);
	const [path, setPath] = useState("");
	const handleChange = (event, newValue) => {
		event.preventDefault();
		setValue(newValue);
	};
	const [expanded, setExpanded] = useState("panel1");
	const accordionhandleChange = (panel) => (
		event,
		newExpanded
	) => {
		setExpanded(newExpanded ? panel : false);
	};
	useEffect(() => {
		setPath(window.location.pathname)
	}, [])
	return (
		<div className="Questions">
			<div className="row">
				<div className="col-md-4">
					<h4 className="TabsTitle">Frequently asked <span className="br-block"></span>questions</h4>
					<AppBar position="static" className="custom-Tabs">
						<Tabs
							value={value}
							onChange={handleChange}
							textColor="primary"
							variant="scrollable"
							scrollButtons="auto"
							aria-label="scrollable auto tabs example"
						>
							<Tab
								className="customTabs"
								label="General"
								{...a11yProps(0)}
							/>
							<Tab
								className="customTabs"
								label="Savings"
								{...a11yProps(1)}
							/>
							<Tab
								className="customTabs"
								label="Multi-Currency"
								{...a11yProps(2)}
							/>
							<Tab
								className="customTabs"
								label="Exchange"
								{...a11yProps(3)}
							/>
							<Tab
								className="customTabs"
								label="Payments"
								{...a11yProps(4)}
							/>
							<Tab
								className="customTabs"
								label="Remittance"
								{...a11yProps(5)}
							/>
							<Tab
								className="customTabs"
								label="Charity"
								{...a11yProps(6)}
							/>
						</Tabs>
					</AppBar>
				</div>
				<div className="col-md-8">
					<TabPanel value={value} index={0}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h4 className="heading">
										What is Cashero?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Cashero is a blockchain-based
											wallet payment ecosystem.
											Cashero provides a secure
											platform for high-yield savings,
											multi-currency wallets and
											instant, fee-free internal and
											cross border payments. Cashero
											is available in 130 including
											all of the G20 countries except
											Russia.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h4 className="heading">
										What are Cashero’s main features?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											<span className="bold-text">High yield savings: </span>  Cashero users receive inflation-beating, bank-beating, almost-too-good-to-be true interest rates of 2%-5% APY.
										</h4>
										<h4 className="FaqText">
											<span className="bold-text">Multi-currency wallet:</span> no minimum balance or maintenance fees.  Cashero users can reduce currency fluctuation risk by holding balances in USD, GBP, and EUR.
										</h4>
										<h4 className="FaqText">
											<span className="bold-text">Currency conversion:</span> users can instantly exchange between USD, EUR, and GBP.
										</h4>
										<h4 className="FaqText">
											<span className="bold-text">Instant payments:</span> users can send, request, and receive money from users worldwide faster than you can say Cashero.
										</h4>
										<h4 className="FaqText">
											<span className="bold-text">Business:</span> businesses can send, request, and receive money from customers worldwide.
										</h4>
										<h4 className="FaqText">
											<span className="bold-text">Fee-free charity donations:</span> charities can sign up to Cashero to receive donations. Charities can use their Cashero link to request donations via Cashero.
										</h4>
										<h4 className="FaqText">
											<span className="bold-text">Rewards:</span> users earn rewards for referring people to Cashero.
											</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h4 className="heading">
										When will Cashero officially launch?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											May 2021.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h4 className="heading">
										How is Cashero regulated?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Cashero is in the process of becoming an EU-regulated financial institution.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h4 className="heading">
										Where can I learn more?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											To learn more about Cashero contact info@cashero.com.
										</h4>
										<span>info@cashero.com</span>
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h4 className="heading">
									How do I open a high-yield savings account?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">To open an account with Cashero, simply download the app to your smartphone, add money to your account and you will automatically start earning inflation-beating interest rates of 2%-5% APY. </h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h4 className="heading">
									How can I see how much interest I’ve earned?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">On the main Wallet screen within the Cashero app, you’ll be able to click on Chart View. Here you can see how much you’ve invested and your earnings over different periods of time.</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h4 className="heading">
										What is APY?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">APY stands for annual percentage yield. It measures your interest rate over a year, including the effects of compounding. It represents how much you will earn from your investment in one year. </h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h4 className="heading">
									Are there fees associated with Cashero’s savings account?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
										The short answer is no. The long answer is also no. Rest at ease knowing your money can grow without fees eating away at your earnings.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h4 className="heading">
										Is my money safe?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
										Yes. Your money is protected using multi-party computation (MPC) and hardware isolation with Intel SGX enclaves. It sounds complex and it is, on purpose. These security layers ensure your money is safe and protected.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/personal/" &&
								<Accordion expanded={expanded === 'panel6'} onChange={accordionhandleChange('panel6')}>
									<AccordionSummary
										expandIcon={expanded === 'panel6' ? <RemoveCircleOutlineIcon /> : <ControlPointIcon />}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h4 className="heading">Learn more about High Yield Savings Accounts</h4>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<div className="expandTypo">
												<h2 className="blackhead">Our Guide to High Yield Savings Accounts</h2>
												<p>The term “high yield” may intrigue a lot of people interested in being financially savvy. But is it that attractive of an option, and can it be possibly used to mislead consumers?</p>
												<p>We've put together this guide to help you know what to expect from a high-yield savings account, whether it's a good fit for you, your funds, and your future.</p>
												<h3 className="blackhead">What is a high-yield savings account?</h3>
												<p>A high-yield savings account is a savings account offering higher rates of return on the amount deposited. These rates are better than the national average and are usually tied to specific conditions, such as maintenance fees and minimum balance requirements. A key term here is “APY” (annual percentage yield).</p>
												<h3 className="blackhead">APY & high-yield savings accounts – An example</h3>
												<p>In most cases, a high-yield savings account enables you to earn around 0.50% APY. In simple terms, APY is the number that tells you what your money could earn within a fiscal year. So the higher the APY, the more money for you, because the faster your balance will grow without any extra efforts on your behalf. Therefore, a high-yield savings account offering 5% APY is way more rewarding than a traditional savings account. Just consider that the national average savings rate is in the 0.05% APY region. Not so great...</p>
												<p>Let’s use an example to help you understand the magnitude of what we’re talking about. Assume that you have $10,000 in a high-yield savings account. With a 5% APY you would earn slightly over $500 after 12 months. Compare that to a 0.05% APY and you’d only earn a humble $5. That’s the difference Cashero makes to your money. </p>
												<p><b>Important notes:</b></p>
												<div className="inner-div">
													<p>Some high yield savings accounts even have rates of return that decrease rapidly after a certain time period. More often than not, it can even result in a lower-than-average rate of return.</p>
												</div>
												<h2 className="blackhead">Why consider high APY savings account instead of another account type? </h2>
												<p>If you wish to access your money regularly or fast then a high APY savings account is definitely for you, especially an online account. With an online account, you have 24/7 (and secure) access to your funds and typically have to pay fewer fees than traditional banks.</p>
												<p>Given that they’re not hampered by the brick-and-mortar expenses of traditional institutions, online accounts pass their savings on to their customers in the form of higher returns. High APY savings accounts are also a good place to put your money if you would rather avoid taking risks. See below for more information.</p>
												<h3 className="blackhead">How safe are high-yield savings accounts?</h3>
												<p>High-yield savings accounts are safe when operated by  FDIC (Federal Deposit Insurance Corporation). These accounts are insured by the FDIC up to a max sum allowed by law — $250,000 per depositor at the time of this article. So what does this mean and how do you benefit from it? Putting it simply,  the government ensures your funds are safe and accessible even if the financial institution fails. All of these factors combined make high yield savings accounts the perfect option for individuals wishing to save money for:</p>
												<div className="inner-div">
													<ul>
														<li>Short-term savings goals</li>
														<li>Large expenses</li>
														<li>Emergencies</li>
													</ul>
												</div>
												<h2 className="blackhead">Best uses of a high-yield savings account </h2>
												<p>People often use a high-yield savings account when saving for large purchases, as the higher interest rate helps you to reach the goal more quickly. That's why you may consider having one for:</p>
												<div className="inner-div">
													<p><b>A down payment on your 1st or 2nd home –</b> A Federal Housing Administration (FHA) loan requires a down payment of 3.5% or more. Traditional conforming loans, 5% or more. This climbs to 20% if you want to skip mortgage insurance. So on a $200,000 home, you would need to save $7,000, $10,000, and $40,000 respectively for each of these payments. Having a high-yield savings account paying 5% APY, you would need 6 months, 12 months, and 36 months respectively, to save the kind of money required for the down payment (with an initial deposit of $1,000 and around $750-$1100 each month). Saving is never a quick task, but using a high-yield savings account will get you to your goal faster than a typical savings account. </p>
													<p><b>College savings –</b> Everybody knows that college tuition costs can become overwhelming purely because of the amount needed. Although a college saving plan (i.e., a 529 plan) is an excellent option as the funds grow tax-free (even if you take the money out to pay for college), a high-yield savings account is definitely a solid alternative. Using an online savings goal calculator can help you to plan how much you need to save on a regular basis to reach your savings goal by a certain date.</p>
													<p><b>Big family getaway –</b> First of all, it's paramount to decide when you want to leave on holiday and how much you want to spend. You may even want to budget for food, accommodation, travel, and other items. </p>
													<p><b>Emergency funds –</b> These funds usually cover 3-6 months of living expenses and are held just in case the money is needed urgently. For example, if the air conditioning unit breaks down in the heart of summer or you're unexpectedly laid off. Think of it as a rainy day fund. </p>
													<p><b>A wedding or other goals with a short timeline – </b> According to the 2019 Real Wedding Study published by The Knot, the average wedding cost (not including the honeymoon) is nearly $34,000. With a high-yield savings account offering, say, 5% APY, you could save that kind of money for the big day in a shorter time frame. You could do the same for other expenses with a short timeline, such as buying furniture, a vehicle, or even to have money aside for estimated taxes.</p>
												</div>
												<h2 className="blackhead">Things to consider when choosing a high-yield savings account</h2>
												<p>First and foremost, it's important to weigh the APY against the set requirements to earn the interest. For example, one institution may offer a slightly higher APY than another. However, the second institution may require a higher minimum balance and deposit. Other things to factor in before deciding to open an account are:</p>
												<div className="inner-div">
													<p><b>How often rates change –</b> Check how often the financial institution you want to do business with adjusts its rates. Unlike other financial products, the return rate of savings accounts tends to be variable rather than locked in for a period of time. A temporary promotional rate, for example, may seem appealing at first but could be much lower later on. Economic factors may also cause financial institutions to lower their APY (e.g. the coronavirus-related emergency rate cuts from the Federal Reserve in 2019). If you can find a savings account with a guaranteed rate for 6-12 months, then you’ve done yourself a favour. If you can find one that pays you 5% permanently then you’re either very smart or very lucky. </p>
													<p><b>Opening deposit (aka minimum deposit) required – </b> This amount varies across financial institutions, with some of them requiring an initial deposit of at least $10,000 to open an account while others require nothing. Most of them, however, will probably ask for a minimum deposit of $100 or less. Determining how much you can deposit (realistically) will help compare high-yield savings products and decide which one best suits your needs. </p>
													<p><b>Minimum balance required –</b> Failing to meet the minimum balance requirements of some high-yield savings accounts can result in fees or failure to earn the high APY you wanted. This figure can be pretty large, sometimes even greater than $10,000. A monthly maintenance fee is just one of the charges you may need to pay if you do not maintain a minimum balance in your account. Luckily, Cashero doesn’t have a minimum balance requirement.</p>
													<p><b>Withdrawal options – </b> As a saver, you may be limited to six withdrawals per month from your savings account due to Reg D or Regulation D. The only exception is when you withdraw in-person at a bank or from an ATM.  With Cashero there are no limits to withdrawals on your money. </p>
												</div>
												<p>High-yield savings accounts are a great way to save your money and earn interest at the same time. Cashero can help you save for large purchases and reach your financial goals faster.</p>
											</div>
										</Typography>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h4 className="heading">
										How does the multi-currency account
										work?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">All Cashero accounts are built with the option to hold money in United States dollars (USD), British pounds (GBP) or Euros (EUR). All you have to do is download the app to your smartphone, choose which currency you want to hold (USD, GBP, or EUR) and add money in your local currency. Your funds will be automatically converted into the currency of your choice, and voilà, your multi-currency account is loaded.</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h4 className="heading">
										Can I open a multi-currency account
										in my country?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Cashero is available in all
											countries except: Afghanistan,
											Angola,Belarus, Bosnia &
											Herzegovina, Central African
											Republic, Congo (DRC), Cote
											d’Ivoire (Ivory Coast), Cuba,
											Ecuador, Eritrea, Ethiopia,
											Guinea-Bissau, Guyana, Haiti,
											Iran, Iraq, Kosovo, Laos,
											Lebanon, Liberia, Libya,
											Macedonia, Myanmar, Nigeria,
											North-Korea, Papua NG, Russia,
											Serbia, Somalia, Sudan, Syria,
											Turkmenistan, Ukraine,
											Uzbekistan, Vanuatu, Venezuela,
											Yemen, Zimbabwe and Connecticut,
											Hawaii, New York, New Hampshire,
											Texas, Vermont, Virginia in the
											United States.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h4 className="heading">
										How much does it cost to get a
										Cashero multi-currency account?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">Nothing, it’s free! No minimum balance is needed and there are no maintenance fees.</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h4 className="heading">
										How can I protect my money against
										currency fluctuations?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Cashero takes pride in giving
											its users the ability to protect
											their money from currency
											volatility. You can load your
											Cashero account with your local
											currency and convert it to
											either USD, GBP or EUR. Doing
											this can give you the
											opportunity to potentially
											decrease the risk of your money
											losing purchasing power as it is
											being secured a more stable
											currency.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h4 className="heading">
										Is my money safe?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Yes. Your money is protected
											using multi-party computation
											(MPC) and hardware isolation
											with Intel SGX enclaves. It
											sounds complex and it is, on
											purpose. These security layers
											ensure your money is safe and
											protected.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/currency-accounts/" &&
								<Accordion
									expanded={expanded === "panel6"}
									onChange={accordionhandleChange("panel6")}
								>
									<AccordionSummary
										expandIcon={
											expanded === "panel6" ? (
												<RemoveCircleOutlineIcon />
											) : (
													<ControlPointIcon />
												)
										}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h4 className="heading">
											Learn more about Multi Currency Savings Accounts
										</h4>
									</AccordionSummary>
									<AccordionDetails>
										<div className="expandTypo">
											<h2 className="blackhead">Multi Currency Savings Account – Must-Know Details</h2>
											<p>There’s been a lot written lately about multi currency savings accounts and their benefits for individuals and businesses alike. But is it really an option worth considering? What are the advantages of creating a multi-currency savings account? What is there to look out for, and is there a catch? How can you make the most out of it? </p>
											<h2 className="blackhead">What is a multi-currency savings account?</h2>
											<p>A multi-currency savings account is a relatively new type of a savings account that enables you to hold multiple currencies in a single account. In other words, you can receive or send money in different currencies without having to go through an exchange process between the currencies involved. For example, you may receive US dollars, but pay in Euros using the funds available in a single account. Most of the time, this is done via:</p>
											<p>(1) Wire transfer</p>
											<p>ACH (Automated Clearing House) or electronic payments</p>
											<p>(3) Debit card</p>
											<p>Multi-currency savings accounts come in three distinct forms: (1) certificates of deposits (CD), (2) money market accounts (MMA), and direct deposit accounts (DDA). Depending on the multi-currency account you open, you may be allowed to save in a foreign currency or use it for your daily transactions. This means that you can use one to send and receive funds from abroad, skipping the tedious paperwork or currency conversions. That's why a multi-currency account is ideal for travelers that often cross borders, as well as businesses working with international clients. Some exceptions do apply, which are highlighted below.</p>
											<h2 className="blackhead">How many currencies can you hold in one account?</h2>
											<p>This depends on the financial institution with which you decide to open a multi-currency savings account. Some institutions, for example, enable you to hold up to 7 or even 10 major currencies in a single account, however it’s important to read the fine print. Cashero allows users to hold funds in EUR, USD and GBP all in one wallet, without any hidden fees or restrictions.</p>
											<h3 className="blackhead">What do I need to know about a multi-currency account?</h3>
											<p>Multi-currency savings accounts enjoy interest rates above the ones offered by the majority of financial institutions out there. However, details like minimum balance requirements should always be clarified beforehand. Furthermore, according to experts, multi-currency accounts charge higher fees than some other types of accounts. These may include fees on withdrawals from ATMs and transaction fees. Some banks charge account management fees, usually on a 12-month basis. As for the per annum interest rates, they are generally announced in advance for the quarter for each currency, so it's good to be prepared. With Cashero, there are no management fees, so you get to keep every cent of the money you make.</p>
											<h2 className="blackhead">Advantages of multi-currency accounts</h2>
											<p>Besides potentially favorable foreign exchange rates, opening a multi-currency savings account can help protect your money from local disturbances to exchange rate fluctuations. This in turn, reduces the risk of potential threats to corporate or personal wealth from such fluctuations. Plus, you get to enjoy a better customer service experience, given that you will probably not need to contact foreign customer service centers. Remember that what you do with your money is up to you. That’s why Cashero makes it easy to switch between deposit, withdrawal, and switch between currencies, whenever you choose.</p>
											<h3 className="blackhead">When to consider multi-currency accounts for business</h3>
											<p>If you do business in different currencies, opening a multi-currency account may be worth considering. Indeed, the uncertainty of the economic climate nowadays requires businesses to protect themselves from risks deriving from fluctuations of exchange rates. Multi-currency accounts can contribute in this direction.</p>
											<p>Multi-currency accounts might be useful for you if:</p>
											<div className="inner-div">
												<ul>
													<li>Your company trades internationally (import, export, or both).</li>
													<li>You operate an e-commerce store and sell services and/or goods to multiple currencies.</li>
													<li>You work with freelancers overseas.</li>
													<li>You employ staff abroad.</li>
													<li>You are a freelancer or independent contractor working with international clients.</li>
													<li>You are an online seller across multiple marketplaces.</li>
													<li>Your business has a large international transaction volume.</li>
												</ul>
											</div>
											<h3 className="blackhead">What to look for from a business multi-currency account</h3>
											<p>Flexibility is the key here. It's paramount to find a flexible enough multi-currency account that suits your needs the best. This can be achieved by comparing your available options and weighing factors, such as:</p>
											<div className="inner-div">
												<p><b>Currency conversion fees –</b> You may find that with multi currency accounts, a fee may apply whenever you convert money into another currency. That means you may need to consider both exchange rate differences and conversion charges. At Cashero we like to keep things simple, which means switching between currencies is free.</p>
												<p><b>Transaction limitations –</b> The minimum and maximum amounts you can transfer vary per institution. Therefore, it's advised to ensure your multi-currency account can handle your business’ typical payment sums (minimum and maximum amounts included). Cashero business accounts have fee free transactions for the first $50,000. After that all future transactions have a small fee of only 1%.</p>
												<p><b>Minimum monthly account balance –</b> Some financial institutions require specific account minimums. Failing to meet this requirement may lead to paying penalties and fees.</p>
												<p><b>Supported currencies –</b> Most institutions support a few major currencies. It's important that the currencies offered are the ones you most frequently need or use to conduct business.</p>
												<p><b>Account fees –</b> Besides the costs mentioned above, you may also want to check other charges such as handling fees on specific transactions and currencies that may apply, as well as processing charges. Ask for a complete list of fees to be on the safe side. Hidden fees can creep up on you.</p>
												<p><b>Turnaround speed –</b> It's critical for your business to have fast transactions between your overseas accounts and your home bank. That's why you should check the typical transaction time required. The transaction speed with Cashero is instantaneous.</p>
												<p><b>Account flexibility –</b> Research details like whether your multi-currency account allows withdrawals, deposits, and transfers online, over the phone, or at a branch. Also, if any of these options come with fees.</p>
												<h3 className="blackhead">Where to get a multi-currency account from?</h3>
												<p>Without a doubt, the growth of the FinTech sphere means there are new players offering multi-currency savings accounts with appealing terms. Here are some factors to consider before making your final decision and why preferring Cashero might be a better option for you.</p>
												<div className="inner-div">
													<p><b>Exchange Rates and Transaction Time –</b> With a foreign currency account, you may be allowed to keep your funds in the transaction’s currency. This means that you get to choose to convert your foreign currency at the most convenient time for you (if you need to convert your money at all). Cashero lets you access and exchange your funds 24/7 / 365. That means no waiting during weekends or holidays. And oh ya, your transfers are near instantaneous too.</p>
													<p><b>Interest –</b> Traditional savings accounts offer an average interest rate of 0.05%. So-called “high yield” accounts tend to give around 0.5%. But these rates often don’t beat inflation, so can it really be called saving?</p>
													<p>With Cashero the average rate of return is 5%.</p>
													<p>That’s 100 times higher than a traditional savings account.</p>
													<p>And no, that’s not a typo.</p>
												</div>
												<h2 className="blackhead">How does a multi-currency account work?</h2>
												<p>In most cases, a standard single currency account and a multi-currency account do not differ much. This means that you can:</p>
												<div className="inner-div">
													<ul>
														<li>Receive payments</li>
														<li>Send payments</li>
														<li>Withdraw payments</li>
														<li>Access your funds via various means</li>
													</ul>
												</div>
												<p>When it comes to fees, these vary per provider and usually include deposit/withdrawal charges for payments outside the set values. Also, fees for deposits/withdrawals of specific currencies, alongside a monthly account fee, may apply. Finally, you might be asked to pay charges for sending funds to another bank.</p>
												<p>When you save with Cashero, you can be sure you’ll always be fee free when it comes to your personal account, and only a 1% fee for a business account, after the first $50,000.</p>
												<h3 className="blackhead">Is reporting on international assets easier with multi-currency accounts?</h3>
												<p>Considering that you can hold multiple assets (currencies) in a single location (account), keeping track of your deposits and withdrawals can be easier with a multi-currency account.</p>
												<h2 className="blackhead">How to find the right multi-currency savings account?</h2>
												<p>With such an overwhelming number of providers offering multi-currency accounts, you may become confused or overwhelmed. To decide which multi-currency account is right for you, start searching the latest offers and see what features are offered. For example, it might be critical for you to have access to your funds via an app, or to be able to contact a Customer Service agent on a 24/7 basis. You might even want to handle your money without ever stepping foot in a branch location for whatever reason, and keep things totally digital. These particular prerequisites should be on your mind when choosing a multi-currency account to ensure that your needs are met.</p>
												<p>If you're a business owner, you will most likely be interested in locking in the most favorable rates for linked services, such as overseas travel services, overdrafts, and savings. Depending on your company’s transaction requirements and needs, it's paramount to see which multi-currency account will best suit them. That way, you will also be able to calculate how much a typical transaction will cost you and see if it is beneficial for you.</p>
												<p>Once you have narrowed down your options, it's a good idea to look at customer reviews and see what other people think of the accounts. Not to toot our own horn, but our customers have great things to say about their Cashero experience.</p>
												<p>Sign up today and see what it’s like when your money works for you - with industry leading return rates, zero-fees, and instant transactions - you’ll wonder why you didn’t join sooner.</p>
											</div>
										</div>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h4 className="heading">
										How can I exchange funds from one
										currency to another?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
										Once you’ve downloaded the app, hit the exchange button on the main Wallet screen. The Exchange screen will show you the live exchange rate at that moment. Select the currency and the amount you wish to exchange and hit the Exchange button. Your funds will be converted instantly and you can confirm your transaction by verifying with your new balance on the Wallet screen.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h4 className="heading">
									What currencies can I exchange?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">Cashero allows you to instantly convert between United States dollars (USD), British pounds (GBP), or Euros (EUR).</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h4 className="heading">
									How much does it cost to convert between currencies?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">Cashero may charge a small fee to convert money between currencies in your account and you can do so in seconds. Everything will be displayed in the app, with no hidden fees ever.</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h4 className="heading">
									How does Cashero compare to converting currency with the bank?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
										Cashero uses a transparent exchange rate to convert money from one currency to another. Cashero has no hidden fees and the whole transaction is transparent.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h4 className="heading">
									How long does it take to convert currencies?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
										Exchanging currencies with Cashero is instant.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/exchange-rates/" &&
								<Accordion
									expanded={expanded === "panel6"}
									onChange={accordionhandleChange("panel6")}
								>
									<AccordionSummary
										expandIcon={
											expanded === "panel6" ? (
												<RemoveCircleOutlineIcon />
											) : (
													<ControlPointIcon />
												)
										}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h4 className="heading">Learn more about Online Currency Exchanges</h4>
									</AccordionSummary>
									<AccordionDetails>
										<div className="expandTypo">
											<h2 className="blackhead">Everything You Need To Know About Online Currency Exchanges</h2>
											<p>Online currency exchanges are becoming more common every day. This makes a lot of sense in today's world, given that there are over 180 different currencies already recognized as legal tender worldwide. Online currency exchanges are pretty much a necessity for global trade and commerce. It’s no wonder, then, that currency traders, brokerage firms, banks, and other brick and mortar financial institutions saw huge potential in providing currency exchange services years ago.</p>
											<p>Whether you're a traveler, a company doing business with an international clientele, or an individual wanting to pay for services or goods across the globe, you will most likely need to convert currencies from one form to another. And, thanks to the Internet, you can now do so online using currency exchange sites. But what exactly are online currency exchanges and how do they work? And what options might be available for personal use if you want to keep multiple currencies at once?</p>
											<h2 className="blackhead">What is currency exchange trading?</h2>
											<p>Also known as forex (foreign exchange), currency exchange trading refers to a network of traders (buyers and sellers) that wish to convert one currency into another at a prearranged price. The majority of forex transactions are done for practical reasons (i.e., to travel abroad). Many people, though, choose to convert currency to earn a profit. Foreign exchanges can be particularly attractive to traders, especially when the amount of currency transferred daily can bring a greater chance of high profit (aka currency volatility). But now more than ever, everyday people are wanting the ability to hold multiple currencies at once, along with the ability to change in and out of them at will. Currency exchange platforms like Cashero were built with them in mind.</p>
											<h2 className="blackhead">What are currency exchange platforms?</h2>
											<p>These refer to online-based websites that enable people and corporations to convert currencies, irrespective of where they are in the world. Most of the time, these platforms allow involved parties to explore the exchange currencies and financial market conditions safely. Bringing immediate transparency into play, they feature a centralized and secure setting that usually provides tools like a universal currency converter. This is an application that you can use to help convert currency values based on the exchange rates of the day.</p>
											<h3 className="blackhead">When is the best time to use a currency exchange</h3>
											<p>To begin with, you will most likely need the services of an online currency exchange site if you are traveling in a foreign country. In this case, most people prefer to convert their money before making the journey as a means to ensure better rates. As for organizations, utilizing an online currency exchange can help make trading with other companies or individuals easier. This is particularly true when engaging in international trade or business.</p>
											<h2 className="blackhead">What about Forex trades? Do they take place on an exchange?</h2>
											<p>In a nutshell, no. Unlike commodities and shares that require an exchange to take place, Forex trading is done in an OTC (over-the-counter) market, directly between two parties. The Forex currency market is run by a global network of financial institutions, spread across Tokyo, Sydney, New York, and London – the big four Forex trading centers. This enables Forex trading on a 24/7 basis.</p>
											<p>As of now, there are three primary types of Forex market:</p>
											<div className="inner-div">
												<ol>
													<li><b>Future Forex market – </b>The trader agrees to trade (buy or sell) a set amount of a given currency. The contract is legally binding and forces the trader to trade the specified currency at an agreed price and date.</li>
													<li><b>Forward Forex market –</b>The trader agrees to a contract (not legally binding) where they sell or buy a set amount of a currency at a prearranged value. The trade will be settled either within a range of future dates or a specific date in the future.</li>
													<li><b>Spot Forex market – </b>The trader physically exchanges a currency either within a short time frame or on the spot.</li>
												</ol>
											</div>
											<p><b>Note</b>: The majority of traders prefer to make foreign currency exchange rate predictions to “catch” a favorable price movement in the market. For that reason, they usually do not plan to take delivery of the currency, instead they simply speculate on Forex prices.</p>
											<h3 className="blackhead">How Forex trading works</h3>
											<p>You can trade foreign currencies in various ways. However, they all share the same basics in regards to how the process goes. The common concept in them all is that trading Forex involves buying one currency and simultaneously selling another. Traditionally, one would need to turn to a Forex broker to make a Forex transaction. Nevertheless, the growth of online trading enables traders to benefit from price movements using CFD trading and other derivatives.</p>
											<p>CFDs are products (leveraged) that allow traders to take a position on whether they believe the market will fall or rise in value. This means that they (traders) do not take ownership of the asset and only open a position for a fraction of the trade’s full value. However, if you're interested in CFDs, it's best to be extra careful. They can indeed boost your profits, but they can also lead to major losses. This is the same with all leveraged products.</p>
											<h2 className="blackhead">What affects currency exchange rates?</h2>
											<p>Global supply and demand is one of the most critical factors that affects how exchange rates fluctuate. In simpler terms, a currency in high demand enjoys increased value. Of the factors that influence a currency's supply and demand, the most common ones are:</p>
											<div className="inner-div">
												<ul>
													<li>Countries’ political and economic stability</li>
													<li>Businesses (and governments) trading internationally</li>
													<li>Natural disasters</li>
													<li>Trading of currencies on the stock market</li>
													<li>Tourism and travel</li>
													<li>Interest rates</li>
													<li>Countries’ actions and regulations governing their currency (aka fiscal policies)</li>
												</ul>
											</div>
											<p>It becomes apparent that foreign exchange rates are affected by virtually everything that goes around, including political, market, and economic news. It should be noted that even a 1% fluctuation in the market rates can hinder the purchase of, say, your dream home. That is if you are transferring money to buy property.</p>
											<h3 className="blackhead">Calculating online currency exchange rates</h3>
											<p>The foreign exchange rate can be affected by the volume of the currency being traded at any given time. The attractiveness of a particular currency dictates whether its trading volume will increase or decrease. In other words, a competitively priced currency will most likely drive traders to buy that specific currency. This will, in turn, increase its value (or price).</p>
											<p>That aside, the foreign exchange rate is also affected by government central banks themselves, which can set a currency at a constant price that will determine its value over another currency (aka the pegging method).</p>
											<h2 className="blackhead">Must-know online currency exchange terms</h2>
											<p>When it comes to Forex trading, it's good to know basic terminology:</p>
											<div className="inner-div">
												<ul>
													<li><b>Spread</b>– This is the difference between the sell and buy prices set on a foreign exchange currency pair. When you open a forex position, you're being provided with two prices. If you wish to open a short position, you trade a currency pair at a price slightly below the market sell price. Opening a long position means that you trade a currency pair at a slightly higher buy market price.</li>
													<li><b>Leverage</b>– This is the process where you put down a small initial deposit (aka margin) to open and keep a leveraged position without paying the full trade value upfront. The full size of the trade is taken into account, though, to calculate your profit or loss when you close the leveraged position. When trading foreign exchange with margin, bear in mind that factors like how large the trade size is will determine your margin requirement. Margins are usually expressed as a % of the full position. For example, a trade on USD/EUR may require you to pay only 1% of the total value of the position so you can open it. This means that instead of depositing GBP 100,000, you will be called to deposit GBP 1,000.</li>
													<li><b>Lot</b>– This refers to currency batches that are used to standardize foreign exchange currency trades. Lots usually consist of many units of the base currency (around 100.000 or more), considering that Forex does tend to move in small amounts. This means that nearly all forex trading is leveraged because individual traders don’t usually have $100.000 (or another currency) to place on every trade.</li>
													<li><b>Pip</b>– We use pips to measure a Forex pair’s movement. To understand pips, look at the 4th decimal place of a currency pair. A one-digit movement here equals to one pip. So, if USD/GBP moves from $1.35471 to $1.35481, it has moved one pip. The only exception is when the listed currency has smaller denominations. For example, if you're trading Japanese yen, a single pip is a movement in the 2nd decimal place.</li>
													<li><b>Base currency</b>– This is the first currency listed in an online currency exchange pair.</li>
													<li><b>Quote currency</b>– This is the second currency in a forex pair.</li>
												</ul>
											</div>
											<p>Cashero takes all the benefits of an online currency exchange - low fees, instant currency transfer, fair market exchange rates - and leaves out everything unnecessary - no complex terms to know, no cumbersome user interface, no risk of massive financial ruin - and gives our customers a financial tool that they can use for daily to make their lives easier.</p>
										</div>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h4 className="heading">
										What kind of payments can I make
										with Cashero?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Cashero allows you to send, request and receive payments. Simply go to the Payments tab, and select the contact you would like to transfer money to and add the amount you would like to send. You can search for your contacts and even businesses. If your contact or a business is not a registered Cashero user, you can invite them and earn rewards for it too.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h4 className="heading">
										What are the fees to make payments?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">For users with personal accounts, users can send, request and instantly receive money from users worldwide. Businesses can send, request and receive money to customers worldwide for a nominal fee of 1% after their first $50,000 USD.</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h4 className="heading">
										How long do payments take to send and receive?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">Payments between registered users and businesses are sent and received instantly.</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h4 className="heading">
										Can I send, request and receive
										payments in different currencies?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">Yes! You can choose between USD, GBP or EUR.</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h4 className="heading">
										Is my money safe?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Yes. Your money is protected using multi-party computation (MPC) and hardware isolation with Intel SGX enclaves. It sounds complex and it is, on purpose. These extra security layers ensure your money is safe and protected.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/receive-payments/" &&
								<Accordion
									expanded={expanded === "panel6"}
									onChange={accordionhandleChange("panel6")}
								>
									<AccordionSummary
										expandIcon={
											expanded === "panel6" ? (
												<RemoveCircleOutlineIcon />
											) : (
													<ControlPointIcon />
												)
										}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h4 className="heading">Learn more about Instant Money Transfers</h4>
									</AccordionSummary>
									<AccordionDetails>
										<div className="expandTypo">
											<h2 className="blackhead">Choosing The Right Platform For Your Instant Money Transfers</h2>
											<p>Financial emergencies happen. Overdue bills, unforeseen medical expenses, family crises, and even car breakdowns are all a part of life that may require a fast transfer of money. In these scenarios, you want to make sure you find the right provider to meet your particular needs. But how do you choose the right one? What do you need to know about instant money transfers to make sure nothing goes awry and the money gets where it needs to go?</p>
											<h2 className="blackhead">How “instant” are instant money transfers?</h2>
											<p>It depends on the selected money transfer company. In most cases, “instant” means “within a few seconds or minutes”. Although many companies claim instant money transfer services, their transactions may take a little while before they eventually clear. This is because the transfer speed is affected by several factors.</p>
											<h3 className="blackhead">What factors affect the speed of money transfers?</h3>
											<p>The four major factors affecting transfer speed are:</p>
											<p><b>1. The countries between which you are transferring money</b></p>
											<p>If you're transferring funds between countries where foreign money transfers are more commonplace or occur more frequently, the transaction is usually fast. For example, if you're transferring funds from the USA to the UK, you can expect near-instant transfer services. Less common transfers (i.e., from the USA to Honduras) will take a bit longer. But with advances in financial technology, and the rising of online payment providers like Cashero, global transfers are happening faster than ever. </p>
											<p><b>2. The way the money is received </b></p>
											<p>When funds are transferred, there are different ways they can be received by the beneficiary. Some methods of receipt are faster than others. Here are the most common:</p>
											<div className="inner-div">
												<p><b>Cash transfers</b> – Most providers offering instant money transfers do so in the form of cash pickups. This means that the person receiving that money can collect it from a designated agent location the moment you deposit the funds. Cash transfers are typically the fastest way to send money overseas. Requiring the recipient to go to a physical location for a money transfer enables the company to verify the transaction immediately and payout the funds. So, funds are transferred instantly. However cash transfers can come with high fees and potentially poor exchange rates.</p>
												<p><b>E-wallet transfers</b> – Some providers allow you to transfer money instantly to electronic or mobile wallets. With these kinds of transfers we enter the world of FinTech - Financial Technology. FinTech Payment Providers, like Cashero, now lead the industry in terms of transfer speed, costs of fees, and ease of use. </p>
												<p><b>Bank & debit card transfers</b> – These types of transfers save you from having to visit a physical location to send money. The tradeoff for convenience is that bank account or debit card transfers usually come with extra fees and may take between 1- 5 business days to clear (though in many cases the transfer is instant). The reason for this delay is that the bank needs to verify the transaction first before it allows the transfer. If both banks involved are on a network (i.e., SEPA), the money transfer process might be faster than regular international bank transfers. </p>
												<p><b>Directly to the recipient’s account</b> – This is a bank-related option to send money to another individual overseas. This type of transfer may not be instantaneous, but usually takes only a few hours to process. However if the bank uses SWIFT for their transfer network, the sender may incur a fee for making the transfer “instantaneous”, sometimes upwards of $25. </p>
											</div>
											<p><b>3. The money transfer company</b></p>
											<p>The money transfer process can vary depending on the transfer company you choose to do business with. The efficacy of the selected company’s sending, exchanging, and receiving funds procedures will determine the speed of transfer. </p>
											<p><b>4. Having an account with a payment provider </b></p>
											<p>If you'll be opening an account with a money transfer company that offers money instant transfer services now, the provider will need to verify your account. With Cashero our KYC process is simple and efficient, so you can be signed up and ready to make any transfer you need, almost immediately. This may take some time, though usually not more than a few hours, depending on the selected provider’s processes.</p>
											<p>If you already have an active account with a provider, you can deposit your money and the recipient/beneficiary will receive it almost instantly. It's vital to ensure that the chosen provider is equipped to send money to and from the necessary countries. Some providers, for example, specialize in money transfers between the USA and the UK, while others offer faster European international transfers.</p>
											<h2 className="blackhead">Sending an instant money transfer – How does it work?</h2>
											<p> The process is pretty straightforward. You send money by supplying the required amount to a transfer company agent or online platform. Once the transfer is complete the recipient has access to the funds either in person or electronically. Although the exact fund transfer procedure may differ among providers, the basic steps are as follows:</p>
											<div className="inner-div">
												<p><b>Register </b> – You will most likely be asked to provide some personal details (i.e., name, email address, etc.). Some providers also request evidence of where you got the money you are sending. For online platforms, you will need to create an account.</p>
												<p><b>Initiate the money transfer </b> – For those sending funds through an online platform, use your login credentials to access your account. Sending funds can also be achieved by visiting a provider’s nearest physical location.  </p>
												<p><b>Provide the recipient’s information</b> – The provider will ask you to provide the recipient’s personal details (i.e., name, currency in which they will collect the money, and account details). Note that you should enter the correct information (i.e., the recipient’s name should match the one on their ID and account precisely).  </p>
												<p><b>Pay for the transfer</b> – This step involves funding your transfer, if applicable. Different providers will accept different payment methods, including cash, check, or bank withdrawal.  </p>
											</div>
											<p><b>Note</b>:  If the transfer recipient is making a cash collection, you will most likely need to provide them with the transaction number or PIN. The agent in the recipient’s country will ask for that number or PIN to verify the transaction. Without it, the recipient will probably not be able to collect their money.  </p>
											<h3 className="blackhead">Is sending an instant transfer anywhere in the world possible?</h3>
											<p>In most cases, yes. But the answer to this question largely depends on the selected provider. This allows for instant money transfers to nearly any location. Nevertheless, sending funds to less-commonly used countries or routes can be more difficult and may take more time. </p>
											<h3>Sending large amounts of money via instant money transfers</h3>
											<p>Again, this depends on the transfer company you choose to send money with. Each one has its own limit on how much you can send via an instant money transfer service. Depending on the service, you won’t be able to send very large amounts using an instant money transfer. However, your definition of “large” will determine the answer to this question. Most transfer companies have both daily and weekly limits in place on the amount of money you can send. So be sure to learn what their limit is before signing up. For many providers, handling five-figure sums is quite challenging. </p>
											<p>Generally speaking, you won’t be able to send very large amounts using an instant money transfer. However, your definition of “large” will determine the answer to this question. For example, PayPal allows you to send up to $5,000 at one time instantly. This is also their weekly instant transfer limit. For many providers, handling five-figure sums is quite challenging. </p>
											<h3 className="blackhead">Reversing instant money transfers </h3>
											<p>Unfortunately in the majority of cases, cancelling or reversing a transfer is not possible. Once you initiate the instant funds transfer process, little can be done to reverse it. In fact, as soon as you deposit the money, there is usually no turning back. The procedure will automatically end when the money is delivered to the intended recipient. Given this, it is important to carefully check all details before starting an instant money transfer. </p>
											<h2 className="blackhead">Tips to speed up your instant money transfer </h2>
											<p>To avoid inconvenient delays and logistical problems, there are some things you can do before you initiate a transfer:</p>
											<div className="inner-div">
												<p><b>Be prepared – </b> Creating an account with a money transfer company and verifying it beforehand will most likely boost your instant money transfer experience. The same applies to having the recipient’s details early on. Furthermore, entering the right details (both yours and the beneficiary's) will also prevent slowdowns in the procedure.</p>
												<p><b>Check the supported currencies – </b> Does your selected provider support the currencies you need? For example, Cashero allows you to send money in USD, EUR, and GBP. This means that your recipient can also receive funds in these currencies.  You can withdraw money from Cashero in your local currency.</p>
												<p><b>Ensure the safety of your transfer – </b>  First of all, it's advised not to rush sending large sums to help avoid making a mistake that may delay the process. It's also worth inquiring how the provider protects your money. Cashero, for instance, uses complex security layers, including MPC (multi-party computation) and hardware isolation, to ensure safe transactions. </p>
												<p><b>Compare providers –</b> It's paramount to find the provider that offers the fastest and most reliable money transfer services. If you can also find a trusted provider offering fast and 24/7 customer service, even better.  </p>
												<p><b>Check the cost involved – </b> Costly fees can inflate the overall cost of the transaction. That's why you should check the exchange rate margins and transfer fees offered by various providers. Some providers charge a mark-up exchange rate (usually around 1%-2%), others charge a fixed fee (normally, between $1.99-$24.99), and there are even providers that charge both. Note that higher exchange rates can affect the transfer cost dramatically, especially if you're sending large sums.  </p>
											</div>
											<p>Making instant money transfers does not need to be a tedious or drawn-out process. With Cashero, you can make fast, reliable, and secure fund transfers to many users around the world. No small letters, no fine print, and no hidden fees.</p>
										</div>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={5}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h4 className="heading">
										What kind of transfers can I make
										with Cashero?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">Cashero allows you to send money across the globe. Go to the Payments tab, and select the contact you would like to transfer money to and add the amount you would like to send. The user will receive your funds and then can withdraw the money to their bank account.</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h4 className="heading">
										What countries does Cashero support?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Cashero is available in all
											countries except: Afghanistan,
											Angola,Belarus, Bosnia &
											Herzegovina, Central African
											Republic, Congo (DRC), Cote
											d’Ivoire (Ivory Coast), Cuba,
											Ecuador, Eritrea, Ethiopia,
											Guinea-Bissau, Guyana, Haiti,
											Iran, Iraq, Kosovo, Laos,
											Lebanon, Liberia, Libya,
											Macedonia, Myanmar, Nigeria,
											North-Korea, Papua NG, Russia,
											Serbia, Somalia, Sudan, Syria,
											Turkmenistan, Ukraine,
											Uzbekistan, Vanuatu, Venezuela,
											Yemen, Zimbabwe and Connecticut,
											Hawaii, New York, New Hampshire,
											Texas, Vermont, Virginia in the
											United States.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h4 className="heading">
										What are the fees to transfer money?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											There are no fees to send money
											for personal accounts and you
											can do so in seconds. Businesses
											can send money to customers
											worldwide for a nominal fee of
											1% after their first $50,000
											USD.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h4 className="heading">
										How long does it take the transfer
										money with Cashero?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Transferring money from your
											Cashero account to another user
											is done in an instant. When the
											user withdraws these funds to
											the bank account, this can take
											anywhere from 1-3 days to
											appear.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h4 className="heading">
										Is my money safe?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Yes. Your money is protected
											using multi-party computation
											(MPC) and hardware isolation
											with Intel SGX enclaves. It
											sounds complex and it is, on
											purpose. These security layers
											ensure your money is safe and
											protected
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{path === "/remittance/" &&
								<Accordion
									expanded={expanded === "panel6"}
									onChange={accordionhandleChange("panel6")}
								>
									<AccordionSummary
										expandIcon={
											expanded === "panel6" ? (
												<RemoveCircleOutlineIcon />
											) : (
													<ControlPointIcon />
												)
										}
										aria-controls="panel6a-content"
										id="panel6a-header"
									>
										<h4 className="heading">Learn more about How to Transfer Money Abroad</h4>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<div className="expandTypo">
												<h2 className="blackhead">The Cashero Guide: How to Transfer Money Abroad</h2>
												<p>International money transfers can be confusing, and many people have a hard time wrapping their heads around security concerns, unclear fees, and different services. Sending money abroad, however, does not necessarily need to be so challenging. </p>
												<p>With Cashero, we’ve made it easy.</p>
												<p>Whether you need to pay a freelancer abroad, fund a university course in the UK, or buy a summer home on a Mediterranean island (we can dream, can’t we?), you will most likely need to send money overseas. The truth is that you have plenty of options, but which one is best for you? You are probably already familiar with a few choices, especially if you have sent money online in the past to pay for goods or services. </p>
												<p>In a nutshell, you can normally transfer money abroad through your bank or a FinTech (financial technology) online provider, like Cashero. The latter offers easier, cheaper, and quicker transactions than banks. </p>
												<p>Alternatively, you may use FX (foreign exchange) brokers or a specialist high street transfer service. In the first case, you can expect relatively good deals and a preferential rate. In the second case, you enjoy convenience as you will probably not be asked to set up an account so you can send the cash. But these two ways aren’t quite so user friendly for the everyday individual. </p>
												<h2 className="blackhead">The most common ways to send money internationally</h2>
												<p>Let’s dive into some more details about the three most used options to send money abroad:</p>
												<div className="inner-div">
													<p><b>Banks -</b> Transferring money abroad via your high street bank account is one of the most secure ways to transfer funds internationally. The good thing about bank transfers is that you can send quite a lot of cash in one go (even up to $50,000-$100,000) with most banks. In addition, an international online transaction can be pulled through either by walking into a branch or over the phone. Expect some delays in clearing a transaction though; depending on where you are sending money to and from, there could be a delay of up to four or five business days. Which means getting money quickly to someone abroad in an emergency is usually not an option with Bank transfers. Also beware of the fees in this situation — you may need to incur transaction fees or a high exchange rate for some banks. The recipient may also have to pay a fee to be able to collect the cash you send them. While bank transfers were traditionally the most common method of transferring money abroad in years past, advancements in technology have given rise to the more sophisticated and user-friendly options, in the form of FinTech payment providers. </p>
													<p><b>FinTech companies – </b> Financial technology or FinTech companies entice with varying offerings. Some of them charge a transfer fee but provide competitive exchange rates. Others charge no fees but require up to 3-4 days for your funds to reach the intended account. Deciding which one to choose depends on what you are after and the method of sending. Will you use a credit/debit card or opt for the funds to be transferred from your bank account? These can determine the fees and delivery time. </p>
													<p><b>Money transfer operators – </b> When sending money overseas, you will probably find several high-street money transfer operators. These usually offer process times between 24-48 hours, with fees varying depending on the selected method to send money, the location, and the currency. What is paramount, however, before deciding to use their services is to ensure the chosen operator is properly authorized by your country’s governing financial services regulator. In the UK, for example, this would be the FCA (Financial Conduct Authority). Also take note of the offered exchange rates as some operators’ rates are particularly high, and you may see corresponding high fees as well. </p>
												</div>
												<h3 className="blackhead">The best way to transfer money abroad</h3>
												<p>Given that cash can be stolen at any given time during a transfer, it's probably best to send it abroad via an online service. That way, you also save yourself from extra charges (i.e., insurance for safe delivery), not to mention the time it will probably take for your funds to arrive. Plus, who really sends physical cash these days? Luckily, with such a wealth of digital services offering easy availability, safety, and convenience, money is rarely sent via the mail anymore. </p>
												<p>It should be noted that choosing a bank wire transfer to send money overseas usually comes with a hefty fee that can range between $45-$60 per transaction. In addition to this, the exchange rate might be higher if you are sending funds in a different currency. This is why money transfer apps, like Cashero, have seen such a rise in the past few years as they offer fast, secure, easy, and cheap money transfer services. They are more consumer friendly, offer the upsides of modern security, along with ease of use. </p>
												<h3 className="blackhead">The least secure ways to transfer money abroad</h3>
												<p>When it comes to the less secure alternatives to send money internationally, these would probably be cashier’s checks, unless you're using one to give money to someone in person. International money orders are also not secure, especially for large sums, because they are often lost in the mail. However, you can replace an international money order (for a fee) if it has not been cashed. Finally, it's best to avoid personal checks. If the wrong person gets your check, they instantly gain access to your routing or bank account number. </p>
												<h2 className="blackhead">Sending money abroad – How secure is it?</h2>
												<p>As already mentioned before, it's critical that the selected organization or service is regulated by the relevant authorities. It's also paramount that they have taken all security measures for safe money transfers.</p>
												<h3 className="blackhead">What makes a money transfer safe?</h3>
												<p>Here are some precautions most secure transfer providers take to keep your data and money safe:</p>
												<div className="inner-div">
													<p><b>ID verification –</b> This can involve using security questions, requiring a secure password, allowing only the intended recipient to pick up your money, and logging you out automatically after a set amount of time has passed since the time you logged in. At Cashero we use One Time Passwords (OPT) to ensure your transfers are secure.</p>
													<p><b>Encryption –</b> Some providers offer 256-bit or bank-level encryption to prevent hackers from getting their hands on your personal information.</p>
													<p><b>Tracking – </b> Depending on the provider you choose, you might be provided with the ability to track your transfer. Using the confirmation number, the provider will give you, you could see where your funds are at any given moment until receipt. </p>
													<p><b>Fraud prevention – </b> Fraud prevention tactics may be triggered by activities such as sending funds to a suspicious recipient, sending an unusually large number of transfers, and logging in from a different device than the one you created your account with. When that happens, you might be asked to verify your identity with the money transfer provider, provide a confirmation number sent to your phone or email, or answer security questions. </p>
												</div>
												<h2 className="blackhead">Transfer money overseas – The costs </h2>
												<p>When you're sending funds abroad, it's essential that you're aware of the costs involved — and that you know exactly what you're paying for. These charges are usually calculated in the following two ways:</p>
												<div className="inner-div">
													<ol>
														<li><b>Fees –</b> Expect some operating costs when doing business with a foreign exchange company. It's a business after all. This means that they have employees to pay, pay money on things like renewing their licenses, and premises to rent. A portion of these costs is passed on to you via fees. Note that most financial institutions and FX brokers will hardly give you an upfront estimate of such costs.</li>
														<li><b>Exchange rates – </b> These determine how much of a specific currency you can buy with another currency. For example, how many euros you can purchase for $50. There is usually a catch here, though. Some providers add an inflated mark-up on top of the real-time market exchange rate. That way, they are actually asking you to pay for their resources and time. So, it's crucial to understand whether the provider offers real-time exchange rates like the ones you will find via Reuters or Google – with no fees or mark-ups. </li>
													</ol>
												</div>
												<p>But here at Cashero, we do things a bit different. You’ll always know the exchange rate you’re getting and any incurred fees.</p>
												<p>Which by the way, for personal use, there isn’t any.</p>
												<h2 className="blackhead">How to send money abroad – Important Tips and Advice</h2>
												<p>A provider that respects its customers will provide you with all international transfer cost-related information upfront in a transparent way. With Cashero, you’ll always know what fees, if any, would be charged before you send your payment.. Also, consider the following:</p>
												<div className="inner-div">
													<p><b>Timing – </b> Most of the time, when you transfer money abroad, the recipient receives it almost instantly. This, however, has to do with the specific services offered and the provider you choose. So with some providers, the money transfer process can take a few minutes, while others require five or more business days to clear your transaction. Note that sending money during bank holidays or over a weekend may affect the time your money transfer takes significantly. That is if you're using primarily bank transfers. When you go with online providers, you can ensure that no matter the day or time, be it a holiday or weekend, your money always gets where you need it to go, almost instantly. </p>
													<p><b>Access and ease – </b> The new-generation fintech-style money apps make sending money abroad feel like a walk in the park. In the majority of cases, you simply download a user-friendly and easy-to-navigate app, register, and verify your account. Then, you're free to send funds internationally within minutes using your debit card, or other method of transfer. </p>
													<p><b>Laws and regulations – </b> Sending money abroad is not illegal. However, it's paramount to be in line with the local and international laws so that your transaction is not regarded as an act of money laundering. Always check details like the maximum sum you can transfer without having to file a report. Failure to abide by the laws or even miscommunication and not filling out the required details can lead to serious punishment, or a least a minor head-ache.</p>
												</div>
												<p>Transferring money abroad is easy with Cashero. We offer a quick, easy, and secure way to send money across the globe all while maintaining transparency.</p>
											</div>
										</Typography>
									</AccordionDetails>
								</Accordion>}
						</div>
					</TabPanel>
					<TabPanel value={value} index={6}>
						<div className="CollapseToggle">
							<Accordion
								expanded={expanded === "panel1"}
								onChange={accordionhandleChange("panel1")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel1" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
									className="iconSet"
								>
									<h4 className="heading">
										How do donations work on Cashero?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Cashero has selected a list of
											approved charities. Users can
											donate by selecting Giving on
											their Cashero app, searching for
											a charity of their choice, and
											donating directly with a click
											of a button.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel2"}
								onChange={accordionhandleChange("panel2")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel2" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<h4 className="heading">
										How much money goes to charity?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											100% of donations made through the Cashero app will go to charity. There are no hidden fees.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel3"}
								onChange={accordionhandleChange("panel3")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel3" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<h4 className="heading">
										Which charities are listed on Cashero?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Charities that meet Cashero’s
											internal approval process of
											making a significant impact in
											our world can be listed on
											Cashero. By selecting on any
											charity in the Cashero app, you
											can discover more about the
											difference that charity is
											making.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel4"}
								onChange={accordionhandleChange("panel4")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel4" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<h4 className="heading">
										Can recurring donations be made?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											At this point, donations can
											only be made as one-off
											donations.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === "panel5"}
								onChange={accordionhandleChange("panel5")}
							>
								<AccordionSummary
									expandIcon={
										expanded === "panel5" ? (
											<RemoveCircleOutlineIcon />
										) : (
												<ControlPointIcon />
											)
									}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<h4 className="heading">
										Are my donations safe?
									</h4>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<h4 className="FaqText">
											Yes. Your donations are protected using multi-party computation (MPC) and hardware isolation with Intel SGX enclaves. It sounds complex and it is, on purpose. These security layers ensure your donations are safe and protected.
										</h4>
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					</TabPanel>
				</div>
			</div>
		</div>
	);
}
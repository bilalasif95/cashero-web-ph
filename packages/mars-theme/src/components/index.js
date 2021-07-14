import React, { useEffect } from "react";
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import { parse as parseQs } from "qs";
// import Header from "./header";
import List from "./list";
import CampaignHeader from "../components/campaignHeader/campaignHeader";
import CampaignFooter from "../components/Campaignfooter/Campaignfooter";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import externalCss from "./index.css";
import Personal from "./Personal/Personal";
import PersonalCompaign from "./PersonalCompaign/PersonalCompaign";
import PersonalCompaignBR from "./PersonalCompaignBR/PersonalCompaignBR";
import PersonalCompaignPT from "./PersonalCompaignPT/PersonalCompaignPT";
import PersonalCompaignMX from "./PersonalCompaignMX/PersonalCompaignMX";
import PersonalCompaignAR from "./PersonalCompaignAR/PersonalCompaignAR";
import PersonalCompaignCL from "./PersonalCompaignCL/PersonalCompaignCL";
import PersonalCompaignFR from "./PersonalCompaignFR/PersonalCompaignFR";
import PersonalCompaignGR from "./PersonalCompaignGR/PersonalCompaignGR";
import PersonalCompaignIT from "./PersonalCompaignIT/PersonalCompaignIT";
import PersonalCompaignZA from "./PersonalCompaignZA/PersonalCompaignZA";
import PersonalCompaignIN from "./PersonalCompaignIN/PersonalCompaignIN";
import PersonalCompaignID from "./PersonalCompaignID/PersonalCompaignID";
import PersonalCompaignPH from "./PersonalCompaignPH/PersonalCompaignPH";
import PersonalCompaignCO from "./PersonalCompaignCO/PersonalCompaignCO";
import PersonalCompaignES from "./PersonalCompaignES/PersonalCompaignES";
import Footer from "./footer/Footer";
import BlogPage from "./BlogPage/BlogPage";
import HomePage from "./HomePage/HomePage";
import Company from "./Company/Company";
import ContactUs from "./ContactUs/ContactUs";
import Donation from "./Donation/Donation";
import ListedCharity from "./ListedCharity/ListedCharity";
import CurrencyAccounts from "./CurrencyAccounts/CurrencyAccounts";
import ExchangeRates from "./ExchangeRates/ExchangeRates";
import ReceivePayments from "./ReceivePayments/ReceivePayments";
import Remittance from "./Remittance/Remittance";
import Giveaway from "./Giveaway/Giveaway";
import Terms from "./Terms/Terms";
import Privacy from "./Privacy/Privacy";
import AppTerms from "./AppTerms/AppTerms";
import AppPrivacy from "./AppPrivacy/AppPrivacy";
import Sitemap from "./Sitemap/Sitemap";
import Thankyou from "./Thankyou/Thankyou";
import { websiteLink } from "../config/config";
import { I18nextProvider } from "react-i18next";
import i18n from '../config/i18n';
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
i18n.init({
  react: {
    useSuspense: false,
  },
})
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  Object.values(state.source.attachment).map((res) => {
    state.source.attachment[res.id].link = "";
    state.source.attachment[res.id].slug = "";
  })
  Object.values(state.source.data).map((type) => {
    if (type.type === 'attachment') {
      state.source.data[type.link] = Object
    }
  })
  // const [version, setVersion] = useState(false);
  useEffect(() => {
    const qs = parseQs(window.location.search.substr(1));
    if (data.isPersonalCompaignPT) {
      i18n.changeLanguage("portuguese")
    }
    else if (data.isPersonalCompaignAR) {
      i18n.changeLanguage("arspanish")
    }
    else if (data.isPersonalCompaignBR || qs.lang === "pt_br") {
      i18n.changeLanguage("brazilian")
    }
    else if (data.isPersonalCompaignCL) {
      i18n.changeLanguage("clspanish")
    }
    else if (data.isPersonalCompaignCO) {
      i18n.changeLanguage("malay")
    }
    else if (data.isPersonalCompaignES) {
      i18n.changeLanguage("spspanish")
    }
    else if (data.isPersonalCompaignFR) {
      i18n.changeLanguage("french")
    }
    else if (data.isPersonalCompaignGR) {
      i18n.changeLanguage("german")
    }
    else if (data.isPersonalCompaignID) {
      i18n.changeLanguage("bahasa")
    }
    else if (data.isPersonalCompaignIN) {
      i18n.changeLanguage("inenglish")
    }
    else if (data.isPersonalCompaignIT) {
      i18n.changeLanguage("italian")
    }
    else if (data.isPersonalCompaignPH) {
      i18n.changeLanguage("filipino")
    }
    else if (data.isPersonalCompaignZA) {
      i18n.changeLanguage("zaenglish")
    }
    else if (data.isPersonalCompaignMX) {
      i18n.changeLanguage("spanish")
    }
    else if (data.isPersonalCompaign) {
      i18n.changeLanguage("english")
    }
    else { }
    //   let name = 'cashero-web'
    //   let version = '1.0.26'
    //   const last_version = localStorage.getItem(`${name}-Version`)
    //   if (!last_version) {
    //     setVersion(true)
    //     // window.location.reload();
    //   }
    //   if (last_version !== version) {
    //     localStorage.setItem(`${name}-Version`, version)
    //     setVersion(true)
    //     // window.location.reload();
    //   }
  }, [i18n.language])
  // const onRefreshButtonClick = () => {
  //   window.location.reload();
  // }
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="google-site-verification" content="ULLpQHl1XeVHE2H-ZSPLosCUY10CBkttCwbNrfMBVsc" />
        <meta name="facebook-domain-verification" content="ao1nxtpttahaf3nsk7ukhlila8irwf" />
        <meta name="robots" content="noodp, noydir, noindex, nofollow, archive" />
        <meta name="robots" content="max-snippet:50, max-image-preview:large" />
        <meta name="googlebot" content="noindex" />
        <link rel="canonical" href={websiteLink} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="preload" as="font" />
        <meta property="og:title" content={state.frontity.title} />
        <meta property="og:description" content={state.frontity.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteLink} />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/cashero-828.appspot.com/o/website%2FEMTwA7F.png?alt=media" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={state.frontity.title} />
        <meta name="twitter:description" content={state.frontity.description} />
        <meta name="twitter:url" content={websiteLink} />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/cashero-828.appspot.com/o/website%2FWjbRyFw.png?alt=media" />
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='expires' content='0' />
        <meta http-equiv='pragma' content='no-cache' />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(externalCss)} />

      {/* Add the header of the site. */}
      {/* <HeadContainer>
        <Header />
      </HeadContainer> */}
      <I18nextProvider i18n={i18n}>
        {(data.isPersonalCompaign || data.isPersonalCompaignBR || data.isPersonalCompaignPT || data.isPersonalCompaignMX || data.isPersonalCompaignAR || data.isPersonalCompaignCL || data.isPersonalCompaignFR || data.isPersonalCompaignGR || data.isPersonalCompaignIT || data.isPersonalCompaignZA || data.isPersonalCompaignIN || data.isPersonalCompaignID || data.isPersonalCompaignPH || data.isPersonalCompaignCO || data.isPersonalCompaignES) ? <CampaignHeader /> : <List />}
        {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
        {/* <Main> */}
        {/* {version &&
        <div className="latestVersion">
          <h4>New version is available!</h4>
          <p>To update the application to the latest version, please refresh the page!</p>
          <button onClick={onRefreshButtonClick}>Refresh</button>
        </div>
      } */}
        <Switch>
          <Personal when={data.isPersonal} />
          <Company when={data.isCompany} />
          <ContactUs when={data.isContactUs} />
          <Donation when={data.isDonation} />
          <ListedCharity when={data.isListedCharity} />
          <CurrencyAccounts when={data.isCurrencyAccounts} />
          <ExchangeRates when={data.isExchangeRates} />
          <ReceivePayments when={data.isReceivePayments} />
          <Remittance when={data.isRemittance} />
          <Giveaway when={data.isGiveaway} />
          <Terms when={data.isTerms} />
          <Privacy when={data.isPrivacy} />
          <AppTerms when={data.isAppTerms} />
          <AppPrivacy when={data.isAppPrivacy} />
          <Loading when={data.isFetching} />
          <HomePage when={data.isArchive} />
          <Post when={data.isPostType} />
          <Sitemap when={data.isSitemap} />
          <Thankyou when={data.isThankYou} />
          <BlogPage when={data.isBlog} />
          <PageError when={data.isError} />
          <PersonalCompaign when={data.isPersonalCompaign} />
          <PersonalCompaignBR when={data.isPersonalCompaignBR} />
          <PersonalCompaignPT when={data.isPersonalCompaignPT} />
          <PersonalCompaignMX when={data.isPersonalCompaignMX} />
          <PersonalCompaignAR when={data.isPersonalCompaignAR} />
          <PersonalCompaignCL when={data.isPersonalCompaignCL} />
          <PersonalCompaignFR when={data.isPersonalCompaignFR} />
          <PersonalCompaignGR when={data.isPersonalCompaignGR} />
          <PersonalCompaignIT when={data.isPersonalCompaignIT} />
          <PersonalCompaignZA when={data.isPersonalCompaignZA} />
          <PersonalCompaignIN when={data.isPersonalCompaignIN} />
          <PersonalCompaignID when={data.isPersonalCompaignID} />
          <PersonalCompaignPH when={data.isPersonalCompaignPH} />
          <PersonalCompaignCO when={data.isPersonalCompaignCO} />
          <PersonalCompaignES when={data.isPersonalCompaignES} />
        </Switch>
        {/* </Main> */}
        {(data.isPersonalCompaign || data.isPersonalCompaignBR || data.isPersonalCompaignPT || data.isPersonalCompaignMX || data.isPersonalCompaignAR || data.isPersonalCompaignCL || data.isPersonalCompaignFR || data.isPersonalCompaignGR || data.isPersonalCompaignIT || data.isPersonalCompaignZA || data.isPersonalCompaignIN || data.isPersonalCompaignID || data.isPersonalCompaignPH || data.isPersonalCompaignCO || data.isPersonalCompaignES) ? <CampaignFooter /> : <Footer />}
      </I18nextProvider >
    </>
  );
};

export default connect(Theme);

// const globalStyles = css`
//   body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//       "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
//   }
//   a,
//   a:visited {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

// const HeadContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   background-color: #1f38c5;
// `;

// const Main = styled.div`
//   display: flex;
//   justify-content: center;
//   background-image: linear-gradient(
//     180deg,
//     rgba(66, 174, 228, 0.1),
//     rgba(66, 174, 228, 0)
//   );
// `;

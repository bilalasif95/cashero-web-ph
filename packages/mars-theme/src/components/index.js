import React, { useEffect } from "react";
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
// import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import externalCss from "./index.css";
import { Personal } from "./Personal/Personal";
import { Footer } from "./footer/Footer";
import BlogPage from "./BlogPage/BlogPage";
import { HomePage } from "./HomePage/HomePage";
import { Company } from "./Company/Company";
import { ContactUs } from "./ContactUs/ContactUs";
import { Donation } from "./Donation/Donation";
import { ListedCharity } from "./ListedCharity/ListedCharity";
import { CurrencyAccounts } from "./CurrencyAccounts/CurrencyAccounts";
import { ExchangeRates } from "./ExchangeRates/ExchangeRates";
import { ReceivePayments } from "./ReceivePayments/ReceivePayments";
import { Remittance } from "./Remittance/Remittance";
import { Giveaway } from "./Giveaway/Giveaway";
import { Terms } from "./Terms/Terms";
import { Privacy } from "./Privacy/Privacy";
import { Sitemap } from "./Sitemap/Sitemap";
import { Thankyou } from "./Thankyou/Thankyou";
import { websiteLink } from "../config/config";
import { structuredData } from "../config/SEO/Homepage/structuredData";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  useEffect(() => {
    let name = 'cashero-web'
    let version = '1.0.17'
    const last_version = localStorage.getItem(`${name}-Version`)
    if (!last_version) {
      window.location.reload();
    }
    if (last_version !== version) {
      localStorage.setItem(`${name}-Version`, version)
      window.location.reload();
    }
  }, [])
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <meta name="google-site-verification" content="ULLpQHl1XeVHE2H-ZSPLosCUY10CBkttCwbNrfMBVsc" />
        <meta name="facebook-domain-verification" content="ao1nxtpttahaf3nsk7ukhlila8irwf" />
        <meta name="robots" content="noodp, noydir, index, follow, archive" />
        <meta name="robots" content="max-snippet:50, max-image-preview:large" />
        <link rel="canonical" href={websiteLink} />
        <meta property="og:title" content={state.frontity.title} />
        <meta property="og:description" content={state.frontity.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteLink} />
        <meta property="og:image" content="https://i.imgur.com/as9Mj8G.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={state.frontity.title} />
        <meta name="twitter:description" content={state.frontity.description} />
        <meta name="twitter:url" content={websiteLink} />
        <meta name="twitter:image" content="https://i.imgur.com/as9Mj8G.png" />
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='expires' content='0' />
        <meta http-equiv='pragma' content='no-cache' />
        <script className="structured-data-list" type="application/ld+json">
          {structuredData(state)}
        </script>
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(externalCss)} />

      {/* Add the header of the site. */}
      {/* <HeadContainer>
        <Header />
      </HeadContainer> */}
      <List />
      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      {/* <Main> */}
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
        <Loading when={data.isFetching} />
        <HomePage when={data.isArchive} state={state} />
        <Post when={data.isPostType} />
        <Sitemap when={data.isSitemap} />
        <Thankyou when={data.isThankYou} />
        <BlogPage when={data.isBlog} />
        <PageError when={data.isError} />
      </Switch>
      {/* </Main> */}
      <Footer />
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

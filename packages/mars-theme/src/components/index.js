import React from "react";
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
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const categories = Object.values(state.source.category);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <meta name="google-site-verification" content="ULLpQHl1XeVHE2H-ZSPLosCUY10CBkttCwbNrfMBVsc" />
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
        <Loading when={data.isFetching} />
        <HomePage when={data.isArchive} />
        <Post when={data.isPostType} />
        <BlogPage blogsCategories={categories} when={data.isBlog} />
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

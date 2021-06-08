export const structuredData = page => {
  return JSON.stringify({
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@id": "https://cashero.com/",
        "name": page.frontity.title,
        "description": page.frontity.description
      }
    }, {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@id": "https://www.cashero.com/online-currency-exchange/",
        "name": "Online Currency Exchange | Cashero App",
        "description": "Exchange currency online easily with the Cashero App. Your currency exchange happens in an instant and with mid-market rates, best of all, there’s no hidden fees."
      }
    }]
  });
};

export const faqStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Cashero App - Online Currency Exchange",
    "url": "https://www.cashero.com/online-currency-exchange/",
    "mainEntity": [{
      "@type": "Question",
      "name": "How can I exchange funds from one currency to another?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select the currency and the amount you wish to exchange and hit the Exchange button. Your funds will be converted instantly and you can confirm your transaction by verifying with your new balance on the Wallet screen."
      }
    }, {
      "@type": "Question",
      "name": "What currencies can I exchange?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cashero App allows you to instantly convert between United States dollars (USD), British pounds (GBP), or Euros (EUR).How much does it cost to convert between currencies?Cashero may charge a small fee to convert money between currencies in your account and you can do so in seconds. Everything will be displayed in the app, with no hidden fees ever.How does Cashero compare to converting currency with the bank? Cashero uses a transparent exchange rate to convert money from one currency to another. Cashero has no hidden fees and the whole transaction is transparent.How long does it take to convert currencies?Exchanging currencies with Cashero is instant."
      }
    }]
  });
};

export const organizationStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.cashero.com/online-currency-exchange/",
    name: "Online Currency Exchange | Cashero App",
    description: "Exchange currency online easily with the Cashero App. Your currency exchange happens in an instant and with mid-market rates, best of all, there’s no hidden fees.",
    logo: "https://i.imgur.com/Bs18pDE.png",
    image: "https://i.imgur.com/RQSek8v.gif",
    "brand": {
      "@type": "Website",
      "name": "Cashero App",
      "url": "https://cashero.com/"
    },
    "sameas": [
      "https://www.linkedin.com/company/casheroapp/",
      "https://www.facebook.com/casheroapp",
      "https://www.instagram.com/casheroapp/",
      "https://www.youtube.com/channel/UCnFJebay3pAJBu-DpbYWjCQ",
      "https://twitter.com/casheroapp"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://www.cashero.com/contact-us/"
      }],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Keemia 4, 10616 Tallinn",
        "addressRegion": "Estonia"
      }
    }
  });
};
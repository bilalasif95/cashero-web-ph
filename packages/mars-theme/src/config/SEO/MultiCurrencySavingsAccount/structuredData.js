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
        "@id": "https://www.cashero.com/br/multi-currency-savings-account/",
        "name": "Multi-Currency Savings Account | Cashero App",
        "description": "Don’t be limited to keeping your savings in a single currency. With the Cashero Multi-Currency Savings Account you can hold your savings in USD, EUR, and GBP, offering you protection against currency fluctuations."
      }
    }]
  });
};

export const faqStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Cashero App - Multi-Currency Savings Account",
    "url": "https://www.cashero.com/br/multi-currency-savings-account/",
    "mainEntity": [{
      "@type": "Question",
      "name": "How does the multi-currency account work?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All Cashero accounts are built with the option to hold money in United States dollars (USD), British pound sterling (GBP), or Euros (EUR). All you have to do is download the app to your smartphone, choose which currency you want to hold (USD, GBP, or EUR), and add money in your local currency. Your funds will be automatically converted into the currency of your choice, and voilà, your multi-currency account is loaded."
      }
    }, {
      "@type": "Question",
      "name": "How much does it cost to get a Cashero multi-currency account?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nothing, it’s free! No minimum balance is needed and there are no maintenance fees."
      }
    }, {
      "@type": "Question",
      "name": "How can I protect my money against currency fluctuations?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cashero App takes pride in giving its users the ability to protect their money from currency volatility. You can load your Cashero account with your local currency and convert it to either USD, GBP, or EUR. Doing this can give you the opportunity to potentially decrease the risk of your money-losing purchasing power as it is being secured as a more stable currency."
      }
    }, {
      "@type": "Question",
      "name": "What is a multi-currency savings account?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A multi-currency savings account is a relatively new type of savings account that enables you to hold multiple currencies in a single account. In other words, you can receive or send money in different currencies without having to go through an exchange process between the currencies involved."
      }
    }, {
      "@type": "Question",
      "name": "How to find the right multi-currency savings account?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Join Cashero today and see what it’s like when your money works for you - with some of the world’s strong currencies, industry-leading return rates, zero hidden fees, and instant transactions - you’ll wonder why you didn’t join sooner."
      }
    }]
  });
};

export const organizationStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.cashero.com/br/multi-currency-savings-account/",
    name: "Multi-Currency Savings Account | Cashero App",
    description: "Don’t be limited to keeping your savings in a single currency. With the Cashero Multi-Currency Savings Account you can hold your savings in USD, EUR, and GBP, offering you protection against currency fluctuations.",
    logo: "https://firebasestorage.googleapis.com/v0/b/cashero-828.appspot.com/o/website%2FBs18pDE.png?alt=media",
    image: "https://firebasestorage.googleapis.com/v0/b/cashero-828.appspot.com/o/website%2FRQSek8v.gif?alt=media",
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
        "url": "https://www.cashero.com/br/contact-us/"
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
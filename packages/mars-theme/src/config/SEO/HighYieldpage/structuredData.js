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
        "@id": "https://www.cashero.com/high-yield-savings-account/",
        "name": "High Yield Savings Account",
        "description": "Introducing a first-of-its-kind approach to high yield savings. Cashero, the superhero your hard-earned money has been waiting for."
      }
    }]
  });
};

export const faqStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Cashero - High Yield Savings Account - FAQ",
    "url": "https://www.cashero.com/high-yield-savings-account/",
    "mainEntity": [{
      "@type": "Question",
      "name": "How do I open a high-yield savings account?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To open an account with Cashero, simply download the app to your smartphone, add money to your account and you will automatically start earning inflation-beating interest rates of 2%-5% APY."
      }
    }, {
      "@type": "Question",
      "name": "What is a high-yield savings account?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A high-yield savings account is a savings account offering higher rates of return on the amount deposited. These rates are better than the national average and are usually tied to specific conditions, such as maintenance fees and minimum balance requirements. A key term here is “APY” (annual percentage yield)."
      }
    }, {
      "@type": "Question",
      "name": "Why consider high APY savings account instead of another account type?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you wish to access your money regularly or fast then a high APY savings account is definitely for you, especially an online account. With an online account, you have 24/7 (and secure) access to your funds and typically have to pay fewer fees than traditional banks."
      }
    }, {
      "@type": "Question",
      "name": "How can I see how much interest I’ve earned?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On the main Wallet screen within the Cashero app, you’ll be able to click on Chart View. Here you can see how much you’ve invested and your earnings over different periods of time."
      }
    }]
  });
};

export const organizationStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.cashero.com/high-yield-savings-account/",
    name: "High Yield Savings Account | Cashero App",
    description: "Put your money to work with the Cashero High Yield Savings Account. Beat the rate of inflation with an average APY of 5% on your deposits.",
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
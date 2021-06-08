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
        "@id": "https://www.cashero.com/transfer-money-abroad/",
        "name": "Transfer Money Abroad And Send It Overseas Instantly | Cashero App",
        "description": "Cashero’s global money transfer service gives you a quick and secure way to send money abroad. We make sending money easy-peasy with no hidden fees."
      }
    }]
  });
};

export const faqStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Cashero App - Transfer money abroad",
    "url": "https://www.cashero.com/transfer-money-abroad/",
    "mainEntity": [{
      "@type": "Question",
      "name": "What kind of transfers can I make with Cashero?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cashero App allows you to send money across the globe. Once we’re live, go to the Payments tab, and select the contact you would like to transfer money to, and add the amount you would like to send."
      }
    }, {
      "@type": "Question",
      "name": "What are the fees to transfer money?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are different fees for individual users, charities, and businesses. All fees are laid out in the app, completely transparent so you always know what they are."
      }
    }, {
      "@type": "Question",
      "name": "How long does it take the transfer money with Cashero?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transferring money from your Cashero account to another user is done in an instant. When the user withdraws these funds to the bank account, this can take anywhere from 1-3 days to appear."
      }
    }]
  });
};

export const organizationStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.cashero.com/transfer-money-abroad/",
    name: "Transfer Money Abroad And Send It Overseas Instantly | Cashero App",
    description: "Cashero’s global money transfer service gives you a quick and secure way to send money abroad. We make sending money easy-peasy with no hidden fees.",
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
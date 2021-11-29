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
        "@id": "https://www.cashero.com/ph/instant-money-transfer/",
        "name": "Instant Money Transfer: Send Money Instantly Between Cashero Accounts | Cashero App",
        "description": "Cashero allows you to make instant money transfers to other Cashero Accounts all over the world. We offer an all-in-one platform for multi-currency high-yield savings, currency exchange and instant cross-border payments. We're your money's superhero."
      }
    }]
  });
};

export const faqStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Cashero App - Instant Money Transfer",
    "url": "https://www.cashero.com/ph/instant-money-transfer/",
    "mainEntity": [{
      "@type": "Question",
      "name": "What kind of payments can I make with Cashero?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cashero allows you to send, request and receive payments. Simply go to the Payments tab, and select the contact you would like to transfer money to and add the amount you would like to send. You can search for your contacts and even businesses. If your contact or a business is not a registered Cashero user, you can invite them and earn rewards for it too."
      }
    }, {
      "@type": "Question",
      "name": "What are the fees to make payments?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For users with personal accounts, users can send, request and instantly receive money from users worldwide. Businesses can send, request and receive money from customers worldwide for a nominal fee of 1% after their first $50,000 USD."
      }
    }, {
      "@type": "Question",
      "name": "How long do payments take to send and receive?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Payments between registered users, charities and businesses are sent and received instantly."
      }
    }, {
      "@type": "Question",
      "name": "Can I send, request and receive payments in different currencies?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You can choose between USD, GBP or EUR."
      }
    }, {
      "@type": "Question",
      "name": "Sending an instant money transfer – How does it work?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The process is pretty straightforward. You send money by supplying the required amount to a transfer company agent or online platform. Once the transfer is complete the recipient has access to the funds either in person or electronically."
      }
    }]
  });
};

export const organizationStructuredData = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.cashero.com/ph/instant-money-transfer/",
    name: "Instant Money Transfer: Send Money Instantly Between Cashero Accounts | Cashero App",
    description: "Cashero allows you to make instant money transfers to other Cashero Accounts all over the world. We offer an all-in-one platform for multi-currency high-yield savings, currency exchange and instant cross-border payments. We're your money's superhero.",
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
        "url": "https://www.cashero.com/ph/contact-us/"
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
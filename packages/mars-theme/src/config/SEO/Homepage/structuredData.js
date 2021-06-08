export const structuredData = home => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://cashero.com/",
    name: home.frontity.title,
    description: home.frontity.description,
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
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
  
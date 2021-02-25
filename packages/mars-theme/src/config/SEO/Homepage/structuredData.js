import { websiteLink } from "../../config";

export const structuredData = shop => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    description: shop.frontity.description,
    name: shop.frontity.title,
    url: websiteLink
  });
};

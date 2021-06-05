import { websiteLink } from "../../config";

export const structuredData = home => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    description: home.frontity.description,
    name: home.frontity.title,
    url: websiteLink
  });
};

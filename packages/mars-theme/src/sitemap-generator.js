require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./routes-sitemap.js").default;
const Sitemap = require("react-router-sitemap").default;
const websiteLink = require("./config/config.js").websiteLink;

function generateSitemap() {
  return new Sitemap(router)
    .build(websiteLink)
    .save("./build/sitemap.xml")
    .save("./sitemap.xml")
}

generateSitemap();

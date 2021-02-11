require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./routes-sitemap.js").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://staging.cashero.com/")
    .save("./build/sitemap.xml");
}

generateSitemap();

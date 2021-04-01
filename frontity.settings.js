import { gtmId, wordPressLink } from "./packages/mars-theme/src/config/config";

const settings = {
  "name": "cashero-web",
  "state": {
    "frontity": {
      "url": wordPressLink,
      "title": "Cashero App",
      "description": "Cashero is a limited company registered in England and Wales with the registered company number 12783127"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Blogs",
              "/blog"
            ],
            [
              "Personal",
              "/high-yield-savings-account"
            ],
            [
              "Company",
              "/company"
            ],
            [
              "ContactUs",
              "/contact-us"
            ],
            [
              "Donation",
              "/donation"
            ],
            [
              "ListedCharity",
              "/become-listed-charity"
            ],
            [
              "CurrencyAccounts",
              "/multi-currency-savings-account"
            ],
            [
              "ExchangeRates",
              "/online-currency-exchange"
            ],
            [
              "ReceivePayments",
              "/instant-money-transfer"
            ],
            [
              "Remittance",
              "/transfer-money-abroad"
            ],
            [
              "Terms & Conditions",
              "/giveaway"
            ],
            [
              "Sitemap",
              "/sitemap"
            ],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/google-tag-manager-analytics",
      "state": {
        "googleTagManagerAnalytics": {
          "containerId": gtmId,
        },
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": wordPressLink
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

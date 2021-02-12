import { gtmId, wordPressLink } from "./packages/mars-theme/src/config/config";

const settings = {
  "name": "cashero-web",
  "state": {
    "frontity": {
      "url": wordPressLink,
      "title": "Cashero",
      "description": "Cashero"
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
              "/personal"
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
              "/listed-charity"
            ],
            [
              "CurrencyAccounts",
              "/currency-accounts"
            ],
            [
              "ExchangeRates",
              "/exchange-rates"
            ],
            [
              "ReceivePayments",
              "/receive-payments"
            ],
            [
              "Remittance",
              "/remittance"
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

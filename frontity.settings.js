const settings = {
  "name": "cashero-web",
  "state": {
    "frontity": {
      "url": "https://test.cashero.com",
      "title": "Cashero",
      "description": "Cashero"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "googleTagManagerAnalytics": {
          "containerId": "GTM-PVNSSZR",
        },
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
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.cashero.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

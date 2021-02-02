const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Cashero",
      "description": "WordPress installation for Frontity development"
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
              "Personal",
              "/personal"
            ],
            [
              "Company",
              "/company"
            ],
            [
              "ContactUs",
              "/contactus"
            ],
            [
              "Donation",
              "/donation"
            ],
            [
              "ListedCharity",
              "/listedcharity"
            ],
            [
              "CurrencyAccounts",
              "/currencyaccounts"
            ],
            [
              "ExchangeRates",
              "/exchangerates"
            ],
            [
              "ReceivePayments",
              "/receivepayments"
            ],
            [
              "Remittance",
              "/remittance"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ],
            [
              "Sign Up",
              "/sign-up/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

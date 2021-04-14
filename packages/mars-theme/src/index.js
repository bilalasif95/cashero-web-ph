import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const personalHandler = {
  pattern: "/high-yield-savings-account",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonal: true,
    })
  }
}

const companyHandler = {
  pattern: "/company",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isCompany: true,
    })
  }
}

const contactusHandler = {
  pattern: "/contact-us",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isContactUs: true,
    })
  }
}

const donationHandler = {
  pattern: "/donation",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isDonation: true,
    })
  }
}

const listedcharityHandler = {
  pattern: "/become-listed-charity",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isListedCharity: true,
    })
  }
}

const currencyaccountsHandler = {
  pattern: "/multi-currency-savings-account",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isCurrencyAccounts: true,
    })
  }
}

const exchangeratesHandler = {
  pattern: "/online-currency-exchange",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isExchangeRates: true,
    })
  }
}

const receivepaymentsHandler = {
  pattern: "/instant-money-transfer",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isReceivePayments: true,
    })
  }
}

const remittanceHandler = {
  pattern: "/transfer-money-abroad",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isRemittance: true,
    })
  }
}

const blogsHandler = {
  pattern: "/blog",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isBlog: true,
    })
  }
}

const giveawayHandler = {
  pattern: "/giveaway",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isGiveaway: true,
    })
  }
}

const privacyHandler = {
  pattern: "/privacy-policy",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPrivacy: true,
    })
  }
}

const appPrivacyHandler = {
  pattern: "/privacy-policy-app",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAppPrivacy: true,
    })
  }
}

const appTermsHandler = {
  pattern: "/terms-app",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAppTerms: true,
    })
  }
}

const termsHandler = {
  pattern: "/terms",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isTerms: true,
    })
  }
}

const sitemapHandler = {
  pattern: "/sitemap",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isSitemap: true,
    })
  }
}

const thankyouHandler = {
  pattern: "/Thankyou",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isThankYou: true,
    })
  }
}

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: true,
        showOnPost: true,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(personalHandler);
        libraries.source.handlers.push(companyHandler);
        libraries.source.handlers.push(contactusHandler);
        libraries.source.handlers.push(donationHandler);
        libraries.source.handlers.push(listedcharityHandler);
        libraries.source.handlers.push(currencyaccountsHandler);
        libraries.source.handlers.push(remittanceHandler);
        libraries.source.handlers.push(exchangeratesHandler);
        libraries.source.handlers.push(receivepaymentsHandler);
        libraries.source.handlers.push(giveawayHandler);
        libraries.source.handlers.push(blogsHandler);
        libraries.source.handlers.push(sitemapHandler);
        libraries.source.handlers.push(privacyHandler);
        libraries.source.handlers.push(termsHandler);
        libraries.source.handlers.push(thankyouHandler);
        libraries.source.handlers.push(appPrivacyHandler);
        libraries.source.handlers.push(appTermsHandler);
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;

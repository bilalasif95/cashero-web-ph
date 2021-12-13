import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const personalHandler = {
  pattern: "/ph/high-yield-savings-account",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonal: true,
    })
  }
}

const companyHandler = {
  pattern: "/ph/company",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isCompany: true,
    })
  }
}

const contactusHandler = {
  pattern: "/ph/contact-us",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isContactUs: true,
    })
  }
}

const donationHandler = {
  pattern: "/ph/donation",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isDonation: true,
    })
  }
}

const listedcharityHandler = {
  pattern: "/ph/become-listed-charity",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isListedCharity: true,
    })
  }
}

const currencyaccountsHandler = {
  pattern: "/ph/multi-currency-savings-account",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isCurrencyAccounts: true,
    })
  }
}

const exchangeratesHandler = {
  pattern: "/ph/online-currency-exchange",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isExchangeRates: true,
    })
  }
}

const receivepaymentsHandler = {
  pattern: "/ph/instant-money-transfer",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isReceivePayments: true,
    })
  }
}

const remittanceHandler = {
  pattern: "/ph/transfer-money-abroad",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isRemittance: true,
    })
  }
}

const blogsHandler = {
  pattern: "/ph/blog",
  func: async ({ route, state, libraries }) => {
    const { api, populate } = libraries.source
    const response = await api.get({
      endpoint: 'posts',
      params: {
        per_page: 100,
        _embed: true,
      },
    })
    const firstItems = await populate({
      response,
      state,
    })
    const newItems = await Promise.all(firstItems)
    const items = firstItems.concat(newItems)
    Object.assign(state.source.data[route], {
      type: "page",
      isBlog: true,
      items,
    })
  }
}

const giveawayHandler = {
  pattern: "/ph/giveaway",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isGiveaway: true,
    })
  }
}

const privacyHandler = {
  pattern: "/ph/privacy-policy",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPrivacy: true,
    })
  }
}

const appPrivacyHandler = {
  pattern: "/ph/app-privacy-policy",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAppPrivacy: true,
    })
  }
}

const appTermsHandler = {
  pattern: "/ph/app-terms",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAppTerms: true,
    })
  }
}

const termsHandler = {
  pattern: "/ph/terms",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isTerms: true,
    })
  }
}

const sitemapHandler = {
  pattern: "/ph/sitemap",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isSitemap: true,
    })
  }
}

const thankyouHandler = {
  pattern: "/ph/Thankyou",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isThankYou: true,
    })
  }
}

const countriesHandler = {
  pattern: "/ph/countries",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isCountries: true,
    })
  }
}

const mainHandler = {
  pattern: "/ph/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isMain: true,
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
        libraries.source.handlers.push(countriesHandler);
        libraries.source.handlers.push(mainHandler);
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

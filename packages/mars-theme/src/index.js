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
  pattern: "/app-privacy-policy",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAppPrivacy: true,
    })
  }
}

const appTermsHandler = {
  pattern: "/app-terms",
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

const personalCompaignHandler = {
  pattern: "/us",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaign: true,
    })
  }
}

const personalCompaignBRHandler = {
  pattern: "/br",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignBR: true,
    })
  }
}

const personalCompaignPTHandler = {
  pattern: "/pt",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignPT: true,
    })
  }
}

const personalCompaignMXHandler = {
  pattern: "/mx",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignMX: true,
    })
  }
}

const personalCompaignDOEHandler = {
  pattern: "/br-doe",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignDOE: true,
    })
  }
}

const personalCompaignARHandler = {
  pattern: "/ar",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignAR: true,
    })
  }
}

const personalCompaignCLHandler = {
  pattern: "/cl",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignCL: true,
    })
  }
}

const personalCompaignFRHandler = {
  pattern: "/fr",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignFR: true,
    })
  }
}

const personalCompaignGRHandler = {
  pattern: "/de",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignGR: true,
    })
  }
}

const personalCompaignITHandler = {
  pattern: "/it",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignIT: true,
    })
  }
}

const personalCompaignZAHandler = {
  pattern: "/za",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignZA: true,
    })
  }
}

const personalCompaignINHandler = {
  pattern: "/in",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignIN: true,
    })
  }
}

const personalCompaignIDHandler = {
  pattern: "/id",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignID: true,
    })
  }
}

const personalCompaignPHHandler = {
  pattern: "/ph",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignPH: true,
    })
  }
}

const personalCompaignCOHandler = {
  pattern: "/co",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignCO: true,
    })
  }
}

const personalCompaignESHandler = {
  pattern: "/es",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignES: true,
    })
  }
}

const personalCompaignPHENHandler = {
  pattern: "/ph-en",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignPHEN: true,
    })
  }
}

const personalCompaignENRUHandler = {
  pattern: "/en-ru",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignENRU: true,
    })
  }
}

const personalCompaignENNlHandler = {
  pattern: "/en-ni",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonalCompaignENNl: true,
    })
  }
}

const countriesHandler = {
  pattern: "/countries",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isCountries: true,
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
        libraries.source.handlers.push(personalCompaignHandler);
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
        libraries.source.handlers.push(personalCompaignBRHandler);
        libraries.source.handlers.push(personalCompaignDOEHandler);
        libraries.source.handlers.push(personalCompaignPTHandler);
        libraries.source.handlers.push(personalCompaignMXHandler);
        libraries.source.handlers.push(personalCompaignARHandler);
        libraries.source.handlers.push(personalCompaignCLHandler);
        libraries.source.handlers.push(personalCompaignFRHandler);
        libraries.source.handlers.push(personalCompaignGRHandler);
        libraries.source.handlers.push(personalCompaignITHandler);
        libraries.source.handlers.push(personalCompaignZAHandler);
        libraries.source.handlers.push(personalCompaignINHandler);
        libraries.source.handlers.push(personalCompaignIDHandler);
        libraries.source.handlers.push(personalCompaignPHHandler);
        libraries.source.handlers.push(personalCompaignCOHandler);
        libraries.source.handlers.push(personalCompaignESHandler);
        libraries.source.handlers.push(personalCompaignPHENHandler);
        libraries.source.handlers.push(personalCompaignENRUHandler);
        libraries.source.handlers.push(personalCompaignENNlHandler);
        libraries.source.handlers.push(countriesHandler);
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

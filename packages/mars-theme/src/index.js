import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const personalHandler = {
  pattern: "/personal/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPersonal: true,
    })
  }
}

const companyHandler = {
  pattern: "/company/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isCompany: true,
    })
  }
}

const contactusHandler = {
  pattern: "/contact-us/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isContactUs: true,
    })
  }
}

const donationHandler = {
  pattern: "/donation/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isDonation: true,
    })
  }
}

const listedcharityHandler = {
  pattern: "/listed-charity/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isListedCharity: true,
    })
  }
}

const currencyaccountsHandler = {
  pattern: "/currency-accounts/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isCurrencyAccounts: true,
    })
  }
}

const exchangeratesHandler = {
  pattern: "/exchange-rates/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isExchangeRates: true,
    })
  }
}

const receivepaymentsHandler = {
  pattern: "/receive-payments/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isReceivePayments: true,
    })
  }
}

const remittanceHandler = {
  pattern: "/remittance/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isRemittance: true,
    })
  }
}

const blogsHandler = {
  pattern: "/blog/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isBlog: true,
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
        showOnList: false,
        showOnPost: false,
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
        libraries.source.handlers.push(blogsHandler);
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

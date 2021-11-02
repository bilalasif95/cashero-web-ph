/// <reference types="cypress" />



describe("Home Page Navbar Test", () => {
  before(function() {
      cy.visit("/")
      cy.get('.css-wmgr56 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
  });
  it("Should display High Yield Savings Account content", () => {
    cy.get('#BusinessDropdown').invoke('show')
    cy.contains('High Yield Savings Account').click({force:true});
      cy.url().should("include", "high-yield-savings-account")
  });
  it("Should display Multi-Currency Saving Account Content", () => {
    cy.get('#BusinessDropdown').invoke('show')
    cy.contains("Multi-Currency Savings Account").click({force:true})
    cy.url().should("include", "multi-currency-savings-account")
})
it("Should display Instant Money Transfer", () => {
  cy.get('#BusinessDropdown').invoke('show')  
  cy.contains("Instant Money Transfer").click({force:true})
    cy.url().should("include", "instant-money-transfer")
})
it("Should display Company Content", () => {
  cy.get('#BusinessDropdown').invoke('show')  
  cy.contains("Company").click()
    cy.url().should("include", "company")
})
it("Should display Help Content", () => {
  cy.get('#BusinessDropdown').invoke('show')  
  cy.contains("Help").click()
    cy.url().should("include", "contact-us")
})
 
});

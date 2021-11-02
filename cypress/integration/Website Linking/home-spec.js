/// <reference types="cypress" />



describe("Linking", () => {
    it("Links", () => {
        cy.visit("/")
         cy.get('.css-wmgr56 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
        
        
cy.get("a").not('[role="button"]').each($a => {
  const message = $a.text();
  message.click();
  expect($a, message).to.have.attr("href").not.contain("undefined");

});
  });
});

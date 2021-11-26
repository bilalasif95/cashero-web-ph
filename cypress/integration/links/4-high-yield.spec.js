/// <reference types="cypress" />



describe("High Yields Savings Account Page", () => {
    it("Should check links for High Yields Savings Account Page", () => {
        cy.visit("/br/high-yield-savings-account/")
        cy.get('.css-wmgr56 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();

        cy.get("a").each(a => {

            if (a[0].href != "") {
                cy.request(a[0].href).then(res => {
                    expect(res.status).to.be.eq(200)
                }
                )
            }
        });
    });
});
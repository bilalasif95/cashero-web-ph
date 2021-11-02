/// <reference types="cypress" />



describe("Linking", () => {
    it("Links", () => {
        cy.visit("/company")
         cy.get('.css-wmgr56 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
        
        
         cy.get("a").each( a => {
           
            if(a[0].href != ""){
                cy.request(a[0].href).then(res => {
                    expect(res.status).to.be.eq(200) 
            }        
)}
        });
});
});
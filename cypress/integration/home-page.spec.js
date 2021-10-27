/// <reference types="cypress" />

describe("home page", () => {
  it("should login successfully", () => {
    cy.visit("/");
  });
});

import '../support/commands';

describe("Registration use case", () => {
  beforeEach(() => {
    //visit
    cy.visit("/register");
  });

  context("Navigate to the registration page", () => {
    it("should navigate to the registration page", () => {
      cy.url().should("include", "/register");
    });
  });

  context("Register account", () => {
    it("should allow a user to register and then log out", () => {
      //Generate mailbox
      const uniqueEmail = `testuser${Date.now()}@example.com`;
      const accountName = "aaa";
      const password = "1234567";

     
      cy.Register(accountName, uniqueEmail, password);

      
      cy.checkIfUserIsLoggedIn(uniqueEmail);

      
      cy.clickButton("Logout");
    });
  });
});

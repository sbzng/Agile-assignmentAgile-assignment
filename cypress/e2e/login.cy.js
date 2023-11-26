import '../support/commands';

describe("Login and Logout", () => {
  beforeEach(() => {
    
    cy.visit("/login");
  });

  it("should login with valid credentials", () => {
    const email = "your_email@example.com";
    const password = "your_password";

    cy.loginWithEmailAndPassword(email, password);

   
    cy.checkIfUserIsLoggedIn(email);
  });

  it("should logout", () => {
    const email = "your_email@example.com";
    const password = "your_password";

   
    cy.loginWithEmailAndPassword(email, password);
   
    cy.logout();

    cy.url().should("include", "/login");
  });
});

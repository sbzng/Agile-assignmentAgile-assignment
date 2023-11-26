// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// support/commands.js

Cypress.Commands.add("loginWithEmailAndPassword", (email, password) => {
   
    cy.get("#login-email").type(email);
    cy.get("#login-password").type(password);
  
    cy.get("#login_button").click();
  });
  
  Cypress.Commands.add("checkIfUserIsLoggedIn", (email) => {
    
    cy.get("#user_display_email").should("contain", email);
  });
  
  Cypress.Commands.add("logout", () => {
    
    cy.get("button").contains("Logout").click();
  });
  
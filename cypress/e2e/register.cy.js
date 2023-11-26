import '../support/commands'

describe("Registration use case", () => {

    describe("Navigate to the registration page", () => {
        it("Navigates to registration page", () => {    
            cy.visit("/register");
        });
    });

    describe("Register account", () => {
        it("Enter account details & Register then Check if user logged in, then logout", () => {   
            cy.url().should("include", `/register`);
            
            const accountName = "zang";
            const email = "denggg4399@gmail.com";
            const password = "1234567";
            
            
            cy.Register(accountName, email, password);

           
            cy.checkIfUserIsLoggedIn(email);

         
            cy.logout();
        });
    });
});

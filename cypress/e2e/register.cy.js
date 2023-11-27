import '../support/commands'

describe("Registration use case", () => {

    describe("Navigate to the registration page", () => {
        it("Navigates to registration page", () => {    
            try {
                cy.visit("/register");
            } catch (error) {
                cy.log(`Error occurred while navigating to the registration page: ${error.message}`);
                throw error;
            }
        });
    });

    describe("Register account", () => {
        it("Enter account details & Register then Check if user logged in, then logout", () => {   
            cy.url().should("include", `/register`);
            
            const accountName = "zang";
            const email = "denggg4399@gmail.com";
            const password = "1234567";
            
            try {
                cy.Register(accountName, email, password);
            } catch (error) {
                cy.log(`Error occurred while registering an account: ${error.message}`);
                throw error;
            }

            try {
                cy.checkIfUserIsLoggedIn(email);
            } catch (error) {
                cy.log(`Error occurred while checking if the user is logged in: ${error.message}`);
                throw error;
            }

            cy.logout();
        });
    });
});

describe("Login use case", () => {
    beforeEach(() => {
    
      cy.visit("/login");
    });
  
    it("should navigate to the login page", () => {
      cy.url().should("include", "/login");
    });
  
    it("should allow a user to log in with email and password", () => {
   
   
      cy.url().should("include", "/login");
  
    
      cy.get("#login-email").clear().type("denggg4399@gmail.com");
      cy.get("#login-password").clear().type("1234567");
  
     
      cy.get("#login_button").contains("Login").click();
  
      
      cy.get("#user_display_email").contains("denggg4399@gmail.com");
  
      
      cy.get("button").contains("Logout").click();
    });
  });
  
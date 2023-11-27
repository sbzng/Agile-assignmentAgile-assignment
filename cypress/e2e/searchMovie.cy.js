describe("Search Movie feature", () => {
    let movies;
    before(() => {
      const slug = "creator"; 
      cy.request(
        `https://api.themoviedb.org/3/search/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1&query=${slug}`
      )
        .its("body")
        .then((response) => {
          movies = response.results;
        });
    });
  
    
    it("Navigates to search movies page", () => {
      cy.visit("/search"); 
    });
  
    // input and search
    it("Searches for a movie", () => {
      cy.get("#filled-search").clear().type(" creator{enter}"); 
    });
  
    
    it("Adds movies to favorites", () => {
      cy.get("button[aria-label='add to favorites']")
        .eq(0)
        .click(); 
  
      cy.get("button[aria-label='add to favorites']")
        .eq(1)
        .click(); 
  
      
      cy.get("button").contains("Favorites").click();
    });
  
    
    it("Verifies favorite movies in favorites list", () => {
      cy.get(".MuiCardHeader-content").should("have.length", 2);
  
      cy.visit("/"); 
    });
  });
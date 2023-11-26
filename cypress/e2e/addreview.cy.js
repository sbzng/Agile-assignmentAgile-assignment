let movies;

describe("The review feature", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
  });

  it("Favorited movies contain the red heart", () => {
    cy.visit("/");
    cy.get(".MuiCardHeader-root").eq(1).find("svg").should("not.exist");
    cy.get("button[aria-label='add to favorites']").eq(1).click();
    cy.get(".MuiCardHeader-root").eq(1).find("svg");
  });

  describe("The favourites page", () => {
    beforeEach(() => {
      // Select two favourites and navigate to Favourites page
      cy.get("button[aria-label='add to favorites']").eq(1).click();
      cy.get("button[aria-label='add to favorites']").eq(3).click();
      cy.get("button").contains("Favorites").click();
    });

    it("The favorited movies are listed.", () => {
      cy.get(".MuiCardHeader-content").should("have.length", 2);
      cy.get(".MuiCardHeader-content")
        .eq(0)
        .find("p")
        .contains(movies[1].title);
      cy.get(".MuiCardHeader-content")
        .eq(1)
        .find("p")
        .contains(movies[3].title);
    });
  });

  describe("The add review page", () => {
    it("navigates to the add review page & adds review", () => {
      cy.get("svg[data-testid='RateReviewIcon'").eq(0).click();

      const name = "Evan Casey";
      const reviewContent = "This is a new film & would be enjoyable to those who like superhero films.";

      cy.get("#author").clear().type(name);
      cy.get("#review").clear().type(reviewContent);
      cy.get("#select-rating").click();

      cy.contains('Excellent').click();

      cy.get(".MuiButtonBase-root").contains("Submit").click();

      cy.get("svg[data-testid='CloseIcon'").click();
    });
  });
});

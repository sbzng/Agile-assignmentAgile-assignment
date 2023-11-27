import "../support/commands";

let movies;

describe("The review feature", () => {
  before(() => {

    try {
      cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")
        .then((response) => {
          movies = response.results;
        });
    } catch (error) {
      cy.log(`Error occurred while making the API request: ${error.message}`);
      throw error;
    }
  });

  describe("Selecting favourite movies", () => {
    it("Favorited movies contain the red heart", () => {
      cy.visit("/");
      cy.checkRedHeartExists(1);
    });
  });

  describe("The favourites page", () => {
    beforeEach(() => {
      cy.addToFavourites(1);
      cy.addToFavourites(3);
      cy.clickButton("Favorites");
    });
    it("The favorited movies are listed.", () => {
      cy.checkMoviesLength(2);
      cy.checkMoviesExist(0, movies[1].title);
      cy.checkMoviesExist(1, movies[3].title);
    });
  });

  describe("The add review page", () => {
    it("navigates to the add review page & adds review", () => {
      cy.clickReviewButton(0);

      const name = "zang";
      const reviewContent = "GOOOOOD";

   
      try {
        cy.addReview(name, reviewContent);
      } catch (error) {
        cy.log(`Error occurred while adding a review: ${error.message}`);
        throw error;
      }
    });
  });
});


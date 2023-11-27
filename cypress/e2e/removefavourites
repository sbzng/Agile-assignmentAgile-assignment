import '../support/commands';

let movies;

describe("The remove favourite movie feature", () => {
  beforeEach(() => {
    cy.request(/* ... */).its("body").then((response) => {
      movies = response.results;
    });
  });

  describe("Selecting favourite movies", () => {
    it("Favorited movies contain the red heart", () => {
      cy.visit("/");
      cy.checkRedHeartExists(1);
    });

    it("Add movies to favourites.", () => {
      cy.visit("/");
      cy.addToFavourites(1);
      cy.addToFavourites(3);
      cy.clickButton("Favorites");
    });

    it("The favorited movies are listed.", () => {
      cy.checkMoviesLength(2);
      cy.checkMoviesExist(0, movies[1].title);
      cy.checkMoviesExist(1, movies[3].title);
    });

    it("Remove the favorited movies from the list.", () => {
      cy.removeFavourite(1);
      cy.removeFavourite(0);
    });
  });
});

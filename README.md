Assignment 1 - Agile Software Practice
Name: Shaobo Zang

To use this application, install Cypress and create the cypress.env.json file and .env file in the movies folder of the project and include your TMDB API key inside of it.

To add your api you can include it in cypress.env.json like so:

TMDB_KEY=<YOUR_TMDB_API_KEY>

To add your api you can include it in the .env like so:

REACT_APP_TMDB_KEY=<YOUR_TMDB_API_KEY>
FAST_REFRESH=false


Test with auto
six in total e2e tests that demonstrates the new functionality in the application.


E2E Tests 
removeFavourite.cy.js - Removing a movie from favourites list.
login.cy.js - Login with firebase.
pagination.cy.js - Implement pagination.
register.cy.js - Register with firebase.
addreview.cy.js - Display the review functionality for a movie.
searchMovie.cy.js - Searching functionality implemented.

Branching 
Branch-Edit-Merge workflow shown in commit history

Error/Exception 
addReview and register

Bundling/Code splitting
all the template

Cypress Custom Commands

support/commands.js

Component Testing
actorCard.cy.js review.cy.js
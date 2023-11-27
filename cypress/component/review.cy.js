import ReviewForm from './reviewForm';

describe('<ReviewForm>', () => {
  beforeEach(() => {
    cy.mount(<ReviewForm />);
  });

  it('should mount the component', () => {
  });

  it('should enter review details', () => {
    const name = "Evan Casey";
    const reviewContent = "This is a new film & would be enjoyable to those who like superhero films.";

    cy.get("#author").clear().type(name);
    cy.get("#review").clear().type(reviewContent);
    cy.get("#select-rating").click();
    cy.contains('Excellent').click();

    cy.get(".MuiButtonBase-root").contains("Submit").click();

    // Close the form
    cy.get("svg[data-testid='CloseIcon']").click();
  });
});

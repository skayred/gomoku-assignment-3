describe("non_styled_game", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  afterEach(function () {
    cy.reload();
  });

  it("shouldnt_have_table", () => {
    cy.get('table').should('not.exist');
  });

  it("should_have_grid", () => {
    cy.get('.row');
    cy.get('.row .col');
  });

  it("should_have_preloader", () => {
    cy.get('.progress');
    cy.get('.progress .determinate');
  });
});

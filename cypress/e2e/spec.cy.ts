describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('base_url'));
    cy.get("#profileH1").should("have.text", "Nikolai R. - Portfolio");
  })
})
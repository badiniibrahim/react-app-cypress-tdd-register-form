describe("Register form", () => {
  it("Should render register form", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="name-input"]').type("Badini");
    cy.get('[data-testid="email-input"]').type("badini@test.test");
    cy.get('[data-testid="password-input"]').type("123456");
    cy.get('[data-testid="sendBtn"]').click();
    cy.contains("Hello Badini");
  });
});

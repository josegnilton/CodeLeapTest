describe("codeleap-frontend-test-master tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(2000);

    cy.get("input").type("John Doe");
    cy.wait(500);

    cy.get(".btn-fill").click();
    cy.wait(2000);
  });

  it("Login page", () => {
    // Just working with the beforeEach code
  });

  it("Creating a new card", () => {
    cy.get("input").type("I want to save here some random title");
    cy.get("textarea").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus tellus eget ex lobortis."
    );
    cy.wait(500);

    cy.get(".btn-fill").click();
    cy.wait(2000);
  });

  it("Editing a existing card", () => {
    cy.get("input").type("I want to save here some random title");
    cy.get("textarea").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus tellus eget ex lobortis."
    );
    cy.wait(500);

    cy.get(".btn-fill").click();
    cy.wait(2000);

    cy.get("svg").eq(1).click();

    cy.get(":nth-child(1) > input")
      .clear()
      .type("Now i want to save here a new edited title");
    cy.get(":nth-child(2) > textarea")
      .clear()
      .type(
        "Aliquam erat volutpat. Nam sagittis felis ut vehicula elementum. Aliquam vel lorem mattis, mollis felis in, elementum quam."
      );
    cy.wait(2000);

    cy.get(".btn-fill").contains("Save").click();
    cy.wait(2000);
  });

  it("Deleting an existing card", () => {
    cy.get("input").type("I want to save here some random title");
    cy.get("textarea").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus tellus eget ex lobortis."
    );
    cy.wait(500);

    cy.get(".btn-fill").click();
    cy.wait(2000);

    cy.get("svg").eq(0).click();
    cy.wait(2000);
  });
});

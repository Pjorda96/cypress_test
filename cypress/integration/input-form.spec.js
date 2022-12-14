const hostUrl = "http://localhost:3030";

describe("Input form", () => {
  it("focuses input on load", () => {
    cy.visit(hostUrl);
  });
});

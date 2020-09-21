/// <reference types="cypress" />

describe("Voting", () => {
  beforeEach(() => {
    cy.exec("npm run db:reset");
  });

  it("successfully loads", () => {
    cy.visit("http://localhost:4000");
    // Submit Candidate
    cy.get("#submit-candidate").should("be.visible");
    cy.get("#submit-candidate").click();
    cy.get("#candidate-form").should("be.visible");
    cy.get("#name").type("Kanye West");
    cy.get("#description").type("Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean eu velit libero.");
    cy.get("#photo").type("https://i.ibb.co/1fSnd3T/kanye.png");
    cy.get("#category").select("Entertainment");
    cy.get("#submit-form-button").click();
    cy.findByText(/Kanye West/i).should("be.visible");
    // Vote candidate
    cy.get(".test-positive-percentage").should("have.text", "50%");
    cy.get(".test-negative-percentage").should("have.text", "50%");
    cy.get(".test-like").click();
    cy.get(".test-vote-now").click();
    cy.get(".test-vote-again").should("be.visible");
    cy.get(".test-vote-again").click();
    cy.get(".test-positive-percentage").should("have.text", "100%");
    cy.get(".test-negative-percentage").should("have.text", "0%");
  });
});

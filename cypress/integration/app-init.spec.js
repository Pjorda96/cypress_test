describe("App initialization", () => {
  beforeEach(() => {
    // cy.server();
    // cy.route('GET', '/api/todos.json', todos.json);
    // cy.visit('/');
  });

  it("Loads todos.json on page load", () => {
    cy.seedAndVisit();

    cy.get('.todo-list li')
      .should('have.length', 4);
  });

  it("Display an error on failure", () => {
    cy.server();
    cy.route({
      url: '/api/todos',
      method: 'GET',
      status: 500,
      response: {}
    })
    cy.visit('/');

    cy.get('.todo-list li')
      .should('not.exist');
    cy.get('.error')
      .should('be.visible')
  });

  /*it.only("Loads todos.json on page load", () => {
    cy.focused()
      .should('have.class', 'new-todo');
  });*/

  /*it("accepts input", () => {
    const typedText = 'Buy Milk';

    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText);
  });

  context('Form submission', () => {
    beforeEach(() => {
      cy.server();
    })

    it('Adds a new todo on submit', () => {
      const typedText = 'Buy eggs';

      cy.route('POST', '/api/todos.json', {
        name: typedText,
        id: 1,
        isComplete: false
      })

      cy.get('.new-todo')
        .type(typedText)
        .type('{enter}')
        .should('have.value', '');
      cy.get('.todo-list li')
        .should('have.length', 1)
        .and('contain', typedText);
    })


    it('Shows an error massage on a failed submission', () => {
      cy.route({
        url: '/api/todos.json',
        method: 'POST',
        status: 500,
        response: {}
      })

      cy.get('.new-todo')
        .type('test{enter}');

      cy.get('.todo-list li')
        .should('not.exist');

      cy.get('.error')
        .should('be.visible')
    })
  })*/
});

describe ('ToDoList', () => {
    // Unit tests
    it('should focus on the input', () => {
        cy.visit ('/');
        cy.focused().should('have.class', 'todoListMain-input');
    });

    it('accepts a text input', () => {
        const text = 'Example ToDo';
        cy.visit('/');
        cy.get('.todoListMain-input').type(text).should('have.value', text);
    });

    // End-to-end tests
    context ('empty list', () => {
        it('adds a new ToDo item', () => {
            cy.visit ('/');
            cy.get('.todoListMain-input').type('New todo').type('{enter}');
            cy.get('.todoListMain-item').should('have.length', 1);
        });
    });

    context ('list with items', () => {
        it('removes a ToDo item from the list', () => {
            cy.visit ('/');
            cy.get('.todoListMain-input').type('First todo').type('{enter}');
            cy.get('.todoListMain-input').type('Second todo').type('{enter}');
            cy.get('.todoListMain-input').type('Third todo').type('{enter}');
            cy.get('.todoListMain-item').first().click();
            cy.get('.todoListMain-item').should('have.length', 2);
        });
    });
});
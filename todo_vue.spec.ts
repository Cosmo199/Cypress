import locators from  '../fixtures/locations';

  describe('todo vue test',() => {
      
    beforEach(() => {
      cy.visit(Cypress.config('baseUrl') as string); 
    });
      
    it('can add new todo',() =>{
      const todo = 'Test Vue Todo with Cypress'
      cy.get(locators.vueTodo.newTodoInput).type(`${todo}{enter}`);
      cy.get(locators.vueTodo.todoLabel).first().should('have.text',todo);
    });

    it('Check todo placeholders',() =>{
       const expectPlaceHolders = 'What needs to be done?'
       cy.get(locators.vueTodo.newTodoInput).should('have.attr','placeholder',expectPlaceHolders);
    });

  });
 
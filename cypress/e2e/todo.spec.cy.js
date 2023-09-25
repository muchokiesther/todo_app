
describe('To-Do App', () => {
    beforeEach(() => {
        cy.visit('index.html'); // Load your HTML file with Cypress
    });

    it('should add a new task', () => {
       
        const taskInput = cy.get('#taskInput');
        const addTaskButton = cy.get('#addTask');

        taskInput.type('Buy groceries');
        addTaskButton.click();

        // Assert: Verify the task was added
        cy.get('#taskList')
            .should('contain', 'Buy groceries');
    });
})
  
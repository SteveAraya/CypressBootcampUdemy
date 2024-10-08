
describe('Assertions', () => {
    // it('Should Exist', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name', {timeout: 5000}).should('exist');
    //     cy.wait(3000);
    // });

    it('Should Have', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.wait(3000);
    });

    // it('Should Have', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('hello');
    //     cy.get('#user-name').should('have.value', 'hello');
    //     cy.wait(3000);
    // });

    // it('Should Contain', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('.login_logo').should('contain.text', 'Labs');
    //     cy.wait(3000);
    // });

    // it('Should Contain', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('hello world');
    //     cy.get('#user-name').should('contain.value', 'world');
    //     cy.wait(3000);
    // });

    // it('Should Visible', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('#login-button').click();
    //     cy.get('#react-burger-menu-btn').click({force: true});
    //     cy.get('.bm-menu-wrap').should('be.visible');
    //     cy.wait(3000);
    // });

    // it('Should Be checked', () => {
    //     cy.visit('https://the-internet.herokuapp.com/checkboxes');
    //     cy.get('input[type="checkbox"]').eq(1).should('be.checked');
    //     cy.wait(3000);
    // });

    // it('Should Not', () => {
    //     cy.visit('https://the-internet.herokuapp.com/checkboxes');
    //     cy.get('input[type="checkbox"]').eq(0).should('not.exist');
    //     cy.wait(3000);
    // });

    // it('Should Not', () => {
    //     cy.visit('https://the-internet.herokuapp.com/checkboxes');
    //     cy.get('input[type="checkbox"]').eq(0).should('not.be.checked');
    //     cy.wait(3000);
    // });

    // it('Check', () => {
    //     cy.visit('https://the-internet.herokuapp.com/checkboxes');
    //     cy.get('input[type="checkbox"]').eq(0).check();
    //     cy.wait(3000);
    //     cy.get('input[type="checkbox"]').eq(0).uncheck();
    // });
})
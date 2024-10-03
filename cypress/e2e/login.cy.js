
describe('Login', () => {
    // it('Login con credenciales de standard user', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('#login-button').click();
    //     cy.get('.title').should('exist');
    //     cy.wait(3000);
    // });

    // it('Login con credenciales de standard user usando alias', () => {
    //     cy.visit('https://www.saucedemo.com/');

    //     cy.get('#user-name').as('userName');
    //     cy.get('@userName').type('standard_user');

    //     cy.get('#password').as('userPassword');
    //     cy.get('@userPassword').type('secret_sauce');

    //     cy.get('#login-button').as('loginButton');
    //     cy.get('@loginButton').click();

    //     cy.get('.title').should('exist');
    //     cy.wait(3000);
    // });

    // it('Contains', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.contains('div', 'Swag Labs').then(title => {
    //         cy.log(title.attr('class'));
    //     });
    //     cy.wait(10000);
    // });

    // it('Find', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('.login_wrapper-inner').find('#user-name').should('exist');
    //     cy.wait(5000);
    // });

    // it('First', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('.form_input').first().type('Hello');
    //     cy.wait(5000);
    // });

    // it('eq', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('.form_input').eq(1).type('pass');
    //     cy.wait(5000);
    // });

    // it('closest', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').closest('#login_button_container').then(parent => {
    //         cy.log(parent.attr('class'));
    //     })
    //     cy.wait(5000);
    // });

    it('LoginCommand', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.wait(3000);
    });
})
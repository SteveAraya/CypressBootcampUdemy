import { LoginMethod } from "./pages/login/login.methods";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/');
    cy.get('a[data-target="#logInModal"]').click();
    LoginMethod.login('random01', 'random01');
    cy.get('a#nameofuser').should('contain.text', 'random01');
    cy.wait(5000)
  })
})
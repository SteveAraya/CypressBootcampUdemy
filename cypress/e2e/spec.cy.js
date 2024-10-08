import { LoginMethod } from "./pages/login/login.methods";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/');
    cy.get('a[data-target="#logInModal"]').click();
    LoginMethod.login('hello', 'hello');
    cy.wait(5000)
  })
})
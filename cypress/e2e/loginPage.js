export class LoginPage{
    static obtenerTituloPagina() {
        return 'Login';
    }

    static get linkLogin() {
        return cy.get('a[data-target="#logInModal"]');
    }
}
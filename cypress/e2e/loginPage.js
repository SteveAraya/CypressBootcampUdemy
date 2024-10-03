export class LoginPage{
    static obtenerTituloPagina() {
        return 'Login';
    }

    get linkLogin() {
        return cy.get('a[data-target="#logInModal"]');
    }
}
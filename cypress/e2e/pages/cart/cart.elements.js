export class CartElements {
    static get buttons() {
        return {
            get placeOder() {
                return cy.get('button[data-toggle="modal"]');
            }
        }
    }

    static get links() {
        return {
            delete(productName) {
                return cy.contains('td', productName).closest('tr').find('a');
            } 
        }
    }
}
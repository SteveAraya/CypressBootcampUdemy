export class HomeElements {
    static get categoriesMenu() {
        return {
            get phones() {
                return cy.contains('a', 'Phones');
            },
            get laptops() {
                return cy.contains('a', 'Laptops');
            },
            get monitor() {
                return cy.contains('a', 'Monitors');
            }
        }
    }
}
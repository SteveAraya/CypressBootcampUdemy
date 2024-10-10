import { PaceOrderElements } from "./place-order.elements";

export class PaceOrderMethods {
    static insertName(name) {
        PaceOrderElements.textboxes.name.invoke('val', name);
    }

    static insertCountry(country) {
        PaceOrderElements.textboxes.country.invoke('val', country);
    }

    static insertCity(city) {
        PaceOrderElements.textboxes.city.invoke('val', city);
    }

    static insertCreditCard(creditCard) {
        PaceOrderElements.textboxes.creditCard.invoke('val', creditCard);
    }

    static insertMonth(month) {
        PaceOrderElements.textboxes.month.invoke('val', month);
    }

    static insertYear(year) {
        PaceOrderElements.textboxes.year.invoke('val', year);
    }


}
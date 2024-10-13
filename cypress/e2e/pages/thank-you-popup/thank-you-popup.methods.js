import { ThankYouPopUpElements } from "./thank-you-popup.elements";

export class ThankYouPopUpMethods {
    static clickOnOkButton() {
        cy.wait(1000);
        ThankYouPopUpElements.buttons.ok.click();
    }

    static varifyGreenCheckMarkIsDisplayed() {
        ThankYouPopUpElements.icons.greenCheckMark.should('exist');
    }
}
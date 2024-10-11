import { ThankYouPopUpElements } from "./thank-you-popup.elements";

export class ThankYouPopUpMethods {
    static clickOnOkButton() {
        ThankYouPopUpElements.buttons.ok.click();
    }

    static varifyGreenCheckMarkIsDisplayed() {
        ThankYouPopUpElements.icons.greenCheckMark.should('exist');
    }
}
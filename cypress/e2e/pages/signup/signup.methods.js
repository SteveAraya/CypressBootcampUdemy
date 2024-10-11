import { SignUpElements } from "./signup.elements";

export class SignUpMethods {
    static insertUserName(username) {
        SignUpElements.textboxes.username.invoke('val', username);
    }

    static insertPassword(password) {
        SignUpElements.textboxes.password.invoke('val', password);
    }

    static clickOnSignUpButton() {
        SignUpElements.buttons.signup.click();
    }

    static signup(username, password) {
        this.insertUserName(username);
        this.insertPassword(password);
        this.clickOnSignUpButton();
    }

    static verifySignupSuccesfulMessageIsDisplayed() {
        CommonPageMethods.verifyAlert("Sign up successful.");
    }

    static verifyThatThisUserAlreadyExistMessageIsDisplayed() {
        CommonPageMethods.verifyAlert("This user already exist.");
    }
}
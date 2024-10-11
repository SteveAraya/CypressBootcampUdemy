import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignUpMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.registro, () => {
    it('Registro de usuario valido', () => {
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Sign up" en la barra de navegación');
        CommonPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3);
        Logger.step('Completar todos los campos obligatorios con información válida');
        SignUpMethods.insertUserName('steve');
        SignUpMethods.insertPassword('12345');

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Sign up" para registrar el usuario');
        SignUpMethods.clickOnSignUpButton();
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful"');
        SignUpMethods.verifySignupSuccesfulMessageIsDisplayed();


    });
})
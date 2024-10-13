import { ProductDetailsEmelemnts } from "./product-details.elements";
import { CommonPageMethods } from '../common-page/common-page.methods';

export class ProductDetailsMethods {
    static clickOnAddToCartButton() {
        ProductDetailsEmelemnts.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplayed() {
        ProductDetailsEmelemnts.buttons.addToCart.should('be.visible')
    }

    static verifyProductAddedMessage() {
        CommonPageMethods.verifyAlert('Product added.')
    }
}
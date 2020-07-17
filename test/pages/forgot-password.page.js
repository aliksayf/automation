import { assert } from 'chai';
import Base from "./base";
import loginSel from '../selectors/login-page.sel';
import exp from "../expected/forgotPassword.exp";
import baseExp from "../expected/base.exp";
import loginExp from "../expected/login.exp";
import sel from "../selectors/username-recover-page.sel";

class ForgotPasswordPage extends Base {

    loginFormDisplayed() {
        $(loginSel.form).isDisplayed();
    }

    titleOneDisplayed() {
        $$(loginSel.title1)[0].isDisplayed();
    }

    titleOneText() {
        const text = $$(loginSel.title1)[0].getText();
        assert.equal(text, baseExp.titleMain);
    }

    titleTwoDisplayed() {
        $(loginSel.title2).isDisplayed();
    }

    titleTwoText() {
        const text = $(loginSel.title2).getText();
        assert.equal(text, exp.title2);
    }

    inputUsernameDisplayed() {
        $(loginSel.inputUsername).isDisplayed();
    }

    // inputUsernameLabelDisplayed() {
    //     const usernameLabel = $(loginSel.inputElement).$('label');
    //     usernameLabel.isDisplayed();
    // }
    //
    // inputUsernameLabelText() {
    //     const usernameLabel = $(loginSel.inputElement).$('label');
    //     const text = usernameLabel.getText();
    //     assert.equal(text, exp.labelText);
    // }
    //
    // forgotPassLinkDisplayed() {
    //     $(loginSel.linksText).isDisplayed();
    // }
    //
    // forgotPassLinkClick() {
    //     $(loginSel.linksText).click();
    // }
    //
    // forgotPassLinkText() {
    //     const text = $(loginSel.linksText).getText();
    //     assert.equal(text, exp.linkText)
    // }
    //
    // buttonsDisplayed() {
    //     const buttons = $$(sel.btn).length;
    //     assert.equal(buttons, 2)
    // }
    //
    // button1Text() {
    //     const text = $$(sel.btn)[0].getText();
    //     assert.equal(text, exp.btn1Text)
    // }
    //
    // button2Text() {
    //     const text = $$(sel.btn)[1].getText();
    //     assert.equal(text, exp.btn2Text)
    // }

}

export default new ForgotPasswordPage();
import { assert } from 'chai';
import Base from "./base";
import loginSel from '../selectors/login.sel';
import exp from "../expected/forgotPassword.exp";
import baseExp from "../expected/base.exp";
import loginExp from "../expected/login.exp";
import sel from "../selectors/forgot-password.sel";

class ForgotPasswordPage extends Base {

    loginFormDisplayed() {
        const isDisplayed = $(loginSel.form).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    titleOneDisplayed() {
        const isDisplayed = $$(loginSel.title1)[0].isDisplayed();
        assert.equal(isDisplayed, true);
    }

    titleOneText() {
        const text = $$(loginSel.title1)[0].getText();
        assert.equal(text, baseExp.titleMain);
    }

    titleTwoDisplayed() {
        const isDisplayed = $(loginSel.title2).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    titleTwoText() {
        const text = $(loginSel.title2).getText();
        assert.equal(text, exp.title2);
    }

    commentDisplayed() {
        const isDisplayed = $(sel.comment).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    commentText() {
        const text = $(sel.comment).getText();
        assert.equal(text, exp.commentText);
    }

    inputUsernameDisplayed() {
        const isDisplayed = $(loginSel.inputUsername).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    inputUsernameLabelDisplayed() {
        const usernameLabel = $(loginSel.inputElement).$('label');
        const isDisplayed = usernameLabel.isDisplayed();
        assert.equal(isDisplayed, true);
    }

    inputUsernameLabelText() {
        const usernameLabel = $(loginSel.inputElement).$('label');
        const text = usernameLabel.getText();
        assert.equal(text, exp.labelText);
    }

    forgotUsernameLinkDisplayed() {
        const isDisplayed = $(loginSel.linksText).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    forgotUsernameLinkText() {
        const text = $(loginSel.linksText).getText();
        assert.equal(text, exp.linkText)
    }

    forgotUsernameLinkClick() {
        $(loginSel.linksText).click();
    }

    buttonsDisplayed() {
        const buttons = $$(sel.btn).length;
        assert.equal(buttons, 2)
    }

    cancelBtnText() {
        const text = $$(sel.btn)[0].getText();
        assert.equal(text, exp.btn1Text)
    }

    cancelBtnClick() {
        $$(sel.btn)[0].click();
    }

    continueBtnText() {
        const text = $$(sel.btn)[1].getText();
        assert.equal(text, exp.btn2Text)
    }

    continueBtnClick() {
        $$(sel.btn)[1].click();
    }

    errorDisplayed() {
        const isDisplayed = $(loginSel.errorBlock).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    errorText() {
        const text = $(loginSel.errorBlock).$$('li')[0].getText();
        assert.equal(text, exp.errorText);
    }

    inputTestUsername() {
        $(loginSel.inputUsername).setValue('test');
    }

}

export default new ForgotPasswordPage();
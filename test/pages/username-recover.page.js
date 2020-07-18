import {assert} from 'chai';
import Base from "./base";
import loginSel from '../selectors/login.sel';
import exp from "../expected/userRecover.exp";
import baseExp from "../expected/base.exp";
import sel from "../selectors/username-recover.sel";

class UsernameRecoverPage extends Base {

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

    inputUsernameDisplayed() {
        const isDisplayed = $(sel.inputEmail).isDisplayed();
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

    forgotPassLinkDisplayed() {
        const isDisplayed = $(loginSel.linksText).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    forgotPassLinkClick() {
        $(loginSel.linksText).click();
    }

    forgotPassLinkText() {
        const text = $(loginSel.linksText).getText();
        assert.equal(text, exp.linkText);
    }

    buttonsDisplayed() {
        const buttons = $$(sel.btn).length;
        assert.equal(buttons, 2);
    }

    backToLoginBtnText() {
        const text = $$(sel.btn)[0].getText();
        assert.equal(text, exp.btn1Text);
    }

    backToLoginBtnClick() {
        $$(sel.btn)[0].click();
    }

    recoverUserBtnText() {
        const text = $$(sel.btn)[1].getText();
        assert.equal(text, exp.btn2Text);
    }

    setTestEmail() {
        $(sel.inputEmail).setValue('test@test.com');
    }

    recoverUserBtnClick() {
        $$(sel.btn)[1].click();
    }

    recoverUserBtnHide() {
        const buttons = $$(sel.btn).length;
        assert.equal(buttons, 1);
        this.backToLoginBtnText();
    }

    successMessage() {
        const text = $('form').$(loginSel.title1).getText();
        assert.equal(text, exp.successMsg);
    }

}

export default new UsernameRecoverPage();
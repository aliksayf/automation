import { assert } from 'chai';
import Base from "./base";
import loginSel from '../selectors/login.sel';
import exp from "../expected/userRecover.exp";
import baseExp from "../expected/base.exp";
import loginExp from "../expected/login.exp";
import sel from "../selectors/username-recover.sel";

class UsernameRecoverPage extends Base {

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
        $(sel.inputEmail).isDisplayed();
    }

    inputUsernameLabelDisplayed() {
        const usernameLabel = $(loginSel.inputElement).$('label');
        usernameLabel.isDisplayed();
    }

    inputUsernameLabelText() {
        const usernameLabel = $(loginSel.inputElement).$('label');
        const text = usernameLabel.getText();
        assert.equal(text, exp.labelText);
    }

    forgotPassLinkDisplayed() {
        $(loginSel.linksText).isDisplayed();
    }

    forgotPassLinkClick() {
        $(loginSel.linksText).click();
    }

    forgotPassLinkText() {
        const text = $(loginSel.linksText).getText();
        assert.equal(text, exp.linkText)
    }

    buttonsDisplayed() {
        const buttons = $$(sel.btn).length;
        assert.equal(buttons, 2)
    }

    backToLoginBtnText() {
        const text = $$(sel.btn)[0].getText();
        assert.equal(text, exp.btn1Text)
    }

    backToLoginBtnClick() {
        $$(sel.btn)[0].click();
    }

    recoverUserBtnText() {
        const text = $$(sel.btn)[1].getText();
        assert.equal(text, exp.btn2Text)
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
        assert.equal(text, exp.successMsg)
    }

}

export default new UsernameRecoverPage();
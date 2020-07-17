import { assert } from 'chai';
import Base from "./base";
import loginSel from '../selectors/login-page.sel';
import exp from "../expected/userRecover.exp";
import baseExp from "../expected/base.exp";
import loginExp from "../expected/login.exp";
import sel from "../selectors/login-page.sel";

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
        $(sel.title2).isDisplayed();
    }

    titleTwoText() {
        const text = $(loginSel.title2).getText();
        assert.equal(text, exp.title2);
    }

    inputUsernameDisplayed() {
        $(loginSel.inputUsername).isDisplayed();
    }

    inputUsernameLabelDisplayed() {
        const usernameLabel = $(loginSel.inputElement).$('label');
        usernameLabel.isDisplayed();
    }

    inputUsernameLabelText() {
        const usernameLabel = $(loginSel.inputElement).$('label');
        const text = usernameLabel.getText();
        assert.equal(text, exp.labelText)
    }

    forgotPassLinkDisplayed() {
        const usernameLabel = $(loginSel.inputElement).$('label');
        const text = usernameLabel.getText();
        assert.equal(text, exp.labelText)
    }

}

export default new UsernameRecoverPage();
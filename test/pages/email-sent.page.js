import { assert } from 'chai';
import Base from "./base";
import loginSel from '../selectors/login.sel';
import exp from "../expected/emailSent.exp";
import baseExp from "../expected/base.exp";
import loginExp from "../expected/login.exp";
import sel from "../selectors/email-sent.sel";

class EmailSent extends Base {

    emailFormDisplayed() {
        const isDisplayed = $(sel.form).isDisplayed();
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
        const isDisplayed = $(sel.title2).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    titleTwoText() {
        const text = $(sel.title2).getText();
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

    titleThreeDisplayed() {
        const isDisplayed = $$(sel.title1)[1].isDisplayed();
        assert.equal(isDisplayed, true);
    }

    titleThreeText() {
        const text = $$(sel.title1)[1].getText();
        assert.equal(text, exp.title3);
    }

    comment2Displayed() {
        const isDisplayed = $(sel.comment2).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    comment2Text() {
        const text = $(sel.comment2).getText();
        assert.equal(text, exp.commentText2);
    }

    buttonDisplayed() {
        const isDisplayed = $(sel.btn).isDisplayed();
        assert.equal(isDisplayed, true)
    }

    btnText() {
        const text = $(sel.btn).getText();
        assert.equal(text, exp.btnText)
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
        const text = $(loginSel.linksText).isDisplayed();
        assert.equal(text, exp.labelText);
    }

    forgotUsernameLinkText() {
        const text = $(loginSel.linksText).getText();
        assert.equal(text, exp.linkText)
    }

    forgotUsernameLinkClick() {
        $(loginSel.linksText).click();
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

export default new EmailSent();
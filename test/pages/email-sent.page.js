import {assert} from 'chai';
import Base from "./base";
import loginSel from '../selectors/login.sel';
import exp from "../expected/emailSent.exp";
import baseExp from "../expected/base.exp";
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

    buttonClick() {
        $(sel.btn).click();
    }

    btnText() {
        const text = $(sel.btn).getText();
        assert.equal(text, exp.btnText)
    }

    resendEmailLinkClick() {
        $(sel.resend).click();
    }

}

export default new EmailSent();
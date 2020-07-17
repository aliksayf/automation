import { assert } from 'chai';
import Base from './base'
import sel from '../selectors/login.sel'
import exp from '../expected/base.exp'
import loginExp from '../expected/login.exp'

class Login extends Base {

    loginFormDisplayed() {
        $(sel.form).isDisplayed();
    }

    titleOneDisplayed() {
        $$(sel.title1)[0].isDisplayed();
    }

    titleOneText() {
        const text = $$(sel.title1)[0].getText();
        assert.equal(text, exp.titleMain);
    }

    titleTwoDisplayed() {
        $(sel.title2).isDisplayed();
    }

    titleTwoText() {
        const text = $(sel.title2).getText();
        assert.equal(text, loginExp.title2);
    }

    titleThreeDisplayed() {
        $$(sel.title1)[0].isDisplayed();
    }

    titleThreeText() {
        const text = $(sel.title3).getText();
        assert.equal(text, loginExp.title3);
    }

    linkTitleDisplayed() {
        $$(sel.title1)[1].isDisplayed();
    }

    linkTitleText() {
        const text = $$(sel.title1)[1].getText();
        assert.equal(text, loginExp.linkTitle);
    }

    linkToQuickScrDisplayed() {
        $(sel.linksText).isDisplayed();
    }

    linkToQuickScrText() {
        const text = $(sel.linksText).$('a').getText();
        assert.equal(text, loginExp.linkQuickScrText)
    }

    linkToQuickScrColor() {
        const selector = $(sel.linksText).$('a')
        const color = this.getColor(selector);
        assert.equal(color, exp.colorSecondary)
    }

    inputUsernameDisplayed() {
        $(sel.inputUsername).isDisplayed();
    }

    inputUsernameLabelDisplayed() {
        const usernameLabel = $$(sel.inputElement)[0].$('label');
        usernameLabel.isDisplayed();
    }

    inputUsernameLabelText() {
        const usernameLabel = $$(sel.inputElement)[0].$('label');
        const text = usernameLabel.getText();
        assert.equal(text, loginExp.labelInputUsername)
    }

    inputPasswordDisplayed() {
        $(sel.inputPassword).isDisplayed();
    }

    inputPasswordLabelDisplayed() {
        const passwordLabel = $$(sel.inputElement)[1].$('label');
        passwordLabel.isDisplayed();
    }

    inputPasswordLabelText() {
        const passwordLabel = $$(sel.inputElement)[1].$('label');
        const text = passwordLabel.getText();
        assert.equal(text, loginExp.labelInputPassword)
    }

    loginBtnDisplayed() {
        $(sel.loginBtn).isDisplayed();
    }

    loginBtnBgColor() {
        const color = this.getBackGroundColor(sel.loginBtn);
        assert.equal(color, exp.colorSecondary)
    }

    loginBtnClick() {
        $(sel.loginBtn).click();
    }

    titleFourDisplayed() {
        const countTitle4 = $$(sel.title4).length;
        assert.equal(countTitle4, 2)
    }

    titleFourText1() {
        const text = $$(sel.title4)[0].getText();
        assert.equal(text, loginExp.title4_1);
    }

    titleFourText2() {
        const text = $$(sel.title4)[1].getText();
        assert.equal(text, loginExp.title4_2);
    }

    errorDisplayed() {
        const isDisplayed = $(sel.errorBlock).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    emptyUserErrorText() {
        const text = $(sel.errorBlock).$$('li')[0].getText();
        assert.equal(text, loginExp.userEmptyError);
    }

    emptyPassErrorText() {
        const selector = $(sel.errorBlock).$$('li');
        const text = selector[selector.length -1].getText();
        assert.equal(text, loginExp.passEmptyError);
    }

    wrongUserPassErrorText() {
        const text = $(sel.errorBlock).getText();
        assert.equal(text, loginExp.wrongUserPassError);
    }

    usernameRandomInput() {
        this.fieldRandomInput(sel.inputUsername, 30);
    }

    clearUsername() {
        this.clearInputField(sel.inputUsername);
    }

    passwordRandomInput() {
        this.fieldRandomInput(sel.inputPassword, 30);
    }

    clearPassword() {
        this.clearInputField(sel.inputPassword);
    }

    quickScrLinkClick() {
        const selector = $(sel.linksText).$('a');
        selector.click();
    }

    quickScrPage() {
        this.validateUrl(loginExp.quickScreenerPage);
    }

    forgotUsernameClick() {
        const selector = $$(sel.forgotLink);
        selector[0].click();
    }

    recoverUserPage() {
        const pageTitle = $(sel.title2).getText();
        assert.equal(pageTitle, loginExp.recoverUserTitle);
    }

    forgotPasswordClick() {
        const selector = $$(sel.forgotLink);
        selector[1].click();
    }

    recoverPassPage() {
        const pageTitle = $(sel.title2).getText();
        assert.equal(pageTitle, loginExp.recoverPassTitle);
    }

}

export default new Login();
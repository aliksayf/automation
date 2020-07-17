import forgotPass from '../pages/forgot-password.page';
import login from "../pages/login.page";
import emailSent from "../pages/email-sent.page";
import userRecover from "../pages/username-recover.page";

describe('Forgot Password page functionality', function () {

        before('Open', function () {
            login.openBase()
            login.forgotPasswordClick()
        })

    it('Forgot username link leads to username-recover.page', function () {
        forgotPass.forgotUsernameLinkClick()
        userRecover.titleTwoDisplayed()
        userRecover.titleTwoText()
    })

    it('[Cancel] click leads to login.page', function () {
        userRecover.openBase()
        login.forgotPasswordClick()
        forgotPass.cancelBtnClick()
        login.titleTwoDisplayed()
        login.titleTwoText()
    })

    it('Click [Continue] with empty username stay on the same page', function () {
        userRecover.openBase()
        login.forgotPasswordClick()
        forgotPass.continueBtnClick()
        forgotPass.titleTwoDisplayed()
        forgotPass.titleTwoText()
    })

    it('Click [Continue] with empty username error message', function () {
        forgotPass.errorDisplayed()
    })

    it('Click [Continue] with empty username error message text', function () {
        forgotPass.errorText()
    })

    it('Click [Continue] with correct username leads to email-sent.page', function () {
        userRecover.openBase()
        login.forgotPasswordClick()
        forgotPass.inputTestUsername()
        forgotPass.continueBtnClick()
        emailSent.titleTwoDisplayed()
        emailSent.titleTwoText()
    })
});
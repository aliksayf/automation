import email from '../pages/email-sent.page';
import login from "../pages/login.page";
import forgotPass from "../pages/forgot-password.page";

describe('Email sent page functionality', function () {

        before('Open', function () {
            login.openBase()
            login.forgotPasswordClick()
            forgotPass.inputTestUsername()
            forgotPass.continueBtnClick()
        })

        it('"Resend email" click', function () {
            email.resendEmailLinkClick()
            email.titleTwoDisplayed()
        })

        it('"Back to login" click leads to login.page', function () {
            email.buttonClick()
            login.titleTwoDisplayed()
            login.titleTwoText()
        })

});
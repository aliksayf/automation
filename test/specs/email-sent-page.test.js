import email from '../pages/email-sent.page';
import login from "../pages/login.page";
import forgotPass from "../pages/forgot-password.page";

describe('Email sent page', function () {

        before('Open', function () {
            login.openBase()
            login.forgotPasswordClick()
            forgotPass.inputTestUsername()
            forgotPass.continueBtnClick()
        })

        it('Email sent page is displayed', function () {
            email.emailFormDisplayed()
        })

        it('Page main title is displayed', function () {
            email.titleOneDisplayed()
        })

        it('Page main title text', function () {
            email.titleOneText()
        })

        it('Page title 2 displayed', function () {
            email.titleTwoDisplayed()
        })

        it('Page title 2 text', function () {
            email.titleTwoText()
        })

        it('Comment displayed', function () {
            email.commentDisplayed()
        })

        it('Comment text', function () {
            email.commentText()
        })

        it('"I don\'t receive" message displayed', function () {
            email.titleThreeDisplayed()
        })

        it('"I don\'t receive" message text', function () {
            email.titleThreeText()
        })

        it('Comment 2 displayed', function () {
            email.comment2Displayed()
        })

        it('Comment 2 text', function () {
            email.comment2Text()
        })

        it('Form has button', function () {
            email.buttonDisplayed()
        })

        it('Button text', function () {
            email.btnText()
        })

});
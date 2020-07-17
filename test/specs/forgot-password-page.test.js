import forgotPass from '../pages/forgot-password.page';
import login from "../pages/login.page";

describe('Forgot Password page', function () {

        before('Open', function () {
            login.openBase()
            login.forgotPasswordClick()
        })

        it('Forgot password form is displayed', function () {
            forgotPass.loginFormDisplayed()
        })

        it('Form main title is displayed', function () {
            forgotPass.titleOneDisplayed()
        })

        it('Form main title text', function () {
            forgotPass.titleOneText()
        })

        it('Form title 2 displayed', function () {
            forgotPass.titleTwoDisplayed()
        })

        it('Form title 2 text', function () {
            forgotPass.titleTwoText()
        })

        it('Comment displayed', function () {
            forgotPass.commentDisplayed()
        })

        it('Comment text', function () {
            forgotPass.commentText()
        })

        it('Input username displayed', function () {
            forgotPass.inputUsernameDisplayed()
        })

        it('Input username label displayed', function () {
            forgotPass.inputUsernameLabelDisplayed()
        })

        it('Input username label text', function () {
            forgotPass.inputUsernameLabelText()
        })

        it('Forgot username link is displayed', function () {
            forgotPass.forgotUsernameLinkDisplayed()
        })

        it('Forgot username link text', function () {
            forgotPass.forgotUsernameLinkText()
        })

        it('Form has two buttons', function () {
            forgotPass.buttonsDisplayed()
        })

        it('First button text', function () {
            forgotPass.cancelBtnText()
        })

        it('Second button text', function () {
            forgotPass.continueBtnText()
        })

});
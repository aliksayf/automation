import userRecover from '../pages/username-recover.page';
import login from "../pages/login.page";

describe('User Recover page', function () {

        before('Open', function () {
            userRecover.openBase()
            login.forgotUsernameClick()
        })

        it('Recover username form is displayed', function () {
            userRecover.loginFormDisplayed()
        })

        it('Form main title is displayed', function () {
            userRecover.titleOneDisplayed()
        })

        it('Form main title text', function () {
            userRecover.titleOneText()
        })

        it('Form title 2 displayed', function () {
            userRecover.titleTwoDisplayed()
        })

        it('Form title 2 text', function () {
            userRecover.titleTwoText()
        })

        it('Input username displayed', function () {
            userRecover.inputUsernameDisplayed()
        })

        it('Input username label displayed', function () {
            userRecover.inputUsernameLabelDisplayed()
        })

        it('Input username label text', function () {
            userRecover.inputUsernameLabelText()
        })

        it('Forgot password link is displayed', function () {
            userRecover.forgotPassLinkDisplayed()
        })

        it('Forgot password link text', function () {
            userRecover.forgotPassLinkText()
        })

        it('Form has two buttons', function () {
            userRecover.buttonsDisplayed()
        })

        it('First button text', function () {
            userRecover.backToLoginBtnText()
        })

        it('Second button text', function () {
            userRecover.recoverUserBtnText()
        })

});
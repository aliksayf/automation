import userRecover from '../pages/username-recover.page';
import login from "../pages/login.page";

describe('User Recover page', function () {

        before('Open', function () {
            userRecover.openBase()
            login.forgotUsernameClick()
        })

        it('Form is displayed', function () {
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

});
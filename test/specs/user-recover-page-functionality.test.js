import userRecover from '../pages/username-recover.page';
import login from "../pages/login.page";
import forgotPass from "../pages/forgot-password.page";

describe('User Recover page functionality', function () {

        before('Open', function () {
            userRecover.openBase()
            login.forgotUsernameClick()
        })

        it('Forgot password link leads to forgot-password.page', function () {
            userRecover.forgotPassLinkClick()
            forgotPass.titleTwoDisplayed()
            forgotPass.titleTwoText()
        })

        it('[Back to login] click leads to login.page', function () {
            userRecover.openBase()
            login.forgotUsernameClick()
            userRecover.backToLoginBtnClick()
            login.titleTwoDisplayed()
            login.titleTwoText()
        })

        it('[Recover username] click with test email shows success message', function () {
            userRecover.openBase()
            login.forgotUsernameClick()
            userRecover.setTestEmail()
            userRecover.recoverUserBtnClick()
            userRecover.successMessage()
        })

        it('[Recover username] click with test email hides recover button', function () {
            userRecover.recoverUserBtnHide()
        })

});
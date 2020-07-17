import forgotPass from '../pages/forgot-password.page';
import login from "../pages/login.page";
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

});
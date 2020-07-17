import login from '../pages/login.page';

describe('Login form functionality', function () {

    before('Open', function () {
        login.openBase()
    })

    it('"Try our Quick Screener" link leads to page', function () {
        login.quickScrLinkClick()
        login.quickScrPage()
        login.openBase()
    })

    it('Error if both inputs are empty', function () {
        login.loginBtnClick()
        login.errorDisplayed()
    })

    it('Error if both inputs are empty text', function () {
        login.loginBtnClick()
        login.emptyUserErrorText()
        login.emptyPassErrorText()
    })

    it('Error if username is empty', function () {
        login.clearUsername()
        login.passwordRandomInput()
        login.loginBtnClick()
        login.errorDisplayed()
    })

    it('Error if username is empty text', function () {
        login.emptyUserErrorText()
    })

    it('Error if password is empty', function () {
        login.clearPassword()
        login.usernameRandomInput()
        login.loginBtnClick()
        login.errorDisplayed()
    })

    it('Error if password is empty text', function () {
        login.emptyPassErrorText()
    })

    it('Error if wrong username and password', function () {
        login.clearPassword()
        login.clearUsername()
        login.passwordRandomInput()
        login.usernameRandomInput()
        login.loginBtnClick()
        login.errorDisplayed()
    })

    it('Error if wrong username and password text', function () {
        login.wrongUserPassErrorText()
    })

    it('"Try our Quick Screener" link leads to page after failure login', function () {
        login.quickScrLinkClick()
        login.quickScrPage()
    })

    it('Forgot username link leads to recover username page', function () {
        login.openBase()
        login.forgotUsernameClick()
        login.recoverUserPage()
    })

    it('Forgot password link leads to recover password page', function () {
        login.openBase()
        login.forgotPasswordClick()
        login.recoverPassPage()
    })

})
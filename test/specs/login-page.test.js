import login from '../pages/login.page';

describe('Login page', function () { //define suite title by passing a string

        before('Open', function () {
            login.openBase()
        })

        it('Form is displayed', function () {
            login.loginFormDisplayed()
        })

        it('Form main title displayed', function () {
            login.titleOneDisplayed()
        })

        it('Form main title text', function () {
            login.titleOneText()
        })

        it('Form title 2 displayed', function () {
            login.titleTwoDisplayed()
        })

        it('Form title 2 text', function () {
            login.titleTwoText()
        })

        it('Form title 3 displayed', function () {
            login.titleThreeDisplayed()
        })

        it('Form title 3 text', function () {
            login.titleThreeText()
        })

        it('Form link title displayed', function () {
            login.linkTitleDisplayed()
        })

        it('Form link title text', function () {
            login.linkTitleText()
        })

        it('Link to Quick Screener', function () {
            login.linkToQuickScrDisplayed()
        })

        it('Link to Quick Screener text', function () {
            login.linkToQuickScrText()
        })

        it('Link to Quick Screener color', function () {
            login.linkToQuickScrColor()
        })

        it('Input username displayed', function () {
            login.inputUsernameDisplayed()
        })

        it('Input username label displayed', function () {
            login.inputUsernameLabelDisplayed()
        })

        it('Input username label text', function () {
            login.inputUsernameLabelText()
        })

        it('Input password displayed', function () {
            login.inputPasswordDisplayed()
        })

        it('Input password label displayed', function () {
            login.inputPasswordLabelDisplayed()
        })

        it('Input password label text', function () {
            login.inputPasswordLabelText()
        })

        it('Login button displayed', function () {
            login.loginBtnDisplayed()
        })

        it('Login button background color', function () {
            login.loginBtnBgColor()
        })

        it('Form title 4 displayed', function () {
            login.titleFourDisplayed()
        })

        it('Form title 4 first text', function () {
            login.titleFourText1()
        })

        it('Form title 4 second text', function () {
            login.titleFourText2()
        })

});
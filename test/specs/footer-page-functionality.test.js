import footer from '../pages/footer.page';

describe('Footer page functionality', function () {

        it('Social icon 1 leads to facebook', function () {
            footer.openBase()
            footer.socialIcon1Click()
        })

        it('Social icon 2 leads to twitter', function () {
            footer.openBase()
            footer.socialIcon2Click()
        })

        it('Social icon 3 leads to linkedIn', function () {
            footer.openBase()
            footer.socialIcon3Click()
        })

        it('Logo leads to homepage', function () {
            footer.openBase()
            footer.allumaLogoClick()
        })

        it('CC link 1 leads to homepage', function () {
            footer.openBase()
            footer.ccLink1()
            footer.openBase()
        })

        it('CC link 2 leads to homepage', function () {
            footer.openBase()
            footer.ccLink2()
        })

        it('CC link 3 leads to homepage', function () {
            footer.openBase()
            footer.ccLink3()
        })

        it('CC link 4 leads to homepage', function () {
            footer.openBase()
            footer.ccLink4()
        })

});
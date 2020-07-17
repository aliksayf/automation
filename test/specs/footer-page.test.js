import footer from '../pages/footer.page';

describe('Footer page', function () {

        before('Open', function () {
            footer.openBase()
        })

        it('Footer is displayed', function () {
            footer.footerDisplayed()
        })

        it('Footer info is displayed', function () {
            footer.footerInfoDisplayed()
        })

        it('Footer info has 3 sections', function () {
            footer.footerInfoSections()
        })

        it('Section 1 title text', function () {
            footer.section1Title()
        })

        it('Section 2 title text', function () {
            footer.section2Title()
        })

        it('Section 3 title text', function () {
            footer.section3Title()
        })

        it('Info link 1 text', function () {
            footer.link1TitleText()
        })

        it('Info link 2 text', function () {
            footer.link2TitleText()
        })

        it('Info link 3 text', function () {
            footer.link3TitleText()
        })

        it('Info link 4 text', function () {
            footer.link4TitleText()
        })

        it('Info link 5 text', function () {
            footer.link5TitleText()
        })

        it('3 social icons displayed', function () {
            footer.socialIconDisplayed()
        })

        it('CC part displayed', function () {
            footer.ccPartDisplayed()
        })

        it('CC part has alluma logo', function () {
            footer.ccPartHasLogo()
        })

        it('CC part has text', function () {
            footer.ccPartText()
        })

});
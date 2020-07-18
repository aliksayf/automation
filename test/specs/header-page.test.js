import header from '../pages/header.page';

describe('Header page', function () {

        before('Open', function () {
            header.openBase()
        })

        it('Header is displayed', function () {
            header.headerDisplayed()
        })

        it('Title is displayed', function () {
            header.headerTitle()
        })

        it('Title text', function () {
            header.headerTitleText()
        })

        it('Header height', function () {
            header.headerHeight()
        })

        it('Header background color', function () {
            header.headerBackground()
        })

});
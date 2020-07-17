import { assert } from 'chai';
import Base from "./base";
import sel from '../selectors/header-page.sel';
import expBase from '../expected/base.exp';
import exp from '../expected/header.exp';

class Header extends Base {

    headerDisplayed() {
        $(sel.header).isDisplayed();
    }

    headerTitle() {
        $(sel.title).isDisplayed();
    }

    headerTitleText() {
        const text = $(sel.header).getText();
        assert.equal(text, expBase.titleMain)
    }

    headerHeight() {
        const height = $(sel.header).getCSSProperty('height').value;
        assert.equal(height, exp.height)
    }

    headerBackground() {
        const color = this.getBackGroundColor(sel.header);
        assert.equal(color, exp.bgColor);
    }

}

export default new Header();
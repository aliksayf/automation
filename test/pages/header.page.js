import { assert } from 'chai';
import Base from "./base";
import sel from '../selectors/header.sel';
import expBase from '../expected/base.exp';
import exp from '../expected/header.exp';

class Header extends Base {

    headerDisplayed() {
        const isDisplayed = $(sel.header).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    headerTitle() {
        const isDisplayed = $(sel.title).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    headerTitleText() {
        const text = $(sel.title).getText();
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
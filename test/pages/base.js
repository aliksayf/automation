import { assert } from 'chai';

class Base {

    openBase() {
        browser.url('/');
    }

    getColor(sel) {
        return sel
            .getCSSProperty('color')
            .parsed.hex
    }

    getBackGroundColor(sel) {
        return $(sel)
            .getCSSProperty('background-color')
            .parsed.hex
    }

    randomString(max) {
        let str = '';
        for (let i = 1; i <= max; i++) {
            str += String.fromCharCode(Math.random() * (126 - 35) + 35)
        }
        return str
    }

    fieldRandomInput(selector, length) {
        $(selector).setValue(this.randomString(length));
    }

    clearInputField(selector) {
        $(selector).setValue(['0', 'Backspace']);
    }

    validateUrl(expected) {
        const url = browser.getUrl();
        assert.equal(url, expected);
    }

}

export default Base;
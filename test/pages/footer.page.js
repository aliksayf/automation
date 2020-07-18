import {assert} from 'chai';
import Base from "./base";
import sel from '../selectors/footer.sel';
import exp from '../expected/footer.exp';

class Footer extends Base {

    footerDisplayed() {
        const isDisplayed = $(sel.footer).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    footerInfoDisplayed() {
        const isDisplayed = $(sel.info).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    footerInfoSections() {
        const sections = $(sel.info).$$('h4');
        assert.equal(sections.length, 3)
    }

    section1Title() {
        const title = $(sel.info).$$('h4')[0].getText();
        assert.equal(title, exp.title1)
    }

    section2Title() {
        const title = $(sel.info).$$('h4')[1].getText();
        assert.equal(title, exp.title2)
    }

    section3Title() {
        const title = $(sel.info).$$('h4')[2].getText();
        assert.equal(title, exp.title3)
    }

    link1TitleText() {
        const text = $(sel.link1).getText();
        assert.equal(text, exp.link1text);
    }

    link2TitleText() {
        const text = $(sel.link2).getText();
        assert.equal(text, exp.link2text);
    }

    link3TitleText() {
        const text = $(sel.link3).getText();
        assert.equal(text, exp.link3text);
    }

    link4TitleText() {
        const text = $(sel.link4).getText();
        assert.equal(text, exp.link4text);
    }

    link5TitleText() {
        const text = $(sel.link5).getText();
        assert.equal(text, exp.link5text);
    }

    socialIconDisplayed() {
        const icons = $(sel.link6).$$(sel.socialIcon).length;
        assert.equal(icons, 3);
    }

    ccPartDisplayed() {
        const isDisplayed = $(sel.ccPart).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    ccPartHasLogo() {
        const isDisplayed = $(sel.allumaLogo).isDisplayed();
        assert.equal(isDisplayed, true);
    }

    ccPartText() {
        const text = $(sel.ccTextPart).getText();
        assert.equal(text, exp.ccText);
    }

    socialIcon1Click() {
        $(sel.info).$(sel.faceBookIcon).click();
        const url = browser.getUrl();
        assert.equal(url, exp.allumaFacebook);
    }

    socialIcon2Click() {
        $(sel.info).$(sel.twitterIcon).click();
        const url = browser.getUrl();
        assert.equal(url, exp.allumaTwitter);
    }

    socialIcon3Click() {
        $(sel.linkedInIcon).click();
        const url = browser.getUrl();
        const res = url.includes(exp.allumaLinkedIN);
        assert.equal(res, true);
    }

    allumaLogoClick() {
        $(sel.allumaLogo).click();
        const url = browser.getUrl();
        assert.equal(url, exp.allumaHomepage);
    }

    ccLink1() {
        $(sel.ccTextPart).$$('a')[0].click();
        const url = browser.getUrl();
        assert.equal(url, exp.allumaHomepage);
    }

    ccLink2() {
        $$(sel.ccLinks)[1].click();
        // const url = browser.getUrl();
        // not defined yet ;
    }

    ccLink3() {
        $$(sel.ccLinks)[2].click();
        // const url = browser.getUrl();
        // not defined yet ;
    }

    ccLink4() {
        // $$(sel.ccLinks)[3].click();
        // const url = browser.getUrl();
        // not defined yet ;
    }

}

export default new Footer();
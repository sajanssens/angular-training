"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_po_1 = require("./main.po");
describe('Main page', function () {
    var page = new main_po_1.MainPage();
    beforeEach(function () {
        page.navigateTo();
    });
    it('should not submit invalid form entries', function () {
        page.enterFirstName('Hank');
        page.enterSurname('...'); // invalid
        page.enterEmail('h@nk.com');
        expect(page.isReactiveFormButtonEnabled()).toBe(false);
    });
    it('should submit valid form entries', function () {
        page.getNrOfContacts().then(function (countBefore) {
            page.enterFirstName('Hank');
            page.enterSurname('Knot');
            page.enterEmail('h@nk.com');
            page.submitForm();
            expect(page.getNrOfContacts()).toBe(countBefore + 1);
        });
    });
});

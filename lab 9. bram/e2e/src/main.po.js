"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var MainPage = /** @class */ (function () {
    function MainPage() {
    }
    MainPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    MainPage.prototype.getInputFirstName = function () {
        return protractor_1.element(protractor_1.by.id('rfm-firstname'));
    };
    MainPage.prototype.getInputSurname = function () {
        return protractor_1.element(protractor_1.by.id('rfm-surname'));
    };
    MainPage.prototype.getInputEmail = function () {
        return protractor_1.element(protractor_1.by.id('rfm-email'));
    };
    MainPage.prototype.getReactiveFormButton = function () {
        return protractor_1.element(protractor_1.by.css('#reactive-form button'));
    };
    MainPage.prototype.enterFirstName = function (value) {
        this.getInputFirstName().sendKeys(value);
    };
    MainPage.prototype.enterSurname = function (value) {
        this.getInputSurname().sendKeys(value);
    };
    MainPage.prototype.enterEmail = function (value) {
        this.getInputEmail().sendKeys(value);
    };
    MainPage.prototype.submitForm = function () {
        this.getReactiveFormButton().click();
    };
    MainPage.prototype.isReactiveFormButtonEnabled = function () {
        return this.getReactiveFormButton().isEnabled();
    };
    MainPage.prototype.getNrOfContacts = function () {
        return protractor_1.element.all(protractor_1.by.css('table tbody tr')).count();
    };
    return MainPage;
}());
exports.MainPage = MainPage;

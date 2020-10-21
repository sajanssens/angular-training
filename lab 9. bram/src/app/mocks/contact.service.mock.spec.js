"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactServiceMock = /** @class */ (function () {
    function ContactServiceMock() {
        spyOn(this, 'getContacts').and.returnValue([]);
        spyOn(this, 'addContact');
        // see also: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36661
    }
    ContactServiceMock.prototype.getContacts = function () {
        return null;
    };
    ContactServiceMock.prototype.addContact = function (newContact) {
        return null;
    };
    return ContactServiceMock;
}());
exports.ContactServiceMock = ContactServiceMock;

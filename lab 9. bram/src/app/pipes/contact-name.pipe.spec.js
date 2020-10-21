"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_name_pipe_1 = require("./contact-name.pipe");
describe('Pipe: ContactName', function () {
    var contactNamePipe;
    beforeEach(function () {
        contactNamePipe = new contact_name_pipe_1.ContactNamePipe();
    });
    it('should concatenate a contact name', function () {
        var c = { firstName: 'John', surname: 'Fish' };
        expect(contactNamePipe.transform(c)).toBe('John Fish');
    });
    it('should handle undefined gracefully', function () {
        expect(contactNamePipe.transform(undefined)).toBe(undefined);
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var testing_1 = require("@angular/core/testing");
var contact_list_component_1 = require("./contact-list.component");
var contact_service_1 = require("../../services/contact.service");
var contact_name_pipe_1 = require("../../pipes/contact-name.pipe");
var contact_service_mock_spec_1 = require("../../mocks/contact.service.mock.spec");
describe('Component: ContactList', function () {
    var contactList;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [
                contact_list_component_1.ContactListComponent,
                contact_name_pipe_1.ContactNamePipe
            ],
            providers: [
                { provide: contact_service_1.ContactService, useClass: contact_service_mock_spec_1.ContactServiceMock }
            ]
        });
        contactList = testing_1.TestBed.createComponent(contact_list_component_1.ContactListComponent).componentInstance;
    });
    it('should retrieve contacts during initialization', testing_1.inject([contact_service_1.ContactService], function (contactService) {
        contactList.ngOnInit();
        expect(contactService.getContacts).toHaveBeenCalled();
    }));
});

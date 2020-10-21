"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var testing_1 = require("@angular/core/testing");
var contact_form_component_1 = require("./contact-form.component");
var contact_service_1 = require("../../services/contact.service");
var contact_service_mock_spec_1 = require("../../mocks/contact.service.mock.spec");
describe('Component: ContactForm', function () {
    var contactForm;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                contact_form_component_1.ContactFormComponent
            ],
            providers: [
                { provide: contact_service_1.ContactService, useClass: contact_service_mock_spec_1.ContactServiceMock }
            ]
        });
        contactForm = testing_1.TestBed.createComponent(contact_form_component_1.ContactFormComponent).componentInstance;
        // initialize the form
        contactForm.ngOnInit();
    });
    it('should support adding a new contact', testing_1.inject([contact_service_1.ContactService], function (contactService) {
        contactForm.addContactReactive();
        expect(contactService.addContact).toHaveBeenCalled();
    }));
});

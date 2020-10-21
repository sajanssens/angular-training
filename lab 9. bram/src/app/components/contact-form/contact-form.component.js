"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
function emailValidator(control) {
    // required validator should handle empty values
    if (!control.value) {
        return null;
    }
    var regex = /^.+@.+\.[a-zA-Z]+$/;
    return regex.test(control.value) ? null : { email: { valid: false } };
}
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(fb, contactService) {
        this.fb = fb;
        this.contactService = contactService;
        this.newContact = {};
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.addContactForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z -]+$')]],
            surname: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z -]+$')]],
            email: ['', [forms_1.Validators.required, emailValidator]]
        });
    };
    ContactFormComponent.prototype.addContact = function (form) {
        this.contactService.addContact(this.newContact);
        this.newContact = {};
        form.reset();
    };
    ContactFormComponent.prototype.addContactReactive = function () {
        this.contactService.addContact(this.addContactForm.value);
        this.addContactForm.reset();
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'contact-form',
            templateUrl: './contact-form.component.html'
        })
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;

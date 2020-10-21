"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactService) {
        this.contactService = contactService;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contacts = this.contactService.getContacts();
    };
    ContactListComponent.prototype.editContact = function (contact) {
        contact.editing = true;
    };
    ContactListComponent.prototype.saveContact = function (contact) {
        contact.editing = false;
    };
    ContactListComponent.prototype.deleteContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: './contact-list.component.html'
        })
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;

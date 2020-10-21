import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactNamePipe } from './pipes/contact-name.pipe';
import { ContactService } from './services/contact.service';

@NgModule({
	declarations: [
		AppComponent,
		ContactFormComponent,
		ContactListComponent,
		ContactNamePipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

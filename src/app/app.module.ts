import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactHeaderBarComponent } from './contact-header-bar/contact-header-bar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { SingleContactComponent } from './single-contact/single-contact.component';
import { LetterSymbolsComponent } from './letter-symbols/letter-symbols.component';
import { PhonenumberDisplayComponent } from './phonenumber-display/phonenumber-display.component';
import { TogglebtnComponent } from './togglebtn/togglebtn.component';
import { AddContactComponent } from './add-contact/add-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactHeaderBarComponent,
    SearchboxComponent,
    ContactCardComponent,
    SingleContactComponent,
    LetterSymbolsComponent,
    routingComponents,
    PhonenumberDisplayComponent,
    TogglebtnComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

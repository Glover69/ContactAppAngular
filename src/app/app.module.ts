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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogboxaddcomponentComponent } from './dialogboxaddcomponent/dialogboxaddcomponent.component';
import { DialogboxeditComponent } from './dialogboxedit/dialogboxedit.component';
import { EditdialogtextService } from './editdialogtext.service';
import { NavigationmainComponent } from './navigationmain/navigationmain.component';
import { ServicesService } from './lib/services/services.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
    DialogboxaddcomponentComponent,
    DialogboxeditComponent,
    NavigationmainComponent
  ],

  entryComponents: [
    DialogboxaddcomponentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [EditdialogtextService, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

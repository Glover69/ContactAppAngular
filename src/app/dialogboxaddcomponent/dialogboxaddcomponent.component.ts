import { Component, Inject, OnInit, Renderer2, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';
import { AppComponent, Theme } from '../app.component';
import { ServicesService } from '../lib/services/services.service';
import { Contact } from '../lib/models/contact.model';

@Component({
  selector: 'app-dialogboxaddcomponent',
  templateUrl: './dialogboxaddcomponent.component.html',
  styleUrls: ['./dialogboxaddcomponent.component.css']
})
export class DialogboxaddcomponentComponent implements OnInit{
  theme: Theme = 'light-theme';


  firstname = ""
  lastname = ""
  image = ""
  number = ""
  email = ""

 constructor(
            private matDialogRef: MatDialogRef<DialogboxaddcomponentComponent>,
            @Inject(DOCUMENT) private document: Document,
            private renderer: Renderer2,
            private contactService : ServicesService
            ){

 }

 ngOnInit(){
  this.initializeTheme();
 }


 switchTheme(){
  this.document.body.classList.replace(
    this.theme, 
    this.theme === 'light-theme'
     ? (this.theme = 'dark-theme')
    : (this.theme = 'light-theme')) 
}

initializeTheme = (): void => 
this.renderer.addClass(this.document.body, this.theme);
 
profileImage = "/assets/images/Male User.png";

selectImage(event: any){
if(event.target.files){
  var reader = new FileReader()
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event: any) => {
    this.profileImage = event.target.result
    
  }    
}
}

addContact(){
  console.log("Addqing contact", this.firstname, this.lastname);
  
  const contact : Contact = {
    firstname : this.firstname,
    lastname :this.lastname,
    image : this.profileImage,
    number : this.number,
    email : this.email
  }
  this.contactService.addContact(contact);

  this.matDialogRef.close()

}


hidePopUp(){
  this.matDialogRef.close()
}


}

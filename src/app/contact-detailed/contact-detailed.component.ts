import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Info } from '../shared/models/details.models';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxeditComponent } from '../dialogboxedit/dialogboxedit.component';
import { Contact } from '../lib/models/contact.model';


@Component({
  selector: 'app-contact-detailed',
  templateUrl: './contact-detailed.component.html',
  styleUrls: ['./contact-detailed.component.css']
})
export class ContactDetailedComponent {

//@ts-ignore
@Input() contact: Contact;
@Output() detailedClosed = new EventEmitter();


constructor(){

}
editContactDialog(det : any){

  // window.location.href = "/?filter="+ det.name + "/edit" + det.id
    
  }
  
  

  

  closeDetailed(){
    this.detailedClosed.emit();
  }
  
  }

  



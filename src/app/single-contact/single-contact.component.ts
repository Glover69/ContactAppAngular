import { Component, Input, Output } from '@angular/core';
import { ServicesService } from '../lib/services/services.service';
import { EventEmitter } from '@angular/core';
import { Contact } from '../lib/models/contact.model';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent {
 details = [
  {name: "Agnes"},
  {name: "Andrew"},
  {name: "Angela"}
 ]

 @Output() contactSelected = new EventEmitter();

 constructor(
  public contactsService : ServicesService
 ){

 }

updateUrl(contact : Contact){
  // window.location.href = "/?filter="+ det.name
  // emit selected
  this.contactSelected.emit(contact)

}
}

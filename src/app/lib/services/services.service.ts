import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  contacts : Contact[] = [];

  addContact(contact : Contact){
    this.contacts.push(contact)
  }
}

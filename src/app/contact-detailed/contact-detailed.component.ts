import { Component, Input } from '@angular/core';
import { Info } from '../shared/models/details.models';


@Component({
  selector: 'app-contact-detailed',
  templateUrl: './contact-detailed.component.html',
  styleUrls: ['./contact-detailed.component.css']
})
export class ContactDetailedComponent {
@Input() Info!: Info | null;
}

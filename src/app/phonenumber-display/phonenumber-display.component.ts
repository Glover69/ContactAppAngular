import { Component, Input } from '@angular/core';
import { Info } from '../shared/models/details.models';


@Component({
  selector: 'app-phonenumber-display',
  templateUrl: './phonenumber-display.component.html',
  styleUrls: ['./phonenumber-display.component.css']
})
export class PhonenumberDisplayComponent {
 @Input() Info!: Info | null;
}

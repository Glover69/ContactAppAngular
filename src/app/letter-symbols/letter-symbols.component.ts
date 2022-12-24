import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter-symbols',
  templateUrl: './letter-symbols.component.html',
  styleUrls: ['./letter-symbols.component.css']
})
export class LetterSymbolsComponent {
@Input() letter=""
}

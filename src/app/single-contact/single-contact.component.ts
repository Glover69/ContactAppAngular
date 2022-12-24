import { Component, Input } from '@angular/core';

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

updateUrl(det : any){
  window.location.href = "/?filter="+ det.name
}
}

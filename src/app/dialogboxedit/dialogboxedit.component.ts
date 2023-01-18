
import { Component, Inject, OnInit, Renderer2, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppComponent, Theme } from '../app.component';
import { Info } from '../shared/models/details.models';
import { EditdialogtextService } from '../editdialogtext.service';

@Component({
  selector: 'app-dialogboxedit',
  templateUrl: './dialogboxedit.component.html',
  styleUrls: ['./dialogboxedit.component.css']
})
export class DialogboxeditComponent {
 
  constructor(private router: ActivatedRoute){
 
  }

  ngOnInit(): void {
      
  }
}

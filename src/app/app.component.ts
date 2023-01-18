import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Info } from './shared/models/details.models';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DialogboxaddcomponentComponent } from './dialogboxaddcomponent/dialogboxaddcomponent.component';
import { Contact } from './lib/models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  theme: Theme = 'light-theme';
  title = 'angular-contactProject';
  status = true;
  currentName = '';

  //@ts-ignore
  currentContact : Contact|null;

  details : Info[] = [
    {name: "Agnes", fullName: "Agnes Yeboah", phoneNumber: "055 837 4710", emailAdd: "agnes470@gmail.com", profileImg: "/assets/images/IMG_1689.WEBP", id: "1"},
    {name: "Andrew", fullName: "Andrew Mensah", phoneNumber: "020 837 4710", emailAdd: "andy76@gmail.com", profileImg: "/assets/images/IMG_1690.JPG", id: "2"},
    {name: "Angela", fullName: "Angela Botwe", phoneNumber: "055 895 7595", emailAdd: "botwe800@gmail.com", profileImg: "/assets/images/R.png", id: "3"}
  ]

  constructor(
    private route: ActivatedRoute, 
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public dialog: MatDialog
                    
  ){
    // this.route.queryParamMap
    // .subscribe((params) => {

    //   if(params.has("filter")){
    //     console.table(params.get("filter"))
    //     this.currentName = params.get("filter") || "";

    //     this.status = true;
    //   }
    //   else{
    //     this.status = false;
    //   }

    //   console.log(this.status)
    // }


    // )


  }



  getInfo(){

    for(const data of this.details){
      if(data.name.toLocaleLowerCase().trim() === this.currentName.toLocaleLowerCase().trim()){
         return data
      }
    }

    return null;
  }


  

  

  ngOnInit(){
    this.initializeTheme();
  }

  switchTheme(){
    this.document.body.classList.replace(
      this.theme, 
      this.theme === 'light-theme'
       ? (this.theme = 'dark-theme')
      : (this.theme = 'light-theme')

      ) 

      
  }

  initializeTheme = (): void => 
  this.renderer.addClass(this.document.body, this.theme);

  addContactDialog(){
  let dialogRef = this.dialog.open(DialogboxaddcomponentComponent,{
    width: '80%',
    height: '80%',
    data: "right-click",
    
    disableClose: true
  })
  
  
  }

  updateStatus(){
    
  }
  
  receiveContact(contact : Contact){
    console.log("Received", contact)

    this.currentContact = contact;
  }

  closedDetailed(){
    this.currentContact = null;
  }
}





export type Theme = 'light-theme' | 'dark-theme'; 

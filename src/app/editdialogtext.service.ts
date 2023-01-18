import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditdialogtextService {

  constructor() {}

  getEditDetails(){
    return[
      {name: "Agnes", fullName: "Agnes Yeboah", phoneNumber: "055 837 4710", emailAdd: "agnes470@gmail.com", profileImg: "/assets/images/IMG_1689.WEBP"},
      {name: "Andrew", fullName: "Andrew Mensah", phoneNumber: "020 837 4710", emailAdd: "andy76@gmail.com", profileImg: "/assets/images/IMG_1690.JPG"},
      {name: "Angela", fullName: "Angela Botwe", phoneNumber: "055 895 7595", emailAdd: "botwe800@gmail.com", profileImg: "/assets/images/R.png"}
    ];
  }
}

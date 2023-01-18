import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactDetailedComponent } from './contact-detailed/contact-detailed.component';
import { DialogboxeditComponent } from './dialogboxedit/dialogboxedit.component';


const routes: Routes = [
  
  { path:"", component : AppComponent},
  { path: 'edit/:id', component : DialogboxeditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactDetailedComponent]
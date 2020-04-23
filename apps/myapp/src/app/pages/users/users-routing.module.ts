import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './list/users.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: '', component: UsersComponent
  },
  {
    path: 'new', component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

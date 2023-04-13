import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployedComponent } from './components/add-edit-employed/add-edit-employed.component';
import { ListEmployedComponent } from './components/list-employed/list-employed.component';

const routes: Routes = [
  {path: 'list', component: ListEmployedComponent},
  {path: 'add', component: AddEditEmployedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

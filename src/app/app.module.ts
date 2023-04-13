import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditEmployedComponent } from './components/add-edit-employed/add-edit-employed.component';
import { ViewEmployedComponent } from './components/view-employed/view-employed.component';
import { ListEmployedComponent } from './components/list-employed/list-employed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditEmployedComponent,
    ViewEmployedComponent,
    ListEmployedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

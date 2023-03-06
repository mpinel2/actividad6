import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C404Component } from './components/c404/c404.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/home/user-detail/user-detail.component';
import { FormComponent } from './components/form/form.component';
import { CarddetailComponent } from './components/home/carddetail/carddetail.component';


@NgModule({
  declarations: [
    AppComponent,
    C404Component,
    HomeComponent,
    UserDetailComponent,
    FormComponent,
    CarddetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

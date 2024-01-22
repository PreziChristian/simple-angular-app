import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderInterceptorInterceptor } from './header-interceptor.interceptor';

import { EmployeeModule } from './employee/employee.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandnameComponent } from './brandname/brandname.component';
import { BrandNameComponent } from './brand-name/brand-name.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandnameComponent,
    BrandNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    EmployeeModule,
    LoginModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptorInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

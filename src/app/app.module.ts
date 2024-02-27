import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MainpageComponent } from './common/mainpage/mainpage.component';
import { ImageComponent } from './common/image/image.component';
import { ProductlistComponent } from './common/productlist/productlist.component';
import { AddComponent } from './common/add/add.component';

import { HomeComponent } from './common/home/home.component';
import { AddproductComponent } from './common/addproduct/addproduct.component';
import { EditproductComponent } from './common/editproduct/editproduct.component';
import { ViewproductComponent } from './common/viewproduct/viewproduct.component';
import { DeleteproductComponent } from './common/deleteproduct/deleteproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    ImageComponent,
    ProductlistComponent,
    AddComponent,
    HomeComponent,
    AddproductComponent,
    EditproductComponent,
    ViewproductComponent,
    DeleteproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

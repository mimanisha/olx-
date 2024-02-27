import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './common/addproduct/addproduct.component';
import { DeleteproductComponent } from './common/deleteproduct/deleteproduct.component';
import { EditproductComponent } from './common/editproduct/editproduct.component';
import { HomeComponent } from './common/home/home.component';
import { MainpageComponent } from './common/mainpage/mainpage.component';
import { ViewproductComponent } from './common/viewproduct/viewproduct.component';

const routes: Routes = [
  {path: '',redirectTo:'mainpge',pathMatch:'full'},
  {path:'mainpage',component:MainpageComponent,children: [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'add',component:AddproductComponent},
    {path:'view/:index',component:ViewproductComponent},
    {path:'edit/:index',component:EditproductComponent},   
    // {path:'delete/:index',component:DeleteproductComponent},
    {path:'**',redirectTo:'home'}
  ]},
  {path:'**',redirectTo:'mainpage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AllcarComponent } from './allcar/allcar.component';
import { AllcarsaddedbyadminComponent } from './allcarsaddedbyadmin/allcarsaddedbyadmin.component';
import { AllmodelsComponent } from './allmodels/allmodels.component';
import { BookacarComponent } from './bookacar/bookacar.component';
import { DrivingtipsComponent } from './drivingtips/drivingtips.component';
import { EditcarComponent } from './editcar/editcar.component';
import { FindacarComponent } from './findacar/findacar.component';
import { HatchbackComponent } from './hatchback/hatchback.component';
import { HomeComponent } from './home/home.component';
import { JustallcarsComponent } from './justallcars/justallcars.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { RoadsideassistanceComponent } from './roadsideassistance/roadsideassistance.component';
import { SearchComponent } from './search/search.component';
import { SedanComponent } from './sedan/sedan.component';
import { ServiceComponent } from './service/service.component';
import { SpecificationsComponent } from './specifications/specifications.component';

import { SuvComponent } from './suv/suv.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { WarrantyComponent } from './warranty/warranty.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"findacar",component:FindacarComponent},
  {path:"bookacar",component:BookacarComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"services",component:ServiceComponent},
  {path:"warranty",component:WarrantyComponent},
  {path:"drivingtips",component:DrivingtipsComponent},
  {path:"maintenance",component:MaintenanceComponent},
  {path:"roadsideassistance",component:RoadsideassistanceComponent},
  {path:"userdashboard",component:UserdashboardComponent,children:[
    {path:"hatchback",component:HatchbackComponent},
    {path:"SUV",component:SuvComponent},
    {path:"Sedan",component:SedanComponent},
    {path:"allmodels",component:AllmodelsComponent},
    {path:"usercart",component:UsercartComponent},
    {path:"payment",component:PaymentComponent},
    {path:"",redirectTo:"allmodels",pathMatch:"full"}
  ]},
  
  {path:"admindashboard",component:AdmindashboardComponent,children:[
    {path:"addcar",component:AdminComponent},
    {path:"allcarsaddedbyadmin",component:AllcarsaddedbyadminComponent},
      {path:"editcar",component:EditcarComponent},
    {path:"",redirectTo:"allcarsaddedbyadmin",pathMatch:"full"}
  ]},
  {path:"specifications/:carname",component:SpecificationsComponent},
  {path:"allcar",component:AllcarComponent},
  {path:"justallcars",component:JustallcarsComponent},
  {path:"addtocart",component:UsercartComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"search",component:SearchComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

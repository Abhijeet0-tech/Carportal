import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AllcarComponent } from './allcar/allcar.component';
import { BookacarComponent } from './bookacar/bookacar.component';
import { FindacarComponent } from './findacar/findacar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AllcarsaddedbyadminComponent } from './allcarsaddedbyadmin/allcarsaddedbyadmin.component';
import { FooterComponent } from './footer/footer.component';
import { EditcarComponent } from './editcar/editcar.component';

import {AuthorizationService} from './authorization.service';
import { JustallcarsComponent } from './justallcars/justallcars.component';
import { HatchbackComponent } from './hatchback/hatchback.component';
import { SuvComponent } from './suv/suv.component';
import { SedanComponent } from './sedan/sedan.component';
import { UsercartComponent } from './usercart/usercart.component';
import { CarfilterPipe } from './carfilter.pipe';
import { SpecificationsComponent } from './specifications/specifications.component';
import { AllmodelsComponent } from './allmodels/allmodels.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { ServiceComponent } from './service/service.component';
import { DrivingtipsComponent } from './drivingtips/drivingtips.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RoadsideassistanceComponent } from './roadsideassistance/roadsideassistance.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AdminComponent,
    AdmindashboardComponent,
    AllcarComponent,
    BookacarComponent,
    FindacarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,

   
    UserdashboardComponent,
    AllcarsaddedbyadminComponent,
    FooterComponent,
    EditcarComponent,
    JustallcarsComponent,
    HatchbackComponent,
    SuvComponent,
    SedanComponent,
    UsercartComponent,
    CarfilterPipe,
    SpecificationsComponent,
    AllmodelsComponent,
    PaymentComponent,
    SearchComponent,
    PaymentpageComponent,
    ServiceComponent,
    DrivingtipsComponent,
    WarrantyComponent,
    MaintenanceComponent,
    RoadsideassistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true
    }
    )
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationService,
      multi:true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

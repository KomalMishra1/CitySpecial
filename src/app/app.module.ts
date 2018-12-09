import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {HttpClientModule} from '@angular/common/http';

import {ROUTING} from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ReporterpanelComponent } from './reporterpanel/reporterpanel.component';
import { PostnewsComponent } from './postnews/postnews.component';
import {AppserviceService} from './appservice.service';
import { ReporterloginComponent } from './reporterlogin/reporterlogin.component';
import { ReporterlistComponent } from './reporterlist/reporterlist.component';
import { ReporterprofileComponent } from './reporterprofile/reporterprofile.component';
import { NewslistComponent } from './newslist/newslist.component';
import { CreatereporterComponent } from './createreporter/createreporter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminpanelComponent,
    ReporterpanelComponent,
    PostnewsComponent,
    ReporterloginComponent,
    ReporterlistComponent,
    ReporterprofileComponent,
    NewslistComponent,
    CreatereporterComponent

  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ROUTING,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

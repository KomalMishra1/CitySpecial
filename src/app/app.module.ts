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
import { HomeComponent } from './common/components/home/home.component';
import { LoginComponent } from './common/components/login/login.component';
import { AdminpanelComponent } from './admin/components/adminpanel/adminpanel.component';
import { ReporterpanelComponent } from './reporter/components/reporterpanel/reporterpanel.component';
import { PostnewsComponent } from './common/components/postnews/postnews.component';
import {CommonService} from './common/common.service';
import {AdminService} from './admin/admin.service';
import {ReporterService} from './reporter/reporter.service';
import { ReporterlistComponent } from './admin/components/reporterlist/reporterlist.component';
import { ReporterprofileComponent } from './admin/components/reporterprofile/reporterprofile.component';
import { NewslistComponent } from './admin/components/newslist/newslist.component';
import { CreatereporterComponent } from './admin/components/createreporter/createreporter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminpanelComponent,
    ReporterpanelComponent,
    PostnewsComponent,
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
  providers: [AdminService,CommonService,ReporterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

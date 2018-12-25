import {RouterModule , Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {AppComponent} from './app.component';
import {HomeComponent} from './common/components/home/home.component';
import {LoginComponent} from './common/components/login/login.component';
import {AdminpanelComponent} from './admin/components/adminpanel/adminpanel.component';
import {ReporterpanelComponent} from './reporter/components/reporterpanel/reporterpanel.component';
import {PostnewsComponent} from './common/components/postnews/postnews.component';
import {ReporterlistComponent} from './admin/components/reporterlist/reporterlist.component';
import {ReporterprofileComponent} from './admin/components/reporterprofile/reporterprofile.component';
import {NewslistComponent} from './admin/components/newslist/newslist.component';
import {CreatereporterComponent} from './admin/components/createreporter/createreporter.component';


export const AppRoutes : Routes =[
  {path : '' , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'adminpanel' , component : AdminpanelComponent},
  {path : 'reporterpanel' , component : ReporterpanelComponent},
  {path : 'postnews' , component : PostnewsComponent},
  {path : 'reporterlist' , component : ReporterlistComponent},
  {path : 'reporterprofile/:id' , component : ReporterprofileComponent},
    {path : 'newslist' , component : NewslistComponent},
      {path : 'createreporter' , component : CreatereporterComponent}


];

export const ROUTING : ModuleWithProviders = RouterModule.forRoot(AppRoutes);

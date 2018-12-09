import {RouterModule , Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AdminpanelComponent} from './adminpanel/adminpanel.component';
import {ReporterpanelComponent} from './reporterpanel/reporterpanel.component';
import {PostnewsComponent} from './postnews/postnews.component';
import {ReporterlistComponent} from './reporterlist/reporterlist.component';
import {ReporterprofileComponent} from './reporterprofile/reporterprofile.component';
import {NewslistComponent} from './newslist/newslist.component';
import {CreatereporterComponent} from './createreporter/createreporter.component';


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

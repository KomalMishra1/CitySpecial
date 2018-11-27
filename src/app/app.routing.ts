import {RouterModule , Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AdminpanelComponent} from './adminpanel/adminpanel.component';
import {ReporterpanelComponent} from './reporterpanel/reporterpanel.component';
import {PostnewsComponent} from './postnews/postnews.component';

export const AppRoutes : Routes =[
  {path : '' , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'adminpanel' , component : AdminpanelComponent},
  {path : 'reporterpanel' , component : ReporterpanelComponent},
  {path : 'postnews' , component : PostnewsComponent}

];

export const ROUTING : ModuleWithProviders = RouterModule.forRoot(AppRoutes);

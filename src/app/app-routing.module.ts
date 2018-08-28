import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'survey', loadChildren: './survey/survey.module#SurveyPageModule' },
  { path: 'updatepassword', loadChildren: './updatepassword/updatepassword.module#UpdatepasswordPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'mainmenu', loadChildren: './mainmenu/mainmenu.module#MainmenuPageModule' },
  { path: 'logsample', loadChildren: './logsample/logsample.module#LogsamplePageModule' },
  { path: 'logisticmanager', loadChildren: './logisticmanager/logisticmanager.module#LogisticmanagerPageModule' },
  { path: 'lims', loadChildren: './lims/lims.module#LimsPageModule' },
  { path: 'crm', loadChildren: './crm/crm.module#CrmPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

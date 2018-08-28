import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogisticmanagerPage } from './logisticmanager.page';

const routes: Routes = [
  {
    path: '',
    component: LogisticmanagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogisticmanagerPage]
})
export class LogisticmanagerPageModule {}

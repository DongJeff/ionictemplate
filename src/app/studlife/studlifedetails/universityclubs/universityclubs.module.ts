import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';

import { ClubsPage } from './universityclubs.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: ClubsPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ ClubsPage ]
})
export class ClubsPageModule {}

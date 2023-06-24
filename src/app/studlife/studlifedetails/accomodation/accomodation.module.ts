import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';

import { AccomodationPage } from './accomodation.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: AccomodationPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ AccomodationPage ]
})
export class AccomodationPageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';

import { LostpassportPage } from './lostpassport.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: LostpassportPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ LostpassportPage ]
})
export class LostpassportPageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { CoopmenuPage } from './coopmenu';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: CoopmenuPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ CoopmenuPage ]
})
export class CoopmenuPageModule {}

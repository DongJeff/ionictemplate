import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';

import { LivingcostPage } from './livingcost.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: LivingcostPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ LivingcostPage ]
})
export class LivingcostPageModule {}

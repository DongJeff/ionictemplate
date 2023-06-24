import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';

import { IrdnumberPage } from './irdnumber.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: IrdnumberPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ IrdnumberPage ]
})
export class IrdnumberPageModule {}
